import React from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';
import { useOnlineStatus } from '../utils/usePWAInstall';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <aside
      aria-label="Offline Mode Notification"
      className="fixed bottom-16 sm:bottom-4 left-4 right-4 sm:right-auto z-50 flex items-center justify-between sm:justify-start gap-2.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-amber-500/40 px-3.5 py-2 text-xs font-semibold text-white shadow-xl animate-bounce-subtle"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
        <div>
          <span className="text-amber-300 font-bold">Offline Mode Active</span>
          <span className="hidden sm:inline text-slate-300 font-normal ml-1">
            — All PCMB MCQs, formulas & flashcards work offline without internet.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
        <CheckCircle2 className="w-3 h-3" />
        <span>Cached</span>
      </div>
    </aside>
  );
};
