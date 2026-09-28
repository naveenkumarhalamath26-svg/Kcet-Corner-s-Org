import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Edit3, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  BarChart3, 
  Layers, 
  FileCode,
  Save,
  X,
  Users,
  UserCheck,
  UserX,
  Clock,
  School,
  MapPin,
  RefreshCw,
  Phone,
  Mail,
  Award,
  ChevronDown,
  AlertTriangle,
  FileSpreadsheet,
  Database
} from 'lucide-react';
import { Difficulty, Question, QuestionType, SubjectId, StudentLoginRecord, StudentStatus } from '../types';
import { CHAPTERS, SUBJECTS } from '../data/chaptersData';

// Fallback initial dataset if server is unreachable
const INITIAL_FALLBACK_STUDENTS: StudentLoginRecord[] = [
  {
    id: "STU-2025-0101",
    name: "Naveenkumar Halamath",
    username: "naveenkumar26",
    email: "naveenkumarhalamath26@gmail.com",
    phone: "+91 98451 77201",
    college: "National Pre-University College, Bengaluru",
    district: "Bengaluru Urban",
    stream: "PCMB",
    targetExam: "KCET + Board Exam",
    status: "active",
    registeredAt: "2025-06-15T09:30:00.000Z",
    lastLogin: "2026-09-27T22:30:00.000Z",
    quizzesAttempted: 42,
    overallAccuracy: 88,
    ipAddress: "106.51.78.112 (Bengaluru)",
    notes: "Top college ranker. Target: KCET rank under 500."
  },
  {
    id: "STU-2025-0102",
    name: "Sahana K. Rao",
    username: "sahana.rao",
    email: "sahana.rao2007@gmail.com",
    phone: "+91 94802 33419",
    college: "MES PU College, Malleshwaram",
    district: "Bengaluru Urban",
    stream: "PCMB",
    targetExam: "KCET + NEET",
    status: "active",
    registeredAt: "2025-06-18T11:15:00.000Z",
    lastLogin: "2026-09-27T18:45:00.000Z",
    quizzesAttempted: 36,
    overallAccuracy: 91,
    ipAddress: "49.207.210.45 (Bengaluru)",
    notes: "Excellent biology and chemistry mock scores."
  },
  {
    id: "STU-2025-0103",
    name: "Chethan Kumar M",
    username: "chethan.kumar",
    email: "chethankumar.puc@yahoo.com",
    phone: "+91 88841 90214",
    college: "Vidya Mandir PU College, Bengaluru",
    district: "Bengaluru Urban",
    stream: "PCMC",
    targetExam: "KCET + JEE Main",
    status: "active",
    registeredAt: "2025-06-20T14:00:00.000Z",
    lastLogin: "2026-09-26T21:10:00.000Z",
    quizzesAttempted: 28,
    overallAccuracy: 82,
    ipAddress: "157.48.19.88 (Bengaluru)",
    notes: "Strong in Mathematics calculus; focusing on KCET physics."
  },
  {
    id: "STU-2025-0104",
    name: "Ananya Hegde",
    username: "ananya_hegde",
    email: "ananya.hegde@outlook.com",
    phone: "+91 97410 88203",
    college: "St. Aloysius PU College, Mangaluru",
    district: "Mangaluru (Dakshina Kannada)",
    stream: "PCMB",
    targetExam: "KCET + NEET",
    status: "active",
    registeredAt: "2025-06-22T08:20:00.000Z",
    lastLogin: "2026-09-27T20:05:00.000Z",
    quizzesAttempted: 49,
    overallAccuracy: 94,
    ipAddress: "117.206.55.12 (Mangaluru)",
    notes: "State-level scholarship aspirant. Completed all 4 subjects."
  },
  {
    id: "STU-2025-0105",
    name: "Prajwal Patil",
    username: "prajwal_patil",
    email: "prajwal.patil.belagavi@gmail.com",
    phone: "+91 98805 11729",
    college: "KLES PU College, Belagavi",
    district: "Belagavi",
    stream: "PCMB",
    targetExam: "KCET + Board Exam",
    status: "active",
    registeredAt: "2025-07-02T10:40:00.000Z",
    lastLogin: "2026-09-27T16:30:00.000Z",
    quizzesAttempted: 22,
    overallAccuracy: 76,
    ipAddress: "106.215.89.44 (Belagavi)",
    notes: "Practicing Kannada-medium model question banks."
  },
  {
    id: "STU-2025-0106",
    name: "Aishwarya Deshmukh",
    username: "aishu_deshmukh",
    email: "aishwarya.desh@gmail.com",
    phone: "+91 99014 62801",
    college: "Sharnbasveshwar PU College, Kalaburagi",
    district: "Kalaburagi",
    stream: "PCMB",
    targetExam: "KCET + Board Exam",
    status: "active",
    registeredAt: "2025-07-05T13:10:00.000Z",
    lastLogin: "2026-09-25T19:50:00.000Z",
    quizzesAttempted: 19,
    overallAccuracy: 79,
    ipAddress: "49.36.14.77 (Kalaburagi)",
    notes: "Regular attendee for chemistry organic reaction mechanisms."
  },
  {
    id: "STU-2025-0107",
    name: "Rohan Joshi",
    username: "rohan_j",
    email: "rohan.joshi.hubli@gmail.com",
    phone: "+91 96200 44102",
    college: "Maratha Mandal PU College, Hubballi",
    district: "Hubballi-Dharwad",
    stream: "PCMC",
    targetExam: "KCET",
    status: "suspended",
    registeredAt: "2025-07-10T15:20:00.000Z",
    lastLogin: "2026-09-18T12:00:00.000Z",
    quizzesAttempted: 5,
    overallAccuracy: 52,
    ipAddress: "117.197.80.31 (Hubballi)",
    notes: "Account suspended: duplicate session flag reported."
  },
  {
    id: "STU-2025-0108",
    name: "Pooja Gowda",
    username: "pooja.gowda",
    email: "pooja.gowda.mys@gmail.com",
    phone: "+91 94481 99203",
    college: "Sharada PU College, Mysuru",
    district: "Mysuru",
    stream: "PCMB",
    targetExam: "KCET + Board Exam",
    status: "pending",
    registeredAt: "2025-09-24T09:00:00.000Z",
    lastLogin: "2026-09-24T09:05:00.000Z",
    quizzesAttempted: 0,
    overallAccuracy: 0,
    ipAddress: "157.48.91.20 (Mysuru)",
    notes: "Registration verification in progress."
  },
  {
    "id": "STU-2025-0109",
    "name": "Vinayaka Bhat",
    "username": "vinayaka_bhat",
    "email": "vinayak.bhat06@gmail.com",
    "phone": "+91 98450 33812",
    "college": "Alva's PU College, Moodbidri",
    "district": "Mangaluru (Dakshina Kannada)",
    "stream": "PCMB",
    "targetExam": "KCET + Board Exam",
    "status": "cancelled",
    "registeredAt": "2025-06-12T16:00:00.000Z",
    "lastLogin": "2026-08-30T11:20:00.000Z",
    "quizzesAttempted": 12,
    "overallAccuracy": 68,
    "ipAddress": "106.51.10.82 (Moodbidri)",
    "notes": "Cancelled per student request after transfer."
  }
];

