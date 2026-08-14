import React from 'react';
import { PageRoute } from '../types';
import { COLLEGE_CONTACT } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { 
  Building2, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Award, 
  BookOpen, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-sand-400 text-xs font-bold uppercase tracking-wider border border-navy-200 dark:border-navy-700">
          Institutional Profile
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-navy-900 dark:text-white">
          About Al Raheem College of Nursing
        </h1>
        <p className="text-navy-700 dark:text-sand-400 font-semibold text-sm uppercase tracking-wide">
          Tehsil & District Kot Addu
        </p>
      </div>

      {/* Main About Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-6 space-y-5 text-secondary-text dark:text-slate-300 text-sm leading-relaxed">
          <h2 className="text-2xl font-bold font-serif text-navy-900 dark:text-white">
            Academic Nursing Education in Kot Addu
          </h2>
          
          <p>
            Al Raheem College of Nursing is an educational institution situated at Bukhari Road Near Phattay Wali Pull in Tehsil & District Kot Addu. The institution is dedicated to providing academic nursing education and vocational healthcare training.
          </p>

          <p>
            The college prospectus documents two primary educational offerings:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-3.5 rounded-xl bg-navy-50 dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800">
              <h3 className="font-bold text-navy-900 dark:text-white text-sm flex items-center gap-2 font-serif">
                <GraduationCap className="w-4 h-4 text-navy-700 dark:text-sand-400" />
                BS Nursing (BSN) — 4 Years Degree Program
              </h3>
              <p className="text-xs text-secondary-text dark:text-slate-300 mt-1">
                Structured across 8 semesters (124–136 total credit hours) including foundational science, nursing theory, biostatistics, research, and senior clinical practicum.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-sand-50 dark:bg-navy-900 border border-sand-200 dark:border-navy-800">
              <h3 className="font-bold text-navy-900 dark:text-white text-sm flex items-center gap-2 font-serif">
                <BookOpen className="w-4 h-4 text-sand-600 dark:text-sand-400" />
                LHV (Lady Health Visitor) — 2 Years Diploma Program
              </h3>
              <p className="text-xs text-secondary-text dark:text-slate-300 mt-1">
                2-year diploma program focusing on preventive healthcare, maternal and child wellness, and community nursing services.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-border-med dark:border-navy-800 shadow-xl bg-navy-950">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
              alt="Nursing Skills Lab Learning"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <p className="text-xs font-mono text-sand-400 uppercase tracking-widest font-semibold">
                Campus & Facilities
              </p>
              <h3 className="text-lg font-bold font-serif">
                Practical Learning & Skills Practicum
              </h3>
              <p className="text-xs text-slate-300">
                {COLLEGE_CONTACT.address}
              </p>
            </div>
          </div>
        </div>

      </div>


      {/* Institutional Framework Details */}
      <div className="bg-light-bg dark:bg-navy-900/50 rounded-2xl p-6 sm:p-10 border border-border-med dark:border-navy-800 space-y-6">
        <SectionHeader
          badge="Verified Prospectus Parameters"
          title="College Academic Framework"
          subtitle="All academic and structural details preserved directly from the official college booklet."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          
          <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
            <div className="font-bold text-navy-900 dark:text-sand-400 text-base font-serif">
              Standardized Curriculum
            </div>
            <p className="text-secondary-text dark:text-slate-300">
              16–18 weeks per semester duration with 15–18 credit hours per semester course load across 40–44 total courses.
            </p>
          </div>

          <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
            <div className="font-bold text-navy-900 dark:text-sand-400 text-base font-serif">
              Campus & Co-Curricular
            </div>
            <p className="text-secondary-text dark:text-slate-300">
              Includes regular campus activities and the "Annual Sports Gala conducted every year on regular basis."
            </p>
          </div>

          <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-border-med dark:border-navy-800 space-y-2 shadow-xs">
            <div className="font-bold text-navy-900 dark:text-sand-400 text-base font-serif">
              Kot Addu Location
            </div>
            <p className="text-secondary-text dark:text-slate-300">
              Main Campus conveniently situated at Bukhari Road Near Phattay Wali Pull Kot Addu.
            </p>
          </div>

        </div>
      </div>


      {/* Contact Summary Box */}
      <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
        <div>
          <h3 className="text-lg font-bold font-serif">
            Need Admission or Program Details?
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Review the complete fee structure, required admission document checklist, or contact the college desk.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('admissions')}
            className="px-4 py-2.5 bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs rounded-xl shadow border border-sand-500/30 transition-fast flex items-center gap-1.5"
          >
            <span>Admission Checklist</span>
            <ChevronRight className="w-4 h-4 text-sand-400" />
          </button>
          <button
            onClick={() => onNavigate('fees')}
            className="px-4 py-2.5 bg-navy-950 hover:bg-navy-800 text-white font-semibold text-xs rounded-xl border border-navy-700 transition-fast"
          >
            <span>Fee Schedule</span>
          </button>
        </div>
      </div>

    </div>
  );
};
