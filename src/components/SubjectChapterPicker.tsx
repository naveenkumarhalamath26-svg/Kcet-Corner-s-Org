import React, { useState } from 'react';
import { 
  Atom, 
  FlaskConical, 
  Calculator, 
  Dna, 
  Play, 
  HelpCircle, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Filter, 
  Check, 
  FileText, 
  Flame,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Download
} from 'lucide-react';
import { CHAPTERS, SUBJECTS, SubjectMeta } from '../data/chaptersData';
import { Chapter, Difficulty, Question, QuizMode, SubjectId } from '../types';

interface SubjectChapterPickerProps {
  allQuestions: Question[];
  onStartQuiz: (options: {
    mode: QuizMode;
    subjectId?: SubjectId;
    chapterId?: string;
    questionCount: number;
    difficulty?: Difficulty;
    questionType?: any;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => void;
  onSelectSubjectNotes: (subjectId: SubjectId) => void;
}

export const SubjectChapterPicker: React.FC<SubjectChapterPickerProps> = ({
  allQuestions,
  onStartQuiz,
  onSelectSubjectNotes
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('physics');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [selectedQuestionType, setSelectedQuestionType] = useState<string>('All');
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);
  const [isTimed, setIsTimed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentSubjectMeta = SUBJECTS.find(s => s.id === selectedSubject) || SUBJECTS[0];
  const subjectChapters = CHAPTERS.filter(c => c.subjectId === selectedSubject);

  const filteredChapters = subjectChapters.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getSubjectQuestionCount = (subjId: SubjectId) => {
    return allQuestions.filter(q => q.subject === subjId).length;
  };

  const getChapterQuestionCount = (chapterId: string) => {
    return allQuestions.filter(q => q.chapter === chapterId).length;
  };

  const handleLaunchChapterQuiz = (chapter: Chapter) => {
    const typeLabel = selectedQuestionType === 'assertion_reason' ? ' (Assertion & Reason)' : selectedQuestionType === 'statement_based' ? ' (Statement-Based)' : '';
    onStartQuiz({
      mode: 'chapter',
      subjectId: chapter.subjectId,
      chapterId: chapter.id,
      questionCount,
      difficulty: selectedDifficulty === 'All' ? undefined : selectedDifficulty,
      questionType: selectedQuestionType === 'All' ? undefined : selectedQuestionType,
      isTimed,
      instantFeedback,
      title: `${chapter.title}${typeLabel} Quiz`
    });
  };

  const handleLaunchFullSubjectTest = () => {
    onStartQuiz({
      mode: 'subject_full',
      subjectId: selectedSubject,
      questionCount: Math.min(25, getSubjectQuestionCount(selectedSubject)),
      difficulty: selectedDifficulty === 'All' ? undefined : selectedDifficulty,
      isTimed: true,
      instantFeedback: false,
      title: `Full ${currentSubjectMeta.name} Board Exam Simulation`
    });
  };

  const handleLaunchQuick10 = () => {
    onStartQuiz({
      mode: 'quick_10',
      subjectId: selectedSubject,
      questionCount: 10,
      isTimed: true,
      instantFeedback: true,
      title: `Quick 10 · ${currentSubjectMeta.name} Speed Drill`
    });
  };

  const renderSubjectIcon = (id: SubjectId) => {
    switch (id) {
      case 'physics': return <Atom className="w-5 h-5" />;
      case 'chemistry': return <FlaskConical className="w-5 h-5" />;
      case 'mathematics': return <Calculator className="w-5 h-5" />;
      case 'biology': return <Dna className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Subject Tabs */}
      <div className="bg-white rounded-2xl p-2 sm:p-3 border border-slate-200 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SUBJECTS.map((sub) => {
            const isSelected = selectedSubject === sub.id;
            const qCount = getSubjectQuestionCount(sub.id);
            return (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedSubject(sub.id);
                  setSelectedChapter(null);
                }}
                className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  isSelected
                    ? `${sub.bgColor} ${sub.borderColor} border-2 shadow-xs`
                    : 'bg-slate-50 hover:bg-slate-100 border border-transparent'
                }`}
              >
                <div className={`p-2.5 rounded-lg ${isSelected ? `${sub.accentColor} text-white` : 'bg-white text-slate-700 shadow-xs'}`}>
                  {renderSubjectIcon(sub.id)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-slate-900">{sub.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {sub.kannadaName} · {qCount} MCQs
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subject Banner & Quick Actions */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
              <span>Class 12 / II PUC</span>
              <span>·</span>
              <span>KSEAB Blueprints 2024-2025</span>
              <span>·</span>
              <span>{currentSubjectMeta.totalBoardMarks} Marks Paper</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {currentSubjectMeta.name} ({currentSubjectMeta.kannadaName})
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentSubjectMeta.description}. Practice chapter-wise MCQs, official model papers, or take a full board mock exam.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            <button
              onClick={handleLaunchQuick10}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
            >
              <Flame className="w-4 h-4 fill-slate-950" />
              Quick 10 Quiz
            </button>
            <button
              onClick={handleLaunchFullSubjectTest}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              Full Subject Mock
            </button>
            <button
              onClick={() => onSelectSubjectNotes(selectedSubject)}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/10 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Short Notes
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Selection Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-900 text-base sm:text-lg">
            Select Chapter ({subjectChapters.length} Chapters)
          </h3>
          <p className="text-xs text-slate-500">
            Pick a chapter to practice target MCQs or take a timed diagnostic quiz
          </p>
        </div>

        {/* Filter / Search input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search chapters or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 pl-9 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
        </div>
      </div>

      {/* Pattern Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pb-1">
        <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-blue-600" />
          Pattern:
        </span>
        {[
          { id: 'All', label: 'All Formats' },
          { id: 'assertion_reason', label: '⚡ Assertion & Reason (A/R)' },
          { id: 'statement_based', label: '📑 Statement-Based (S1/S2)' },
          { id: 'single_mcq', label: '🔘 Standard MCQs' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedQuestionType(item.id)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedQuestionType === item.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredChapters.map((chapter) => {
          const qAvailable = getChapterQuestionCount(chapter.id);
          const isSelected = selectedChapter?.id === chapter.id;

          return (
            <div
              key={chapter.id}
              className={`bg-white rounded-xl p-4 border transition-all ${
                isSelected 
                  ? 'border-blue-500 ring-2 ring-blue-100 shadow-sm' 
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {chapter.chapterNumber}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700">
                      {chapter.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {chapter.description}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold text-slate-700 block">
                    {chapter.boardMarks} Marks
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {chapter.kcetQuestions} KCET Qs
                  </span>
                </div>
              </div>

              {/* Topics preview */}
              <div className="mt-3 flex flex-wrap gap-1">
                {chapter.topics.slice(0, 3).map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                  >
                    {topic}
                  </span>
                ))}
                {chapter.topics.length > 3 && (
                  <span className="text-[10px] text-slate-400 px-1 py-0.5 font-medium">
                    +{chapter.topics.length - 3} more
                  </span>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-500">
                    {qAvailable > 0 ? `${qAvailable} Available Qs` : 'Official Question Bank'}
                  </span>
                  {chapter.officialPdfUrl && (
                    <a
                      href={chapter.officialPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-md transition-colors"
                      title="Open official KSEAB CET 2026-27 PDF"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Official PDF</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedChapter(isSelected ? null : chapter)}
                    className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    {isSelected ? 'Close' : 'Configure'}
                  </button>
                  <button
                    onClick={() => handleLaunchChapterQuiz(chapter)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-xs"
                  >
                    <span>Start</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chapter Quiz Config drawer when selected */}
              {isSelected && (
                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3">
                  <div className="font-semibold text-slate-800 text-xs flex items-center justify-between">
                    <span>Quiz Settings for Chapter {chapter.chapterNumber}</span>
                    {chapter.officialPdfUrl && (
                      <a
                        href={chapter.officialPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline font-bold text-[11px]"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Source: KSEAB CET 2026-27</span>
                      </a>
                    )}
                  </div>

                  {/* Question count selector */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Number of Questions:</span>
                    <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                      {[5, 10, 15, 20].map(cnt => (
                        <button
                          key={cnt}
                          onClick={() => setQuestionCount(cnt)}
                          className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                            questionCount === cnt ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {cnt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty selector */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Difficulty:</span>
                    <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                      {(['All', 'Easy', 'Medium', 'Hard'] as const).map(diff => (
                        <button
                          key={diff}
                          onClick={() => setSelectedDifficulty(diff)}
                          className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors ${
                            selectedDifficulty === diff ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question Pattern selector */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <span className="text-slate-600">Question Pattern:</span>
                    <div className="flex flex-wrap items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                      {[
                        { id: 'All', label: 'All Patterns' },
                        { id: 'assertion_reason', label: 'A/R' },
                        { id: 'statement_based', label: 'Statement-Based' },
                        { id: 'single_mcq', label: 'MCQs' }
                      ].map(type => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedQuestionType(type.id)}
                          className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                            selectedQuestionType === type.id ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mode toggles */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={instantFeedback}
                        onChange={(e) => setInstantFeedback(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Show Instant Solution</span>
                    </label>

                    <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isTimed}
                        onChange={(e) => setIsTimed(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Timed Exam Mode</span>
                    </label>
                  </div>

                  <button
                    onClick={() => handleLaunchChapterQuiz(chapter)}
                    className="w-full mt-2 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Launch Quiz Now ({questionCount} Questions)
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
