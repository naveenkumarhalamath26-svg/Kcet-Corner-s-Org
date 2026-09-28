import React from 'react';
import { Home, Compass, Award, BookOpen, BarChart3, CheckSquare, User } from 'lucide-react';
import { ViewTab } from '../types';

interface BottomNavProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  onOpenProfile?: () => void;
  studentInitial?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ 
  currentTab, 
  onSelectTab, 
  onOpenProfile, 
  studentInitial = 'S' 
}) => {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'practice', label: 'Practice', icon: Compass },
    { id: 'notes', label: 'Notes', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'planner', label: 'Planner', icon: CheckSquare },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1 safe-bottom shadow-lg">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {items.map(item => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id as ViewTab)}
              className={`flex flex-col items-center justify-center py-1.5 px-1.5 rounded-xl transition-all relative ${
                isActive ? 'text-blue-700 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0.5 w-1 h-1 bg-blue-700 rounded-full"></span>
              )}
            </button>
          );
        })}

        {/* Student Login Down-Side Corner Icon in Mobile Bar */}
        {onOpenProfile && (
          <button
            onClick={onOpenProfile}
            aria-label="Student Login & Profile"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-blue-800 hover:bg-blue-50 transition-all group"
          >
            <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
              {studentInitial}
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-bold text-blue-700">
              Student
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

