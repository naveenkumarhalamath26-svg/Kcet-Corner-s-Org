export type SubjectId = 'physics' | 'chemistry' | 'mathematics' | 'biology' | 'computer_science';

export type QuestionType = 'single_mcq' | 'multiple_mcq' | 'true_false' | 'numerical' | 'assertion_reason' | 'statement_based';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  chapterNumber: number;
  title: string;
  boardMarks: number;
  kcetQuestions: number;
  description: string;
  topics: string[];
  officialPdfUrl?: string;
  officialPdfName?: string;
  classLevel?: string;
}

export interface Question {
  id: string;
  subject: SubjectId;
  chapter: string; // chapter ID matching Chapter.id
  topic: string;
  question: string;
  questionType: QuestionType;
  options?: string[]; // typically 4 options for single/multiple MCQ, 2 for true/false
  correctAnswer: string | string[] | number | boolean;
  explanation: string;
  difficulty: Difficulty;
  source: string;
  year?: number | string;
  formulaNote?: string;
  officialPdfUrl?: string;
  isCustom?: boolean; // created by user in admin panel
  questionKannada?: string; // Kannada translation for official bilingual state format
  optionsKannada?: string[]; // Kannada options corresponding to English options
  explanationKannada?: string; // Kannada explanation
}

export type LanguageMode = 'bilingual' | 'english' | 'kannada';

export type StudentStatus = 'active' | 'suspended' | 'pending' | 'cancelled';

export interface StudentLoginRecord {
  id: string; // e.g. "STU-2025-0101"
  name: string;
  username: string; // registration/login ID
  email: string;
  phone: string;
  college: string;
  district: string;
  stream: 'PCMB' | 'PCMC' | 'PCME' | 'Other';
  targetExam: string;
  status: StudentStatus;
  registeredAt: string;
  lastLogin: string;
  quizzesAttempted: number;
  overallAccuracy: number;
  ipAddress?: string;
  notes?: string;
}

export type QuizMode = 
  | 'chapter' 
  | 'subject_full' 
  | 'previous_paper' 
  | 'question_bank' 
  | 'quick_10' 
  | 'kcet_corner'
  | 'wrong_remedy'
  | 'custom_mock';

export interface QuizAnswer {
  questionId: string;
  studentAnswer: string | string[] | number | boolean | null;
  isCorrect: boolean;
  timeSpentSec: number;
}

export interface QuizSession {
  id: string;
  mode: QuizMode;
  subjectId?: SubjectId;
  chapterId?: string;
  title: string;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, string | string[] | number | boolean | null>;
  markedForReview: Record<string, boolean>;
  timeRemainingSec: number;
  totalTimeSec: number;
  isTimed: boolean;
  instantFeedback: boolean; // if true, shows explanation right after choosing
  startedAt: number;
}

export interface QuizResult {
  id: string;
  title: string;
  mode: QuizMode;
  subjectId?: SubjectId;
  chapterId?: string;
  timestamp: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  score: number;
  maxScore: number;
  percentage: number;
  timeTakenSec: number;
  accuracy: number;
  questions: Question[];
  studentAnswers: Record<string, string | string[] | number | boolean | null>;
}

export interface StudentProfile {
  name: string;
  college: string;
  district: string;
  stream: 'PCMB' | 'PCMC' | 'PCME' | 'Other';
  targetExam: 'II PUC Board Exam' | 'KCET Entrance' | 'NEET' | 'Both Board & KCET';
  streakDays: number;
  totalQuestionsSolved: number;
  overallAccuracy: number;
  lastActiveDate: string;
}

export interface ShortNote {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  chapterTitle: string;
  summary: string;
  formulas: { label: string; expression: string; tip?: string }[];
  keyPoints: string[];
  examTips: string[];
}

export interface StudyTodo {
  id: string;
  task: string;
  subject: SubjectId | 'general';
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: number;
}

export interface UpcomingExam {
  id: string;
  title: string;
  examDate: string; // ISO string or YYYY-MM-DDTHH:mm
  category: 'board' | 'entrance' | 'preparatory' | 'college' | 'custom';
  targetGoal?: string;
  colorTheme?: 'blue' | 'indigo' | 'amber' | 'emerald' | 'purple' | 'rose';
  isPrimary?: boolean;
  notes?: string;
}

export type ThemeMode = 'light' | 'dark' | 'sepia';
export type ViewTab = 'home' | 'subjects' | 'practice' | 'flashcards' | 'mock_tests' | 'previous_papers' | 'notes' | 'progress' | 'admin' | 'planner';

export type FlashcardCategory = 'formula' | 'definition' | 'concept' | 'reaction' | 'trick';

export interface Flashcard {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  chapterTitle: string;
  topic: string;
  category: FlashcardCategory;
  front: {
    title: string;
    prompt: string;
    hint?: string;
  };
  back: {
    mainText: string;
    formula?: string;
    keyPoints?: string[];
    examTip?: string;
  };
}
