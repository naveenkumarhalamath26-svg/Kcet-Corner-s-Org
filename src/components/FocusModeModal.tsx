import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Timer, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { playTimerCompletionChime, startAmbientNoise, stopAmbientNoise } from '../utils/audio';

interface FocusModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FocusModeModal: React.FC<FocusModeModalProps> = ({ isOpen, onClose }) => {
  const [selectedDuration, setSelectedDuration] = useState<number>(25 * 60); // 25 mins
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundType, setSoundType] = useState<'off' | 'whitenoise' | 'binaural'>('off');

  useEffect(() => {
    let interval: number | null = null;
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            playTimerCompletionChime();
            stopAmbientNoise();
            setSoundType('off');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  // Audio control
  useEffect(() => {
    if (!isRunning || soundType === 'off') {
      stopAmbientNoise();
    } else {
      startAmbientNoise(soundType);
    }

    return () => {
      stopAmbientNoise();
    };
  }, [soundType, isRunning]);

  if (!isOpen) return null;

  const handleSelectPreset = (mins: number) => {
    const sec = mins * 60;
    setSelectedDuration(sec);
    setTimeLeft(sec);
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(selectedDuration);
    stopAmbientNoise();
    setSoundType('off');
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl text-center space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => {
            stopAmbientNoise();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
            <Timer className="w-3.5 h-3.5" />
            <span>FOCUS & STUDY MODE</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Zero-Distraction Study Clock</h2>
          <p className="text-xs text-slate-400">Deep concentration timer for solving II PUC mock papers</p>
        </div>

        {/* Duration Selectors */}
        <div className="flex items-center justify-center gap-2">
          {[
            { label: '15m Sprint', mins: 15 },
            { label: '25m Pomodoro', mins: 25 },
            { label: '45m Deep Work', mins: 45 },
            { label: '80m KCET Test', mins: 80 }
          ].map((item) => (
            <button
              key={item.mins}
              onClick={() => handleSelectPreset(item.mins)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedDuration === item.mins * 60
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Clock Digits */}
        <div className="py-4">
          <div className="font-mono text-6xl sm:text-7xl font-black text-blue-400 tracking-wider">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          {timeLeft === 0 && (
            <p className="text-emerald-400 font-bold text-sm mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Focus session complete! Take a 5-minute break.
            </p>
          )}
        </div>

        {/* Ambient Sound Toggles */}
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Offline Ambient Sound (Zero Permissions)
          </span>
          <div className="flex items-center justify-center gap-2">
            {[
              { id: 'off', label: 'Silence', icon: VolumeX },
              { id: 'whitenoise', label: 'Rain / Brown Noise', icon: Volume2 },
              { id: 'binaural', label: '10Hz Alpha Waves', icon: Headphones }
            ].map((snd) => {
              const Icon = snd.icon;
              return (
                <button
                  key={snd.id}
                  onClick={() => setSoundType(snd.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    soundType === snd.id
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-700/60 text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{snd.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${
              isRunning 
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' 
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Start Focus</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition-colors"
            title="Reset Timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
