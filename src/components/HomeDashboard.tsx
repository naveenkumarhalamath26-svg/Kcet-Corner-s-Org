import React from 'react';
import { 
  Play, 
  Flame, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Search, 
  Zap, 
  RotateCcw,
  Layers,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Chapter, Question, QuizMode, QuizResult, QuizSession, StudentProfile, SubjectId, ViewTab } from '../types';
import { CHAPTERS, SUBJECTS } from '../data/chaptersData';
import { getWrongQuestionIds } from '../utils/storage';
import { UpcomingExamsWidget } from './UpcomingExamsWidget';

interface HomeDashboardProps {
  studentProfile: StudentProfile;
  allQuestions: Question[];
  activeSession: QuizSession | null;
  quizHistory: QuizResult[];
  onResumeSession: () => void;
  onStartQuiz: (options: {
    mode: QuizMode;
    subjectId?: SubjectId;
    chapterId?: string;
    questionCount: number;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => void;
  onSelectTab: (tab: ViewTab) => void;
  onOpenSearch: () => void;
  onOpenFocus: () => void;
  onSelectSubjectNotes: (subjectId: SubjectId) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  studentProfile,
  allQuestions,
  activeSession,
  quizHistory,
  onResumeSession,
  onStartQuiz,
  onSelectTab,
  onOpenSearch,
  onOpenFocus,
  onSelectSubjectNotes
}) => {
  const wrongIds = getWrongQuestionIds();
  const wrongQuestions = allQuestions.filter(q => wrongIds.includes(q.id));

  const handleLaunchQuick10 = () => {
    onStartQuiz({
      mode: 'quick_10',
      questionCount: 10,
      isTimed: true,
      instantFeedback: true,
      title: 'KSEAB Rapid 10 PCMB Diagnostic'
    });
  };

  const handleLaunchKCET = () => {
    onSelectTab('practice');
  };

  return (
    <div className="space-y-6">
      
      {/* Resume In-Progress Quiz Alert (if any active session exists in storage) */}
      {activeSession && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                Resume In-Progress Quiz: {activeSession.title}
              </h4>
              <p className="text-xs text-slate-600">
                You were on Question {activeSession.currentQuestionIndex + 1} of {activeSession.questions.length}. Your progress is saved.
              </p>
            </div>
          </div>

          <button
            onClick={onResumeSession}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs transition-all active:scale-95 shrink-0"
          >
            <span>Resume Test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Micro-Labeled Dashboard Header Strip */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-3.5 sm:p-4 border border-blue-500/25 shadow-xs space-y-3">
        {/* Top Micro-Labels Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Stream & PCMB Subjects Micro-Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button 
              onClick={() => onSelectTab('subjects')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 hover:text-white border border-blue-400/30 transition-all text-[11px] font-bold cursor-pointer"
              title="Click to view all PCMB Subjects & Chapters"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Karnataka PUC Science (PCMB)</span>
              <ChevronRight className="w-3 h-3 text-blue-300" />
            </button>

            {/* Quick Micro Subject Pills */}
            <div className="flex items-center gap-1 text-[10px] font-bold">
              {[
                { id: 'physics', short: 'P', name: 'Physics', color: 'hover:bg-blue-600/40 text-blue-200 border-blue-500/30' },
                { id: 'chemistry', short: 'C', name: 'Chem', color: 'hover:bg-emerald-600/40 text-emerald-200 border-emerald-500/30' },
                { id: 'mathematics', short: 'M', name: 'Math', color: 'hover:bg-amber-600/40 text-amber-200 border-amber-500/30' },
                { id: 'biology', short: 'B', name: 'Bio', color: 'hover:bg-teal-600/40 text-teal-200 border-teal-500/30' },
              ].map(sub => (
                <button
                  key={sub.id}
                  onClick={() => onSelectSubjectNotes(sub.id as SubjectId)}
                  className={`px-2 py-0.5 rounded-md bg-white/5 border ${sub.color} hover:text-white transition-all cursor-pointer flex items-center gap-1`}
                  title={`Open ${sub.name} Formulas & Revision Notes`}
                >
                  <span className="font-mono font-black">{sub.short}</span>
                  <span className="hidden sm:inline text-[9px] font-medium opacity-80">{sub.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Student Profile Micro-Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
            <span className="text-white font-bold">{studentProfile.name}</span>
            <span className="text-slate-400 text-[10px]">({studentProfile.college})</span>
          </div>
        </div>

        {/* Micro-Labels Info & Action Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-slate-300">
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-blue-200 border border-blue-500/20">
              🎯 II PUC Board Exams & KCET
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-emerald-300 border border-emerald-500/20">
              ✓ Model Papers · MCQs · High-Yield Notes
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-amber-200 border border-amber-500/20">
              ⚡ 100% Offline Ready
            </span>
          </div>

          {/* Micro Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleLaunchQuick10}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Start Quick 10 Quiz</span>
            </button>

            <button
              onClick={() => onSelectTab('subjects')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Practice by Chapter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Compact Karnataka Exams Countdown */}
      <div>
        <UpcomingExamsWidget 
          onStartQuiz={onStartQuiz}
          onSelectTab={onSelectTab}
        />
      </div>

      {/* 4 Subjects Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
              Official Curriculum Subjects (PCMB)
            </h3>
            <p className="text-xs text-slate-500">
              Select any subject to explore chapters, syllabus marks weightage, and target quizzes
            </p>
          </div>
          <button
            onClick={() => onSelectTab('subjects')}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUBJECTS.map((sub) => {
            const count = allQuestions.filter(q => q.subject === sub.id).length;
            const subChapters = CHAPTERS.filter(c => c.subjectId === sub.id);

            return (
              <div
                key={sub.id}
                onClick={() => onSelectTab('subjects')}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-sm cursor-pointer transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-black uppercase px-2 py-0.5 rounded ${sub.bgColor} ${sub.color}`}>
                      {sub.shortName} · {sub.totalBoardMarks} Marks
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {sub.totalChapters} Chapters
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {sub.kannadaName}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600">
                    {count} Questions
                  </span>
                  <span className="text-blue-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2-Column Section: Quick Quizzes & Performance Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Practice Modes Catalog */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Interactive Quiz Modes</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Mode 1: Chapter Quiz */}
            <div 
              onClick={() => onSelectTab('subjects')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 cursor-pointer transition-all space-y-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700">
                Chapter Quiz
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Target a single chapter with customizable question count (5, 10, 15, 20) and instant step-by-step explanations.
              </p>
            </div>

            {/* Mode 2: KCET Speed Drills */}
            <div 
              onClick={() => onSelectTab('practice')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 cursor-pointer transition-all space-y-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700">
                KCET Speed Drills & PYQs
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                60-second timed questions and authentic previous year papers matching the Karnataka CET format.
              </p>
            </div>

            {/* Mode 3: Short Notes */}
            <div 
              onClick={() => onSelectTab('notes')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 cursor-pointer transition-all space-y-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700">
                Formula Notes & Flashcards
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                High-yield formula cheat sheets and chapter flashcards for rapid active recall.
              </p>
            </div>

            {/* Mode 4: Study Planner */}
            <div 
              onClick={() => onSelectTab('planner')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 cursor-pointer transition-all space-y-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700">
                Study Timetable & Tracker
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Exam-oriented chapter checklists and daily revision tasks to stay ahead of schedule.
              </p>
            </div>

          </div>
        </div>

        {/* Right 1 Col: Performance & Remedial Corner */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Your Stats Snapshot</span>
          </h3>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs text-slate-500">Overall Accuracy</span>
              <span className="text-base font-extrabold text-blue-700">
                {studentProfile.overallAccuracy}%
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs text-slate-500">Total Solved</span>
              <span className="text-base font-extrabold text-slate-900">
                {studentProfile.totalQuestionsSolved} MCQs
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs text-slate-500">Daily Streak</span>
              <span className="text-base font-extrabold text-amber-600 flex items-center gap-1">
                <Flame className="w-4 h-4 fill-amber-500" />
                {studentProfile.streakDays} Days
              </span>
            </div>

            {/* Wrong Question Bank Alert */}
            {wrongQuestions.length > 0 ? (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span>Weak Areas Identified</span>
                  <span>{wrongQuestions.length} Questions</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-tight">
                  You have missed {wrongQuestions.length} questions in recent tests. Practice them to build 100% mastery.
                </p>
                <button
                  onClick={() => onStartQuiz({
                    mode: 'wrong_remedy',
                    questionCount: wrongQuestions.length,
                    isTimed: false,
                    instantFeedback: true,
                    title: 'Wrong Questions Remedial Drill'
                  })}
                  className="w-full py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
                >
                  Practice Missed Questions
                </button>
              </div>
            ) : (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-medium">
                ✓ No missed questions in your revision bank! Keep it up.
              </div>
            )}

            <button
              onClick={() => onSelectTab('progress')}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
            >
              View Full Analytics
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
