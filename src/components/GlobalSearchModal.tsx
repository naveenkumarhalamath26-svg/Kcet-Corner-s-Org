import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight, Zap, Play } from 'lucide-react';
import { Question, QuizMode, SubjectId } from '../types';
import { CHAPTERS, SUBJECTS } from '../data/chaptersData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onStartQuiz: (options: {
    mode: QuizMode;
    subjectId?: SubjectId;
    chapterId?: string;
    questionCount: number;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => void;
  onSelectSubjectNotes: (subjectId: SubjectId) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  questions,
  onStartQuiz,
  onSelectSubjectNotes
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingQuestions = trimmed
    ? questions.filter(q => 
        q.question.toLowerCase().includes(trimmed) ||
        q.topic.toLowerCase().includes(trimmed) ||
        q.explanation.toLowerCase().includes(trimmed) ||
        (q.formulaNote && q.formulaNote.toLowerCase().includes(trimmed))
      ).slice(0, 6)
    : [];

  const matchingChapters = trimmed
    ? CHAPTERS.filter(c => 
        c.title.toLowerCase().includes(trimmed) ||
        c.topics.some(t => t.toLowerCase().includes(trimmed))
      ).slice(0, 4)
    : [];

  const handleLaunchQuestionPractice = (q: Question) => {
    onClose();
    onStartQuiz({
      mode: 'chapter',
      subjectId: q.subject,
      chapterId: q.chapter,
      questionCount: 5,
      isTimed: false,
      instantFeedback: true,
      title: `${q.topic} Practice`
    });
  };

  const handleLaunchChapter = (ch: any) => {
    onClose();
    onStartQuiz({
      mode: 'chapter',
      subjectId: ch.subjectId,
      chapterId: ch.id,
      questionCount: 10,
      isTimed: false,
      instantFeedback: true,
      title: `${ch.title} Quiz`
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-6 space-y-4 border border-slate-200 shadow-2xl relative">
        
        {/* Search Input Bar */}
        <div className="relative">
          <input
            type="text"
            autoFocus
            placeholder="Search questions, topics (e.g. Gauss, Nernst, Matrices, DNA)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 absolute right-3 top-3"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          
          {/* Chapters match */}
          {matchingChapters.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                Chapters & Syllabus
              </span>
              {matchingChapters.map(c => (
                <div
                  key={c.id}
                  onClick={() => handleLaunchChapter(c)}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 cursor-pointer transition-all flex items-center justify-between text-xs group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold uppercase text-blue-700 text-[10px] bg-white px-2 py-0.5 rounded shadow-2xs">
                      {c.subjectId}
                    </span>
                    <span className="font-bold text-slate-900 group-hover:text-blue-700">
                      Ch {c.chapterNumber}: {c.title}
                    </span>
                  </div>
                  <span className="text-blue-600 font-semibold flex items-center gap-1">
                    <span>Practice</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Questions match */}
          {matchingQuestions.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                Matching Questions ({matchingQuestions.length})
              </span>
              {matchingQuestions.map(q => (
                <div
                  key={q.id}
                  onClick={() => handleLaunchQuestionPractice(q)}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 cursor-pointer transition-all space-y-1 group"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold uppercase text-blue-700">{q.subject}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-600 font-medium">{q.topic}</span>
                    </div>
                    <span className="text-slate-400">{q.source}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 group-hover:text-blue-800 line-clamp-2">
                    {q.question}
                  </p>
                </div>
              ))}
            </div>
          )}

          {trimmed && matchingChapters.length === 0 && matchingQuestions.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs">
              No matching questions or topics found for "{query}". Try a different keyword like "formula", "electric", "matrix", or "acid".
            </div>
          )}

          {!trimmed && (
            <div className="text-center py-6 text-slate-400 text-xs space-y-2">
              <p>Type any keyword to search across all Karnataka II PUC PCMB questions, model papers, and chapters.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['Gauss Law', 'Raoult', 'Determinants', 'Lac Operon', 'Photoelectric', 'SN1'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
