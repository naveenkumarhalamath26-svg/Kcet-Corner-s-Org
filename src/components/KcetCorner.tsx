import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  TrendingUp, 
  Layers,
  Sparkles
} from 'lucide-react';
import { Question, QuizMode, SubjectId } from '../types';
import { CHAPTERS, SUBJECTS } from '../data/chaptersData';

interface KcetCornerProps {
  allQuestions: Question[];
  onStartQuiz: (options: {
    mode: QuizMode;
    subjectId?: SubjectId;
    questionCount: number;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => void;
}

export const KcetCorner: React.FC<KcetCornerProps> = ({
  allQuestions,
  onStartQuiz
}) => {
  const [selectedKcetSubject, setSelectedKcetSubject] = useState<SubjectId>('physics');

  const kcetQuestions = allQuestions.filter(q => q.source.toLowerCase().includes('kcet'));
  const currentSubjQuestions = allQuestions.filter(q => q.subject === selectedKcetSubject);

  const startSpeedDrill = (secPerQ = 60, count = 10) => {
    const subjMeta = SUBJECTS.find(s => s.id === selectedKcetSubject);
    onStartQuiz({
      mode: 'kcet_corner',
      subjectId: selectedKcetSubject,
      questionCount: Math.min(count, currentSubjQuestions.length),
      isTimed: true,
      instantFeedback: false,
      title: `KCET Speed Drill · ${subjMeta?.name} (${secPerQ}s/Q)`
    });
  };

  const startPreviousYear = (year: number) => {
    onStartQuiz({
      mode: 'previous_paper',
      subjectId: selectedKcetSubject,
      questionCount: 15,
      isTimed: true,
      instantFeedback: false,
      title: `KCET ${year} Official Entrance Mock`
    });
  };

  const kcetHighYieldChapters = CHAPTERS
    .filter(c => c.subjectId === selectedKcetSubject)
    .sort((a, b) => b.kcetQuestions - a.kcetQuestions)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      
      {/* KCET Micro-Labeled Compact Header Area */}
      <div className="bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white rounded-2xl p-4 sm:p-5 border border-amber-500/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          {/* Micro-Labels Strip */}
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Flame className="w-3 h-3 fill-amber-400 text-amber-400" />
              KEA · KCET ENTRANCE EXAM
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 border border-white/10">
              ⏱ 60 Qs / 80 Min
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-emerald-300 border border-emerald-500/20">
              ✓ Zero Negative Marking
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-blue-200 border border-blue-500/20">
              ⚡ ~70s / Q Speed Drill
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-orange-200 border border-orange-500/20">
              📄 2015–2024 PYQs
            </span>
          </div>

          <p className="text-xs text-slate-300 max-w-xl">
            Simulate real Karnataka CET pressure with timed speed drills, official previous year papers, and high-yield chapter shortcuts.
          </p>
        </div>

        {/* Micro-Actions */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => startSpeedDrill(60, 15)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
            <span>Launch Speed Drill (15 Qs)</span>
          </button>
          <button
            onClick={() => startPreviousYear(2024)}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <span>2024 Paper</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Subject Filter for KCET */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200">
        {SUBJECTS.map((sub) => {
          const isSelected = selectedKcetSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setSelectedKcetSubject(sub.id)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                isSelected
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {sub.name}
            </button>
          );
        })}
      </div>

      {/* 2-Column KCET Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Quick Drills & Past Papers */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Award className="w-4 h-4 text-orange-600" />
            <span>Targeted KCET Speed Practice</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">60-Second Rapid Fire</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  10 Questions · Strict 10-minute timer. Simulates real KCET examination pressure.
                </p>
              </div>
              <button
                onClick={() => startSpeedDrill(60, 10)}
                className="w-full py-2 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all"
              >
                Start Rapid Fire
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Official KCET 2024 MCQs</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real entrance questions asked in KCET with authentic difficulty and solutions.
                </p>
              </div>
              <button
                onClick={() => startPreviousYear(2024)}
                className="w-full py-2 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all"
              >
                Practice 2024 Paper
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">KCET 2023 Solved Paper</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Curated questions with detailed step-by-step trick methods.
                </p>
              </div>
              <button
                onClick={() => startPreviousYear(2023)}
                className="w-full py-2 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all"
              >
                Practice 2023 Paper
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">High-Weightage Chapters</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Focus on chapters contributing 65%+ of the questions in Karnataka CET.
                </p>
              </div>
              <button
                onClick={() => startSpeedDrill(90, 15)}
                className="w-full py-2 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all"
              >
                Start High-Yield Quiz
              </button>
            </div>

            {/* Dedicated Assertion-Reason & Statement Drills Card */}
            <div className="bg-white p-5 rounded-2xl border border-purple-200 shadow-xs hover:border-purple-400 transition-all space-y-3 sm:col-span-2 bg-gradient-to-r from-purple-50/50 via-white to-amber-50/50">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-purple-700" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-extrabold uppercase tracking-wider">
                  Official Pattern 2026-27
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Assertion & Reason + Statement Drills</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-yield conceptual drill on Assertion-Reason (A/R) and Statement I & II formats aligned with latest KSEAB and KCET entrance patterns.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    const subjMeta = SUBJECTS.find(s => s.id === selectedKcetSubject);
                    const arQs = allQuestions.filter(q => q.subject === selectedKcetSubject && (q.questionType === 'assertion_reason' || q.questionType === 'statement_based'));
                    onStartQuiz({
                      mode: 'kcet_corner',
                      subjectId: selectedKcetSubject,
                      questionCount: Math.max(5, arQs.length),
                      isTimed: true,
                      instantFeedback: true,
                      title: `A/R & Statements Drill · ${subjMeta?.name || 'KCET'}`
                    });
                  }}
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Practice A/R & Statements Now
                </button>
              </div>
            </div>

          </div>

          {/* KCET Strategy Tips */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
            <h4 className="font-bold text-sm text-slate-900">
              Karnataka CET Exam Pattern & Strategy Tips
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Negative Marking:</strong> Never leave an OMR bubble blank. Attempt all 60 questions.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Time Budget:</strong> Spend max 45-60 seconds on direct theoretical MCQs to save time for numericals.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Dimensional Analysis:</strong> In Physics, eliminate 2 out of 4 options immediately by checking units.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Option Substitution:</strong> In Mathematics, substitute x = 0, 1, or π/4 into trigonometric equations.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Weightage Distribution */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-600" />
            <span>Highest KCET Weightage</span>
          </h3>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <p className="text-xs text-slate-500">
              Chapters with the highest historical question frequency in KCET for {selectedKcetSubject.toUpperCase()}:
            </p>

            <div className="space-y-2.5 pt-1">
              {kcetHighYieldChapters.map((chap, idx) => (
                <div key={chap.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-orange-100 text-orange-800 text-[11px] font-extrabold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900 truncate max-w-[140px] sm:max-w-[160px]">
                        {chap.title}
                      </h5>
                      <span className="text-[10px] text-slate-500">
                        Board: {chap.boardMarks} Marks
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-black text-orange-700 bg-orange-50 px-2 py-1 rounded-lg">
                    ~{chap.kcetQuestions} Qs
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
