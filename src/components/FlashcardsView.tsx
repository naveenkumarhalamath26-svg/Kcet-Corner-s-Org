import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Check, 
  AlertCircle, 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  Atom, 
  FlaskConical, 
  Calculator, 
  Dna, 
  Layers, 
  LayoutGrid, 
  SlidersHorizontal, 
  Play, 
  Pause, 
  HelpCircle,
  Lightbulb,
  Award,
  Zap,
  CheckCircle2,
  RefreshCcw,
  Palette
} from 'lucide-react';
import { Flashcard, FlashcardCategory, SubjectId } from '../types';
import { getAllFlashcards } from '../data/flashcardsData';
import { CHAPTERS, SUBJECTS } from '../data/chaptersData';

const STORAGE_KEYS = {
  MASTERED: 'kseab_flashcards_mastered',
  REVIEW: 'kseab_flashcards_review',
  BOOKMARKED: 'kseab_flashcards_bookmarked',
  COLOR_THEME: 'kseab_flashcard_colortheme'
};

export type FlashcardColorMode = 'vibrant' | 'pastel' | 'neon' | 'classic';

const CATEGORIES: { id: FlashcardCategory | 'all'; label: string; icon: string }[] = [
  { id: 'all', label: 'All Cards', icon: 'Layers' },
  { id: 'formula', label: 'Formulas', icon: 'Zap' },
  { id: 'definition', label: 'Definitions', icon: 'BookOpen' },
  { id: 'concept', label: 'Core Concepts', icon: 'Lightbulb' },
  { id: 'reaction', label: 'Reactions', icon: 'FlaskConical' },
  { id: 'trick', label: 'Exam Tricks', icon: 'Sparkles' }
];

