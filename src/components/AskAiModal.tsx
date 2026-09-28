import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Lightbulb, 
  BookOpen, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  RefreshCw, 
  MessageSquare,
  Bot
} from 'lucide-react';
import { Question } from '../types';

interface AskAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  subjectName?: string;
  chapterTitle?: string;
}

export const AskAiModal: React.FC<AskAiModalProps> = ({
  isOpen,
  onClose,
  question,
  subjectName,
  chapterTitle
}) => {
  const [activeTab, setActiveTab] = useState<'hint' | 'explanation' | 'doubt'>('hint');
  const [studentDoubt, setStudentDoubt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Auto-request hint when opened on a new question if not already loaded
  useEffect(() => {
    if (isOpen) {
      setResponse('');
      setError(null);
      setStudentDoubt('');
      handleRequestAI('hint');
    }
  }, [isOpen, question.id]);

  if (!isOpen) return null;

  const handleRequestAI = async (type: 'hint' | 'explanation' | 'doubt', customDoubt?: string) => {
    setActiveTab(type);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.question,
          options: question.options,
          subject: subjectName || question.subject,
          chapter: chapterTitle || question.chapter,
          type,
          studentDoubt: customDoubt || (type === 'doubt' ? studentDoubt : undefined)
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      if (data.text) {
        setResponse(data.text);
      } else {
        throw new Error(data.error || 'Empty response from AI');
      }
    } catch (err: any) {
      console.warn('API call failed, switching to local question context fallback:', err);
      // Fallback using rich question metadata so the student is never stuck
      if (type === 'hint') {
        const hintText = question.formulaNote 
          ? `💡 Key Formula / Rule to apply: ${question.formulaNote}\n\nNotice the relation between the variables given in the question. Eliminate any options that violate physical or chemical dimensions or conservation laws.`
          : `💡 Topic: ${question.topic}\n\nThink about the fundamental definitions in this chapter. What physical principle governs ${question.topic}? Check which option adheres to standard NCERT/KSEAB boundary conditions.`;
        setResponse(hintText);
      } else if (type === 'explanation') {
        const explText = `📖 Official Step-by-Step Solution:\n\n${question.explanation}\n\n` + 
          (question.formulaNote ? `📌 Formula Note: ${question.formulaNote}\n` : '') +
          `\n✅ Correct Option: ${Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}`;
        setResponse(explText);
      } else {
        setResponse(`Regarding your query: In ${question.topic}, remember that ${question.explanation.slice(0, 160)}... Review the formula ${question.formulaNote || 'in NCERT'}.`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-sm sm:text-base tracking-tight">Ask AI Tutor</h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/30 text-blue-200 border border-blue-400/20">
                  Gemini 3.8 Flash
                </span>
              </div>
              <p className="text-[11px] text-slate-300 truncate max-w-xs sm:max-w-md">
                {subjectName ? `${subjectName} · ` : ''}{question.topic}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Question Snapshot Banner */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs text-slate-700">
          <span className="font-bold text-slate-900">Current Question: </span>
          <span className="line-clamp-2">{question.question}</span>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-1.5 p-3 bg-slate-100 border-b border-slate-200">
          <button
            onClick={() => handleRequestAI('hint')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'hint'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Need a Hint</span>
          </button>

          <button
            onClick={() => handleRequestAI('explanation')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'explanation'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
            <span>Full Explanation</span>
          </button>

          <button
            onClick={() => setActiveTab('doubt')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'doubt'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
            <span>Ask a Doubt</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* Custom Doubt Input (only visible on 'doubt' tab) */}
          {activeTab === 'doubt' && (
            <div className="space-y-2 pb-2 border-b border-slate-100">
              <label className="text-xs font-bold text-slate-700">
                What specifically is confusing about this question?
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={studentDoubt}
                  onChange={(e) => setStudentDoubt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && studentDoubt.trim()) {
                      handleRequestAI('doubt', studentDoubt.trim());
                    }
                  }}
                  placeholder="e.g., Why do we use kinetic friction instead of static?"
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  disabled={!studentDoubt.trim() || loading}
                  onClick={() => handleRequestAI('doubt', studentDoubt.trim())}
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-xs transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask</span>
                </button>
              </div>
            </div>
          )}

          {/* Response Box */}
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-3 text-center">
              <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-slate-500 font-medium animate-pulse">
                Consulting Gemini 3.8 Flash for {activeTab === 'hint' ? 'a helpful hint' : activeTab === 'explanation' ? 'step-by-step breakdown' : 'an answer'}...
              </p>
            </div>
          ) : error ? (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Error retrieving response</p>
                <p className="mt-0.5">{error}</p>
              </div>
            </div>
          ) : response ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-600 uppercase tracking-wider text-[10px]">
                  {activeTab === 'hint' ? '💡 Guided Hint' : activeTab === 'explanation' ? '📖 Step-by-Step Breakdown' : '💬 AI Tutor Response'}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-sans">
                {response}
              </div>
            </div>
          ) : null}

        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-[11px] text-slate-400">
            Powered by Gemini API · Strict II PUC/KCET syllabus guidance
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRequestAI(activeTab)}
              disabled={loading}
              className="flex items-center gap-1 px-3 py-1.5 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl font-semibold shadow-xs text-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Regenerate</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold shadow-xs text-xs"
            >
              Back to Quiz
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
