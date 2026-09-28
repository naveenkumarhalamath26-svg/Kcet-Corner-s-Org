import React from 'react';
import { 
  BarChart3, 
  Target, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Flame, 
  RotateCcw, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Trash2,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { Question, QuizResult, StudentProfile, SubjectId } from '../types';
import { SUBJECTS } from '../data/chaptersData';
import { getWrongQuestionIds } from '../utils/storage';

interface PerformanceDashboardProps {
  quizHistory: QuizResult[];
  profile: StudentProfile;
  allQuestions: Question[];
  onStartRemedialQuiz: (wrongQuestions: Question[]) => void;
  onClearHistory: () => void;
  onSelectTab: (tab: any) => void;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  quizHistory,
  profile,
  allQuestions,
  onStartRemedialQuiz,
  onClearHistory,
  onSelectTab
}) => {
  const totalQuizzes = quizHistory.length;
  const totalQuestionsAttempted = quizHistory.reduce((sum, q) => sum + q.totalQuestions, 0);
  const totalCorrect = quizHistory.reduce((sum, q) => sum + q.correctAnswers, 0);
  const totalWrong = quizHistory.reduce((sum, q) => sum + q.wrongAnswers, 0);
  const overallAccuracy = totalQuestionsAttempted > 0 ? Math.round((totalCorrect / totalQuestionsAttempted) * 100) : 0;
  const bestScorePercentage = quizHistory.length > 0 ? Math.max(...quizHistory.map(q => q.percentage)) : 0;

  // Calculate subject-wise accuracy
  const subjectStats = SUBJECTS.map((subj) => {
    const subjQuizzes = quizHistory.filter(q => q.subjectId === subj.id);
    const attempted = subjQuizzes.reduce((sum, q) => sum + q.totalQuestions, 0);
    const correct = subjQuizzes.reduce((sum, q) => sum + q.correctAnswers, 0);
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return {
      ...subj,
      attempted,
      correct,
      accuracy,
      quizzesCount: subjQuizzes.length
    };
  });

  // Wrong questions remediation bank
  const wrongIds = getWrongQuestionIds();
  const wrongQuestionsInBank = allQuestions.filter(q => wrongIds.includes(q.id));

  return (
    <div className="space-y-6">
      
      {/* Top Banner with Vibrant Color Theming */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 border border-indigo-800/50 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-black uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
            <span>STUDENT PROGRESS INTELLIGENCE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-amber-300">
            Performance & Mastery Analytics
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
            Track your exam readiness for Karnataka II PUC Board Exams & KCET with real-time accuracy indicators.
          </p>
        </div>

        {wrongQuestionsInBank.length > 0 && (
          <button
            onClick={() => onStartRemedialQuiz(wrongQuestionsInBank)}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
          >
            <Flame className="w-4 h-4 fill-slate-950" />
            <span>Practice Weak Questions ({wrongQuestionsInBank.length})</span>
          </button>
        )}
      </div>

      {/* Main Metrics 4-Box Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Overall Accuracy</span>
            <Target className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {overallAccuracy}%
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Across {totalQuestionsAttempted} total MCQs solved
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Correct</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600">
            {totalCorrect}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            {totalWrong} incorrect responses
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Best Test Score</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">
            {bestScorePercentage}%
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Highest recorded exam score
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Study Streak</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-orange-600">
            {profile.streakDays} Days
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Active daily practice streak
          </p>
        </div>

      </div>

      {/* Subject-Wise Accuracy Breakdown Bars */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Subject-Wise Accuracy & Mastery</span>
          </h3>
          <span className="text-xs text-slate-400">Target: 85%+</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {subjectStats.map((sub) => (
            <div key={sub.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{sub.name}</h4>
                  <span className="text-[11px] text-slate-500">
                    {sub.kannadaName} · {sub.attempted} Qs attempted ({sub.quizzesCount} tests)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-slate-900">{sub.accuracy}%</span>
                </div>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    sub.accuracy >= 80 
                      ? 'bg-emerald-500' 
                      : sub.accuracy >= 60 
                      ? 'bg-blue-600' 
                      : sub.accuracy > 0 
                      ? 'bg-amber-500' 
                      : 'bg-slate-300'
                  }`}
                  style={{ width: `${Math.max(5, sub.accuracy)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Quiz History */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Quiz History & Test Log ({quizHistory.length})</span>
            </h3>
            <p className="text-xs text-slate-500">Chronological history of completed tests</p>
          </div>

          {quizHistory.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 font-semibold p-1"
              title="Clear quiz history"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {quizHistory.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {quizHistory.map((q) => (
              <div key={q.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{q.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span>{new Date(q.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>·</span>
                    <span className="capitalize">{q.mode.replace('_', ' ')}</span>
                    <span>·</span>
                    <span>{q.totalQuestions} Questions</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-sm font-black text-blue-700">
                      {q.score} / {q.maxScore}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {q.percentage}% · {q.accuracy}% acc
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-xs space-y-3">
            <p>No tests taken yet. Start with a Chapter Quiz or Quick 10 drill!</p>
            <button
              onClick={() => onSelectTab('practice')}
              className="px-4 py-2 bg-blue-700 text-white rounded-xl font-bold inline-flex items-center gap-1.5"
            >
              <span>Explore Practice Quizzes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
