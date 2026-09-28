import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Copy, 
  Check, 
  Play, 
  Lightbulb, 
  Award, 
  Bookmark, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  Zap
} from 'lucide-react';
import { SHORT_NOTES } from '../data/shortNotesData';
import { CHAPTERS, SUBJECTS } from '../data/chaptersData';
import { Question, QuizMode, ShortNote, SubjectId } from '../types';
import { FlashcardsView } from './FlashcardsView';

interface ShortNotesViewProps {
  initialSubjectId?: SubjectId;
  allQuestions: Question[];
  onStartQuiz: (options: {
    mode: QuizMode;
    subjectId?: SubjectId;
    chapterId?: string;
    questionCount: number;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => void;
}

export const ShortNotesView: React.FC<ShortNotesViewProps> = ({
  initialSubjectId = 'physics',
  allQuestions,
  onStartQuiz
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>(initialSubjectId);
  const [selectedNoteId, setSelectedNoteId] = useState<string>(
    SHORT_NOTES.find(n => n.subjectId === initialSubjectId)?.id || SHORT_NOTES[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'notes' | 'flashcards'>('notes');
  const [flashcardChapter, setFlashcardChapter] = useState<string>('all');

  const subjectNotes = SHORT_NOTES.filter(n => n.subjectId === selectedSubject);
  const activeNote = SHORT_NOTES.find(n => n.id === selectedNoteId) || subjectNotes[0] || SHORT_NOTES[0];
  const matchingChapter = CHAPTERS.find(c => c.id === activeNote.chapterId);

  const filteredNotes = subjectNotes.filter(n => 
    n.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.formulas.some(f => f.label.toLowerCase().includes(searchQuery.toLowerCase()) || f.expression.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopyFormula = (expr: string) => {
    navigator.clipboard?.writeText(expr);
    setCopiedFormula(expr);
    setTimeout(() => setCopiedFormula(null), 1800);
  };

  const handlePracticeThisChapter = () => {
    if (!matchingChapter) return;
    onStartQuiz({
      mode: 'chapter',
      subjectId: matchingChapter.subjectId,
      chapterId: matchingChapter.id,
      questionCount: 10,
      isTimed: false,
      instantFeedback: true,
      title: `${matchingChapter.title} · Rapid Revision Quiz`
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner with Vibrant Color Theming and Mode Switcher */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white rounded-3xl p-5 sm:p-6 border border-emerald-800/50 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-black uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>KSEAB REVISION & RETENTION MODULE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-amber-300">
            Formula Notes & Active Recall Flashcards
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl leading-relaxed">
            Crisp chapter summaries, formula sheets, definitions, and spaced repetition flashcards for rapid board & KCET revision.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Section Mode Toggle: Notes vs Flashcards */}
          <div className="flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-700/80 shrink-0">
            <button
              onClick={() => setActiveSection('notes')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSection === 'notes'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-200" />
              <span>Formula Notes</span>
            </button>
            <button
              onClick={() => {
                setFlashcardChapter('all');
                setActiveSection('flashcards');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSection === 'flashcards'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Flashcards</span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-950/20 text-[10px] font-black">
                Active Recall
              </span>
            </button>
          </div>

          {activeSection === 'notes' && (
            /* Search input for notes */
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                placeholder="Search formulas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 pl-9 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          )}
        </div>
      </div>

      {/* Render Flashcards Mode or Notes Mode */}
      {activeSection === 'flashcards' ? (
        <div className="space-y-4">
          <FlashcardsView initialSubjectId={selectedSubject} initialChapterId={flashcardChapter} />
        </div>
      ) : (
        <>
          {/* Subject Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {SUBJECTS.map((sub) => {
              const isSelected = selectedSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubject(sub.id);
                    const firstNote = SHORT_NOTES.find(n => n.subjectId === sub.id);
                    if (firstNote) setSelectedNoteId(firstNote.id);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {sub.name} ({sub.kannadaName})
                </button>
              );
            })}
          </div>

          {/* 2-Column Reader Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Chapter List (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 px-1">
            Available Chapters
          </h3>

          <div className="space-y-1.5">
            {filteredNotes.map((note) => {
              const isSelected = note.id === activeNote.id;
              return (
                <button
                  key={note.id}
                  onClick={() => setSelectedNoteId(note.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`text-xs font-bold leading-tight ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                      {note.chapterTitle}
                    </h4>
                    <span className="text-[10px] text-slate-400 shrink-0">
                      {note.formulas.length} Formulas
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {note.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Note Content Details (8 cols) */}
        <div className="lg:col-span-8">
          {activeNote ? (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              
              {/* Note Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    {selectedSubject.toUpperCase()} · CHAPTER NOTE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                    {activeNote.chapterTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {activeNote.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setFlashcardChapter(activeNote.chapterId);
                      setActiveSection('flashcards');
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer active:scale-95 shadow-2xs"
                    title="Practice Active Recall Flashcards for this chapter"
                  >
                    <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>Chapter Flashcards</span>
                  </button>

                  {matchingChapter?.officialPdfUrl && (
                    <a
                      href={matchingChapter.officialPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all border border-slate-200"
                      title="Open official KSEAB CET 2026-27 PDF"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                      <span>Official KSEAB PDF</span>
                    </a>
                  )}

                  <button
                    onClick={handlePracticeThisChapter}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95 shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Practice Chapter Qs</span>
                  </button>
                </div>
              </div>

              {/* High-Yield Formulas Section */}
              {activeNote.formulas.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Essential Formulas & Equations</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeNote.formulas.map((f, i) => (
                      <div 
                        key={i}
                        className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 relative group"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>{f.label}</span>
                          <button
                            onClick={() => handleCopyFormula(f.expression)}
                            className="text-slate-400 hover:text-blue-700 p-1 rounded transition-colors"
                            title="Copy formula"
                          >
                            {copiedFormula === f.expression ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        <div className="font-mono text-xs sm:text-sm font-bold text-blue-900 py-1 tracking-wide">
                          {f.expression}
                        </div>

                        {f.tip && (
                          <div className="text-[11px] text-slate-500 font-sans">
                            💡 {f.tip}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Concepts & Key Points */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>Key Points & Definitions</span>
                </h4>

                <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-200">
                  {activeNote.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High Probability Board Exam Tips */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>KSEAB Board Exam Pro Tips</span>
                </h4>

                <div className="space-y-2 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-950">
                  {activeNote.examTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="font-bold text-emerald-700">★</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500 text-xs">
              Select a chapter from the left to view short notes.
            </div>
          )}
        </div>

      </div>
      </>
      )}

    </div>
  );
};
