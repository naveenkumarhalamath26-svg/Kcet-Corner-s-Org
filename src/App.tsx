import React, { useState, useEffect } from 'react';
import { 
  Header 
} from './components/Header';
import { 
  BottomNav 
} from './components/BottomNav';
import { 
  HomeDashboard 
} from './components/HomeDashboard';
import { 
  SubjectChapterPicker 
} from './components/SubjectChapterPicker';
import { 
  KcetCorner 
} from './components/KcetCorner';
import { 
  MockTestModal 
} from './components/MockTestModal';
import { 
  ShortNotesView 
} from './components/ShortNotesView';
import { 
  FlashcardsView 
} from './components/FlashcardsView';
import { 
  PerformanceDashboard 
} from './components/PerformanceDashboard';
import { 
  StudyPlanner 
} from './components/StudyPlanner';
import { 
  AdminPanel 
} from './components/AdminPanel';
import { 
  QuizActive 
} from './components/QuizActive';
import { 
  QuizResults 
} from './components/QuizResults';
import { 
  FocusModeModal 
} from './components/FocusModeModal';
import { 
  StudentProfileModal 
} from './components/StudentProfileModal';
import { 
  GlobalSearchModal 
} from './components/GlobalSearchModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAInstallButton } from './components/PWAInstallButton';
import { useOnlineStatus } from './utils/usePWAInstall';
import { User } from 'lucide-react';

import { 
  Question, 
  QuizMode, 
  QuizResult, 
  QuizSession, 
  StudentProfile, 
  StudyTodo, 
  SubjectId, 
  ThemeMode, 
  ViewTab 
} from './types';

