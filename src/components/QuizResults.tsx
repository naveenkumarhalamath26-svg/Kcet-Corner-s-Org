import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Target, 
  RotateCcw, 
  Flame, 
  Home, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Share2,
  ExternalLink
} from 'lucide-react';
import { Question, QuizResult } from '../types';
import { getBookmarkedIds, toggleBookmarkQuestion } from '../utils/storage';

interface QuizResultsProps {
  result: QuizResult;
  onRetryQuiz: () => void;
  onPracticeWrongQuestions: (wrongQuestions: Question[]) => void;
  onBackToDashboard: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  result,
  onRetryQuiz,
  onPracticeWrongQuestions,
  onBackToDashboard
}) => {
  const [filterReview, setFilterReview] = useState<'all' | 'wrong' | 'correct' | 'unanswered'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(getBookmarkedIds());
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    // Trigger celebratory confetti if score >= 70%
    if (result.percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  }, [result.percentage]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const handleToggleBookmark = (id: string) => {
    toggleBookmarkQuestion(id);
    setBookmarkedIds(getBookmarkedIds());
  };

  const checkIsQuestionCorrect = (q: Question) => {
    const studentAns = result.studentAnswers[q.id];
    if (studentAns === undefined || studentAns === null) return false;
    if (q.questionType === 'multiple_mcq' && Array.isArray(q.correctAnswer)) {
      return (
        Array.isArray(studentAns) &&
        q.correctAnswer.length === studentAns.length &&
        q.correctAnswer.every(item => studentAns.includes(item))
      );
    }
    if (q.questionType === 'numerical') {
      const sNum = parseFloat(String(studentAns));
      const cNum = parseFloat(String(q.correctAnswer));
      return Math.abs(sNum - cNum) <= 0.05;
    }
    return String(studentAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
  };

  // Wrong questions list for remedy
  const wrongQuestions = result.questions.filter(q => {
    const ans = result.studentAnswers[q.id];
    return ans !== undefined && ans !== null && !checkIsQuestionCorrect(q);
  });

  const filteredQuestions = result.questions.filter(q => {
    const ans = result.studentAnswers[q.id];
    const isUnans = ans === undefined || ans === null || (Array.isArray(ans) && ans.length === 0);
    const isCorr = checkIsQuestionCorrect(q);

    if (filterReview === 'correct') return isCorr;
    if (filterReview === 'wrong') return !isCorr && !isUnans;
    if (filterReview === 'unanswered') return isUnans;
    return true;
  });

  const handleShareScore = () => {
    navigator.clipboard?.writeText(
      `🎯 Karnataka II PUC Quiz: Scored ${result.score}/${result.maxScore} (${result.percentage}%) on "${result.title}" with ${result.accuracy}% accuracy!`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Score Summary Hero Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center relative overflow-hidden">
        <div className="max-w-md mx-auto space-y-4">
          
          <div className="inline-flex p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 mb-1">
            <Trophy className="w-8 h-8" />
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {result.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Test completed on {new Date(result.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>

          {/* Big Score Display */}
          <div className="py-4">
            <div className="text-5xl sm:text-6xl font-black text-blue-700 tracking-tight">
              {result.score} <span className="text-2xl sm:text-3xl text-slate-400 font-semibold">/ {result.maxScore}</span>
            </div>
            <div className="text-sm font-bold text-slate-600 mt-1">
              Percentage: <span className="text-blue-700">{result.percentage}%</span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
              <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Correct</span>
              </div>
              <div className="text-lg font-black text-emerald-700 mt-1">
                {result.correctAnswers}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-left">
              <div className="flex items-center gap-1.5 text-rose-800 text-xs font-semibold">
                <XCircle className="w-3.5 h-3.5" />
                <span>Wrong</span>
              </div>
              <div className="text-lg font-black text-rose-700 mt-1">
                {result.wrongAnswers}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Unanswered</span>
              </div>
              <div className="text-lg font-black text-slate-700 mt-1">
                {result.unanswered}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-left">
              <div className="flex items-center gap-1.5 text-blue-800 text-xs font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>Accuracy</span>
              </div>
              <div className="text-lg font-black text-blue-700 mt-1">
                {result.accuracy}%
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Time Taken: {formatTime(result.timeTakenSec)}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            
            <button
              onClick={onRetryQuiz}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>

            {wrongQuestions.length > 0 && (
              <button
                onClick={() => onPracticeWrongQuestions(wrongQuestions)}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
              >
                <Flame className="w-4 h-4 fill-slate-950" />
                <span>Practice Wrong ({wrongQuestions.length})</span>
              </button>
            )}

            <button
              onClick={handleShareScore}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>

          </div>

        </div>
      </div>

      {/* Question-by-Question Review Section */}
      <div className="space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              Detailed Question Analysis
            </h3>
            <p className="text-xs text-slate-500">
              Review your answers, examine correct options, and study official explanations
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs">
            {(['all', 'wrong', 'correct', 'unanswered'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilterReview(f)}
                className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-colors ${
                  filterReview === f 
                    ? 'bg-blue-600 text-white font-bold shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const studentAns = result.studentAnswers[q.id];
            const isUnans = studentAns === undefined || studentAns === null || (Array.isArray(studentAns) && studentAns.length === 0);
            const isCorr = checkIsQuestionCorrect(q);
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div 
                key={q.id}
                className={`bg-white rounded-2xl p-5 border transition-all ${
                  isCorr 
                    ? 'border-emerald-200 shadow-xs' 
                    : isUnans 
                    ? 'border-slate-200' 
                    : 'border-rose-200 shadow-xs'
                }`}
              >
                {/* Review Question Header */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      isCorr 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : isUnans 
                        ? 'bg-slate-100 text-slate-700' 
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isCorr ? 'Correct' : isUnans ? 'Unanswered' : 'Incorrect'}
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {q.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">
                      {q.source} {q.year ? `(${q.year})` : ''}
                    </span>
                    {q.officialPdfUrl && (
                      <a
                        href={q.officialPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold transition-colors"
                        title="Open official KSEAB CET PDF"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>PDF</span>
                      </a>
                    )}
                    <button
                      onClick={() => handleToggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-slate-700'
                      }`}
                      title="Bookmark Question"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div className="py-3 text-sm font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                  <span className="text-blue-700 mr-1.5">Q{idx + 1}.</span>
                  {q.question}
                </div>

                {/* Answers Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-2">
                  <div className={`p-3 rounded-xl border ${
                    isCorr 
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' 
                      : isUnans 
                      ? 'bg-slate-50 border-slate-200 text-slate-600' 
                      : 'bg-rose-50/60 border-rose-200 text-rose-900'
                  }`}>
                    <span className="font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                      Your Answer:
                    </span>
                    <span className="font-semibold">
                      {isUnans ? 'Skipped / Unanswered' : String(studentAns)}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-blue-900">
                    <span className="font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                      Correct Answer:
                    </span>
                    <span className="font-semibold">
                      {String(q.correctAnswer)}
                    </span>
                  </div>
                </div>

                {/* Explanation */}
                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">Explanation & Method:</span>
                  <p className="leading-relaxed">{q.explanation}</p>
                  {q.formulaNote && (
                    <p className="font-mono text-blue-700 pt-1 text-[11px]">
                      Key Formula: {q.formulaNote}
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
