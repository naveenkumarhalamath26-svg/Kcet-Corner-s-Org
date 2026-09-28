import React, { useState } from 'react';
import { Download, Check, X, Smartphone, Share, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'compact' | 'full' | 'micro';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'compact', className = '' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already running as an installed standalone app
  if (isInstalled) {
    if (variant === 'micro') {
      return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200/80 ${className}`}>
          <Check className="w-2.5 h-2.5 text-emerald-600" />
          <span>Offline App Ready</span>
        </span>
      );
    }
    return (
      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/20 ${className}`}>
        <Check className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Offline App Active</span>
      </div>
    );
  }

  // Handle Chrome / Edge / Android install prompt
  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 3000);
      }
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      setShowIOSModal(true);
    }
  };

  const getButtonStyles = () => {
    if (variant === 'micro') {
      return 'inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-[10px] sm:text-[11px] font-medium rounded-full border border-slate-200 hover:border-blue-300 transition-all cursor-pointer shadow-2xs group';
    }
    if (variant === 'full') {
      return 'px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1.5';
    }
    return 'px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1.5';
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        aria-label="Install app for offline practice"
        title="Install app to your home screen for full offline practice without internet"
        className={`${getButtonStyles()} ${className}`}
      >
        {installSuccess ? (
          <>
            <Check className={`${variant === 'micro' ? 'w-2.5 h-2.5 text-emerald-600' : 'w-3.5 h-3.5 text-emerald-600'}`} />
            <span>Installed!</span>
          </>
        ) : (
          <>
            <Download className={`${variant === 'micro' ? 'w-2.5 h-2.5 text-blue-600 group-hover:translate-y-0.5 transition-transform' : 'w-3.5 h-3.5'}`} />
            <span className={variant === 'micro' ? 'font-semibold tracking-tight' : ''}>Install Offline App</span>
          </>
        )}
      </button>

      {/* iOS / General Manual Install Modal Guide */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    Install for 100% Offline Practice
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Works anytime, even with airplane mode or no signal
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900">
                To install this app on your phone or tablet:
              </p>
              
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  Tap the browser menu / <strong className="inline-flex items-center gap-1 text-blue-700"><Share className="w-3 h-3" /> Share</strong> button in Safari or Chrome.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  Scroll down and tap <strong className="inline-flex items-center gap-1 text-slate-900"><PlusSquare className="w-3 h-3 text-blue-600" /> Add to Home Screen</strong> or <strong>Install App</strong>.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  Open from your home screen icon — all questions, formulas, and mock drills will load instantly offline!
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
            >
              Got It, Continue Studying
            </button>
          </div>
        </div>
      )}
    </>
  );
};
