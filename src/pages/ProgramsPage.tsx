import React from 'react';
import { PageRoute } from '../types';
import { BSN_FEE_STRUCTURE, LHV_FEE_STRUCTURE, BSN_SEMESTERS } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Calendar,
  Layers,
  Award,
  Laptop,
  Stethoscope,
  Briefcase,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

interface ProgramsPageProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ currentRoute, onNavigate }) => {
  // If specific program subroute is active
  if (currentRoute === 'program-bsn') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* BSN Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-2xl p-6 sm:p-10 border border-sand-500/30 shadow-xl space-y-4">
          <Badge variant="navy">4 Years Degree Program</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            BS Nursing (BSN)
          </h1>
          <p className="text-sand-300 text-xs sm:text-sm font-mono font-semibold">
            8 Semesters • 124–136 Total Credit Hours • 40–44 Total Courses
          </p>
          <p className="text-slate-200 text-xs sm:text-sm max-w-3xl leading-relaxed">
            The Bachelor of Science in Nursing is a comprehensive 4-year degree program designed to prepare students with theoretical, practical, skills lab, and clinical nursing expertise.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('academics')}
              className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 border border-sand-500/30 transition-fast"
            >
              <BookOpen className="w-4 h-4 text-sand-400" />
              <span>Full Semester-Wise Curriculum</span>
            </button>
            <button
              onClick={() => onNavigate('fees')}
              className="px-5 py-2.5 bg-navy-950 hover:bg-navy-800 text-slate-200 font-semibold text-xs rounded-xl border border-navy-700 transition-fast"
            >
              <span>View BSN Fee Schedule</span>
            </button>
          </div>
        </div>

        {/* Program Overview Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <Clock className="w-6 h-6 text-navy-700 dark:text-sand-400 mb-2" />
            <h3 className="font-bold text-navy-900 dark:text-white text-base font-serif">Duration & Structure</h3>
            <p className="text-xs text-secondary-text dark:text-slate-300 mt-1">
              4 Years duration spanning 8 semesters. Each semester consists of 16–18 weeks with a course load of 15–18 credit hours.
            </p>
          </Card>

          <Card>
            <Layers className="w-6 h-6 text-navy-700 dark:text-sand-400 mb-2" />
            <h3 className="font-bold text-navy-900 dark:text-white text-base font-serif">Core Categories</h3>
            <p className="text-xs text-secondary-text dark:text-slate-300 mt-1">
              Compulsory courses, general subjects, discipline-specific foundation courses, major courses, and electives.
            </p>
          </Card>

          <Card>
            <Award className="w-6 h-6 text-navy-700 dark:text-sand-400 mb-2" />
            <h3 className="font-bold text-navy-900 dark:text-white text-base font-serif">Clinical Practicum</h3>
            <p className="text-xs text-secondary-text dark:text-slate-300 mt-1">
              Includes Critical Care Nursing, Community Health Nursing III, Nursing Seminar, and Senior Clinical Practicum.
            </p>
          </Card>
        </div>

        {/* 4 Years Course Outline Summary */}
        <div className="space-y-6">
          <SectionHeader
            badge="Year-Wise Outline"
            title="BS Nursing Academic Progression"
            subtitle="Overview of subjects across the four academic years as listed in the prospectus."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="text-xs font-bold text-navy-700 dark:text-sand-400 font-mono mb-1">YEAR 1 (Semesters I & II)</div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm mb-3 font-serif">Foundational Sciences</h4>
              <ul className="text-xs text-secondary-text dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Fundamentals of Nursing I & II</li>
                <li>Microbiology</li>
                <li>Anatomy & Physiology I & II</li>
                <li>Biochemistry for Nurses</li>
                <li>Computer Skills & English I & II</li>
                <li>Community Health Nursing I</li>
                <li>Applied Nutrition, Islamiat, Pak Studies</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-bold text-navy-700 dark:text-sand-400 font-mono mb-1">YEAR 2 (Semesters III & IV)</div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm mb-3 font-serif">Clinical Foundations</h4>
              <ul className="text-xs text-secondary-text dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Adult Health Nursing I & II</li>
                <li>Pathophysiology I & II</li>
                <li>Health Assessment I & II</li>
                <li>Pharmacology I & II</li>
                <li>Mathematics & English III & IV</li>
                <li>Developmental Psychology</li>
                <li>Nursing Ethics</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-bold text-navy-700 dark:text-sand-400 font-mono mb-1">YEAR 3 (Semesters V & VI)</div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm mb-3 font-serif">Specialized Nursing</h4>
              <ul className="text-xs text-secondary-text dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Pediatric Health Nursing</li>
                <li>Community Health Nursing II</li>
                <li>Teaching/Learning Principles</li>
                <li>Mental Health Nursing</li>
                <li>Introduction to Biostatistics</li>
                <li>Behavioral Psychology & Epidemiology</li>
                <li>Culture, Health & Society</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-bold text-navy-700 dark:text-sand-400 font-mono mb-1">YEAR 4 (Semesters VII & VIII)</div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm mb-3 font-serif">Leadership & Practicum</h4>
              <ul className="text-xs text-secondary-text dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Critical Care Nursing</li>
                <li>Nursing Theories</li>
                <li>Leadership & Management</li>
                <li>Nursing Research</li>
                <li>Community Health Nursing III</li>
                <li>Nursing Seminar / Role Transition</li>
                <li>Senior Clinical Practicum</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-navy-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg border border-navy-800">
          <div>
            <h3 className="font-bold font-serif text-lg">Ready to review admission documents for BSN?</h3>
            <p className="text-xs text-slate-300 mt-0.5">Check required qualifications, passport photos, and sets required.</p>
          </div>
          <button
            onClick={() => onNavigate('admissions')}
            className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 font-bold text-xs text-white rounded-xl shrink-0 transition-fast border border-sand-500/30"
          >
            Admission Checklist
          </button>
        </div>
      </div>
    );
  }

  if (currentRoute === 'program-lhv') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* LHV Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-2xl p-6 sm:p-10 border border-sand-500/30 shadow-xl space-y-4">
          <Badge variant="sand">2 Years Diploma Program</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Lady Health Visitor (LHV)
          </h1>
          <p className="text-sand-300 text-xs sm:text-sm font-mono font-semibold">
            2 Years Diploma Program
          </p>
          <p className="text-slate-200 text-xs sm:text-sm max-w-3xl leading-relaxed">
            The Lady Health Visitor diploma program is a 2-year course providing focused training in community health, maternal and child healthcare, basic clinical practices, and public health support.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('fees')}
              className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 border border-sand-500/30 transition-fast"
            >
              <FileText className="w-4 h-4 text-sand-400" />
              <span>View LHV Fee Structure</span>
            </button>
            <button
              onClick={() => onNavigate('admissions')}
              className="px-5 py-2.5 bg-navy-950 hover:bg-navy-800 text-slate-200 font-semibold text-xs rounded-xl border border-navy-700 transition-fast"
            >
              <span>Admission Documents Checklist</span>
            </button>
          </div>
        </div>

        {/* LHV Fee Summary Box */}
        <Card className="space-y-4">
          <h3 className="text-lg font-bold font-serif text-navy-900 dark:text-white">
            LHV Fee Breakdown (Official Prospectus)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-50 dark:bg-navy-900 border-b border-border-med dark:border-navy-800 text-navy-900 dark:text-slate-300 font-mono uppercase">
                  <th className="py-2.5 px-3">Fee Head</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                  <th className="py-2.5 px-3 text-right">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-med/60 dark:divide-navy-800">
                {LHV_FEE_STRUCTURE.fees.map((fee, i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-semibold text-slate-800 dark:text-slate-200">{fee.head}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-navy-800 dark:text-sand-400">{fee.amount}</td>
                    <td className="py-2.5 px-3 text-right text-slate-500 dark:text-slate-400">{fee.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 italic">
            * Note: Examination & registration charges as per governing board schedule.
          </div>
        </Card>
      </div>
    );
  }

  // Default Catalog View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <SectionHeader
        badge="Academic Offerings"
        title="Nursing & Healthcare Programs"
        subtitle="Detailed prospectus details for BS Nursing degree and LHV diploma programs at Al Raheem College of Nursing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BSN Catalog Card */}
        <Card className="space-y-5 flex flex-col justify-between hover:border-navy-700/60 transition-fast">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-navy-100 dark:bg-navy-900 flex items-center justify-center text-navy-900 dark:text-sand-400 border border-navy-200 dark:border-navy-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Badge variant="navy">4 Years Degree</Badge>
            </div>

            <h3 className="text-2xl font-bold font-serif text-navy-900 dark:text-white">
              BS Nursing (BSN)
            </h3>

            <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
              Standardized 4-year degree program consisting of 8 semesters, 124–136 credit hours, and 40–44 total courses. Includes science foundations, clinical nursing, research, biostatistics, and senior clinical practicum.
            </p>

            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                <span>Semesters: 8 (16–18 weeks per semester)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                <span>Tuition: {BSN_FEE_STRUCTURE.fees[2].amount} per semester</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                <span>Includes Nursing Research & Clinical Practicum</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
            <button
              onClick={() => onNavigate('program-bsn')}
              className="px-4 py-2 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-1 border border-sand-500/30 transition-fast"
            >
              <span>Explore BSN Details</span>
              <ChevronRight className="w-4 h-4 text-sand-400" />
            </button>
            <button
              onClick={() => onNavigate('academics')}
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-navy-800 dark:hover:text-sand-400 font-semibold transition-fast"
            >
              Full 8 Semesters Table
            </button>
          </div>
        </Card>

        {/* LHV Catalog Card */}
        <Card className="space-y-5 flex flex-col justify-between hover:border-sand-500/60 transition-fast">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-sand-100 dark:bg-navy-900 flex items-center justify-center text-sand-600 dark:text-sand-400 border border-sand-200 dark:border-navy-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <Badge variant="sand">2 Years Diploma</Badge>
            </div>

            <h3 className="text-2xl font-bold font-serif text-navy-900 dark:text-white">
              Lady Health Visitor (LHV)
            </h3>

            <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
              2-year diploma course providing vocational education in community health, maternal and child wellness, basic nursing care, and preventative medicine.
            </p>

            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                <span>Duration: 2 Years Diploma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                <span>Tuition: {LHV_FEE_STRUCTURE.fees[1].amount} per year</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                <span>Admission Fee: {LHV_FEE_STRUCTURE.fees[0].amount} (one time)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
            <button
              onClick={() => onNavigate('program-lhv')}
              className="px-4 py-2 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-1 border border-sand-500/30 transition-fast"
            >
              <span>Explore LHV Details</span>
              <ChevronRight className="w-4 h-4 text-sand-400" />
            </button>
            <button
              onClick={() => onNavigate('fees')}
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-navy-800 dark:hover:text-sand-400 font-semibold transition-fast"
            >
              View LHV Fees
            </button>
          </div>
        </Card>
      </div>

      {/* COMPUTER & AI SKILL PROGRAMS CATEGORIES */}
      <div className="pt-8 space-y-8 border-t border-border-med dark:border-navy-800">
        <SectionHeader
          badge="Vocational & Digital Skills"
          title="Computer & AI Skill Program Tracks"
          subtitle="Explore our specialized digital literacy tracks divided into healthcare-integrated curricula for existing students and high-demand skill certifications for external learners."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Existing Healthcare Students */}
          <div 
            onClick={() => onNavigate('programs-existing-students')}
            className="group cursor-pointer rounded-2xl bg-white dark:bg-navy-900 border-2 border-border-med dark:border-navy-800 hover:border-navy-700 dark:hover:border-sand-500 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-navy-50 dark:bg-navy-950 text-navy-800 dark:text-sand-400 flex items-center justify-center border border-navy-200/80 dark:border-navy-800 shadow-sm group-hover:bg-navy-700 group-hover:text-white dark:group-hover:bg-sand-500 dark:group-hover:text-navy-950 group-hover:border-navy-700 dark:group-hover:border-sand-500 transition-all duration-200 shrink-0">
                  <Laptop className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:scale-110" />
                </div>
                <Badge variant="navy">4 Specialized Tracks</Badge>
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-navy-700 dark:text-sand-400 font-mono">
                  CATEGORY 1 • HEALTHCARE STUDENTS
                </span>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif leading-tight group-hover:text-navy-700 dark:group-hover:text-sand-300 transition-colors duration-200 mt-1">
                  Specialized Computer & AI Skill Programs
                </h3>
                <p className="text-xs font-bold text-sand-600 dark:text-sand-400 mt-1">
                  For Nursing, LHV & Pharmacy Students
                </p>
              </div>

              <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                Programs specifically designed around the academic, clinical documentation, and hospital management needs of existing healthcare students.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('programs-existing-students');
                }}
                className="px-4 py-2 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 border border-sand-500/30 shadow-sm transition-all duration-200 group-hover:bg-navy-900"
              >
                <span>VIEW STUDENT PROGRAMS</span>
                <ArrowRight className="w-3.5 h-3.5 text-sand-400 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Card 2: External Students & Professionals */}
          <div 
            onClick={() => onNavigate('programs-external-students')}
            className="group cursor-pointer rounded-2xl bg-white dark:bg-navy-900 border-2 border-border-med dark:border-navy-800 hover:border-sand-500 dark:hover:border-sand-400 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-sand-50 dark:bg-navy-950 text-sand-700 dark:text-sand-400 flex items-center justify-center border border-sand-200/80 dark:border-navy-800 shadow-sm group-hover:bg-navy-700 group-hover:text-white dark:group-hover:bg-sand-500 dark:group-hover:text-navy-950 group-hover:border-navy-700 dark:group-hover:border-sand-500 transition-all duration-200 shrink-0">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:scale-110" />
                </div>
                <Badge variant="sand">9 Certification Tracks</Badge>
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-sand-600 dark:text-sand-400 font-mono">
                  CATEGORY 2 • PUBLIC & VOCATIONAL
                </span>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif leading-tight group-hover:text-navy-700 dark:group-hover:text-sand-300 transition-colors duration-200 mt-1">
                  External Professional & Skill Certification Courses
                </h3>
                <p className="text-xs font-bold text-navy-700 dark:text-sand-400 mt-1">
                  For External Students & Professionals
                </p>
              </div>

              <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                Short-term skill development programs designed for external students and professionals seeking modern digital and market-ready skills.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('programs-external-students');
                }}
                className="px-4 py-2 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 border border-sand-500/30 shadow-sm transition-all duration-200 group-hover:bg-navy-900"
              >
                <span>VIEW EXTERNAL COURSES</span>
                <ArrowRight className="w-3.5 h-3.5 text-sand-400 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

