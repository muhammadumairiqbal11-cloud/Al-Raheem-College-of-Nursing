import React, { useState } from 'react';
import { PageRoute, ExternalStudentCourse } from '../types';
import { EXTERNAL_STUDENT_COURSES, COLLEGE_CONTACT } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { 
  Laptop, 
  Share2, 
  Globe, 
  Link as LinkIcon, 
  Sparkles, 
  BrainCircuit, 
  ShoppingBag, 
  MessageSquare, 
  Palette, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Users, 
  Award, 
  Building2, 
  ArrowLeft,
  Phone,
  FileText,
  X,
  CheckCircle,
  Briefcase
} from 'lucide-react';

interface ExternalStudentsProgramsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ExternalStudentsProgramsPage: React.FC<ExternalStudentsProgramsPageProps> = ({ onNavigate }) => {
  const [selectedCourse, setSelectedCourse] = useState<ExternalStudentCourse | null>(null);

  const getIcon = (iconName: ExternalStudentCourse['iconName']) => {
    switch (iconName) {
      case 'office-ai':
        return Laptop;
      case 'marketing':
        return Share2;
      case 'wordpress':
        return Globe;
      case 'seo':
        return LinkIcon;
      case 'canva-ai':
        return Sparkles;
      case 'ai-prompt':
        return BrainCircuit;
      case 'freelance':
        return ShoppingBag;
      case 'spoken-english':
        return MessageSquare;
      case 'canva-master':
        return Palette;
      default:
        return Laptop;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-navy-950 transition-colors">
      {/* Hero / Header Section */}
      <section className="relative bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-12 sm:py-16 border-b border-sand-500/30 overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-500/20 border border-sand-500/40 text-sand-300 text-xs font-semibold backdrop-blur-md">
            <Award className="w-4 h-4 text-sand-400" />
            <span>OPEN FOR EXTERNAL ADMISSIONS & PUBLIC ENROLLMENT</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif leading-tight">
              EXTERNAL PROFESSIONAL & SKILL CERTIFICATION COURSES
            </h1>
            <p className="text-lg sm:text-xl font-medium text-sand-300 font-sans">
              Short-Term Skill Development Programs for External Students & Professionals
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            These practical vocational and digital technology certifications are open to all community members, graduates, job seekers, and working professionals in Kot Addu and surrounding districts seeking high-demand marketplace skills.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 border border-sand-500/30 shadow-md transition-fast"
            >
              <Phone className="w-4 h-4 text-sand-400" />
              <span>Enroll / Inquire for Next Batch</span>
            </button>
            <button
              onClick={() => onNavigate('programs-existing-students')}
              className="px-5 py-2.5 bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-navy-700 transition-fast"
            >
              <span>← View Existing Healthcare Student Programs</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Distinct Category Clarification Box */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border border-border-med dark:border-navy-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-med/80 dark:border-navy-800 pb-4">
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold font-serif text-navy-900 dark:text-white">
                9 High-Demand Market Certifications (On-Campus Hands-on Labs)
              </h2>
              <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300">
                Independent vocational tracks open to matriculates, intermediate students, university graduates, freelancers, and professionals.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sand-600 dark:text-sand-400 bg-sand-50 dark:bg-navy-950 px-3.5 py-2 rounded-xl border border-sand-200 dark:border-navy-700 shrink-0">
              <Briefcase className="w-4 h-4" />
              <span>9 Professional Skill Certifications</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300 pt-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>100% Practical on-campus lab exercises & live assignments</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>Global freelancing profile setup (Fiverr, Upwork, Local)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0 mt-0.5" />
              <span>Dedicated batches for morning and evening timings</span>
            </div>
          </div>
        </div>

        {/* 9 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXTERNAL_STUDENT_COURSES.map((course, index) => {
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
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-fast ${
                      isSandVariant 
                        ? 'bg-sand-100 dark:bg-navy-900 text-sand-600 dark:text-sand-400 border-sand-200 dark:border-navy-700' 
                        : 'bg-navy-100 dark:bg-navy-900 text-navy-900 dark:text-sand-400 border-navy-200 dark:border-navy-700'
                    }`}>
                      <Icon className="w-5 h-5" />
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
                    <h3 className="text-lg font-bold text-navy-900 dark:text-white font-serif leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-navy-700 dark:text-sand-400 mt-1">
                      {course.targetAudience}
                    </p>
                  </div>

                  <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                    {course.overview}
                  </p>

                  {/* Main Modules */}
                  <div className="space-y-2 pt-2 border-t border-border-med dark:border-navy-800">
                    <h4 className="text-[11px] font-bold text-navy-900 dark:text-slate-100 font-serif uppercase tracking-wider">
                      Core Modules & Practicum:
                    </h4>
                    <div className="space-y-1">
                      {course.mainModules.slice(0, 3).map((module, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSandVariant ? 'text-sand-500 dark:text-sand-400' : 'text-navy-700 dark:text-sand-400'}`} />
                          <span className="line-clamp-1">{module}</span>
                        </div>
                      ))}
                      {course.mainModules.length > 3 && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                          + {course.mainModules.length - 3} more modules in full syllabus
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Career Outcome */}
                  <div className="p-2.5 rounded-xl bg-navy-50/70 dark:bg-navy-950/60 border border-navy-200/60 dark:border-navy-800 text-[11px] text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-navy-900 dark:text-sand-400">Career Outcome: </span>
                    {course.careerOutcome}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-4 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-3.5 py-1.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-1 border border-sand-500/30 shadow-sm transition-fast"
                  >
                    <span>VIEW DETAILS</span>
                    <ChevronRight className="w-3.5 h-3.5 text-sand-400" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white font-semibold transition-fast"
                  >
                    Inquire Batch
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Contact & Enrollment Banner */}
        <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                How to Register for External Skill Courses
              </h3>
              <p className="text-xs text-slate-300">
                Visit our Kot Addu campus admissions office or contact the program desk to confirm your seat.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white text-xs font-bold rounded-xl border border-sand-500/30 transition-fast shrink-0 shadow-md"
            >
              Contact Admissions Desk
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-1">
              <h4 className="font-bold text-sand-400 uppercase tracking-wider font-serif">Campus Location</h4>
              <p>{COLLEGE_CONTACT.address}</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sand-400 uppercase tracking-wider font-serif">Admission Timings</h4>
              <p>{COLLEGE_CONTACT.campusTiming}</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sand-400 uppercase tracking-wider font-serif">Direct Helplines</h4>
              <p className="font-mono text-sand-300">{COLLEGE_CONTACT.phones[0]} | {COLLEGE_CONTACT.phones[1]}</p>
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
                <div className="flex items-center gap-2">
                  <Badge variant="sand">{selectedCourse.duration}</Badge>
                  <span className="text-xs font-bold text-navy-700 dark:text-sand-400 font-serif">
                    {selectedCourse.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-navy-900 dark:text-white mt-2">
                  {selectedCourse.title}
                </h3>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
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
                <h4 className="font-bold text-navy-900 dark:text-white font-serif mb-1">Course Overview:</h4>
                <p className="leading-relaxed">{selectedCourse.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 dark:text-white font-serif mb-2">Detailed Curriculum & Modules:</h4>
                <div className="space-y-2 bg-navy-50/50 dark:bg-navy-900/50 p-4 rounded-xl border border-border-med dark:border-navy-800">
                  {selectedCourse.mainModules.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-sand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-sand-50 dark:bg-navy-900 rounded-xl border border-sand-200 dark:border-navy-800">
                <h4 className="font-bold text-navy-900 dark:text-sand-400 font-serif mb-1">Career & Professional Outcome:</h4>
                <p className="text-slate-700 dark:text-slate-300">{selectedCourse.careerOutcome}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border-med dark:border-navy-800">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Help Desk: <span className="font-mono text-navy-900 dark:text-sand-300 font-bold">{COLLEGE_CONTACT.phones[0]}</span>
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
                  Inquire for Batch Admission
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
