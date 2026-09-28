import { INITIAL_QUESTIONS } from '../data/questionsData';
import { Question, QuizResult, QuizSession, StudentProfile, StudyTodo, ThemeMode, UpcomingExam } from '../types';

const STORAGE_KEYS = {
  PROFILE: 'kseab_student_profile',
  CUSTOM_QUESTIONS: 'kseab_custom_questions',
  DELETED_QUESTION_IDS: 'kseab_deleted_question_ids',
  QUIZ_RESULTS: 'kseab_quiz_results',
  ACTIVE_SESSION: 'kseab_active_quiz_session',
  BOOKMARKED_IDS: 'kseab_bookmarked_question_ids',
  TODOS: 'kseab_study_todos',
  THEME: 'kseab_theme_mode',
  WRONG_QUESTION_IDS: 'kseab_wrong_question_ids',
  UPCOMING_EXAMS: 'kseab_upcoming_exams',
};

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Ananya Rao',
  college: 'National Pre-University College, Bengaluru',
  district: 'Bengaluru Urban',
  stream: 'PCMB',
  targetExam: 'Both Board & KCET',
  streakDays: 4,
  totalQuestionsSolved: 42,
  overallAccuracy: 88,
  lastActiveDate: new Date().toISOString().split('T')[0]
};

const DEFAULT_TODOS: StudyTodo[] = [
  {
    id: 'todo-1',
    task: 'Solve 15 MCQs on Gauss’s Law & Electric Dipoles',
    subject: 'physics',
    completed: true,
    priority: 'high',
    createdAt: Date.now() - 86400000
  },
  {
    id: 'todo-2',
    task: 'Revise Solutions colligative properties formulas',
    subject: 'chemistry',
    completed: false,
    priority: 'high',
    createdAt: Date.now() - 40000000
  },
  {
    id: 'todo-3',
    task: 'Complete KCET speed drill for Matrices & Determinants',
    subject: 'mathematics',
    completed: false,
    priority: 'medium',
    createdAt: Date.now() - 20000000
  },
  {
    id: 'todo-4',
    task: 'Review DNA replication & Lac Operon short notes',
    subject: 'biology',
    completed: false,
    priority: 'medium',
    createdAt: Date.now() - 10000000
  }
];

// Profile
export function getStudentProfile(): StudentProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(DEFAULT_PROFILE));
      return DEFAULT_PROFILE;
    }
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...(parsed || {}) };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveStudentProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  } catch (err) {
    console.error('Error saving profile:', err);
  }
}

// Questions (Built-in + Custom - Deleted)
export function getAllQuestions(): Question[] {
  try {
    const customRaw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    const customQuestions: Question[] = customRaw ? JSON.parse(customRaw) : [];

    const deletedRaw = localStorage.getItem(STORAGE_KEYS.DELETED_QUESTION_IDS);
    const deletedIds: string[] = deletedRaw ? JSON.parse(deletedRaw) : [];

    // Map built-in + custom
    const combined = [...INITIAL_QUESTIONS, ...customQuestions];
    return combined.filter(q => !deletedIds.includes(q.id));
  } catch {
    return INITIAL_QUESTIONS;
  }
}

export function saveCustomQuestion(question: Question): Question {
  try {
    const customRaw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    const customQuestions: Question[] = customRaw ? JSON.parse(customRaw) : [];
    
    // Check if updating existing
    const existingIndex = customQuestions.findIndex(q => q.id === question.id);
    if (existingIndex >= 0) {
      customQuestions[existingIndex] = question;
    } else {
      customQuestions.push({ ...question, isCustom: true });
    }
    localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(customQuestions));
  } catch (err) {
    console.error('Error saving question:', err);
  }
  return question;
}

