import React from 'react';
import { 
  BookOpen, 
  Search, 
  Moon, 
  Sun, 
  Sparkles, 
  ShieldCheck, 
  Timer
} from 'lucide-react';
import { ThemeMode, ViewTab } from '../types';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  theme: ThemeMode;
  onToggleTheme: (mode: ThemeMode) => void;
  onOpenSearch: () => void;
  onOpenFocus: () => void;
  isOnline?: boolean;
  cachedQuestionsCount?: number;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  theme,
  onToggleTheme,
  onOpenSearch,
  onOpenFocus
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  KCET <span className="text-blue-700">CORNER</span>
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-800">
                  PCMB PORTAL
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium truncate max-w-[200px] sm:max-w-xs">
                Karnataka Board & KCET Practice Corner
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
            {[
              { id: 'home', label: 'Dashboard' },
              { id: 'subjects', label: 'Subjects' },
              { id: 'practice', label: 'Practice MCQs' },
              { id: 'flashcards', label: 'Flashcards' },
              { id: 'notes', label: 'Short Notes' },
              { id: 'planner', label: 'Study Planner' },
              { id: 'progress', label: 'Analytics' },
              { id: 'admin', label: 'Admin Portal' },
            ].map(tab => {
              const active = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id as ViewTab)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    active 
                      ? 'bg-blue-50 text-blue-700 font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              title="Search questions, topics or formulas"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search</span>
            </button>

            {/* Focus Study Mode Button */}
            <button
              onClick={onOpenFocus}
              title="Open Focus Timer"
              className="p-2 text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
            >
              <Timer className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">Focus</span>
            </button>

            {/* Theme Toggle (Cycle: Light -> Sepia Eye-Comfort -> Dark) */}
            <button
              onClick={() => {
                const nextMode: ThemeMode = theme === 'light' ? 'sepia' : theme === 'sepia' ? 'dark' : 'light';
                onToggleTheme(nextMode);
              }}
              title={`Current: ${theme.toUpperCase()} mode. Click to cycle.`}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
            >
              {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
              {theme === 'sepia' && <Sparkles className="w-4 h-4 text-amber-700" />}
              {theme === 'dark' && <Moon className="w-4 h-4 text-blue-400" />}
              <span className="text-[10px] uppercase font-bold tracking-wider hidden md:inline text-slate-500">
                {theme === 'sepia' ? 'Eye-Care' : theme}
              </span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
