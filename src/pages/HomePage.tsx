import React from 'react';
import { PageRoute } from '../types';
import { COLLEGE_CONTACT, ACADEMIC_STRUCTURE_OVERVIEW, BSN_FEE_STRUCTURE, LHV_FEE_STRUCTURE, EXISTING_STUDENT_COURSES, EXTERNAL_STUDENT_COURSES } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import heroImg from '../assets/images/nursing_hero_image_1786465697025.jpg';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Award, 
  Activity, 
  FileText,
  Calendar,
  Layers,
  Sparkles,
  School,
  Laptop,
  BrainCircuit,
  Database,
  ShieldCheck,
  Cpu,
  Monitor,
  Stethoscope,
  Briefcase,
  Users,
  ArrowRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-16 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Background Decorative Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-sand-500/30 text-sand-400 text-xs font-semibold backdrop-blur-md self-center lg:self-start">
                <School className="w-4 h-4 text-sand-400" />
                <span>NURSING EDUCATION INSTITUTION • KOT ADDU</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight leading-tight text-white">
                AL RAHEEM COLLEGE OF NURSING
              </h1>

              <p className="text-sand-300 font-semibold text-sm sm:text-base tracking-wide uppercase">
                TEHSIL & DISTRICT KOT ADDU
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Official institution dedicated to academic nursing education and vocational healthcare learning. Offering the 4-Year BS Nursing Degree Program and 2-Year LHV Diploma Program with structured semester curriculums and skills lab training.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-sm rounded-xl shadow-lg border border-sand-500/30 flex items-center justify-center gap-2 transition-fast transform hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4 text-sand-400" />
                  <span>Admission Information</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('programs')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-navy-900/90 hover:bg-navy-800 text-slate-200 border border-navy-700 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-fast"
                >
                  <BookOpen className="w-4 h-4 text-sand-400" />
                  <span>Explore Programs</span>
                </button>
              </div>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-navy-800">
                <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                  <div className="text-sand-400 font-bold text-lg font-mono">4 YEARS</div>
                  <div className="text-xs text-slate-400">BS Nursing Degree</div>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                  <div className="text-sand-400 font-bold text-lg font-mono">8 SEMESTERS</div>
                  <div className="text-xs text-slate-400">Standard Curriculum</div>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800 col-span-2 sm:col-span-1">
                  <div className="text-sand-400 font-bold text-lg font-mono">2 YEARS</div>
                  <div className="text-xs text-slate-400">LHV Diploma Program</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with 16:9 Natural Aspect Ratio */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-sand-500/30 shadow-2xl bg-navy-950 group">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-950">
                  <img
                    src={heroImg}
                    alt="Al Raheem College of Nursing Kot Addu"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-md bg-navy-700/90 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-sand-500/30 inline-block backdrop-blur-sm">
                      Practical Learning
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-serif drop-shadow-md">
                      Skills Laboratory & Practical Training
                    </h3>
                  </div>
                </div>

                {/* Information bar beneath image to balance height with content */}
                <div className="p-4 bg-navy-900/95 border-t border-navy-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sand-400 shrink-0" />
                    <span>Clinical Skills Lab Environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sand-400 shrink-0" />
                    <span>Bukhari Road Kot Addu Campus</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 2 — ACADEMIC PROGRAMS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Educational Programs"
          title="Academic & Vocational Nursing Programs"
          subtitle="Explore the standard healthcare education offerings documented in the official college prospectus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: BS Nursing */}
          <Card className="flex flex-col justify-between hover:border-navy-700/60 transition-fast">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-navy-100 dark:bg-navy-900 flex items-center justify-center text-navy-900 dark:text-sand-400 border border-navy-200 dark:border-navy-700">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <Badge variant="navy">4 Years Degree</Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif">
                  BS Nursing (BSN)
                </h3>
                <p className="text-xs font-semibold text-navy-700 dark:text-sand-400 mt-0.5">
                  Degree Program • 8 Semesters • 124–136 Credit Hours
                </p>
              </div>

              <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed">
                Comprehensive 4-year degree program structured across 8 semesters. Includes compulsory requirements, general courses, discipline-specific foundation subjects, major courses, biostatistics, research, and clinical practicum.
              </p>

              <div className="space-y-2 pt-2 border-t border-border-med dark:border-navy-800 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                  <span>Tuition: {BSN_FEE_STRUCTURE.fees[2].amount} per semester</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                  <span>Course Load: 15–18 Credit Hours per semester</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                  <span>Includes Research, Seminar & Senior Clinical Practicum</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
              <button
                onClick={() => onNavigate('program-bsn')}
                className="text-xs font-bold text-navy-700 dark:text-sand-400 hover:text-navy-900 dark:hover:text-sand-300 flex items-center gap-1 transition-fast"
              >
                <span>View Full Curriculum</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('fees')}
                className="text-xs text-slate-500 hover:text-navy-900 dark:hover:text-slate-200 transition-fast"
              >
                View Fees
              </button>
            </div>
          </Card>

          {/* Card 2: LHV */}
          <Card className="flex flex-col justify-between hover:border-sand-500/60 transition-fast">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-sand-100 dark:bg-navy-900 flex items-center justify-center text-sand-600 dark:text-sand-400 border border-sand-200 dark:border-navy-700">
                  <BookOpen className="w-6 h-6" />
                </div>
                <Badge variant="sand">2 Years Diploma</Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif">
                  LHV (Lady Health Visitor)
                </h3>
                <p className="text-xs font-semibold text-sand-600 dark:text-sand-400 mt-0.5">
                  Diploma Program • 2 Years
                </p>
              </div>

              <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed">
                2-year diploma training program focusing on community healthcare, maternal & child health, basic clinical support, and preventive nursing practices as outlined in the institutional handbook.
              </p>

              <div className="space-y-2 pt-2 border-t border-border-med dark:border-navy-800 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                  <span>Tuition: {LHV_FEE_STRUCTURE.fees[1].amount} per year</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                  <span>Admission Fee: {LHV_FEE_STRUCTURE.fees[0].amount} (one time)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                  <span>Focused on Community & Preventive Healthcare</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
              <button
                onClick={() => onNavigate('program-lhv')}
                className="text-xs font-bold text-sand-600 dark:text-sand-400 hover:text-sand-700 dark:hover:text-sand-300 flex items-center gap-1 transition-fast"
              >
                <span>View Program Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('fees')}
                className="text-xs text-slate-500 hover:text-navy-900 dark:hover:text-slate-200 transition-fast"
              >
                View Fees
              </button>
            </div>
          </Card>

        </div>
      </section>



      {/* SECTION 3 — COMPUTER & AI SKILL PROGRAMS */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-y border-border-med/80 dark:border-navy-800 bg-light-bg dark:bg-navy-950/70">
        {/* Subtle Technology-Themed Layered Background with Brand Gradient Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-[0.05] dark:opacity-[0.07] mix-blend-multiply dark:mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-transparent to-light-bg dark:from-navy-950 dark:via-navy-950/60 dark:to-navy-950" />
          <div className="absolute -top-24 right-0 w-96 h-96 bg-navy-600/10 dark:bg-navy-600/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 left-0 w-96 h-96 bg-sand-500/10 dark:bg-sand-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
          <SectionHeader
            badge="Digital Skills & Vocational Training"
            title="Computer & AI Skill Programs"
            subtitle="Explore our specialized digital literacy tracks divided into healthcare-integrated curricula for existing students and high-demand skill certifications for external learners."
          />

          {/* TWO MAJOR PROGRAM CATEGORY CARDS SIDE-BY-SIDE (BALANCED EQUAL HEIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* CARD 1 — FOR EXISTING HEALTHCARE STUDENTS */}
            <div 
              onClick={() => onNavigate('programs-existing-students')}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-navy-900 border-2 border-border-med dark:border-navy-800 hover:border-navy-700 dark:hover:border-sand-500 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] h-full"
            >
              <div className="space-y-5 flex-grow flex flex-col justify-between">
                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 dark:bg-navy-950 text-navy-800 dark:text-sand-400 flex items-center justify-center border border-navy-200/80 dark:border-navy-800 shadow-sm group-hover:bg-navy-700 group-hover:text-white dark:group-hover:bg-sand-500 dark:group-hover:text-navy-950 group-hover:border-navy-700 dark:group-hover:border-sand-500 transition-all duration-200 shrink-0">
                    <Laptop className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <Badge variant="navy">4 Specialized Courses</Badge>
                </div>

                {/* Category Meta & Title */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-navy-700 dark:text-sand-400 font-mono">
                    Category 1 • On-Campus Healthcare Track
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-navy-900 dark:text-white font-serif leading-snug group-hover:text-navy-700 dark:group-hover:text-sand-300 transition-colors duration-200 min-h-[3.5rem] flex items-center">
                    Specialized Computer & AI Skill Programs
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sand-600 dark:text-sand-400">
                    For Nursing, LHV & Pharmacy Students
                  </p>
                </div>

                {/* Supporting Overview */}
                <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed min-h-[2.5rem]">
                  Programs specifically designed around the academic, clinical documentation, and hospital management needs of enrolled healthcare scholars.
                </p>

                {/* 4 Course Highlights Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-border-med dark:border-navy-800 flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-900 dark:text-white font-serif uppercase tracking-wider">
                      Included Healthcare Modules:
                    </span>
                    <span className="text-[11px] font-semibold text-navy-700 dark:text-sand-400">
                      On-Campus Lab
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {EXISTING_STUDENT_COURSES.map((c) => (
                      <div key={c.id} className="flex items-center gap-2 p-1.5 rounded-lg bg-navy-50/40 dark:bg-navy-950/40 border border-border-med/60 dark:border-navy-800/60">
                        <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                        <span className="font-medium truncate">{c.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Application Focus Box */}
                <div className="p-3.5 rounded-xl bg-navy-50/70 dark:bg-navy-950/60 border border-navy-200/60 dark:border-navy-800 text-xs text-slate-700 dark:text-slate-300 min-h-[4.2rem] flex items-center">
                  <div>
                    <span className="font-bold text-navy-900 dark:text-sand-400">Clinical Focus: </span>
                    <span>Hospital EMR/EHR, shift documentation, AI research acceleration, and clinical health infographics.</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('programs-existing-students');
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 border border-sand-500/30 shadow-md transition-all duration-200 group-hover:bg-navy-900"
                >
                  <span>VIEW STUDENT PROGRAMS</span>
                  <ArrowRight className="w-4 h-4 text-sand-400 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <span className="hidden sm:block text-xs font-semibold text-slate-500 group-hover:text-navy-900 dark:group-hover:text-sand-300 transition-colors duration-200">
                  4 Dedicated Modules →
                </span>
              </div>
            </div>

            {/* CARD 2 — FOR EXTERNAL STUDENTS & PROFESSIONALS */}
            <div 
              onClick={() => onNavigate('programs-external-students')}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-navy-900 border-2 border-border-med dark:border-navy-800 hover:border-sand-500 dark:hover:border-sand-400 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] h-full"
            >
              <div className="space-y-5 flex-grow flex flex-col justify-between">
                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-sand-50 dark:bg-navy-950 text-sand-700 dark:text-sand-400 flex items-center justify-center border border-sand-200/80 dark:border-navy-800 shadow-sm group-hover:bg-navy-700 group-hover:text-white dark:group-hover:bg-sand-500 dark:group-hover:text-navy-950 group-hover:border-navy-700 dark:group-hover:border-sand-500 transition-all duration-200 shrink-0">
                    <Briefcase className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <Badge variant="sand">9 Certification Courses</Badge>
                </div>

                {/* Category Meta & Title */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-sand-600 dark:text-sand-400 font-mono">
                    Category 2 • Public & Vocational Track
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-navy-900 dark:text-white font-serif leading-snug group-hover:text-navy-700 dark:group-hover:text-sand-300 transition-colors duration-200 min-h-[3.5rem] flex items-center">
                    External Professional & Skill Certification Courses
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-navy-700 dark:text-sand-400">
                    For External Students & Professionals
                  </p>
                </div>

                {/* Supporting Overview */}
                <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed min-h-[2.5rem]">
                  Short-term skill development programs designed for external students and professionals seeking modern digital and market-ready skills.
                </p>

                {/* Course Highlights Checklist (Matching 2x2 layout for balanced height) */}
                <div className="space-y-2.5 pt-4 border-t border-border-med dark:border-navy-800 flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-900 dark:text-white font-serif uppercase tracking-wider">
                      Featured Digital Tracks:
                    </span>
                    <span className="text-[11px] font-semibold text-sand-600 dark:text-sand-400">
                      9 Total Certifications
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {EXTERNAL_STUDENT_COURSES.slice(0, 4).map((c) => (
                      <div key={c.id} className="flex items-center gap-2 p-1.5 rounded-lg bg-sand-50/40 dark:bg-navy-950/40 border border-border-med/60 dark:border-navy-800/60">
                        <CheckCircle2 className="w-4 h-4 text-sand-500 dark:text-sand-400 shrink-0" />
                        <span className="font-medium truncate">{c.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Application Focus Box */}
                <div className="p-3.5 rounded-xl bg-sand-50/70 dark:bg-navy-950/60 border border-sand-200/60 dark:border-navy-800 text-xs text-slate-700 dark:text-slate-300 min-h-[4.2rem] flex items-center">
                  <div>
                    <span className="font-bold text-navy-900 dark:text-sand-400">Career & Freelance: </span>
                    <span>Digital Marketing Ads, WordPress Web, Canva Graphic Design, Prompt Engineering & SEO.</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-6 mt-6 border-t border-border-med dark:border-navy-800 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('programs-external-students');
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 border border-sand-500/30 shadow-md transition-all duration-200 group-hover:bg-navy-900"
                >
                  <span>VIEW EXTERNAL COURSES</span>
                  <ArrowRight className="w-4 h-4 text-sand-400 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <span className="hidden sm:block text-xs font-semibold text-slate-500 group-hover:text-navy-900 dark:group-hover:text-sand-300 transition-colors duration-200">
                  9 Comprehensive Courses →
                </span>
              </div>
            </div>
          </div>

          {/* Facility Highlights Banner */}
          <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-sand-400 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-serif uppercase tracking-wider">Dedicated Lab</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">High-speed networked PC workstations in Kot Addu campus.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-sand-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-serif uppercase tracking-wider">Hands-on Practicum</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Step-by-step practical modules & real-world tasks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-sand-400 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-serif uppercase tracking-wider">Hospital EMR Systems</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Direct training on modern digital clinical records.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-sand-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-serif uppercase tracking-wider">Recognized Certifications</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Institutional certificates verifying digital skills.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      {/* SECTION 4 — INSTITUTIONAL HIGHLIGHTS */}
      <section className="bg-light-bg dark:bg-navy-900/40 py-12 sm:py-16 border-y border-border-med dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Institutional Structure"
            title="Factual Academic & Campus Highlights"
            subtitle="Core operational and academic parameters documented in the college booklet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-900 dark:text-sand-400">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm font-serif">
                16–18 Weeks Semester
              </h4>
              <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                Standardized semester duration with balanced credit hour allocation per course.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-900 dark:text-sand-400">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm font-serif">
                Practical Skills Labs
              </h4>
              <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                Hands-on practical, skills/lab, and clinical components integrated into curriculum.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-900 dark:text-sand-400">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm font-serif">
                Annual Sports Gala
              </h4>
              <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                "Annual Sports Gala is conducted every year on a regular basis" for student activities.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-900 dark:text-sand-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm font-serif">
                Kot Addu Main Campus
              </h4>
              <p className="text-xs text-secondary-text dark:text-slate-300 leading-relaxed">
                Located at Bukhari Road Near Phattay Wali Pull, Tehsil & District Kot Addu.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4 — ACADEMIC STRUCTURE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-10 border border-navy-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-md bg-navy-900 text-sand-400 border border-sand-500/30 text-xs font-bold uppercase tracking-wider">
                BS Nursing Structure
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                Standardized Four-Year Credit Framework
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The BS Nursing curriculum is distributed across 8 semesters (124–136 Credit Hours total) categorized into core academic foundations.
              </p>
              
              <button
                onClick={() => onNavigate('academics')}
                className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm rounded-xl inline-flex items-center gap-2 border border-sand-500/30 transition-fast"
              >
                <span>Explore Full 8-Semester Curriculum</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-navy-800 text-sand-400 font-mono uppercase">
                      <th className="py-2.5 px-3">Category</th>
                      <th className="py-2.5 px-3 text-center">Courses</th>
                      <th className="py-2.5 px-3 text-right">Credit Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800 text-slate-200">
                    {ACADEMIC_STRUCTURE_OVERVIEW.categories.map((cat, i) => (
                      <tr key={i} className="hover:bg-navy-900/50 transition-fast">
                        <td className="py-2.5 px-3 font-medium">{cat.name}</td>
                        <td className="py-2.5 px-3 text-center font-mono">{cat.coursesCount}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-semibold text-sand-400">{cat.creditHours}</td>
                      </tr>
                    ))}
                    <tr className="bg-navy-900 font-bold text-white border-t-2 border-sand-500/40">
                      <td className="py-3 px-3">Overall Program Total</td>
                      <td className="py-3 px-3 text-center font-mono text-sand-400">{ACADEMIC_STRUCTURE_OVERVIEW.totalCoursesRange}</td>
                      <td className="py-3 px-3 text-right font-mono text-sand-400">{ACADEMIC_STRUCTURE_OVERVIEW.totalCreditHoursRange}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 5 — CAMPUS LIFE & SPORTS GALA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Life at Campus"
          title="Student Activities & Sports Gala"
          subtitle="A glimpse into campus life, practical anatomy training, and annual sports events."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="relative rounded-2xl overflow-hidden border border-border-med dark:border-navy-800 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80"
              alt="Annual Sports Gala"
              referrerPolicy="no-referrer"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="px-2.5 py-1 rounded bg-sand-500 text-navy-950 text-[10px] font-bold uppercase tracking-wider w-max mb-1">
                Annual Event
              </span>
              <h3 className="text-lg font-bold font-serif">Annual Sports Gala</h3>
              <p className="text-xs text-slate-200">
                "Annual Sports Gala is conducted every year on a regular basis."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white font-serif">
              Life at Campus & Practical Learning Environment
            </h3>
            <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed">
              The institutional environment at Al Raheem College of Nursing includes clinical learning sessions, anatomy model demonstrations, computer skills instruction, and co-curricular student activities.
            </p>
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                <span>Anatomy & Physiology skills laboratory demonstrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                <span>Computer skills training for modern health records</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-sand-400 shrink-0" />
                <span>Annual sports gala and student wellness activities</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('campus-life')}
                className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 border border-sand-500/30 transition-fast"
              >
                <span>View Campus Life & Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 6 — LOCATION & QUICK CONTACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Visit Al Raheem College of Nursing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Main Campus: {COLLEGE_CONTACT.address}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-white text-navy-900 hover:bg-navy-50 font-bold text-xs rounded-xl shadow transition-fast flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-navy-700" />
                <span>Contact & Map</span>
              </button>
              <button
                onClick={() => onNavigate('admissions')}
                className="px-5 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl shadow border border-sand-500/30 transition-fast flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-sand-400" />
                <span>Admission Checklist</span>
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};