export function deleteQuestionById(id: string): void {
  try {
    const deletedRaw = localStorage.getItem(STORAGE_KEYS.DELETED_QUESTION_IDS);
    const deletedIds: string[] = deletedRaw ? JSON.parse(deletedRaw) : [];
    if (!deletedIds.includes(id)) {
      deletedIds.push(id);
      localStorage.setItem(STORAGE_KEYS.DELETED_QUESTION_IDS, JSON.stringify(deletedIds));
    }

    // Also remove from custom list if present
    const customRaw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    if (customRaw) {
      const customQuestions: Question[] = JSON.parse(customRaw);
      const filtered = customQuestions.filter(q => q.id !== id);
      localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(filtered));
    }
  } catch (err) {
    console.error('Error deleting question:', err);
  }
}

export function importQuestionsJson(jsonString: string): { success: boolean; count: number; error?: string } {
  try {
    const parsed = JSON.parse(jsonString);
    const list: Question[] = Array.isArray(parsed) ? parsed : [parsed];
    if (list.length === 0) return { success: false, count: 0, error: 'Empty question array' };

    const validQuestions = list.filter(q => q.question && q.subject && q.correctAnswer !== undefined);
    validQuestions.forEach(q => saveCustomQuestion(q));
    return { success: true, count: validQuestions.length };
  } catch (err) {
    return { success: false, count: 0, error: String(err) };
  }
}

// Active Quiz Session (for crash/refresh resilience)
export function getActiveSession(): QuizSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

let sessionSaveTimer: ReturnType<typeof setTimeout> | null = null;
let latestSessionToPersist: QuizSession | null = null;

export function saveActiveSession(session: QuizSession | null, immediate = false): void {
  try {
    if (!session) {
      if (sessionSaveTimer) clearTimeout(sessionSaveTimer);
      sessionSaveTimer = null;
      latestSessionToPersist = null;
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      return;
    }

    latestSessionToPersist = session;
    if (immediate) {
      if (sessionSaveTimer) clearTimeout(sessionSaveTimer);
      sessionSaveTimer = null;
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
      return;
    }

    if (!sessionSaveTimer) {
      sessionSaveTimer = setTimeout(() => {
        sessionSaveTimer = null;
        if (latestSessionToPersist) {
          try {
            localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(latestSessionToPersist));
          } catch {
            // Quota protection
          }
        }
      }, 3000);
    }
  } catch (err) {
    console.error('Error saving active session:', err);
  }
}

// Quiz Results
export function getQuizResults(): QuizResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizResult(result: QuizResult): void {
  try {
    const list = getQuizResults();
    list.unshift(result);
    // Keep last 100 quizzes
    const trimmed = list.slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(trimmed));

    // Update wrong questions tracking
    const wrongIds = new Set(getWrongQuestionIds());
    result.questions.forEach(q => {
      const studentAns = result.studentAnswers[q.id];
      const isCorrect = Array.isArray(q.correctAnswer)
        ? Array.isArray(studentAns) &&
          q.correctAnswer.length === studentAns.length &&
          q.correctAnswer.every(a => studentAns.includes(a))
        : String(studentAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();

      if (!isCorrect && studentAns !== null && studentAns !== undefined) {
        wrongIds.add(q.id);
      } else if (isCorrect) {
        wrongIds.delete(q.id);
      }
    });
    localStorage.setItem(STORAGE_KEYS.WRONG_QUESTION_IDS, JSON.stringify(Array.from(wrongIds)));

    // Update profile stats
    const profile = getStudentProfile();
    const totalAttempted = profile.totalQuestionsSolved + result.totalQuestions;
    const oldCorrect = Math.round((profile.overallAccuracy / 100) * profile.totalQuestionsSolved);
    const newCorrect = oldCorrect + result.correctAnswers;
    const newAccuracy = totalAttempted > 0 ? Math.round((newCorrect / totalAttempted) * 100) : 0;

    saveStudentProfile({
      ...profile,
      totalQuestionsSolved: totalAttempted,
      overallAccuracy: newAccuracy,
      lastActiveDate: new Date().toISOString().split('T')[0]
    });
  } catch (err) {
    console.error('Error saving quiz result:', err);
  }
}

