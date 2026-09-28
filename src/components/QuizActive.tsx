import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Bookmark, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Grid, 
  Home, 
  Sparkles,
  RotateCcw,
  Zap,
  ExternalLink,
  Languages
} from 'lucide-react';
import { Question, QuizResult, QuizSession, LanguageMode } from '../types';
import { playClickSound } from '../utils/audio';
import { AskAiModal } from './AskAiModal';
import { getBilingualQuestionData } from '../utils/kannadaTranslations';

interface QuizActiveProps {
  session: QuizSession;
  onUpdateSession: (session: QuizSession) => void;
  onCompleteQuiz: (result: QuizResult) => void;
  onExitQuiz: () => void;
}

export const QuizActive: React.FC<QuizActiveProps> = ({
  session,
  onUpdateSession,
  onCompleteQuiz,
  onExitQuiz
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(session.currentQuestionIndex || 0);
  const [answers, setAnswers] = useState<Record<string, any>>(session.answers || {});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>(session.markedForReview || {});
  const [timeRemaining, setTimeRemaining] = useState<number>(session.timeRemainingSec);
  const [showNavGrid, setShowNavGrid] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState<boolean>(false);
  const [numericalInput, setNumericalInput] = useState<string>('');
  const [isAskAiOpen, setIsAskAiOpen] = useState<boolean>(false);
  const [langMode, setLangMode] = useState<LanguageMode>('bilingual');
  const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
  const [showIntegrityAlert, setShowIntegrityAlert] = useState<boolean>(false);

  const currentQuestion: Question | undefined = session.questions[currentIndex];
  const bilingualData = currentQuestion ? getBilingualQuestionData(currentQuestion) : null;
  const timerRef = useRef<number | null>(null);

  // Sync session whenever state changes
  useEffect(() => {
    onUpdateSession({
      ...session,
      currentQuestionIndex: currentIndex,
      answers,
      markedForReview,
      timeRemainingSec: timeRemaining
    });
  }, [currentIndex, answers, markedForReview, timeRemaining]);

  // Exam Integrity / Anti-Cheating Guardian for Timed Modes
  useEffect(() => {
    if (!session.isTimed) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prev => {
          const next = prev + 1;
          setShowIntegrityAlert(true);
          return next;
        });
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [session.isTimed]);

  // Timer countdown
  useEffect(() => {
    if (!session.isTimed) return;

    timerRef.current = window.setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleFinalSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [session.isTimed]);

  // Reset numerical input when question changes
  useEffect(() => {
    if (currentQuestion && currentQuestion.questionType === 'numerical') {
      const existing = answers[currentQuestion.id];
      setNumericalInput(existing !== undefined && existing !== null ? String(existing) : '');
    }
  }, [currentIndex, currentQuestion]);

  if (!currentQuestion) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
        <p className="text-slate-600">No question found in this session.</p>
        <button onClick={onExitQuiz} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-xl">
          Return to Portal
        </button>
      </div>
    );
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectSingleOption = (option: string) => {
    const nextAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(nextAnswers);
    playClickSound(true);
  };

  const handleSelectMultipleOption = (option: string) => {
    const currentList: string[] = Array.isArray(answers[currentQuestion.id]) 
      ? [...answers[currentQuestion.id]] 
      : [];

    const exists = currentList.includes(option);
    const updated = exists 
      ? currentList.filter(o => o !== option)
      : [...currentList, option];

    setAnswers({ ...answers, [currentQuestion.id]: updated });
    playClickSound(true);
  };

  const handleSelectTrueFalse = (val: boolean) => {
    setAnswers({ ...answers, [currentQuestion.id]: val });
    playClickSound(true);
  };

  const handleSaveNumerical = () => {
    const parsed = parseFloat(numericalInput.trim());
    if (!isNaN(parsed)) {
      setAnswers({ ...answers, [currentQuestion.id]: parsed });
      playClickSound(true);
    }
  };

  const toggleMarkForReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const isCurrentAnswered = () => {
    const ans = answers[currentQuestion.id];
    return ans !== undefined && ans !== null && (Array.isArray(ans) ? ans.length > 0 : true);
  };

  const checkIsAnswerCorrect = (q: Question, studentAns: any): boolean => {
    if (studentAns === undefined || studentAns === null) return false;
    if (q.questionType === 'multiple_mcq' && Array.isArray(q.correctAnswer)) {
      return (
        Array.isArray(studentAns) &&
        q.correctAnswer.length === studentAns.length &&
        q.correctAnswer.every(item => studentAns.includes(item))
      );
    }
    if (q.questionType === 'numerical') {
      const numStudent = parseFloat(String(studentAns));
      const numCorrect = parseFloat(String(q.correctAnswer));
      return Math.abs(numStudent - numCorrect) <= 0.05; // 0.05 tolerance
    }
    return String(studentAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
  };

  const handleFinalSubmit = (forcedTimeout = false) => {
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    session.questions.forEach(q => {
      const ans = answers[q.id];
      if (ans === undefined || ans === null || (Array.isArray(ans) && ans.length === 0)) {
        unansweredCount++;
      } else {
        const correct = checkIsAnswerCorrect(q, ans);
        if (correct) correctCount++;
        else wrongCount++;
      }
    });

    const total = session.questions.length;
    const score = correctCount; // 1 mark per question
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const timeTaken = session.totalTimeSec - timeRemaining;
    const accuracy = (correctCount + wrongCount) > 0 
      ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
      : 0;

    const result: QuizResult = {
      id: 'res-' + Date.now(),
      title: session.title,
      mode: session.mode,
      subjectId: session.subjectId,
      chapterId: session.chapterId,
      timestamp: Date.now(),
      totalQuestions: total,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unanswered: unansweredCount,
      score,
      maxScore: total,
      percentage,
      timeTakenSec: Math.max(1, timeTaken),
      accuracy,
      questions: session.questions,
      studentAnswers: answers
    };

    onCompleteQuiz(result);
  };

  const answeredCount = Object.keys(answers).filter(k => answers[k] !== undefined && answers[k] !== null).length;
  const markedCount = Object.values(markedForReview).filter(Boolean).length;
  const isLastQuestion = currentIndex === session.questions.length - 1;
  const progressPercent = Math.round(((currentIndex + 1) / session.questions.length) * 100);

  // Instant feedback evaluation for current question
  const studentChoice = answers[currentQuestion.id];
  const hasAnsweredCurrent = studentChoice !== undefined && studentChoice !== null && (Array.isArray(studentChoice) ? studentChoice.length > 0 : true);
  const isCurrentCorrect = hasAnsweredCurrent ? checkIsAnswerCorrect(currentQuestion, studentChoice) : false;

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      
      {/* Top Session Status Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowExitConfirmModal(true)}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1 font-semibold"
            title="Return to Dashboard (Progress Saved)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Exit</span>
          </button>
          <div className="h-4 w-px bg-slate-200"></div>
          <div>
            <span className="text-xs font-bold text-slate-900 block truncate max-w-[200px] sm:max-w-xs">
              {session.title}
            </span>
            <span className="text-[11px] text-slate-500">
              Question {currentIndex + 1} of {session.questions.length}
            </span>
          </div>
        </div>

        {/* Center / Right tools: Timer & Review & Grid */}
        <div className="flex items-center gap-2">
          {session.isTimed && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold ${
              timeRemaining < 120 
                ? 'bg-rose-100 text-rose-700 animate-pulse' 
                : 'bg-slate-100 text-slate-800'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}

          <button
            onClick={toggleMarkForReview}
            className={`p-2 rounded-xl transition-colors flex items-center gap-1 text-xs font-semibold ${
              markedForReview[currentQuestion.id]
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title="Mark for later review"
          >
            <Flag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Review</span>
          </button>

          <button
            onClick={() => setShowNavGrid(prev => !prev)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1"
            title="Question palette"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Palette</span>
          </button>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Question Palette Drawer (Collapsible) */}
      {showNavGrid && (
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm animate-in fade-in space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Question Palette</span>
            <div className="flex items-center gap-3 text-[11px] font-normal">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Answered ({answeredCount})
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-amber-500"></span> Review ({markedCount})
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-slate-200"></span> Unanswered
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {session.questions.map((q, idx) => {
              const isAns = answers[q.id] !== undefined && answers[q.id] !== null;
              const isMarked = markedForReview[q.id];
              const isCurrent = idx === currentIndex;

              let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
              if (isAns) btnStyle = 'bg-emerald-600 text-white font-bold';
              if (isMarked) btnStyle = 'bg-amber-500 text-slate-950 font-bold';
              if (isCurrent) btnStyle += ' ring-2 ring-blue-600 ring-offset-2';

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowNavGrid(false);
                  }}
                  className={`w-9 h-9 rounded-xl text-xs flex items-center justify-center transition-all ${btnStyle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Exam Integrity Alert Banner (Anti-Cheat & Tab Switch Warning) */}
      {showIntegrityAlert && session.isTimed && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 flex items-center justify-between gap-3 text-amber-900 text-xs shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="font-bold">Exam Integrity Notice:</span> Window/Tab switch detected ({tabSwitchCount} time{tabSwitchCount > 1 ? 's' : ''}). Please remain on the active exam window to simulate real exam room conditions.
            </div>
          </div>
          <button
            onClick={() => setShowIntegrityAlert(false)}
            className="px-2.5 py-1 bg-amber-200 hover:bg-amber-300 font-bold rounded-lg text-amber-900 text-[11px] shrink-0 cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-xs space-y-6">
        
        {/* Question Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-extrabold text-blue-700 uppercase tracking-wider">
              {currentQuestion.subject}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-medium">
              {currentQuestion.topic}
            </span>
            {currentQuestion.questionType === 'assertion_reason' && (
              <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold text-[10px] border border-purple-200">
                Assertion & Reason
              </span>
            )}
            {currentQuestion.questionType === 'statement_based' && (
              <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px] border border-amber-200">
                Statement-Based
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            {/* Bilingual Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setLangMode('bilingual')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  langMode === 'bilingual'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Bilingual: English + Kannada (Official Exam Format)"
              >
                ENG + ಕನ್ನಡ
              </button>
              <button
                type="button"
                onClick={() => setLangMode('english')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  langMode === 'english'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLangMode('kannada')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  langMode === 'kannada'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
              {currentQuestion.difficulty}
            </span>
            <span>·</span>
            <span>{currentQuestion.source} {currentQuestion.year ? `(${currentQuestion.year})` : ''}</span>
            {currentQuestion.officialPdfUrl && (
              <a
                href={currentQuestion.officialPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold transition-colors"
                title="Open official KSEAB CET PDF"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Official PDF</span>
              </a>
            )}
          </div>
        </div>

        {/* Question Text (Bilingual English and Kannada) */}
        <div className="space-y-3">
          {/* English / Primary Statement */}
          {(langMode === 'bilingual' || langMode === 'english') && (
            <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-line">
              <span className="text-blue-700 mr-2">Q{currentIndex + 1}.</span>
              {currentQuestion.question}
            </div>
          )}

          {/* Kannada Translation (Official KSEAB Board Format) */}
          {(langMode === 'bilingual' || langMode === 'kannada') && bilingualData && (
            <div className={`p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl space-y-1 ${
              langMode === 'bilingual' ? 'mt-1' : ''
            }`}>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-amber-900 tracking-wider">
                <span className="px-1.5 py-0.2 rounded bg-amber-200 text-amber-950">ಕನ್ನಡ ಆವೃತ್ತಿ</span>
                <span>(KSEAB Karnataka Board & KCET)</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed font-sans whitespace-pre-line">
                {langMode === 'kannada' && <span className="text-blue-700 font-bold mr-2">ಪ್ರ {currentIndex + 1}.</span>}
                {bilingualData.questionKannada}
              </p>
            </div>
          )}

          {currentQuestion.formulaNote && (
            <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-mono text-slate-700">
              <span className="text-[10px] text-slate-400 block font-sans uppercase font-bold tracking-wider">Reference Formula:</span>
              {currentQuestion.formulaNote}
            </div>
          )}
        </div>

        {/* Options / Input based on question type */}
        <div className="space-y-3 pt-2">
          
          {/* SINGLE MCQ / ASSERTION-REASON / STATEMENT-BASED */}
          {(currentQuestion.questionType === 'single_mcq' || currentQuestion.questionType === 'assertion_reason' || currentQuestion.questionType === 'statement_based') && currentQuestion.options && (
            <div className="space-y-2.5">
              {currentQuestion.options.map((option, idx) => {
                const optLetter = String.fromCharCode(65 + idx); // A, B, C, D
                const isSelected = studentChoice === option;
                const knOption = bilingualData?.optionsKannada && bilingualData.optionsKannada[idx];

                // Color coding for instant feedback mode
                let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';
                let badgeStyle = 'bg-white border-slate-200 text-slate-600';

                if (session.instantFeedback && hasAnsweredCurrent) {
                  if (option === currentQuestion.correctAnswer) {
                    optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium';
                    badgeStyle = 'bg-emerald-600 text-white border-transparent';
                  } else if (isSelected && !isCurrentCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                    badgeStyle = 'bg-rose-600 text-white border-transparent';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-100 font-medium';
                  badgeStyle = 'bg-blue-600 text-white border-transparent';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectSingleOption(option)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${optionStyle}`}
                  >
                    <span className={`w-7 h-7 rounded-lg border text-xs font-bold flex items-center justify-center shrink-0 ${badgeStyle}`}>
                      {optLetter}
                    </span>
                    <div className="flex flex-col gap-0.5 text-sm pt-0.5 leading-snug">
                      {(langMode === 'bilingual' || langMode === 'english') && (
                        <span>{option}</span>
                      )}
                      {(langMode === 'bilingual' || langMode === 'kannada') && knOption && knOption !== option && (
                        <span className={`text-xs ${langMode === 'bilingual' ? 'text-slate-500 font-normal' : 'text-slate-900 font-medium'}`}>
                          {knOption}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* MULTIPLE MCQ */}
          {currentQuestion.questionType === 'multiple_mcq' && currentQuestion.options && (
            <div className="space-y-2.5">
              <p className="text-xs text-blue-600 font-semibold mb-2">
                * This question may have more than one correct answer. Select all that apply:
              </p>
              {currentQuestion.options.map((option, idx) => {
                const optLetter = String.fromCharCode(65 + idx);
                const isChecked = Array.isArray(studentChoice) && studentChoice.includes(option);

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectMultipleOption(option)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      isChecked
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-medium'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded border text-xs font-bold flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-blue-600 text-white border-transparent' : 'bg-white border-slate-300 text-slate-600'
                    }`}>
                      {isChecked ? '✓' : optLetter}
                    </span>
                    <span className="text-sm pt-0.5">{option}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* TRUE / FALSE */}
          {currentQuestion.questionType === 'true_false' && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[true, false].map((val) => {
                const isSelected = studentChoice === val;
                let btnClass = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';

                if (session.instantFeedback && hasAnsweredCurrent) {
                  if (val === currentQuestion.correctAnswer) {
                    btnClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                  } else if (isSelected && !isCurrentCorrect) {
                    btnClass = 'bg-rose-50 border-rose-300 text-rose-900';
                  }
                } else if (isSelected) {
                  btnClass = 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-100 font-bold';
                }

                return (
                  <button
                    key={String(val)}
                    onClick={() => handleSelectTrueFalse(val)}
                    className={`p-4 rounded-xl border text-center font-bold text-sm transition-all ${btnClass}`}
                  >
                    {val ? 'TRUE' : 'FALSE'}
                  </button>
                );
              })}
            </div>
          )}

          {/* NUMERICAL ANSWER */}
          {currentQuestion.questionType === 'numerical' && (
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-700 block">
                Enter your numerical answer:
              </label>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 2.5"
                  value={numericalInput}
                  onChange={(e) => setNumericalInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                <button
                  onClick={handleSaveNumerical}
                  className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  Save Answer
                </button>
              </div>
              {hasAnsweredCurrent && (
                <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Recorded response: {String(studentChoice)}
                </p>
              )}
            </div>
          )}

        </div>

        {/* Instant Solution Box (When enabled and user has answered) */}
        {session.instantFeedback && hasAnsweredCurrent && (
          <div className={`p-4 rounded-xl border text-xs space-y-2 mt-4 transition-all ${
            isCurrentCorrect 
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900' 
              : 'bg-rose-50/70 border-rose-200 text-slate-900'
          }`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              {isCurrentCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-800">Correct Answer!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span className="text-rose-800">
                    Incorrect. Correct Answer: {String(currentQuestion.correctAnswer)}
                  </span>
                </>
              )}
            </div>

            <div className="text-slate-700 leading-relaxed font-sans pt-1">
              <span className="font-bold text-slate-900 block mb-0.5">Explanation:</span>
              {currentQuestion.explanation}
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {!isLastQuestion && (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(session.questions.length - 1, prev + 1))}
                className="px-3 py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold"
              >
                Skip
              </button>
            )}

            {isLastQuestion ? (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition-all shadow-md active:scale-95"
              >
                <span>Submit Exam</span>
                <Send className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Submit Confirmation Dialog */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Submit Quiz?</h3>
                <p className="text-xs text-slate-500">Confirm test completion and generate results</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 text-xs space-y-1.5 text-slate-700 border border-slate-200">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <span className="font-bold text-slate-900">{session.questions.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Answered:</span>
                <span className="font-bold text-emerald-700">{answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Unanswered:</span>
                <span className="font-bold text-slate-500">{session.questions.length - answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <span className="font-bold text-amber-600">{markedCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                Continue Quiz
              </button>
              <button
                onClick={() => handleFinalSubmit(false)}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Safety Modal */}
      {showExitConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Exit to Portal?</h3>
                <p className="text-xs text-slate-500">Your current answers are auto-saved</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              You can resume this quiz session anytime from the Dashboard. Do you want to return to the home screen?
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setShowExitConfirmModal(false)}
                className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
              >
                Stay Here
              </button>
              <button
                onClick={onExitQuiz}
                className="flex-1 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Ask AI Button (Bottom Right) */}
      {currentQuestion && (
        <button
          onClick={() => setIsAskAiOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20 group"
          title="Ask AI Tutor for hints or step-by-step explanations (Gemini 3.8 Flash)"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse fill-amber-300" />
          <span>Ask AI</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-semibold text-white">
            Hint / Explain
          </span>
        </button>
      )}

      {/* Ask AI Modal */}
      {currentQuestion && (
        <AskAiModal
          isOpen={isAskAiOpen}
          onClose={() => setIsAskAiOpen(false)}
          question={currentQuestion}
          subjectName={currentQuestion.subject}
          chapterTitle={currentQuestion.chapter}
        />
      )}

    </div>
  );
};
