import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Calendar, 
  Flame, 
  Settings2, 
  Plus, 
  Check, 
  Sparkles, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  Edit3, 
  Trash2, 
  RotateCcw,
  Zap,
  Target,
  BookmarkCheck,
  BookOpen,
  X
} from 'lucide-react';
import { QuizMode, SubjectId, UpcomingExam, ViewTab } from '../types';
import { getUpcomingExams, saveUpcomingExams } from '../utils/storage';

interface UpcomingExamsWidgetProps {
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
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isPast: boolean;
}

const PRESET_EXAMS: Array<Omit<UpcomingExam, 'id'>> = [
  {
    title: 'KSEAB II PUC Annual Board Exam 1 (2027)',
    examDate: '2027-03-01T09:00:00',
    category: 'board',
    targetGoal: 'Aiming for 95%+ in PCMB (600/600 Distinction)',
    colorTheme: 'blue',
    notes: 'Official Karnataka Board Annual Examination Exam 1. 20 MCQs & Fill-in-blanks in Part-A.'
  },
  {
    title: 'KCET Entrance Examination 2027 (KEA)',
    examDate: '2027-04-18T10:30:00',
    category: 'entrance',
    targetGoal: 'Target KCET Engineering / Agri Rank < 1000',
    colorTheme: 'amber',
    notes: 'Karnataka Common Entrance Test. 60 Questions per subject in 80 mins. No negative marking.'
  },
  {
    title: 'District Level Pre-Board Preparatory Exam',
    examDate: '2027-01-16T09:30:00',
    category: 'preparatory',
    targetGoal: 'Target 90%+ in All Pre-Boards as Benchmark',
    colorTheme: 'indigo',
    notes: 'Full syllabus preparatory conducted across all Karnataka PU Colleges.'
  },
  {
    title: 'KSEAB II PUC Practical Lab Examinations',
    examDate: '2027-02-05T09:00:00',
    category: 'board',
    targetGoal: 'Target 30/30 in All Practical Records & Vivas',
    colorTheme: 'emerald',
    notes: 'Internal + External examiner assessment for Physics, Chemistry, Biology experiments.'
  },
  {
    title: 'NEET-UG 2027 Medical Entrance',
    examDate: '2027-05-02T14:00:00',
    category: 'entrance',
    targetGoal: 'Target 650+ Score for Govt Medical Seat',
    colorTheme: 'emerald',
    notes: 'National Eligibility cum Entrance Test for MBBS/BDS admissions.'
  },
  {
    title: 'College Mid-Term / Preparatory Exam',
    examDate: '2026-11-20T09:30:00',
    category: 'college',
    targetGoal: 'Target Top 3 in PU College internal ranking',
    colorTheme: 'purple',
    notes: 'College internal examination covering initial 6 chapters per subject.'
  }
];