import { 
  deleteQuestionById, 
  getActiveSession, 
  getAllQuestions, 
  getQuizResults, 
  getStudentProfile, 
  getStudyTodos, 
  getThemePreference, 
  importQuestionsJson, 
  saveActiveSession, 
  saveCustomQuestion, 
  saveQuizResult, 
  saveStudentProfile, 
  saveStudyTodos, 
  setThemePreference 
} from './utils/storage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [theme, setTheme] = useState<ThemeMode>(getThemePreference());
  const [profile, setProfile] = useState<StudentProfile>(getStudentProfile());
  const [questions, setQuestions] = useState<Question[]>(getAllQuestions());
  const [activeSession, setActiveSession] = useState<QuizSession | null>(getActiveSession());
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>(getQuizResults());
  const [studyTodos, setStudyTodos] = useState<StudyTodo[]>(getStudyTodos());

  // Note Navigation
  const [selectedNoteSubject, setSelectedNoteSubject] = useState<SubjectId>('physics');

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isFocusOpen, setIsFocusOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  // Initialize theme
  useEffect(() => {
    setThemePreference(theme);
  }, [theme]);

  // Online / Offline listener
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleToggleTheme = (newMode: ThemeMode) => {
    setTheme(newMode);
    setThemePreference(newMode);
  };

  const handleSaveProfile = async (newProfile: StudentProfile) => {
    setProfile(newProfile);
    saveStudentProfile(newProfile);

    // Sync student login and academic profile to backend and Supabase database
    try {
      await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProfile.name,
          college: newProfile.college,
          district: newProfile.district,
          stream: newProfile.stream,
          targetExam: newProfile.targetExam,
          quizzesAttempted: newProfile.totalQuestionsSolved,
          overallAccuracy: newProfile.overallAccuracy
        })
      });
    } catch (err) {
      console.warn('Background student sync:', err);
    }
  };

  const handleUpdateTodos = (newTodos: StudyTodo[]) => {
    setStudyTodos(newTodos);
    saveStudyTodos(newTodos);
  };

  // Start a Quiz
  const handleStartQuiz = ({
    mode,
    subjectId,
    chapterId,
    questionCount,
    difficulty,
    questionType,
    isTimed,
    instantFeedback,
    title
  }: {
    mode: QuizMode;
    subjectId?: SubjectId;
    chapterId?: string;
    questionCount: number;
    difficulty?: any;
    questionType?: any;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => {
    let pool = [...questions];

    if (subjectId) {
      pool = pool.filter(q => q.subject === subjectId);
    }

    if (chapterId) {
      pool = pool.filter(q => q.chapter === chapterId);
    }

    if (difficulty && difficulty !== 'All') {
      pool = pool.filter(q => q.difficulty === difficulty);
    }

    if (questionType && questionType !== 'All') {
      pool = pool.filter(q => q.questionType === questionType);
    }

    if (mode === 'previous_paper') {
      const isKcetTitle = title.toLowerCase().includes('kcet');
      const yearMatch = title.match(/20\d{2}/);
      if (isKcetTitle) {
        let kcetPool = pool.filter(q => q.source.toLowerCase().includes('kcet'));
        if (yearMatch && yearMatch[0]) {
          const matchedYearPool = kcetPool.filter(q => q.year === yearMatch[0]);
          if (matchedYearPool.length >= 3) {
            kcetPool = matchedYearPool;
          }
        }
        if (kcetPool.length > 0) {
          pool = kcetPool;
        }
      } else {
        pool = pool.filter(q => q.source.toLowerCase().includes('annual') || q.source.toLowerCase().includes('model') || q.source.toLowerCase().includes('kcet'));
      }
    }

    if (mode === 'kcet_corner') {
      const kcetPool = pool.filter(q => q.source.toLowerCase().includes('kcet'));
      if (kcetPool.length > 0) {
        pool = kcetPool;
      }
    }

    // Shuffle questions
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.max(1, Math.min(questionCount, shuffled.length)));

    if (selected.length === 0) {
      // Fallback: pick any questions from this subject or pool
      const fallback = [...questions].filter(q => !subjectId || q.subject === subjectId).slice(0, Math.min(questionCount, questions.length));
      selected.push(...fallback);
    }

    // Standard timing: 60-70 seconds per question for KCET, 90 seconds for board exam
    const secPerQ = mode === 'kcet_corner' ? 60 : 75;
    const totalTime = selected.length * secPerQ;

    const newSession: QuizSession = {
      id: 'sess-' + Date.now(),
      mode,
      subjectId,
      chapterId,
      title,
      questions: selected,
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: {},
      timeRemainingSec: totalTime,
      totalTimeSec: totalTime,
      isTimed,
      instantFeedback,
      startedAt: Date.now()
    };

    setActiveSession(newSession);
    saveActiveSession(newSession);
    setCurrentResult(null);
  };

  const handleUpdateActiveSession = (updated: QuizSession) => {
    setActiveSession(updated);
    saveActiveSession(updated);
  };

  const handleCompleteQuiz = (result: QuizResult) => {
    saveQuizResult(result);
    saveActiveSession(null);
    setActiveSession(null);
    setCurrentResult(result);
    setQuizHistory(getQuizResults());
    setProfile(getStudentProfile());
  };

  const handleRetryQuiz = () => {
    if (!currentResult) return;
    const shuffled = [...currentResult.questions].sort(() => Math.random() - 0.5);
    const secPerQ = currentResult.mode === 'kcet_corner' ? 60 : 75;
    const totalTime = shuffled.length * secPerQ;

    const retrySession: QuizSession = {
      id: 'sess-' + Date.now(),
      mode: currentResult.mode,
      subjectId: currentResult.subjectId,
      chapterId: currentResult.chapterId,
      title: `${currentResult.title} (Retry)`,
      questions: shuffled,
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: {},
      timeRemainingSec: totalTime,
      totalTimeSec: totalTime,
      isTimed: true,
      instantFeedback: false,
      startedAt: Date.now()
    };

    setActiveSession(retrySession);
    saveActiveSession(retrySession);
    setCurrentResult(null);
  };

  const handlePracticeWrongQuestions = (wrongQuestions: Question[]) => {
    if (wrongQuestions.length === 0) return;
    const totalTime = wrongQuestions.length * 90;

    const remedySession: QuizSession = {
      id: 'sess-' + Date.now(),
      mode: 'wrong_remedy',
      title: 'Targeted Remedial: Review Missed Questions',
      questions: wrongQuestions,
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: {},
      timeRemainingSec: totalTime,
      totalTimeSec: totalTime,
      isTimed: false,
      instantFeedback: true, // Immediate solution for remediation
      startedAt: Date.now()
    };

    setActiveSession(remedySession);
    saveActiveSession(remedySession);
    setCurrentResult(null);
  };

  const handleExitQuiz = () => {
    // Keep saved in local storage so user can resume, but exit active view
    setActiveSession(null);
    setCurrentResult(null);
    setCurrentTab('home');
  };

  const handleClearHistory = () => {
    if (confirm('Clear your quiz history? Your overall accuracy stats will remain.')) {
      localStorage.removeItem('kseab_quiz_results');
      setQuizHistory([]);
    }
  };

  const handleSaveQuestion = (q: Question) => {
    saveCustomQuestion(q);
    setQuestions(getAllQuestions());
  };

  const handleDeleteQuestion = (id: string) => {
    deleteQuestionById(id);
    setQuestions(getAllQuestions());
  };

  const handleImportQuestions = (jsonStr: string) => {
    const res = importQuestionsJson(jsonStr);
    if (res.success) {
      setQuestions(getAllQuestions());
    }
    return res;
  };

  const handleSelectSubjectNotes = (subjId: SubjectId) => {
    setSelectedNoteSubject(subjId);
    setCurrentTab('notes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-20 lg:pb-10 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setActiveSession(null);
          setCurrentResult(null);
          setCurrentTab(tab);
        }}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFocus={() => setIsFocusOpen(true)}
        isOnline={isOnline}
        cachedQuestionsCount={questions.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* If Active Quiz is Running */}
        {activeSession ? (
          <QuizActive
            session={activeSession}
            onUpdateSession={handleUpdateActiveSession}
            onCompleteQuiz={handleCompleteQuiz}
            onExitQuiz={handleExitQuiz}
          />
        ) : currentResult ? (
          <QuizResults
            result={currentResult}
            onRetryQuiz={handleRetryQuiz}
            onPracticeWrongQuestions={handlePracticeWrongQuestions}
            onBackToDashboard={() => {
              setCurrentResult(null);
              setCurrentTab('home');
            }}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <HomeDashboard
                studentProfile={profile}
                allQuestions={questions}
                activeSession={getActiveSession()}
                quizHistory={quizHistory}
                onResumeSession={() => setActiveSession(getActiveSession())}
                onStartQuiz={handleStartQuiz}
                onSelectTab={setCurrentTab}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenFocus={() => setIsFocusOpen(true)}
                onSelectSubjectNotes={handleSelectSubjectNotes}
              />
            )}

            {currentTab === 'subjects' && (
              <SubjectChapterPicker
                allQuestions={questions}
                onStartQuiz={handleStartQuiz}
                onSelectSubjectNotes={handleSelectSubjectNotes}
              />
            )}

            {currentTab === 'practice' && (
              <KcetCorner
                allQuestions={questions}
                onStartQuiz={handleStartQuiz}
              />
            )}

            {currentTab === 'flashcards' && (
              <FlashcardsView />
            )}

            {currentTab === 'mock_tests' && (
              <MockTestModal
                allQuestions={questions}
                onStartQuiz={handleStartQuiz}
              />
            )}

            {currentTab === 'notes' && (
              <ShortNotesView
                initialSubjectId={selectedNoteSubject}
                allQuestions={questions}
                onStartQuiz={handleStartQuiz}
              />
            )}

            {currentTab === 'planner' && (
              <StudyPlanner
                todos={studyTodos}
                onUpdateTodos={handleUpdateTodos}
              />
            )}

            {currentTab === 'progress' && (
              <PerformanceDashboard
                quizHistory={quizHistory}
                profile={profile}
                allQuestions={questions}
                onStartRemedialQuiz={handlePracticeWrongQuestions}
                onClearHistory={handleClearHistory}
                onSelectTab={setCurrentTab}
              />
            )}

            {currentTab === 'admin' && (
              <AdminPanel
                questions={questions}
                onSaveQuestion={handleSaveQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onImportQuestions={handleImportQuestions}
              />
            )}
          </>
        )}

      </main>

      {/* Mobile Bottom Navigation */}
      {!activeSession && (
        <BottomNav
          currentTab={currentTab}
          onSelectTab={(tab) => {
            setCurrentResult(null);
            setCurrentTab(tab);
          }}
          onOpenProfile={() => setIsProfileOpen(true)}
          studentInitial={profile?.name ? profile.name.charAt(0).toUpperCase() : 'S'}
        />
      )}

      {/* Page Footer with Down-Side Corner Student Login */}
      {!activeSession && (
        <footer className="border-t border-slate-200 bg-white/80 py-4 px-4 sm:px-8 text-xs text-slate-500 mb-16 lg:mb-0">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">KSEAB II PUC Portal</span>
              <span>·</span>
              <span>Karnataka Board & KCET Student Corner</span>
            </div>
            {/* Down-side corner student login button with micro install label below */}
            <div className="flex flex-col items-center sm:items-end gap-1.5">
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold border border-blue-200 transition-colors cursor-pointer"
                title="Open Student Login & Profile"
              >
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">
                  {profile?.name ? profile.name.charAt(0).toUpperCase() : 'S'}
                </div>
                <span>Student Login ({profile?.name ? profile.name.split(' ')[0] : 'Student'})</span>
              </button>
              {/* Micro-label below student login */}
              <PWAInstallButton variant="micro" />
            </div>
          </div>
        </footer>
      )}

      {/* Global Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        questions={questions}
        onStartQuiz={handleStartQuiz}
        onSelectSubjectNotes={handleSelectSubjectNotes}
      />

      <FocusModeModal
        isOpen={isFocusOpen}
        onClose={() => setIsFocusOpen(false)}
      />

      <StudentProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />

      {/* Floating Offline Notification Banner */}
      <OfflineIndicator />

    </div>
  );
}
