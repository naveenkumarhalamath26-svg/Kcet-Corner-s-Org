import React, { useState } from 'react';
import { X, User, School, MapPin, Award, Check, Sparkles, BookOpen } from 'lucide-react';
import { StudentProfile } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSaveProfile: (profile: StudentProfile) => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}) => {
  const [name, setName] = useState(profile.name);
  const [college, setCollege] = useState(profile.college);
  const [district, setDistrict] = useState(profile.district);
  const [stream, setStream] = useState(profile.stream);
  const [targetExam, setTargetExam] = useState(profile.targetExam);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile({
      ...profile,
      name: name.trim() || 'PUC Student',
      college: college.trim() || 'Karnataka Pre-University College',
      district: district.trim() || 'Bengaluru',
      stream,
      targetExam
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const karnatakaDistricts = [
    'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mangaluru (Dakshina Kannada)',
    'Hubballi-Dharwad', 'Belagavi', 'Kalaburagi', 'Shivamogga', 'Tumakuru',
    'Ballari', 'Udupi', 'Hassan', 'Davanagere', 'Kolar', 'Mandya', 'Bagalkote',
    'Chikkamagaluru', 'Raichur', 'Bidar', 'Vijayapura', 'Chitradurga', 'Other'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 space-y-5 border border-slate-200 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg">Student Login & Profile</h3>
            <p className="text-xs text-slate-500">Karnataka II PUC Academic Records</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Student Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Ananya Rao / Rahul Patil"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Pre-University College Name</label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g. National PU College, Jayanagar / MES PU College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full p-2.5 pl-8 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              <School className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Science Stream</label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none"
              >
                <option value="PCMB">PCMB (Biology)</option>
                <option value="PCMC">PCMC (Computer Sci)</option>
                <option value="PCME">PCME (Electronics)</option>
                <option value="Other">Other II PUC</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">District</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none"
              >
                {karnatakaDistricts.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Target Examination</label>
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value as any)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none"
            >
              <option value="Both Board & KCET">Both II PUC Board & KCET</option>
              <option value="II PUC Board Exam">II PUC Board Exam Only</option>
              <option value="KCET Entrance">KCET Entrance Focus</option>
              <option value="NEET">NEET & Board Combo</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                  <span>Profile Saved Successfully</span>
                </>
              ) : (
                <span>Save Student Profile</span>
              )}
            </button>
          </div>
        </form>

        {/* Micro-label below student login page for offline access */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Offline Exam Mode</span>
          </div>
          <PWAInstallButton variant="micro" />
        </div>

      </div>
    </div>
  );
};
