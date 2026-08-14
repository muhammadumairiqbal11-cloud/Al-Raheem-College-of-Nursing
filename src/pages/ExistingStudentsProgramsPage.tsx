import React, { useState } from 'react';
import { PageRoute, ExistingStudentCourse } from '../types';
import { EXISTING_STUDENT_COURSES, COLLEGE_CONTACT } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { 
  Laptop, 
  Database, 
  BrainCircuit, 
  Palette, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Users, 
  Stethoscope, 
  Sparkles, 
  ArrowLeft,
  Phone,
  FileText,
  X,
  Award,
  Building2,
  CheckCircle
} from 'lucide-react';

interface ExistingStudentsProgramsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ExistingStudentsProgramsPage: React.FC<ExistingStudentsProgramsPageProps> = ({ onNavigate }) => {
  const [selectedCourse, setSelectedCourse] = useState<ExistingStudentCourse | null>(null);

  const getIcon = (iconName: ExistingStudentCourse['iconName']) => {
    switch (iconName) {
      case 'productivity':
        return Laptop;
      case 'hospital-system':
        return Database;
      case 'ai-health':
        return BrainCircuit;
      case 'graphic-design':
        return Palette;
      default:
        return Laptop;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-navy-950 transition-colors">
      {/* Top Banner / Hero Header */}
      <section className="relative bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-12 sm:py-16 border-b border-sand-500/30 overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-sand-500/30 text-sand-400 text-xs font-semibold backdrop-blur-md">
            <Stethoscope className="w-4 h-4 text-sand-400" />
            <span>EXCLUSIVELY FOR REGISTERED HEALTHCARE SCHOLARS</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif leading-tight">
              SPECIALIZED COMPUTER & AI SKILL PROGRAMS
            </h1>
            <p className="text-lg sm:text-xl font-medium text-sand-300 font-sans">
              For Nursing, LHV & Pharmacy Students
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            These specialized programs are tailored specifically around the academic curricula, hospital management requirements, and clinical documentation needs of students currently enrolled in healthcare degree and diploma programs.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 border border-sand-500/30 shadow-md transition-fast"
            >
              <Phone className="w-4 h-4 text-sand-400" />
              <span>Contact Lab Coordinator</span>
            </button>
            <button
              onClick={() => onNavigate('programs-external-students')}
              className="px-5 py-2.5 bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-navy-700 transition-fast"
            >
              <span>Explore External Courses Instead →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Intro Highlight Box */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border border-border-med dark:border-navy-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-med/80 dark:border-navy-800 pb-4">
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold font-serif text-navy-900 dark:text-white">
                4 Specialized Modules for Clinical & Academic Excellence
              </h2>
              <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300">
                Designed to run alongside regular semester classes with zero scheduling conflicts in the on-campus computer laboratory.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sand-600 dark:text-sand-400 bg-sand-50 dark:bg-navy-950 px-3.5 py-2 rounded-xl border border-sand-200 dark:border-navy-700 shrink-0">
              <Sparkles className="w-4 h-4" />
              <span>4 Certified Healthcare Tracks</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700 dark:text-slate-300 pt-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>Clinical documentation & patient notes drafting</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>Live Hospital Information Systems (HIMS/EMR)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>AI-assisted medical literature & care plan synthesis</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>Health education infographics & conference posters</span>
            </div>
          </div>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXISTING_STUDENT_COURSES.map((course, index) => {
            const Icon = getIcon(course.iconName);
            const isSandVariant = index % 2 === 1;

            return (
              <Card 
                key={course.id}
                className="flex flex-col justify-between hover:border-navy-700/60 dark:hover:border-sand-500/60 transition-fast"
              >
                <div className="space-y-4">
                  {/* Card Top Row */}
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-fast ${
                      isSandVariant 
                        ? 'bg-sand-100 dark:bg-navy-900 text-sand-600 dark:text-sand-400 border-sand-200 dark:border-navy-700' 
                        : 'bg-navy-100 dark:bg-navy-900 text-navy-900 dark:text-sand-400 border-navy-200 dark:border-navy-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant={isSandVariant ? 'sand' : 'navy'}>{course.duration}</Badge>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Target */}
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 dark:text-sand-400 mt-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>Target: {course.targetAudience}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed">
                    {course.overview}
                  </p>

                  {/* Key Modules */}
                  <div className="space-y-2 pt-3 border-t border-border-med dark:border-navy-800">
                    <h4 className="text-xs font-bold text-navy-900 dark:text-slate-100 font-serif uppercase tracking-wider">
                      Key Modules & Training Topics:
                    </h4>
                    <div className="space-y-1.5">
                      {course.keyModules.map((module, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSandVariant ? 'text-sand-500 dark:text-sand-400' : 'text-navy-700 dark:text-sand-400'}`} />
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clinical Relevance Box */}
                  <div className="p-3 rounded-xl bg-navy-50/70 dark:bg-navy-950/60 border border-navy-200/60 dark:border-navy-800 text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-navy-900 dark:text-sand-400">Clinical & Hospital Application: </span>
                    {course.clinicalApplication}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-4 py-2 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 border border-sand-500/30 shadow-sm transition-fast"
                  >
                    <span>VIEW DETAILS</span>
                    <ChevronRight className="w-3.5 h-3.5 text-sand-400" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white font-semibold transition-fast"
                  >
                    Inquire at Lab Desk
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Campus Lab Facility Strip */}
        <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                Computer Laboratory & Practical Infrastructure
              </h3>
              <p className="text-xs text-slate-300">
                Al-Raheem College of Nursing Kot Addu Campus — Bukhari Road Near Phattay Wali Pull
              </p>
            </div>
            <button
              onClick={() => onNavigate('campus-life')}
              className="px-4 py-2 bg-navy-800 hover:bg-navy-700 text-sand-300 text-xs font-bold rounded-xl border border-sand-500/30 transition-fast shrink-0"
            >
              Tour Campus Lab
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-1">
              <h4 className="font-bold text-sand-400 uppercase tracking-wider font-serif">Flexible Scheduling</h4>
              <p>Special laboratory slots arranged around hospital clinical rotations and nursing lectures.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sand-400 uppercase tracking-wider font-serif">Individual Workstations</h4>
              <p>Each student operates dedicated high-speed PC workstations with full software access.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sand-400 uppercase tracking-wider font-serif">Skill Certification</h4>
              <p>Official institutional certificate awarded upon successful completion of lab assessments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-navy-950 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border-med dark:border-navy-800 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-border-med dark:border-navy-800 pb-4">
              <div className="space-y-1">
                <Badge variant="navy">{selectedCourse.duration}</Badge>
                <h3 className="text-2xl font-bold font-serif text-navy-900 dark:text-white mt-2">
                  {selectedCourse.title}
                </h3>
                <p className="text-xs font-semibold text-sand-600 dark:text-sand-400">
                  Target: {selectedCourse.targetAudience}
                </p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-900 transition-fast"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="font-bold text-navy-900 dark:text-white font-serif mb-1">Course Description:</h4>
                <p className="leading-relaxed">{selectedCourse.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 dark:text-white font-serif mb-2">Detailed Syllabus & Topics:</h4>
                <div className="space-y-2 bg-navy-50/50 dark:bg-navy-900/50 p-4 rounded-xl border border-border-med dark:border-navy-800">
                  {selectedCourse.keyModules.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-sand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-sand-50 dark:bg-navy-900 rounded-xl border border-sand-200 dark:border-navy-800">
                <h4 className="font-bold text-navy-900 dark:text-sand-400 font-serif mb-1">Clinical Application:</h4>
                <p className="text-slate-700 dark:text-slate-300">{selectedCourse.clinicalApplication}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border-med dark:border-navy-800">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Contact: <span className="font-mono text-navy-900 dark:text-sand-300 font-bold">{COLLEGE_CONTACT.phones[0]}</span>
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-900 border border-border-med dark:border-navy-800 transition-fast"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    onNavigate('contact');
                  }}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold bg-navy-700 hover:bg-navy-800 text-white border border-sand-500/30 transition-fast shadow-md"
                >
                  Inquire for Batch Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
