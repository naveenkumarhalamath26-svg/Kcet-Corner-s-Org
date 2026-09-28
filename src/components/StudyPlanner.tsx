import React, { useState } from 'react';
import { 
  CheckSquare, 
  Calendar, 
  Clock, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles, 
  Flame, 
  BookOpen, 
  ShieldCheck,
  Tag
} from 'lucide-react';
import { StudyTodo, SubjectId } from '../types';
import { SUBJECTS } from '../data/chaptersData';
import { getUpcomingExams } from '../utils/storage';

interface StudyPlannerProps {
  todos: StudyTodo[];
  onUpdateTodos: (todos: StudyTodo[]) => void;
}

export const StudyPlanner: React.FC<StudyPlannerProps> = ({
  todos,
  onUpdateTodos
}) => {
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskSubject, setNewTaskSubject] = useState<SubjectId | 'general'>('physics');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('high');
  const [filterSubject, setFilterSubject] = useState<string>('all');

  // Synchronized Configurable Upcoming Exam
  const upcomingExams = getUpcomingExams();
  const primaryExam = upcomingExams.find(e => e.isPrimary) || upcomingExams[0];
  const targetExamDate = primaryExam ? new Date(primaryExam.examDate) : new Date('2027-03-01T09:00:00');
  const now = new Date();
  const diffTime = targetExamDate.getTime() - now.getTime();
  const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const handleToggleTodo = (id: string) => {
    const updated = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    onUpdateTodos(updated);
  };

  const handleDeleteTodo = (id: string) => {
    const updated = todos.filter(t => t.id !== id);
    onUpdateTodos(updated);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTodo: StudyTodo = {
      id: 'todo-' + Date.now(),
      task: newTaskText.trim(),
      subject: newTaskSubject,
      priority: newTaskPriority,
      completed: false,
      createdAt: Date.now()
    };

    onUpdateTodos([newTodo, ...todos]);
    setNewTaskText('');
  };

  const filteredTodos = todos.filter(t => 
    filterSubject === 'all' || t.subject === filterSubject
  );

  const completedCount = todos.filter(t => t.completed).length;
  const progressPercentage = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  return (
    <div className="space-y-6">
      
      {/* Countdown Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-xs font-bold text-blue-200">
              <Calendar className="w-3.5 h-3.5" />
              <span className="uppercase">{primaryExam ? primaryExam.title : 'KSEAB II PUC BOARD EXAM SCHEDULE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Study Planner & Mission Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Plan your daily chapters, keep track of tricky formulas, and maintain a consistent revision routine ahead of {primaryExam?.title || 'the examinations'}.
            </p>
          </div>

          {/* Big Days Remaining Pill */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center shrink-0 min-w-[150px]">
            <span className="text-[11px] text-blue-200 font-bold uppercase tracking-wider block truncate max-w-[150px]">
              {primaryExam?.title.split('(')[0] || 'Target Exam'}
            </span>
            <div className="text-4xl font-black text-amber-400 py-1">
              {daysLeft}
            </div>
            <span className="text-xs text-slate-200 font-medium">Days Remaining</span>
          </div>
        </div>
      </div>

      {/* Progress & Add Task Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Form: Add To-Do (1 col) */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Plus className="w-4 h-4 text-blue-700" />
            <span>Add Study Goal</span>
          </h3>

          <form onSubmit={handleAddTodo} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Target Task / Goal
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Practice 20 MCQs on Ray Optics lens maker formula..."
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Subject</label>
                <select
                  value={newTaskSubject}
                  onChange={(e) => setNewTaskSubject(e.target.value as any)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none"
                >
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="biology">Biology</option>
                  <option value="general">General Revision</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Priority</label>
                <select
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value as any)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none"
                >
                  <option value="high">High Priority</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              Add Task to Plan
            </button>
          </form>

          {/* Progress Mini Bar */}
          <div className="pt-3 border-t border-slate-100 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Completed Goals</span>
              <span className="font-bold text-slate-900">{completedCount} of {todos.length}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Tasks List (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          
          {/* Filter Pills */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setFilterSubject('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  filterSubject === 'all' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                All ({todos.length})
              </button>
              {SUBJECTS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setFilterSubject(s.id)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    filterSubject === s.id ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {s.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Tasks Container */}
          <div className="space-y-2">
            {filteredTodos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className={`bg-white rounded-2xl p-4 border transition-all flex items-start justify-between gap-3 ${
                    todo.completed ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => handleToggleTodo(todo.id)}
                      className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center transition-colors ${
                        todo.completed 
                          ? 'bg-emerald-600 border-emerald-600 text-white' 
                          : 'border-slate-300 hover:border-blue-600 bg-white'
                      }`}
                    >
                      {todo.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>

                    <div>
                      <p className={`text-xs sm:text-sm font-semibold leading-snug ${
                        todo.completed ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}>
                        {todo.task}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                        <span className="uppercase font-bold text-blue-700">
                          {todo.subject}
                        </span>
                        <span>·</span>
                        <span className={`font-semibold ${
                          todo.priority === 'high' ? 'text-rose-600' : todo.priority === 'medium' ? 'text-amber-600' : 'text-slate-500'
                        }`}>
                          {todo.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="text-slate-400 hover:text-rose-600 p-1 rounded-lg transition-colors"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
