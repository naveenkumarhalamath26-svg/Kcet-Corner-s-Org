import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Play, 
  ShieldCheck, 
  Calendar,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { Question, QuizMode, SubjectId } from '../types';
import { SUBJECTS } from '../data/chaptersData';

interface MockTestModalProps {
  allQuestions: Question[];
  onStartQuiz: (options: {
    mode: QuizMode;
    subjectId?: SubjectId;
    questionCount: number;
    isTimed: boolean;
    instantFeedback: boolean;
    title: string;
  }) => void;
}

interface TestItem {
  id: string;
  title: string;
  subjectId: SubjectId;
  year: number;
  type: 'Annual Board Exam' | 'Supplementary Exam' | 'Official Model Paper' | 'Preparatory Exam';
  questionCount: number;
  durationMinutes: number;
  description: string;
}

export const MockTestModal: React.FC<MockTestModalProps> = ({
  allQuestions,
  onStartQuiz
}) => {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<SubjectId | 'all'>('all');

  const testCatalog: TestItem[] = [
    {
      id: 'test-1',
      title: 'II PUC Physics Official Model Paper 2024',
      subjectId: 'physics',
      year: 2024,
      type: 'Official Model Paper',
      questionCount: 15,
      durationMinutes: 25,
      description: 'Official KSEAB Karnataka Board Model Question Paper. Covers Electrostatics, Current, Magnetism, Optics & Semiconductors.'
    },
    {
      id: 'test-2',
      title: 'II PUC Chemistry Annual Examination 2023',
      subjectId: 'chemistry',
      year: 2023,
      type: 'Annual Board Exam',
      questionCount: 15,
      durationMinutes: 25,
      description: 'Authentic 2023 March Board Examination Part-A Questions with complete solutions.'
    },
    {
      id: 'test-3',
      title: 'II PUC Mathematics Board Speed Simulation 2024',
      subjectId: 'mathematics',
      year: 2024,
      type: 'Official Model Paper',
      questionCount: 15,
      durationMinutes: 30,
      description: 'Timed drill on Relations, Inverse Trig, Matrices, Determinants, Calculus and Vectors.'
    },
    {
      id: 'test-4',
      title: 'II PUC Biology Annual Examination 2024',
      subjectId: 'biology',
      year: 2024,
      type: 'Annual Board Exam',
      questionCount: 15,
      durationMinutes: 20,
      description: 'Latest 2024 Board Exam Part A MCQs with diagrams and NCERT references.'
    },
    {
      id: 'test-5',
      title: 'II PUC Physics Annual Board Exam 2023',
      subjectId: 'physics',
      year: 2023,
      type: 'Annual Board Exam',
      questionCount: 15,
      durationMinutes: 25,
      description: 'Official March 2023 Board Examination Questions with step-by-step scoring key.'
    },
    {
      id: 'test-6',
      title: 'Full PCMB Combined Rapid Test',
      subjectId: 'physics', // representative
      year: 2024,
      type: 'Official Model Paper',
      questionCount: 20,
      durationMinutes: 30,
      description: 'Combined 20-question rapid drill across Physics, Chemistry, Mathematics and Biology.'
    }
  ];

  const filteredTests = testCatalog.filter(t => 
    selectedSubjectFilter === 'all' || t.subjectId === selectedSubjectFilter
  );

  const handleLaunchTest = (test: TestItem) => {
    onStartQuiz({
      mode: 'previous_paper',
      subjectId: test.subjectId,
      questionCount: test.questionCount,
      isTimed: true,
      instantFeedback: false,
      title: test.title
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 mb-1">
            <Award className="w-4 h-4" />
            <span>KSEAB BOARD SIMULATION LAB</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Official Model Papers & Previous Examination Papers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            Simulate real Karnataka Pre-University board exams under strict countdown timers. Every question preserves the official wording and marks scheme.
          </p>
        </div>

        {/* Exam rules callout */}
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1 shrink-0 max-w-xs">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Exam Protocol</span>
          </div>
          <p className="text-[11px] text-slate-500">
            1 mark per question · Timed examination · Instant evaluation & detailed model answers upon submission.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedSubjectFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
            selectedSubjectFilter === 'all'
              ? 'bg-blue-700 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Subjects ({testCatalog.length})
        </button>
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setSelectedSubjectFilter(sub.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
              selectedSubjectFilter === sub.id
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Test List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTests.map((test) => {
          const subMeta = SUBJECTS.find(s => s.id === test.subjectId);
          return (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${subMeta?.bgColor} ${subMeta?.color}`}>
                    {subMeta?.name || 'General'}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {test.year} · {test.type}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {test.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    {test.questionCount} Questions
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {test.durationMinutes} Mins
                  </span>
                </div>

                <button
                  onClick={() => handleLaunchTest(test)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start Test</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