export function getWrongQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WRONG_QUESTION_IDS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Bookmarks
export function getBookmarkedIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_IDS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmarkQuestion(questionId: string): boolean {
  try {
    const bookmarks = new Set(getBookmarkedIds());
    let bookmarked = false;
    if (bookmarks.has(questionId)) {
      bookmarks.delete(questionId);
    } else {
      bookmarks.add(questionId);
      bookmarked = true;
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_IDS, JSON.stringify(Array.from(bookmarks)));
    return bookmarked;
  } catch {
    return false;
  }
}

// Todos
export function getStudyTodos(): StudyTodo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TODOS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(DEFAULT_TODOS));
      return DEFAULT_TODOS;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_TODOS;
  }
}

export function saveStudyTodos(todos: StudyTodo[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
  } catch (err) {
    console.error('Error saving todos:', err);
  }
}

// Theme
export function getThemePreference(): ThemeMode {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeMode;
    return raw === 'dark' || raw === 'sepia' ? raw : 'light';
  } catch {
    return 'light';
  }
}

export function setThemePreference(mode: ThemeMode): void {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, mode);
    document.body.classList.remove('mode-dark', 'mode-sepia');
    if (mode === 'dark') document.body.classList.add('mode-dark');
    if (mode === 'sepia') document.body.classList.add('mode-sepia');
  } catch (err) {
    console.error('Error setting theme:', err);
  }
}

// Upcoming Exams
export const DEFAULT_UPCOMING_EXAMS: UpcomingExam[] = [
  {
    id: 'exam-kseab-board-2027',
    title: 'KSEAB II PUC Annual Board Exam 1 (2027)',
    examDate: '2027-03-01T09:00:00',
    category: 'board',
    targetGoal: 'Aiming for 95%+ in PCMB (600/600 Distinction)',
    colorTheme: 'blue',
    isPrimary: true,
    notes: 'Official Karnataka Board Annual Examination Exam 1. 20 MCQs & Fill-in-blanks in Part-A.'
  },
  {
    id: 'exam-kcet-2027',
    title: 'KCET Entrance Examination 2027 (KEA)',
    examDate: '2027-04-18T10:30:00',
    category: 'entrance',
    targetGoal: 'Target KCET Engineering / Agri Rank < 1000',
    colorTheme: 'amber',
    isPrimary: false,
    notes: 'Karnataka Common Entrance Test. 60 Questions per subject in 80 mins. No negative marking.'
  },
  {
    id: 'exam-district-prep-2027',
    title: 'District Level Pre-Board Preparatory Exam',
    examDate: '2027-01-16T09:30:00',
    category: 'preparatory',
    targetGoal: 'Target 90%+ in All Pre-Boards as Benchmark',
    colorTheme: 'indigo',
    isPrimary: false,
    notes: 'Full syllabus preparatory conducted across all Karnataka PU Colleges.'
  },
  {
    id: 'exam-neet-2027',
    title: 'NEET-UG 2027 Medical Entrance',
    examDate: '2027-05-02T14:00:00',
    category: 'entrance',
    targetGoal: 'Target 650+ Score for Govt Medical Seat (Bangalore Medical College)',
    colorTheme: 'emerald',
    isPrimary: false,
    notes: 'National Eligibility cum Entrance Test for MBBS/BDS admissions.'
  }
];

export function getUpcomingExams(): UpcomingExam[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.UPCOMING_EXAMS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.UPCOMING_EXAMS, JSON.stringify(DEFAULT_UPCOMING_EXAMS));
      return DEFAULT_UPCOMING_EXAMS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return DEFAULT_UPCOMING_EXAMS;
    }
    return parsed;
  } catch {
    return DEFAULT_UPCOMING_EXAMS;
  }
}

export function saveUpcomingExams(exams: UpcomingExam[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.UPCOMING_EXAMS, JSON.stringify(exams));
  } catch (err) {
    console.error('Error saving upcoming exams:', err);
  }
}
