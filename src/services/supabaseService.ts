import { createClient, SupabaseClient } from '@supabase/supabase-js';

// User's Supabase Project Details
export const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID || 'bmlrkxrgddaxlamfvubh';
export const SUPABASE_URL = process.env.SUPABASE_URL || `https://${SUPABASE_PROJECT_ID}.supabase.co`;

function sanitizeKey(val?: string): string {
  if (!val) return '';
  const trimmed = val.trim();
  // Filter out database connection URIs or placeholder strings
  if (
    trimmed.startsWith('postgres://') || 
    trimmed.startsWith('postgresql://') || 
    trimmed.includes('[YOUR-PASSWORD]')
  ) {
    return '';
  }
  return trimmed;
}

// Prefer valid Supabase publishable/anon or service key
export const SUPABASE_KEY = 
  sanitizeKey(process.env.SUPABASE_KEY) || 
  sanitizeKey(process.env.SUPABASE_ANON_KEY) || 
  sanitizeKey(process.env.VITE_SUPABASE_ANON_KEY);

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (supabaseClient) return supabaseClient;

  if (SUPABASE_URL && SUPABASE_KEY) {
    try {
      supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      });
      console.log(`[Supabase] Initialized client for project: ${SUPABASE_PROJECT_ID}`);
      return supabaseClient;
    } catch (err) {
      console.error('[Supabase] Failed to initialize client:', err);
      return null;
    }
  }

  return null;
}

export interface SupabaseStudentRecord {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  college: string;
  district: string;
  stream: string;
  target_exam: string;
  status: string;
  registered_at?: string;
  last_login?: string;
  quizzes_attempted: number;
  overall_accuracy: number;
  ip_address?: string;
  notes?: string;
}

/**
 * Saves or updates student in Supabase database whenever someone logs in.
 * Protected with a 3.5s timeout so user logins are never stalled.
 */
export async function syncStudentToSupabase(student: any): Promise<{ success: boolean; data?: any; error?: string }> {
  const client = getSupabaseClient();
  if (!client) {
    return { 
      success: false, 
      error: 'Supabase client not active. Provide a valid publishable/anon key in SUPABASE_KEY.' 
    };
  }

  try {
    const payload: SupabaseStudentRecord = {
      id: student.id,
      name: student.name || 'PUC Student',
      username: student.username || '',
      email: student.email || '',
      phone: student.phone || '',
      college: student.college || '',
      district: student.district || '',
      stream: student.stream || 'PCMB',
      target_exam: student.targetExam || student.target_exam || 'KCET + Board Exam',
      status: student.status || 'active',
      registered_at: student.registeredAt || new Date().toISOString(),
      last_login: new Date().toISOString(),
      quizzes_attempted: Number(student.quizzesAttempted) || 0,
      overall_accuracy: Number(student.overallAccuracy) || 0,
      ip_address: student.ipAddress || '',
      notes: student.notes || ''
    };

    const queryPromise = client
      .from('students')
      .upsert(payload, { onConflict: 'id' })
      .select();

    const timeoutPromise = new Promise<{ error: Error }>((_, reject) =>
      setTimeout(() => reject(new Error('Supabase request timed out after 3500ms')), 3500)
    );

    const { data, error } = (await Promise.race([queryPromise, timeoutPromise])) as any;

    if (error) {
      if (error.code === 'PGRST205') {
        console.warn(`[Supabase] Note: Table 'students' not yet created in Supabase schema cache.`);
      } else {
        console.warn(`[Supabase sync warning] Table 'students' upsert:`, error.message);
      }
      return { success: false, error: error.message };
    }

    console.log(`[Supabase] Successfully synced student: ${payload.name} (${payload.id})`);
    return { success: true, data };
  } catch (err: any) {
    console.error(`[Supabase Error] Exception while syncing student:`, err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Fetches all students from Supabase database with a 3.5s timeout.
 * Returns null if Supabase is unreachable or table is not ready, allowing instant local fallback.
 */
export async function fetchStudentsFromSupabase(): Promise<any[] | null> {
  const client = getSupabaseClient();
  if (!client) return null;

  try {
    const queryPromise = client
      .from('students')
      .select('*')
      .order('last_login', { ascending: false });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Supabase fetch timed out after 3500ms')), 3500)
    );

    const { data, error } = (await Promise.race([queryPromise, timeoutPromise])) as any;

    if (error) {
      if (error.code === 'PGRST205') {
        console.info(`[Supabase] Table 'students' does not exist yet. Using local student store.`);
      } else {
        console.warn('[Supabase fetch warning]:', error.message);
      }
      return null;
    }

    return (data || []).map((row: any) => ({
      id: row.id,
      name: row.name,
      username: row.username,
      email: row.email,
      phone: row.phone,
      college: row.college,
      district: row.district,
      stream: row.stream,
      targetExam: row.target_exam,
      status: row.status,
      registeredAt: row.registered_at,
      lastLogin: row.last_login,
      quizzesAttempted: row.quizzes_attempted,
      overallAccuracy: row.overall_accuracy,
      ipAddress: row.ip_address,
      notes: row.notes
    }));
  } catch (err: any) {
    console.warn('[Supabase Error] Exception fetching students:', err.message || err);
    return null;
  }
}