export const UpcomingExamsWidget: React.FC<UpcomingExamsWidgetProps> = ({
  onStartQuiz,
  onSelectTab
}) => {
  const [exams, setExams] = useState<UpcomingExam[]>(() => getUpcomingExams());
  const [activeExamId, setActiveExamId] = useState<string>(() => {
    const saved = getUpcomingExams();
    const primary = saved.find(e => e.isPrimary);
    return primary ? primary.id : (saved[0]?.id || '');
  });

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [editingExam, setEditingExam] = useState<UpcomingExam | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeExam = exams.find(e => e.id === activeExamId) || exams[0];

  // Calculate remaining time
  const calculateRemaining = (dateStr: string): TimeRemaining => {
    try {
      const targetTime = new Date(dateStr).getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: diff, isPast: true };
      }

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      return { days, hours, minutes, seconds, totalMs: diff, isPast: false };
    } catch {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0, isPast: false };
    }
  };

  const remaining = activeExam ? calculateRemaining(activeExam.examDate) : { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0, isPast: false };

  const handleSelectExam = (id: string) => {
    setActiveExamId(id);
  };

  const handleSetPrimary = (id: string) => {
    const updated = exams.map(e => ({
      ...e,
      isPrimary: e.id === id
    }));
    setExams(updated);
    saveUpcomingExams(updated);
    setActiveExamId(id);
  };

  const handleOpenAddModal = () => {
    const newExam: UpcomingExam = {
      id: 'exam-' + Date.now(),
      title: 'KSEAB II PUC Preparatory Exam',
      examDate: '2027-01-20T09:30:00',
      category: 'preparatory',
      targetGoal: 'Target 90%+ in All Subjects',
      colorTheme: 'indigo',
      isPrimary: false,
      notes: ''
    };
    setEditingExam(newExam);
    setIsConfigModalOpen(true);
  };

  const handleOpenEditModal = (exam: UpcomingExam) => {
    setEditingExam({ ...exam });
    setIsConfigModalOpen(true);
  };

  const handleSaveExam = (savedExam: UpcomingExam) => {
    const exists = exams.some(e => e.id === savedExam.id);
    let updated: UpcomingExam[];
    if (exists) {
      updated = exams.map(e => e.id === savedExam.id ? savedExam : e);
    } else {
      updated = [...exams, savedExam];
    }
    // If marked primary, unmark others
    if (savedExam.isPrimary) {
      updated = updated.map(e => ({
        ...e,
        isPrimary: e.id === savedExam.id
      }));
    }
    setExams(updated);
    saveUpcomingExams(updated);
    setActiveExamId(savedExam.id);
    setIsConfigModalOpen(false);
    setEditingExam(null);
  };

  const [configError, setConfigError] = useState<string | null>(null);

  const handleDeleteExam = (id: string) => {
    if (exams.length <= 1) {
      setConfigError('You must keep at least one upcoming exam in your dashboard.');
      return;
    }
    const updated = exams.filter(e => e.id !== id);
    setExams(updated);
    saveUpcomingExams(updated);
    if (activeExamId === id) {
      setActiveExamId(updated[0].id);
    }
    setIsConfigModalOpen(false);
    setEditingExam(null);
    setConfigError(null);
  };

  const handleResetDefaults = () => {
    const defaultExams: UpcomingExam[] = [
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
      }
    ];
    setExams(defaultExams);
    saveUpcomingExams(defaultExams);
    setActiveExamId(defaultExams[0].id);
    setIsConfigModalOpen(false);
  };

  // Phase badge & Strategy advice
  const getPhaseInfo = (days: number, isPast: boolean, category: string) => {
    if (isPast) {
      return {
        badge: 'Exam Completed',
        badgeColor: 'bg-slate-200 text-slate-800',
        advice: 'Check your performance and continue preparing for upcoming entrance & board exams!'
      };
    }
    if (days > 120) {
      return {
        badge: 'Foundation & Mastery Phase',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        advice: 'Focus on completing all NCERT textbook chapter readings, understanding derivations, and building a strong formula bank.'
      };
    }
    if (days > 60) {
      return {
        badge: 'Intensive Practice Phase',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        advice: 'Solve at least 20-30 MCQs daily across Physics, Chemistry, Maths & Biology. Target weak concepts using remedial drills.'
      };
    }
    if (days > 20) {
      return {
        badge: 'Mock Tests & Speed Sprint',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        advice: 'Attempt full 3-hour subject mock papers. Practice answering Part-A 20 MCQs within 25 minutes to leave ample time for derivations.'
      };
    }
    return {
      badge: 'Peak Revision Countdown',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300 animate-pulse',
      advice: 'Review high-yield short notes, recurring 5-mark board questions, and formula cheat sheets. Maintain 8 hours of sleep.'
    };
  };

  const phase = getPhaseInfo(remaining.days, remaining.isPast, activeExam?.category || 'board');

  // Format date display
  const formatDateDisplay = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 flex flex-col justify-between transition-all h-full">
      {/* Top Header bar with compact title & switcher */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight flex items-center gap-1.5">
                <span>Karnataka Exams Countdown</span>
                <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Live
                </span>
              </h3>
              <p className="text-[10px] text-slate-500 font-medium truncate max-w-[200px] sm:max-w-xs">
                {activeExam.title.split('(')[0].trim()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handleOpenEditModal(activeExam)}
              className="p-1.5 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200 shadow-2xs"
              title="Configure exam dates & timers"
            >
              <Settings2 className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Quick horizontal exam tags */}
        <div className="py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {exams.slice(0, 4).map((exam) => {
            const isActive = exam.id === activeExamId;
            const diff = calculateRemaining(exam.examDate);
            return (
              <button
                key={exam.id}
                onClick={() => handleSelectExam(exam.id)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{exam.title.split(' ')[0]} {exam.title.split(' ')[1] || ''}</span>
                <span className={`text-[9px] font-black px-1 rounded ${isActive ? 'bg-white/20' : 'bg-slate-200'}`}>
                  {diff.isPast ? 'Done' : `${diff.days}d`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact 4-Digit Countdown Display */}
        <div className="grid grid-cols-4 gap-2 my-1">
          <div className="bg-blue-50/70 rounded-xl py-2 px-1 text-center border border-blue-100">
            <div className="text-xl sm:text-2xl font-black text-blue-900 font-mono leading-none">
              {String(remaining.days).padStart(2, '0')}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-blue-700 mt-1">Days</div>
          </div>
          <div className="bg-slate-50 rounded-xl py-2 px-1 text-center border border-slate-200">
            <div className="text-xl sm:text-2xl font-black text-slate-800 font-mono leading-none">
              {String(remaining.hours).padStart(2, '0')}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-600 mt-1">Hours</div>
          </div>
          <div className="bg-slate-50 rounded-xl py-2 px-1 text-center border border-slate-200">
            <div className="text-xl sm:text-2xl font-black text-slate-800 font-mono leading-none">
              {String(remaining.minutes).padStart(2, '0')}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-600 mt-1">Mins</div>
          </div>
          <div className="bg-amber-50 rounded-xl py-2 px-1 text-center border border-amber-200">
            <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono leading-none animate-pulse">
              {String(remaining.seconds).padStart(2, '0')}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-amber-800 mt-1">Secs</div>
          </div>
        </div>
      </div>

      {/* Target & Quick Launch Footer */}
      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
        <span className="text-[11px] font-medium text-slate-500 truncate flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{formatDateDisplay(activeExam.examDate).split(',')[0]}</span>
          <span className="text-slate-300">·</span>
          <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-md border ${phase.badgeColor}`}>
            {phase.badge}
          </span>
        </span>
        <button
          onClick={() => onStartQuiz({
            mode: 'quick_10',
            questionCount: 10,
            isTimed: true,
            instantFeedback: true,
            title: `${activeExam.title.split('(')[0]} Daily Drill`
          })}
          className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded-lg transition-transform active:scale-95 shadow-2xs shrink-0"
        >
          <Zap className="w-3 h-3 fill-white" />
          <span>Daily Drill</span>
        </button>
      </div>

      {/* CONFIGURATION & CUSTOM EXAM MODAL */}
      {isConfigModalOpen && editingExam && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 my-8">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Configure Countdown & Exam Date
                  </h3>
                  <p className="text-xs text-slate-500">
                    Customize your target exam dates, deadlines, and score targets
                  </p>
                </div>
              </div>
              <button
                onClick={() => { setIsConfigModalOpen(false); setEditingExam(null); }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Quick Presets Picker */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Or Pick From Official Karnataka Presets:
              </label>
              <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto p-1 bg-slate-50 rounded-xl border border-slate-200">
                {PRESET_EXAMS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setEditingExam({
                        ...editingExam,
                        title: preset.title,
                        examDate: preset.examDate,
                        category: preset.category,
                        targetGoal: preset.targetGoal,
                        colorTheme: preset.colorTheme,
                        notes: preset.notes
                      });
                    }}
                    className="p-2 text-left bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-[11px] font-semibold text-slate-800 transition-colors truncate"
                  >
                    {preset.title.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            {configError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center justify-between">
                <span>{configError}</span>
                <button type="button" onClick={() => setConfigError(null)} className="text-rose-500 hover:text-rose-800">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Exam Title / Name
                </label>
                <input
                  type="text"
                  value={editingExam.title}
                  onChange={(e) => setEditingExam({ ...editingExam, title: e.target.value })}
                  placeholder="e.g. KSEAB II PUC Annual Board Exam 1"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Exam Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={editingExam.examDate.substring(0, 16)}
                    onChange={(e) => setEditingExam({ ...editingExam, examDate: e.target.value + ':00' })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={editingExam.category}
                    onChange={(e) => setEditingExam({ ...editingExam, category: e.target.value as any })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium bg-white"
                  >
                    <option value="board">KSEAB Board Exam</option>
                    <option value="entrance">KCET / Entrance Test</option>
                    <option value="preparatory">Preparatory / Pre-Board</option>
                    <option value="college">College Internal Exam</option>
                    <option value="custom">Custom Goal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Score / Goal (Shown on Widget)
                </label>
                <input
                  type="text"
                  value={editingExam.targetGoal || ''}
                  onChange={(e) => setEditingExam({ ...editingExam, targetGoal: e.target.value })}
                  placeholder="e.g. Aiming for 95%+ in PCMB (600/600 Distinction)"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Study Notes / Exam Syllabus Summary (Optional)
                </label>
                <textarea
                  rows={2}
                  value={editingExam.notes || ''}
                  onChange={(e) => setEditingExam({ ...editingExam, notes: e.target.value })}
                  placeholder="e.g. Full PCMB syllabus. 20 MCQs Part-A."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              {/* Set Primary Toggle */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="primaryCheck"
                  checked={editingExam.isPrimary || false}
                  onChange={(e) => setEditingExam({ ...editingExam, isPrimary: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="primaryCheck" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Pin as Primary Countdown on Dashboard
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                {exams.some(e => e.id === editingExam.id) && (
                  <button
                    type="button"
                    onClick={() => handleDeleteExam(editingExam.id)}
                    className="flex items-center gap-1 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="flex items-center gap-1 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-xl text-xs font-medium transition-colors"
                  title="Restore default Karnataka Board & KCET exam schedule"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setIsConfigModalOpen(false); setEditingExam(null); }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveExam(editingExam)}
                  className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl shadow-xs transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Exam</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
