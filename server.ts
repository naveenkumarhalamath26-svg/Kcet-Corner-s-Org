import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { 
  syncStudentToSupabase, 
  fetchStudentsFromSupabase, 
  SUPABASE_PROJECT_ID, 
  SUPABASE_URL, 
  SUPABASE_KEY 
} from './src/services/supabaseService.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

// Security Headers & Request Limits
app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Simple Sliding-Window Rate Limiter to prevent brute force / bot attacks
const rateLimits = new Map<string, { count: number; resetAt: number }>();
function createRateLimiter(maxRequests: number, windowMs: number) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const clientIp = req.ip || req.socket.remoteAddress || 'client';
    const now = Date.now();
    const tracker = rateLimits.get(clientIp);

    if (!tracker || now > tracker.resetAt) {
      rateLimits.set(clientIp, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (tracker.count >= maxRequests) {
      return res.status(429).json({ error: 'Too many requests. Please slow down.' });
    }

    tracker.count++;
    next();
  };
}

// API route for Ask AI during active quiz sessions (Rate limited: 20 calls/min)
app.post('/api/ask-ai', createRateLimiter(20, 60000), async (req, res) => {
  try {
    const { question, options, subject, chapter, type, studentDoubt } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ 
        error: 'GEMINI_API_KEY not configured on server',
        fallback: true 
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // System instruction & prompt based on requested assistance type
    let prompt = `You are a friendly, encouraging senior tutor for Karnataka II PUC Science (PCMB) and entrance exams (KCET, NEET, JEE Main).
Subject: ${subject || 'Science'}
Chapter: ${chapter || 'General'}
Question: ${question || 'N/A'}
${options && Array.isArray(options) && options.length > 0 ? `Options:\n${options.map((opt: string, i: number) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n')}` : ''}
`;

    if (type === 'hint') {
      prompt += `\nTask: Provide a concise, conceptual HINT (2 to 4 sentences) to guide the student towards solving this question themselves.
DO NOT reveal the correct option directly or say "The answer is A/B/C/D".
Guide their conceptual intuition, mention the relevant formula or physical/chemical law, and explain what relationship to apply.`;
    } else if (type === 'doubt' && studentDoubt) {
      prompt += `\nStudent's specific doubt: "${studentDoubt}".
Task: Answer the student's doubt directly, explaining the concept with clarity and precision tailored to II PUC / KCET syllabus.`;
    } else {
      prompt += `\nTask: Provide a clear, step-by-step EXPLANATION for this question.
Explain the core underlying concept, show any calculations or chemical reactions, clarify why the correct answer is valid, and highlight common exam traps or memory shortcuts.`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        temperature: 0.3,
        maxOutputTokens: 800
      }
    });

    return res.json({ text: response.text });
  } catch (err: any) {
    console.error('Gemini API Error:', err);
    return res.status(500).json({ error: err.message || 'Failed to generate AI response' });
  }
});

// Student Database Persistence Helpers
const DB_PATH = path.resolve('src/data/students_database.json');

function readStudentsFromDisk() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading student database:', e);
  }
  return [];
}

function writeStudentsToDisk(students: any[]) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(students, null, 2), 'utf-8');
    return true;
  } catch (e) {
    console.error('Error writing student database:', e);
    return false;
  }
}

// Status of Supabase Database Connection
app.get('/api/supabase/status', (req, res) => {
  res.json({
    projectId: SUPABASE_PROJECT_ID,
    url: SUPABASE_URL,
    isKeyConfigured: Boolean(SUPABASE_KEY),
    targetTable: 'students'
  });
});

// GET all students (Queries Supabase first if configured, falls back to disk)
app.get('/api/students', createRateLimiter(100, 60000), async (req, res) => {
  try {
    const supabaseStudents = await fetchStudentsFromSupabase();
    if (supabaseStudents && supabaseStudents.length > 0) {
      writeStudentsToDisk(supabaseStudents);
      return res.json({ students: supabaseStudents, count: supabaseStudents.length, source: 'supabase' });
    }
  } catch (err) {
    console.warn('[Supabase] Falling back to local disk:', err);
  }
  const students = readStudentsFromDisk();
  res.json({ students, count: students.length, source: 'local' });
});

// POST new student login (Saves locally and syncs to Supabase)
app.post('/api/students', createRateLimiter(30, 60000), async (req, res) => {
  try {
    const students = readStudentsFromDisk();
    const cleanName = String(req.body.name || 'New Student').slice(0, 80);
    const cleanUsername = String(req.body.username || `stu_${Date.now().toString().slice(-4)}`).replace(/[^a-zA-Z0-9._-]/g, '').slice(0, 30);
    const newStudent = {
      id: req.body.id || `STU-2025-${String(students.length + 101).padStart(4, '0')}`,
      name: cleanName,
      username: cleanUsername,
      email: req.body.email || '',
      phone: req.body.phone || '',
      college: req.body.college || 'Karnataka PU College',
      district: req.body.district || 'Bengaluru Urban',
      stream: req.body.stream || 'PCMB',
      targetExam: req.body.targetExam || 'KCET + Board Exam',
      status: req.body.status || 'active',
      registeredAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      quizzesAttempted: Number(req.body.quizzesAttempted) || 0,
      overallAccuracy: Number(req.body.overallAccuracy) || 0,
      ipAddress: '106.51.78.1 (Karnataka)',
      notes: req.body.notes || ''
    };
    students.unshift(newStudent);
    writeStudentsToDisk(students);

    // Sync to Supabase database
    const supabaseResult = await syncStudentToSupabase(newStudent);

    res.status(201).json({ 
      success: true, 
      student: newStudent,
      supabaseSynced: supabaseResult.success,
      supabaseError: supabaseResult.error
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to create student' });
  }
});

// PUT update existing student
app.put('/api/students/:id', async (req, res) => {
  try {
    const students = readStudentsFromDisk();
    const index = students.findIndex((s: any) => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Student not found' });
    }
    students[index] = {
      ...students[index],
      ...req.body,
      id: req.params.id // prevent ID overwrite
    };
    writeStudentsToDisk(students);

    // Sync updated student to Supabase
    await syncStudentToSupabase(students[index]);

    res.json({ success: true, student: students[index] });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to update student' });
  }
});

// PATCH status (e.g. active, suspended, cancelled)
app.patch('/api/students/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const students = readStudentsFromDisk();
    const student = students.find((s: any) => s.id === req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    student.status = status;
    writeStudentsToDisk(students);
    res.json({ success: true, student });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to update status' });
  }
});

// DELETE / Cancel student account
app.delete('/api/students/:id', (req, res) => {
  try {
    const { hardDelete } = req.query;
    const students = readStudentsFromDisk();
    const index = students.findIndex((s: any) => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (hardDelete === 'true') {
      // Remove completely
      const removed = students.splice(index, 1)[0];
      writeStudentsToDisk(students);
      return res.json({ success: true, message: 'Student permanently deleted', student: removed });
    } else {
      // Soft cancel status
      students[index].status = 'cancelled';
      writeStudentsToDisk(students);
      return res.json({ success: true, message: 'Student account marked as cancelled', student: students[index] });
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to delete student' });
  }
});

// Vite middleware in dev or static files in prod
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
    app.use('*', async (req, res, next) => {
      if (req.method !== 'GET') return next();
      try {
        let template = fs.readFileSync(path.resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace?.(e);
        console.error('Vite transform error:', e);
        next(e);
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