export interface FlashcardsViewProps {
  initialSubjectId?: SubjectId | 'all';
  initialChapterId?: string;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  initialSubjectId = 'all',
  initialChapterId = 'all'
}) => {
  const [allCards] = useState<Flashcard[]>(() => getAllFlashcards());
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>(initialSubjectId);
  const [selectedChapter, setSelectedChapter] = useState<string>(initialChapterId);

  useEffect(() => {
    if (initialSubjectId) setSelectedSubject(initialSubjectId);
  }, [initialSubjectId]);

  useEffect(() => {
    if (initialChapterId) setSelectedChapter(initialChapterId);
  }, [initialChapterId]);
  const [selectedCategory, setSelectedCategory] = useState<FlashcardCategory | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'mastered' | 'review' | 'bookmarked'>('all');
  const [viewLayout, setViewLayout] = useState<'single' | 'grid'>('single');

  // Color Form theme state - default vibrant color form
  const [colorTheme, setColorTheme] = useState<FlashcardColorMode>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEYS.COLOR_THEME) as FlashcardColorMode) || 'vibrant';
    } catch {
      return 'vibrant';
    }
  });

  const handleSetColorTheme = (mode: FlashcardColorMode) => {
    setColorTheme(mode);
    try {
      localStorage.setItem(STORAGE_KEYS.COLOR_THEME, mode);
    } catch {
      // ignore
    }
  };

  // Study states
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // Persistence sets
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.MASTERED) || '[]');
    } catch {
      return [];
    }
  });

  const [reviewIds, setReviewIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEW) || '[]');
    } catch {
      return [];
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKED) || '[]');
    } catch {
      return [];
    }
  });

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MASTERED, JSON.stringify(masteredIds));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEW, JSON.stringify(reviewIds));
    } catch (e) {
      console.error(e);
    }
  }, [reviewIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKED, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Filter available chapters based on selected subject
  const availableChapters = useMemo(() => {
    if (selectedSubject === 'all') return CHAPTERS;
    return CHAPTERS.filter(c => c.subjectId === selectedSubject);
  }, [selectedSubject]);

  // Reset chapter selection if subject changes and current chapter not in subject
  useEffect(() => {
    if (selectedSubject !== 'all' && selectedChapter !== 'all') {
      const exists = availableChapters.some(c => c.id === selectedChapter);
      if (!exists) {
        setSelectedChapter('all');
      }
    }
  }, [selectedSubject, availableChapters, selectedChapter]);

  // Filtered Cards Deck
  const filteredCards = useMemo(() => {
    return allCards.filter(card => {
      if (selectedSubject !== 'all' && card.subjectId !== selectedSubject) return false;
      if (selectedChapter !== 'all' && card.chapterId !== selectedChapter) return false;
      if (selectedCategory !== 'all' && card.category !== selectedCategory) return false;

      const isMastered = masteredIds.includes(card.id);
      const isReview = reviewIds.includes(card.id);
      const isBookmarked = bookmarkedIds.includes(card.id);

      if (statusFilter === 'mastered' && !isMastered) return false;
      if (statusFilter === 'review' && !isReview) return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;

      return true;
    });
  }, [allCards, selectedSubject, selectedChapter, selectedCategory, statusFilter, masteredIds, reviewIds, bookmarkedIds]);

  // Keep index in range
  useEffect(() => {
    if (currentIndex >= filteredCards.length) {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
    setShowHint(false);
  }, [filteredCards.length, currentIndex]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  // Actions
  const handleNext = () => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    if (filteredCards.length <= 1) return;
    setIsFlipped(false);
    setShowHint(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const toggleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleMarkMastered = (cardId: string) => {
    setMasteredIds(prev => prev.includes(cardId) ? prev : [...prev, cardId]);
    setReviewIds(prev => prev.filter(id => id !== cardId));
    handleNext();
  };

  const handleMarkReview = (cardId: string) => {
    setReviewIds(prev => prev.includes(cardId) ? prev : [...prev, cardId]);
    setMasteredIds(prev => prev.filter(id => id !== cardId));
    handleNext();
  };

  const toggleBookmark = (cardId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId]
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or select
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '1' && currentCard) {
        e.preventDefault();
        handleMarkReview(currentCard.id);
      } else if (e.key === '2' && currentCard) {
        e.preventDefault();
        handleMarkMastered(currentCard.id);
      } else if (e.key.toLowerCase() === 'b' && currentCard) {
        e.preventDefault();
        toggleBookmark(currentCard.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCard, isFlipped]);

  // Slideshow / Auto-play
  useEffect(() => {
    let timer: number | null = null;
    if (isAutoPlaying && filteredCards.length > 0) {
      timer = window.setInterval(() => {
        setIsFlipped(prev => {
          if (!prev) {
            return true; // flip to answer
          } else {
            handleNext(); // go to next card
            return false;
          }
        });
      }, 4000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying, filteredCards.length]);

  const masteredCount = allCards.filter(c => masteredIds.includes(c.id)).length;
  const masteryPercentage = allCards.length > 0 ? Math.round((masteredCount / allCards.length) * 100) : 0;

  const getSubjectColor = (subjectId: SubjectId) => {
    switch (subjectId) {
      case 'physics': return { bg: 'bg-blue-50 text-blue-700 border-blue-200', badge: 'bg-blue-600', ring: 'focus:ring-blue-500' };
      case 'chemistry': return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', badge: 'bg-emerald-600', ring: 'focus:ring-emerald-500' };
      case 'mathematics': return { bg: 'bg-amber-50 text-amber-700 border-amber-200', badge: 'bg-amber-600', ring: 'focus:ring-amber-500' };
      case 'biology': return { bg: 'bg-teal-50 text-teal-700 border-teal-200', badge: 'bg-teal-600', ring: 'focus:ring-teal-500' };
      default: return { bg: 'bg-slate-50 text-slate-700 border-slate-200', badge: 'bg-slate-600', ring: 'focus:ring-slate-500' };
    }
  };

  const getCategoryBadge = (category: FlashcardCategory) => {
    switch (category) {
      case 'formula': return { label: 'Formula', color: 'bg-purple-100 text-purple-800 border-purple-200' };
      case 'definition': return { label: 'Definition', color: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'concept': return { label: 'Core Concept', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'reaction': return { label: 'Reaction', color: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'trick': return { label: 'Exam Trick', color: 'bg-rose-100 text-rose-800 border-rose-200' };
      default: return { label: 'Theory', color: 'bg-slate-100 text-slate-800 border-slate-200' };
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-blue-200">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>ACTIVE RECALL & FORMULA MEMORY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Interactive Flashcards
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Flip through formulas, named reactions, definitions, and theorems. Built for rapid retention for Karnataka II PUC Board Exams, KCET, NEET, and JEE Main.
            </p>
          </div>

          {/* Quick Mastery Stat */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 shrink-0 min-w-[200px] flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Overall Mastery</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-white">{masteryPercentage}%</span>
                <span className="text-xs text-blue-200">({masteredCount}/{allCards.length})</span>
              </div>
              <div className="w-36 bg-white/20 rounded-full h-1.5 mt-2 overflow-hidden">
                <div 
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${masteryPercentage}%` }}
                />
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls Row */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
        
        {/* Subject Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedSubject === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Subjects ({allCards.length})
          </button>
          {SUBJECTS.map((sub) => {
            const isSel = selectedSubject === sub.id;
            const subCount = allCards.filter(c => c.subjectId === sub.id).length;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSel
                    ? `${sub.accentColor} text-white shadow-xs`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub.id === 'physics' && <Atom className="w-3.5 h-3.5" />}
                {sub.id === 'chemistry' && <FlaskConical className="w-3.5 h-3.5" />}
                {sub.id === 'mathematics' && <Calculator className="w-3.5 h-3.5" />}
                {sub.id === 'biology' && <Dna className="w-3.5 h-3.5" />}
                <span>{sub.name} ({subCount})</span>
              </button>
            );
          })}
        </div>

        {/* Second Filter Row: Chapter, Category, Status, Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
          {/* Chapter Selector */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Chapter
            </label>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Chapters ({availableChapters.length})</option>
              {availableChapters.map(ch => (
                <option key={ch.id} value={ch.id}>
                  Ch {ch.chapterNumber}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          {/* Category Selector */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Card Type
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Review Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Cards</option>
              <option value="review">⚠️ Needs Review ({reviewIds.length})</option>
              <option value="mastered">✅ Mastered ({masteredIds.length})</option>
              <option value="bookmarked">⭐ Bookmarked ({bookmarkedIds.length})</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              View Mode
            </label>
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setViewLayout('single')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewLayout === 'single'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Flip Mode</span>
              </button>
              <button
                onClick={() => setViewLayout('grid')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewLayout === 'grid'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid ({filteredCards.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Flashcard Interactive Area */}
      {filteredCards.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-lg font-bold text-slate-900">No Flashcards Match Filters</h3>
            <p className="text-xs text-slate-500">
              Try switching your subject, chapter, or review status filters above to view more cards.
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedSubject('all');
              setSelectedChapter('all');
              setSelectedCategory('all');
              setStatusFilter('all');
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : viewLayout === 'single' && currentCard ? (
        <div className="space-y-4">
          
          {/* Deck Navigation & Progress Header */}
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 px-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
              <span>·</span>
              <span className="capitalize">{currentCard.subjectId}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoPlaying(prev => !prev)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  isAutoPlaying
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="Auto-play slideshow mode"
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoPlaying ? 'Pause' : 'Auto Play'}</span>
              </button>

              <button
                onClick={handleShuffle}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                title="Shuffle cards (S)"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle</span>
              </button>
            </div>
          </div>

          {/* Interactive Card Canvas (Perspective 3D Flip) */}
          <div className="relative w-full h-[400px] sm:h-[420px] select-none perspective-1000">
            <div
              onClick={toggleFlip}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFlip();
                }
              }}
              style={{
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="w-full h-full cursor-pointer relative rounded-3xl preserve-3d shadow-md hover:shadow-xl active:scale-[0.99] touch-manipulation focus:outline-none"
            >
              
              {/* ================= CARD FRONT ================= */}
              <div 
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)'
                }}
                className="absolute inset-0 backface-hidden bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none opacity-50"></div>
                
                {/* Front Top Meta */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider ${getSubjectColor(currentCard.subjectId).bg}`}>
                      {currentCard.subjectId}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${getCategoryBadge(currentCard.category).color}`}>
                      {getCategoryBadge(currentCard.category).label}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => toggleBookmark(currentCard.id, e)}
                      className={`p-2 rounded-xl transition-colors ${
                        bookmarkedIds.includes(currentCard.id)
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-slate-100 text-slate-400 hover:text-slate-600'
                      }`}
                      title="Bookmark card"
                    >
                      {bookmarkedIds.includes(currentCard.id) ? (
                        <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Front Center Question / Prompt */}
                <div className="my-auto space-y-3 text-center px-4 relative z-10">
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                    {currentCard.chapterTitle} · {currentCard.topic}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {currentCard.front.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto">
                    {currentCard.front.prompt}
                  </p>

                  {/* Hint Toggle */}
                  {currentCard.front.hint && (
                    <div className="pt-2">
                      {showHint ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{currentCard.front.hint}</span>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowHint(true);
                          }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Show Hint</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Front Bottom Instruction */}
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3 relative z-10">
                  <span className="flex items-center gap-1 text-[11px]">
                    <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] font-mono text-slate-600">Space</kbd> or Click to flip
                  </span>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
                    <span>Reveal Answer</span>
                    <RotateCw className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* ================= CARD BACK ================= */}
              <div 
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
                className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 text-white border-2 border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
              >
                
                {/* Back Top Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                      {currentCard.front.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Answer & Explanation</span>
                </div>

                {/* Back Center Content */}
                <div className="my-auto space-y-4 py-2">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                    {currentCard.back.mainText}
                  </p>

                  {/* Formula Box if available */}
                  {currentCard.back.formula && (
                    <div className="bg-slate-950/80 border border-blue-500/30 rounded-2xl p-4 font-mono text-xs sm:text-sm text-blue-300 shadow-inner whitespace-pre-line leading-relaxed">
                      {currentCard.back.formula}
                    </div>
                  )}

                  {/* Key Points */}
                  {currentCard.back.keyPoints && currentCard.back.keyPoints.length > 0 && (
                    <div className="space-y-1.5 text-xs text-slate-300">
                      {currentCard.back.keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Exam Tip */}
                  {currentCard.back.examTip && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300">Pro Tip / Trap Alert: </span>
                        <span>{currentCard.back.examTip}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Back Bottom Instruction */}
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3">
                  <span className="text-[11px] text-slate-400">Click card to flip back</span>
                  <span className="text-[11px] text-blue-300 font-semibold">Self-Evaluate Below</span>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Rating & Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            
            {/* Prev / Next Nav Buttons */}
            <div className="flex items-center gap-2 order-2 sm:order-1 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
                title="Previous card (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={toggleFlip}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-black rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
                title="Tap anywhere on card or click here to flip (Space)"
              >
                <RotateCw className="w-3.5 h-3.5 text-blue-600" />
                <span>{isFlipped ? 'Show Question' : 'Flip to Answer'}</span>
              </button>

              <button
                onClick={handleNext}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
                title="Next card (Right Arrow)"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Self-Rating Mastery Buttons */}
            <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto">
              <button
                onClick={() => handleMarkReview(currentCard.id)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  reviewIds.includes(currentCard.id)
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200'
                }`}
                title="Mark for review (Press 1)"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Needs Review (1)</span>
              </button>

              <button
                onClick={() => handleMarkMastered(currentCard.id)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  masteredIds.includes(currentCard.id)
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}
                title="Mark as mastered (Press 2)"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Got It! (2)</span>
              </button>
            </div>

          </div>

          {/* Quick Keyboard Shortcuts Hint */}
          <div className="text-center text-[11px] text-slate-400 py-1 hidden sm:block">
            Keyboard Shortcuts: <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">Space</kbd> Flip · <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">←</kbd> Prev · <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">→</kbd> Next · <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">1</kbd> Review · <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">2</kbd> Got It
          </div>

        </div>
      ) : (
        /* ================= GRID VIEW ================= */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCards.map((card, idx) => {
            const isMastered = masteredIds.includes(card.id);
            const isReview = reviewIds.includes(card.id);
            const isBookmarked = bookmarkedIds.includes(card.id);

            return (
              <div
                key={card.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setViewLayout('single');
                  setIsFlipped(false);
                }}
                className={`bg-white rounded-2xl p-5 border cursor-pointer transition-all hover:shadow-md hover:border-blue-400 flex flex-col justify-between ${
                  isMastered 
                    ? 'border-emerald-300 bg-emerald-50/20' 
                    : isReview 
                    ? 'border-amber-300 bg-amber-50/20' 
                    : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getSubjectColor(card.subjectId).bg}`}>
                      {card.subjectId}
                    </span>
                    <div className="flex items-center gap-1">
                      {isMastered && (
                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">
                          <Check className="w-3 h-3" /> Mastered
                        </span>
                      )}
                      {isReview && (
                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">
                          <AlertCircle className="w-3 h-3" /> Review
                        </span>
                      )}
                      {isBookmarked && (
                        <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-900 line-clamp-1">
                      {card.front.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {card.front.prompt}
                    </p>
                  </div>

                  {card.back.formula && (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono text-[11px] text-slate-700 line-clamp-2">
                      {card.back.formula}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{card.chapterTitle}</span>
                  <span className="text-blue-600 font-semibold group-hover:underline">Study Card →</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Reset Progress Modal / Action */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
        <span>Cards auto-saved to browser memory. No internet required.</span>
        <button
          onClick={() => {
            if (window.confirm('Reset all flashcard progress (mastered and review tags)?')) {
              setMasteredIds([]);
              setReviewIds([]);
              setBookmarkedIds([]);
            }
          }}
          className="flex items-center gap-1 text-slate-400 hover:text-rose-600 transition-colors"
        >
          <RefreshCcw className="w-3 h-3" />
          <span>Reset Progress</span>
        </button>
      </div>

    </div>
  );
};
