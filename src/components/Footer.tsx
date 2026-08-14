import React from 'react';
import { PageRoute } from '../types';
import { COLLEGE_CONTACT } from '../data/collegeData';
import { 
  MapPin, 
  Phone, 
  GraduationCap, 
  ChevronRight, 
  ShieldCheck, 
  Building2,
  BookOpen
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-12 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Institution Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-sand-500/30 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5 text-sand-400" />
              </div>
              <div>
                <h2 className="font-bold text-white tracking-tight font-serif text-base">
                  AL RAHEEM
                </h2>
                <p className="text-xs font-semibold text-sand-400 uppercase tracking-wide">
                  COLLEGE OF NURSING
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Official institutional portal for Al Raheem College of Nursing, located in Tehsil & District Kot Addu. Providing academic nursing education and vocational healthcare training.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 text-xs">
              <Building2 className="w-3.5 h-3.5 text-sand-400 shrink-0" />
              <span>{COLLEGE_CONTACT.district}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-sand-400 uppercase tracking-wider font-mono">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', route: 'home' as PageRoute },
                { label: 'About College', route: 'about' as PageRoute },
                { label: 'Academic Programs', route: 'programs' as PageRoute },
                { label: 'Curriculum & Academics', route: 'academics' as PageRoute },
                { label: 'Fee Structure', route: 'fees' as PageRoute },
                { label: 'Admissions & Form', route: 'admissions' as PageRoute },
                { label: 'Campus Life & Sports', route: 'campus-life' as PageRoute },
                { label: 'Photo Gallery', route: 'gallery' as PageRoute },
                { label: 'Contact & Location', route: 'contact' as PageRoute }
              ].map(link => (
                <li key={link.route}>
                  <button
                    onClick={() => onNavigate(link.route)}
                    className="flex items-center text-slate-300 hover:text-sand-400 transition-fast group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-navy-600 group-hover:text-sand-400 transition-fast" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-sand-400 uppercase tracking-wider font-mono">
              Nursing Programs
            </h3>
            
            <div className="space-y-3 text-xs">
              <div 
                onClick={() => onNavigate('program-bsn')}
                className="p-3 rounded-xl bg-navy-900 border border-navy-800 hover:border-sand-500/50 cursor-pointer transition-fast group"
              >
                <div className="flex items-center gap-2 font-semibold text-white group-hover:text-sand-300">
                  <BookOpen className="w-4 h-4 text-sand-400 shrink-0" />
                  <span>BS Nursing (BSN)</span>
                </div>
                <p className="text-slate-400 text-[11px] mt-1">
                  4 Years Degree Program • 8 Semesters • 124–136 Credit Hours
                </p>
              </div>

              <div 
                onClick={() => onNavigate('program-lhv')}
                className="p-3 rounded-xl bg-navy-900 border border-navy-800 hover:border-sand-500/50 cursor-pointer transition-fast group"
              >
                <div className="flex items-center gap-2 font-semibold text-white group-hover:text-sand-300">
                  <BookOpen className="w-4 h-4 text-sand-400 shrink-0" />
                  <span>Lady Health Visitor (LHV)</span>
                </div>
                <p className="text-slate-400 text-[11px] mt-1">
                  2 Years Diploma Program • Healthcare & Community Health
                </p>
              </div>

              {/* Computer & AI Links */}
              <div className="pt-2 border-t border-navy-800 space-y-1.5">
                <button
                  onClick={() => onNavigate('programs-existing-students')}
                  className="w-full text-left text-[11px] text-slate-300 hover:text-sand-400 flex items-center gap-1.5 transition-fast"
                >
                  <ChevronRight className="w-3 h-3 text-sand-400 shrink-0" />
                  <span>Existing Students: Computer & AI (4 Tracks)</span>
                </button>
                <button
                  onClick={() => onNavigate('programs-external-students')}
                  className="w-full text-left text-[11px] text-slate-300 hover:text-sand-400 flex items-center gap-1.5 transition-fast"
                >
                  <ChevronRight className="w-3 h-3 text-sand-400 shrink-0" />
                  <span>External: Professional Certifications (9 Tracks)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-sand-400 uppercase tracking-wider font-mono">
              Campus Contact
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-sand-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Main Campus:</strong><br />
                  {COLLEGE_CONTACT.address}
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <p className="text-slate-400 font-medium flex items-center gap-1.5 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-sand-400" />
                  Official Phone Numbers:
                </p>
                <div className="grid grid-cols-1 gap-1 font-mono text-slate-200 pl-5">
                  {COLLEGE_CONTACT.phones.map((phone, idx) => (
                    <a 
                      key={idx} 
                      href={`tel:${phone.replace(/-/g, '')}`} 
                      className="hover:text-sand-400 transition-fast inline-block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Source Fidelity Note & Copyright */}
        <div className="pt-8 border-t border-navy-900 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-sand-400 shrink-0" />
            <span>
              Official Institutional Source: Al Raheem College of Nursing Prospectus Booklet.
            </span>
          </div>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} AL RAHEEM COLLEGE OF NURSING. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