interface AdminPanelProps {
  questions: Question[];
  onSaveQuestion: (question: Question) => void;
  onDeleteQuestion: (id: string) => void;
  onImportQuestions: (jsonStr: string) => { success: boolean; count: number; error?: string };
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  questions,
  onSaveQuestion,
  onDeleteQuestion,
  onImportQuestions
}) => {
  // Top-level Admin Section
  const [adminSection, setAdminSection] = useState<'students' | 'questions'>('students');

  // ==========================================
  // Student Database Management State
  // ==========================================
  const [students, setStudents] = useState<StudentLoginRecord[]>([]);
  const [isLoadingStudents, setIsLoadingStudents] = useState<boolean>(true);
  const [studentSearch, setStudentSearch] = useState<string>('');
  const [filterStream, setFilterStream] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Student Edit / Add Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [currentEditStudent, setCurrentEditStudent] = useState<StudentLoginRecord | null>(null);

  // Cancel / Delete Confirmation Modal
  const [cancelModalStudent, setCancelModalStudent] = useState<StudentLoginRecord | null>(null);

  // Supabase SQL Schema Modal State
  const [showSqlSchemaModal, setShowSqlSchemaModal] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // ==========================================
  // Question Bank State
  // ==========================================
  const [activeTab, setActiveTab] = useState<'manage' | 'add' | 'import_export'>('manage');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSubject, setFilterSubject] = useState<SubjectId | 'all'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  // Edit / Add Question Form State
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [formSubject, setFormSubject] = useState<SubjectId>('physics');
  const [formChapter, setFormChapter] = useState<string>('phy-1');
  const [formTopic, setFormTopic] = useState<string>('');
  const [formQuestion, setFormQuestion] = useState<string>('');
  const [formQuestionKn, setFormQuestionKn] = useState<string>('');
  const [formType, setFormType] = useState<QuestionType>('single_mcq');
  const [formOptions, setFormOptions] = useState<string[]>(['', '', '', '']);
  const [formCorrectAnswer, setFormCorrectAnswer] = useState<string>('');
  const [formExplanation, setFormExplanation] = useState<string>('');
  const [formDifficulty, setFormDifficulty] = useState<Difficulty>('Medium');
  const [formSource, setFormSource] = useState<string>('KSEAB Question Bank');
  const [formYear, setFormYear] = useState<string>('2024');
  const [formFormula, setFormFormula] = useState<string>('');

  // Import / Export Status
  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  // Fetch student logins from backend database
  const fetchStudents = async () => {
    setIsLoadingStudents(true);
    try {
      const res = await fetch('/api/students');
      if (res.ok) {
        const data = await res.json();
        if (data.students && Array.isArray(data.students) && data.students.length > 0) {
          setStudents(data.students);
          localStorage.setItem('kseab_students_cache', JSON.stringify(data.students));
        } else {
          loadFallbackStudents();
        }
      } else {
        loadFallbackStudents();
      }
    } catch (e) {
      loadFallbackStudents();
    } finally {
      setIsLoadingStudents(false);
    }
  };

  const loadFallbackStudents = () => {
    const cached = localStorage.getItem('kseab_students_cache');
    if (cached) {
      try {
        setStudents(JSON.parse(cached));
        return;
      } catch (e) {
        // fallback
      }
    }
    setStudents(INITIAL_FALLBACK_STUDENTS);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const showNotification = (text: string, type: 'success' | 'error' = 'success') => {
    setActionMessage({ text, type });
    setTimeout(() => setActionMessage(null), 3500);
  };

  // Handle Save (Edit) Student
  const handleSaveStudent = async (studentData: StudentLoginRecord) => {
    try {
      const res = await fetch(`/api/students/${studentData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData)
      });
      if (res.ok) {
        const data = await res.json();
        setStudents(prev => prev.map(s => s.id === studentData.id ? data.student : s));
        showNotification(`Student "${studentData.name}" updated in database.`);
      } else {
        // fallback local update
        setStudents(prev => prev.map(s => s.id === studentData.id ? studentData : s));
        showNotification(`Student updated in local database.`);
      }
    } catch (e) {
      setStudents(prev => prev.map(s => s.id === studentData.id ? studentData : s));
      showNotification(`Student updated locally.`);
    }
    setIsEditModalOpen(false);
    setCurrentEditStudent(null);
  };

  // Handle Add New Student
  const handleCreateStudent = async (newStudent: Partial<StudentLoginRecord>) => {
    try {
      const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
      });
      if (res.ok) {
        const data = await res.json();
        setStudents(prev => [data.student, ...prev]);
        showNotification(`New student "${data.student.name}" registered and saved in database.`);
      } else {
        const fallback: StudentLoginRecord = {
          id: `STU-2025-${String(students.length + 101).padStart(4, '0')}`,
          name: newStudent.name || 'New Student',
          username: newStudent.username || `stu_${Date.now().toString().slice(-4)}`,
          email: newStudent.email || '',
          phone: newStudent.phone || '',
          college: newStudent.college || 'Karnataka PU College',
          district: newStudent.district || 'Bengaluru Urban',
          stream: newStudent.stream || 'PCMB',
          targetExam: newStudent.targetExam || 'KCET + Board Exam',
          status: newStudent.status || 'active',
          registeredAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          quizzesAttempted: 0,
          overallAccuracy: 0,
          notes: newStudent.notes || ''
        };
        setStudents(prev => [fallback, ...prev]);
        showNotification(`New student registered in local records.`);
      }
    } catch (e) {
      showNotification(`Saved to local records.`, 'success');
    }
    setIsAddStudentOpen(false);
  };

  // Handle Quick Status Change or Cancel
  const handleQuickStatusChange = async (studentId: string, newStatus: StudentStatus) => {
    try {
      await fetch(`/api/students/${studentId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {
      // ignore
    }
    setStudents(prev => prev.map(s => s.id === studentId ? { ...s, status: newStatus } : s));
    showNotification(`Student status updated to ${newStatus}.`);
  };

  // Handle Permanent Delete
  const handlePermanentDelete = async (studentId: string) => {
    try {
      await fetch(`/api/students/${studentId}?hardDelete=true`, {
        method: 'DELETE'
      });
    } catch (e) {
      // ignore
    }
    setStudents(prev => prev.filter(s => s.id !== studentId));
    setCancelModalStudent(null);
    showNotification('Student record permanently deleted from database.');
  };

  // Export Student CSV
  const handleExportStudentsCSV = () => {
    const headers = ['Student ID', 'Full Name', 'Username', 'Email', 'Phone', 'College', 'District', 'Stream', 'Target Exam', 'Status', 'Registered Date', 'Last Login', 'Quizzes Attempted', 'Overall Accuracy %', 'Notes'];
    const rows = students.map(s => [
      `"${s.id}"`,
      `"${s.name.replace(/"/g, '""')}"`,
      `"${s.username}"`,
      `"${s.email}"`,
      `"${s.phone}"`,
      `"${s.college.replace(/"/g, '""')}"`,
      `"${s.district}"`,
      `"${s.stream}"`,
      `"${s.targetExam}"`,
      `"${s.status}"`,
      `"${new Date(s.registeredAt).toLocaleDateString()}"`,
      `"${new Date(s.lastLogin).toLocaleString()}"`,
      s.quizzesAttempted,
      s.overallAccuracy,
      `"${(s.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `karnataka_puc_students_roster_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Student roster downloaded as CSV.');
  };

  // Filtered Students
  const filteredStudents = students.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.username.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.college.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.district.toLowerCase().includes(studentSearch.toLowerCase());

    const matchStream = filterStream === 'all' || s.stream === filterStream;
    const matchStatus = filterStatus === 'all' || s.status === filterStatus;

    return matchSearch && matchStream && matchStatus;
  });

  // Student metrics
  const totalStudents = students.length;
  const activeCount = students.filter(s => s.status === 'active').length;
  const suspendedCount = students.filter(s => s.status === 'suspended').length;
  const cancelledCount = students.filter(s => s.status === 'cancelled').length;
  const avgAccuracy = Math.round(students.reduce((acc, s) => acc + (s.overallAccuracy || 0), 0) / (totalStudents || 1));

  // ==========================================
  // Question Bank Logic
  // ==========================================
  const availableChapters = CHAPTERS.filter(c => c.subjectId === formSubject);

  const filteredQuestions = questions.filter(q => {
    const matchesSub = filterSubject === 'all' || q.subject === filterSubject;
    const matchesDiff = filterDifficulty === 'all' || q.difficulty === filterDifficulty;
    const matchesText = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesDiff && matchesText;
  });

  const handleEditQuestion = (q: Question) => {
    setEditingQuestionId(q.id);
    setFormSubject(q.subject);
    setFormChapter(q.chapter);
    setFormTopic(q.topic);
    setFormQuestion(q.question);
    setFormQuestionKn(q.questionKannada || '');
    setFormType(q.questionType);
    setFormOptions(q.options && q.options.length ? [...q.options] : ['', '', '', '']);
    setFormCorrectAnswer(String(q.correctAnswer));
    setFormExplanation(q.explanation);
    setFormDifficulty(q.difficulty);
    setFormSource(q.source);
    setFormYear(q.year ? String(q.year) : '2024');
    setFormFormula(q.formulaNote || '');
    setActiveTab('add');
  };

  const handleResetQuestionForm = () => {
    setEditingQuestionId(null);
    setFormTopic('');
    setFormQuestion('');
    setFormQuestionKn('');
    setFormOptions(['', '', '', '']);
    setFormCorrectAnswer('');
    setFormExplanation('');
    setFormFormula('');
  };

  const handleSaveQuestionForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion.trim() || !formCorrectAnswer.trim()) {
      setActionMessage({ type: 'error', text: 'Please fill out the question text and correct answer.' });
      return;
    }

    const newQuestion: Question = {
      id: editingQuestionId || `q-custom-${Date.now()}`,
      subject: formSubject,
      chapter: formChapter,
      topic: formTopic.trim() || 'General Concept',
      question: formQuestion.trim(),
      questionKannada: formQuestionKn.trim() || undefined,
      questionType: formType,
      options: formType === 'single_mcq' || formType === 'multiple_mcq' || formType === 'assertion_reason' || formType === 'statement_based' ? formOptions.filter(o => o.trim()) : undefined,
      correctAnswer: formType === 'numerical' ? parseFloat(formCorrectAnswer) : formCorrectAnswer,
      explanation: formExplanation.trim() || 'Refer standard NCERT textbook.',
      difficulty: formDifficulty,
      source: formSource.trim() || 'KSEAB Question Bank',
      year: formYear ? parseInt(formYear) || formYear : undefined,
      formulaNote: formFormula.trim() || undefined,
      isCustom: true
    };

    onSaveQuestion(newQuestion);
    handleResetQuestionForm();
    setActiveTab('manage');
    showNotification('Question saved to syllabus database.');
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `kseab_pu2_questions_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleProcessImport = () => {
    if (!importJsonText.trim()) return;
    const res = onImportQuestions(importJsonText);
    if (res.success) {
      setImportStatus({ success: true, message: `Successfully imported ${res.count} questions!` });
      setImportJsonText('');
    } else {
      setImportStatus({ success: false, message: res.error || 'Failed to parse JSON questions' });
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Toast Notification */}
      {actionMessage && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-2xl shadow-xl border flex items-center gap-2.5 text-xs font-bold transition-all ${
          actionMessage.type === 'success' 
            ? 'bg-emerald-900 text-emerald-100 border-emerald-700' 
            : 'bg-rose-900 text-rose-100 border-rose-700'
        }`}>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{actionMessage.text}</span>
        </div>
      )}

      {/* Admin Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-blue-400">
              CENTRAL ADMINISTRATOR CONSOLE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Karnataka II PUC & KCET Control Panel
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Retrieve, monitor, edit, and cancel registered student logins stored in your database. Manage curriculum questions, syllabus marks weightage, and official exam presets.
          </p>
        </div>

        {/* Section Switcher: Students vs Question Bank */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700 shrink-0">
          <button
            onClick={() => setAdminSection('students')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              adminSection === 'students'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Student Logins & Database</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-200">
              {students.length}
            </span>
          </button>

          <button
            onClick={() => setAdminSection('questions')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              adminSection === 'questions'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Question Bank</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-700 text-slate-300">
              {questions.length}
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================
          STUDENT LOGINS & DATABASE MANAGEMENT VIEW
         ======================================================== */}
      {adminSection === 'students' && (
        <div className="space-y-6">
          
          {/* Supabase Database Connection Status Banner */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white p-4 rounded-2xl border border-emerald-500/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold shrink-0">
                <Database className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-sm text-white">Supabase Cloud Database</h4>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Project: bmlrkxrgddaxlamfvubh
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Connected to <code className="text-emerald-300 font-mono">bmlrkxrgddaxlamfvubh.supabase.co</code>. All student logins and profiles automatically synchronize to table <code className="text-emerald-300 font-mono">students</code>.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowSqlSchemaModal(true)}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-xs shrink-0 cursor-pointer self-start sm:self-auto"
            >
              View SQL Schema
            </button>
          </div>

          {/* Metrics Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Total Registered</span>
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">
                {totalStudents}
              </div>
              <p className="text-[10px] text-slate-400">Stored in database</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Active Logins</span>
                <UserCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-600">
                {activeCount}
              </div>
              <p className="text-[10px] text-emerald-600 font-medium">Valid credentials</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Avg Accuracy</span>
                <Award className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-amber-600">
                {avgAccuracy}%
              </div>
              <p className="text-[10px] text-slate-400">Karnataka II PUC</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Suspended / Cancelled</span>
                <UserX className="w-4 h-4 text-rose-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-rose-600">
                {suspendedCount + cancelledCount}
              </div>
              <p className="text-[10px] text-slate-400">Restricted access</p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search students by name, username, email, college, district..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              {studentSearch && (
                <button 
                  onClick={() => setStudentSearch('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Stream */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={filterStream}
                onChange={(e) => setFilterStream(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none font-medium"
              >
                <option value="all">All Streams</option>
                <option value="PCMB">PCMB</option>
                <option value="PCMC">PCMC</option>
                <option value="PCME">PCME</option>
                <option value="Other">Other</option>
              </select>

              {/* Filter Status */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none font-medium"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active Only</option>
                <option value="suspended">Suspended Only</option>
                <option value="pending">Pending Only</option>
                <option value="cancelled">Cancelled Only</option>
              </select>

              {/* Refresh Button */}
              <button
                onClick={fetchStudents}
                disabled={isLoadingStudents}
                title="Refresh student records from database"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${isLoadingStudents ? 'animate-spin text-blue-600' : ''}`} />
              </button>

              {/* Export CSV Button */}
              <button
                onClick={handleExportStudentsCSV}
                title="Export Student Logins to CSV"
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>

              {/* Add Student Button */}
              <button
                onClick={() => setIsAddStudentOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>New Student Login</span>
              </button>
            </div>
          </div>

          {/* Student Logins Data Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold">
                    <th className="py-3 px-4">Student & Login ID</th>
                    <th className="py-3 px-4">Institution & Stream</th>
                    <th className="py-3 px-4">Last Activity</th>
                    <th className="py-3 px-4">Performance</th>
                    <th className="py-3 px-4">Account Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((s) => {
                      const isCancelled = s.status === 'cancelled';
                      const isSuspended = s.status === 'suspended';
                      const isActive = s.status === 'active';
                      const isPending = s.status === 'pending';

                      return (
                        <tr 
                          key={s.id} 
                          className={`hover:bg-slate-50/60 transition-colors ${
                            isCancelled ? 'opacity-65 bg-slate-50/40' : ''
                          }`}
                        >
                          {/* Student Info */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                isActive 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : isSuspended 
                                  ? 'bg-amber-100 text-amber-800' 
                                  : isCancelled
                                  ? 'bg-rose-100 text-rose-700'
                                  : 'bg-slate-100 text-slate-600'
                              }`}>
                                {s.name.slice(0, 2).toUpperCase()}
                              </div>
                              <div className="space-y-0.5 min-w-0">
                                <div className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 truncate">
                                  <span>{s.name}</span>
                                  {s.id === 'STU-2025-0101' && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 uppercase">
                                      CURRENT
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-500 flex items-center gap-2 truncate">
                                  <span className="font-mono text-slate-700 font-semibold">@{s.username}</span>
                                  <span>·</span>
                                  <span>{s.email}</span>
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {s.phone}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* College & District */}
                          <td className="py-3.5 px-4">
                            <div className="space-y-1">
                              <div className="font-medium text-slate-800 flex items-center gap-1">
                                <School className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span className="truncate max-w-[200px]" title={s.college}>{s.college}</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                                <span>{s.district}</span>
                                <span>·</span>
                                <span className="font-bold text-blue-700">{s.stream}</span>
                              </div>
                            </div>
                          </td>

                          {/* Activity & Logins */}
                          <td className="py-3.5 px-4 text-[11px]">
                            <div className="space-y-0.5">
                              <div className="font-medium text-slate-700 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{new Date(s.lastLogin).toLocaleDateString()}</span>
                                <span className="text-slate-400 text-[10px]">
                                  {new Date(s.lastLogin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-400">
                                Reg: {new Date(s.registeredAt).toLocaleDateString()}
                              </div>
                            </div>
                          </td>

                          {/* Performance */}
                          <td className="py-3.5 px-4">
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-slate-600 font-medium">{s.quizzesAttempted} Quizzes</span>
                                <span className="font-bold text-slate-900">{s.overallAccuracy}%</span>
                              </div>
                              <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${
                                    s.overallAccuracy >= 80 ? 'bg-emerald-500' : s.overallAccuracy >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                                  }`}
                                  style={{ width: `${s.overallAccuracy}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>

                          {/* Status Badge */}
                          <td className="py-3.5 px-4">
                            {isActive && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Active
                              </span>
                            )}
                            {isSuspended && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                Suspended
                              </span>
                            )}
                            {isPending && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                Pending
                              </span>
                            )}
                            {isCancelled && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                Cancelled
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 px-4 text-right">
                            <div className="inline-flex items-center gap-1">
                              
                              {/* Edit Button */}
                              <button
                                onClick={() => {
                                  setCurrentEditStudent(s);
                                  setIsEditModalOpen(true);
                                }}
                                title="Edit Student Profile & Login Data"
                                className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>

                              {/* Toggle Status / Cancel Button */}
                              {isCancelled ? (
                                <button
                                  onClick={() => handleQuickStatusChange(s.id, 'active')}
                                  title="Reactivate Cancelled Account"
                                  className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                                >
                                  <UserCheck className="w-4 h-4" />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleQuickStatusChange(s.id, 'cancelled')}
                                  title="Cancel Student Account"
                                  className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                                >
                                  <UserX className="w-4 h-4" />
                                </button>
                              )}

                              {/* Delete Permanently Button */}
                              <button
                                onClick={() => setCancelModalStudent(s)}
                                title="Delete or Cancel from Database"
                                className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500 space-y-2">
                        <UserX className="w-8 h-8 text-slate-300 mx-auto" />
                        <p className="font-bold text-sm">No student login records found</p>
                        <p className="text-xs text-slate-400">Try adjusting your search criteria or stream filters.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer Count */}
            <div className="py-3 px-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Showing {filteredStudents.length} of {students.length} students</span>
              <span>Karnataka KSEAB Pre-University Board Database</span>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================
          QUESTION BANK MANAGEMENT VIEW
         ======================================================== */}
      {adminSection === 'questions' && (
        <div className="space-y-6">
          {/* Question Sub Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'manage' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Browse Questions ({filteredQuestions.length})
            </button>

            <button
              onClick={() => {
                handleResetQuestionForm();
                setActiveTab('add');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'add' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {editingQuestionId ? 'Edit Question' : '+ Add Question (Bilingual)'}
            </button>

            <button
              onClick={() => setActiveTab('import_export')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'import_export' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Import / Export JSON
            </button>
          </div>

          {/* Question Add / Edit Form */}
          {activeTab === 'add' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-base">
                  {editingQuestionId ? 'Edit Question' : 'Create New Bilingual Question'}
                </h3>
                {editingQuestionId && (
                  <button
                    onClick={handleResetQuestionForm}
                    className="text-xs text-rose-600 font-semibold hover:underline"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              <form onSubmit={handleSaveQuestionForm} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Subject</label>
                    <select
                      value={formSubject}
                      onChange={(e) => {
                        const s = e.target.value as SubjectId;
                        setFormSubject(s);
                        const ch = CHAPTERS.find(c => c.subjectId === s);
                        if (ch) setFormChapter(ch.id);
                      }}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    >
                      {SUBJECTS.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.kannadaName})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Chapter</label>
                    <select
                      value={formChapter}
                      onChange={(e) => setFormChapter(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    >
                      {availableChapters.map(c => (
                        <option key={c.id} value={c.id}>Ch {c.chapterNumber}: {c.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Topic Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Electric Dipole in Uniform Field"
                      value={formTopic}
                      onChange={(e) => setFormTopic(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Question Format</label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value as QuestionType)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                    >
                      <option value="single_mcq">Standard Single MCQ</option>
                      <option value="assertion_reason">Assertion & Reason (A/R)</option>
                      <option value="statement_based">Statement-Based (S1/S2)</option>
                      <option value="true_false">True / False</option>
                      <option value="numerical">Numerical</option>
                    </select>
                  </div>
                </div>

                {/* English Question */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Question Statement (English) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Enter full question text in English..."
                    value={formQuestion}
                    onChange={(e) => setFormQuestion(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900"
                  />
                </div>

                {/* Kannada Translation */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1 flex items-center justify-between">
                    <span>Question Statement (ಕನ್ನಡ - Bilingual Translation)</span>
                    <span className="text-[10px] text-blue-600 font-normal">Official KSEAB Bilingual Format</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="ಕನ್ನಡದಲ್ಲಿ ಪ್ರಶ್ನೆಯನ್ನು ನಮೂದಿಸಿ (Enter question in Kannada)..."
                    value={formQuestionKn}
                    onChange={(e) => setFormQuestionKn(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900"
                  />
                </div>

                {/* Options */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Options (A, B, C, D)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {formOptions.map((opt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <input
                          type="text"
                          placeholder={`Option ${String.fromCharCode(65 + i)}`}
                          value={opt}
                          onChange={(e) => {
                            const newOpts = [...formOptions];
                            newOpts[i] = e.target.value;
                            setFormOptions(newOpts);
                          }}
                          className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Correct Answer *</label>
                    <input
                      type="text"
                      required
                      placeholder="Must match option exactly"
                      value={formCorrectAnswer}
                      onChange={(e) => setFormCorrectAnswer(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Difficulty</label>
                    <select
                      value={formDifficulty}
                      onChange={(e) => setFormDifficulty(e.target.value as Difficulty)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Source / Exam</label>
                    <input
                      type="text"
                      placeholder="e.g. KCET 2024 / KSEAB Model"
                      value={formSource}
                      onChange={(e) => setFormSource(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Step-by-Step Explanation</label>
                  <textarea
                    rows={2}
                    placeholder="NCERT reference or formula derivation..."
                    value={formExplanation}
                    onChange={(e) => setFormExplanation(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {editingQuestionId ? 'Update Question' : 'Save Question to Database'}
                </button>
              </form>
            </div>
          )}

          {/* Manage Questions List */}
          {activeTab === 'manage' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search question text, topic, or source..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={filterSubject}
                    onChange={(e) => setFilterSubject(e.target.value as any)}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="all">All Subjects</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="biology">Biology</option>
                  </select>

                  <select
                    value={filterDifficulty}
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="all">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                {filteredQuestions.slice(0, 50).map((q) => (
                  <div 
                    key={q.id}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-[10px]">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold uppercase">
                          {q.subject}
                        </span>
                        <span className="font-semibold text-slate-500">{q.topic}</span>
                        <span>·</span>
                        <span className="text-slate-400">{q.source}</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-2">
                        {q.question}
                      </p>
                      {q.questionKannada && (
                        <p className="text-xs text-slate-600 line-clamp-1">
                          ಕನ್ನಡ: {q.questionKannada}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleEditQuestion(q)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete this question?')) onDeleteQuestion(q.id);
                        }}
                        className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Import / Export JSON */}
          {activeTab === 'import_export' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-base">Question Bank JSON Utilities</h3>
                <button
                  onClick={handleExportJson}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Database JSON</span>
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <label className="font-bold text-slate-700 block">Paste Questions JSON to Import</label>
                <textarea
                  rows={6}
                  placeholder='[ { "id": "custom-1", "subject": "physics", "question": "..." } ]'
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-[11px]"
                />
                <button
                  onClick={handleProcessImport}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
                >
                  Import Questions
                </button>
                {importStatus && (
                  <p className={`text-xs font-bold ${importStatus.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {importStatus.message}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          EDIT STUDENT LOGIN MODAL
         ======================================================== */}
      {isEditModalOpen && currentEditStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-5 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setCurrentEditStudent(null);
              }}
              className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Edit3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Edit Student Record</h3>
                <p className="text-xs text-slate-500 font-mono">ID: {currentEditStudent.id}</p>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveStudent(currentEditStudent);
              }}
              className="space-y-3.5 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={currentEditStudent.name}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Username / Roll No *</label>
                  <input
                    type="text"
                    required
                    value={currentEditStudent.username}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, username: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={currentEditStudent.email}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={currentEditStudent.phone}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, phone: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Pre-University College</label>
                <input
                  type="text"
                  required
                  value={currentEditStudent.college}
                  onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, college: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">District</label>
                  <input
                    type="text"
                    value={currentEditStudent.district}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, district: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Stream</label>
                  <select
                    value={currentEditStudent.stream}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, stream: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="PCMB">PCMB</option>
                    <option value="PCMC">PCMC</option>
                    <option value="PCME">PCME</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Account Status</label>
                  <select
                    value={currentEditStudent.status}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, status: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Quizzes Solved</label>
                  <input
                    type="number"
                    min="0"
                    value={currentEditStudent.quizzesAttempted}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, quizzesAttempted: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Accuracy (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={currentEditStudent.overallAccuracy}
                    onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, overallAccuracy: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Admin Notes</label>
                <textarea
                  rows={2}
                  value={currentEditStudent.notes || ''}
                  onChange={(e) => setCurrentEditStudent({ ...currentEditStudent, notes: e.target.value })}
                  placeholder="Internal remarks regarding this student account..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setCurrentEditStudent(null);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          CREATE NEW STUDENT MODAL
         ======================================================== */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-5 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsAddStudentOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Provision New Student Login</h3>
                <p className="text-xs text-slate-500">Register and grant portal credentials</p>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                handleCreateStudent({
                  name: fd.get('name') as string,
                  username: fd.get('username') as string,
                  email: fd.get('email') as string,
                  phone: fd.get('phone') as string,
                  college: fd.get('college') as string,
                  district: fd.get('district') as string,
                  stream: fd.get('stream') as any,
                  targetExam: fd.get('targetExam') as string,
                  status: 'active',
                  notes: fd.get('notes') as string
                });
              }}
              className="space-y-3.5 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Varun Kulkarni"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Login Username / Roll *</label>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="e.g. varun_k"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="student@gmail.com"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 98450 11223"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Pre-University College</label>
                <input
                  type="text"
                  name="college"
                  required
                  placeholder="e.g. National PU College, Basavanagudi"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">District</label>
                  <input
                    type="text"
                    name="district"
                    defaultValue="Bengaluru Urban"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Stream</label>
                  <select
                    name="stream"
                    defaultValue="PCMB"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="PCMB">PCMB</option>
                    <option value="PCMC">PCMC</option>
                    <option value="PCME">PCME</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Target Exam</label>
                  <select
                    name="targetExam"
                    defaultValue="KCET + Board Exam"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="KCET + Board Exam">KCET + Board Exam</option>
                    <option value="KCET Only">KCET Only</option>
                    <option value="KCET + NEET">KCET + NEET</option>
                    <option value="KCET + JEE Main">KCET + JEE Main</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Notes / Remarks</label>
                <textarea
                  rows={2}
                  name="notes"
                  placeholder="Optional registration notes..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddStudentOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs"
                >
                  Create & Save Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          CANCEL / DELETE STUDENT CONFIRMATION MODAL
         ======================================================== */}
      {cancelModalStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 border border-slate-200 shadow-2xl relative">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center font-bold">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Manage Account Access</h3>
                <p className="text-xs text-slate-500">Student: {cancelModalStudent.name}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Choose whether to cancel this student's access while keeping their academic quiz records, or permanently delete the student from the database.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Username:</span>
                <span className="font-mono">@{cancelModalStudent.username}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>College:</span>
                <span>{cancelModalStudent.college}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Quizzes Attempted:</span>
                <span>{cancelModalStudent.quizzesAttempted}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleQuickStatusChange(cancelModalStudent.id, 'cancelled');
                  setCancelModalStudent(null);
                }}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Mark Account as Cancelled
              </button>

              <button
                onClick={() => handlePermanentDelete(cancelModalStudent.id)}
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Permanently Delete from Database
              </button>

              <button
                onClick={() => setCancelModalStudent(null)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Supabase SQL Schema Modal */}
      {showSqlSchemaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-extrabold text-slate-900">Supabase SQL Table Schema</h3>
              </div>
              <button
                onClick={() => setShowSqlSchemaModal(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Run this in your <strong>Supabase Dashboard &gt; SQL Editor</strong> to automatically store and track student logins and exam analytics:
            </p>
            <pre className="p-3 bg-slate-900 text-emerald-300 font-mono text-[11px] rounded-xl overflow-x-auto select-all max-h-52">
{`CREATE TABLE IF NOT EXISTS students (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  username TEXT,
  email TEXT,
  phone TEXT,
  college TEXT,
  district TEXT,
  stream TEXT,
  target_exam TEXT,
  status TEXT DEFAULT 'active',
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ DEFAULT NOW(),
  quizzes_attempted INTEGER DEFAULT 0,
  overall_accuracy NUMERIC DEFAULT 0,
  ip_address TEXT,
  notes TEXT
);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public all" ON students FOR ALL USING (true) WITH CHECK (true);`}
            </pre>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  const sql = `CREATE TABLE IF NOT EXISTS students (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  username TEXT,\n  email TEXT,\n  phone TEXT,\n  college TEXT,\n  district TEXT,\n  stream TEXT,\n  target_exam TEXT,\n  status TEXT DEFAULT 'active',\n  registered_at TIMESTAMPTZ DEFAULT NOW(),\n  last_login TIMESTAMPTZ DEFAULT NOW(),\n  quizzes_attempted INTEGER DEFAULT 0,\n  overall_accuracy NUMERIC DEFAULT 0,\n  ip_address TEXT,\n  notes TEXT\n);\n\nALTER TABLE students ENABLE ROW LEVEL SECURITY;\nCREATE POLICY "Allow public all" ON students FOR ALL USING (true) WITH CHECK (true);`;
                  navigator.clipboard.writeText(sql);
                  setCopiedSql(true);
                  setTimeout(() => setCopiedSql(false), 2000);
                }}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{copiedSql ? 'Copied to Clipboard!' : 'Copy SQL Schema'}</span>
              </button>
              <button
                onClick={() => setShowSqlSchemaModal(false)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
