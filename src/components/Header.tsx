import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COLLEGE_CONTACT } from '../data/collegeData';
import { useTheme } from '../context/ThemeContext';
import { 
  Phone, 
  MapPin, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  GraduationCap, 
  ChevronDown, 
  FileText,
  Clock,
  Megaphone,
  Laptop,
  Stethoscope,
  Briefcase,
  BrainCircuit,
  Award
} from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const navItems: { label: string; route: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'HOME', route: 'home' },
    { label: 'ABOUT', route: 'about' },
    { label: 'PROGRAMS', route: 'programs', hasDropdown: true },
    { label: 'ACADEMICS', route: 'academics' },
    { label: 'FEES', route: 'fees' },
    { label: 'ADMISSIONS', route: 'admissions' },
    { label: 'CAMPUS LIFE', route: 'campus-life' },
    { label: 'GALLERY', route: 'gallery' },
    { label: 'CONTACT', route: 'contact' }
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-navy-950 shadow-md border-b border-border-med dark:border-navy-800 transition-colors">
      {/* Top Contact & Animated Announcement Bar */}
      <div className="bg-navy-900 text-slate-200 py-2 border-b border-navy-800 overflow-hidden select-none relative z-10">
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {/* Set 1 */}
            <div className="flex items-center gap-6 pr-6 shrink-0 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sand-500/20 text-sand-300 text-[11px] font-bold uppercase tracking-wider border border-sand-500/30 shrink-0">
                <Megaphone className="w-3 h-3 text-sand-400 shrink-0" /> Admissions Open
              </span>
              <span className="font-semibold text-white">
                BS Nursing (4 Years) & LHV (2 Years) — Contact College Desk for Prospectus & Admissions!
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center text-slate-300">
                <MapPin className="w-3.5 h-3.5 mr-1 text-sand-500 shrink-0" />
                {COLLEGE_CONTACT.address}
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 mr-1 text-sand-500 shrink-0" />
                {COLLEGE_CONTACT.campusTiming}
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sand-500 shrink-0" />
                <span className="font-mono text-sand-300 font-bold">{COLLEGE_CONTACT.phones[0]}</span>
                <span className="text-navy-600">|</span>
                <span className="font-mono">{COLLEGE_CONTACT.phones[1]}</span>
                <span className="text-navy-600">|</span>
                <span className="font-mono">{COLLEGE_CONTACT.phones[2]}</span>
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
            </div>

            {/* Set 2 */}
            <div className="flex items-center gap-6 pr-6 shrink-0 text-xs font-medium" aria-hidden="true">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sand-500/20 text-sand-300 text-[11px] font-bold uppercase tracking-wider border border-sand-500/30 shrink-0">
                <Megaphone className="w-3 h-3 text-sand-400 shrink-0" /> Admissions Open
              </span>
              <span className="font-semibold text-white">
                BS Nursing (4 Years) & LHV (2 Years) — Contact College Desk for Prospectus & Admissions!
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center text-slate-300">
                <MapPin className="w-3.5 h-3.5 mr-1 text-sand-500 shrink-0" />
                {COLLEGE_CONTACT.address}
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 mr-1 text-sand-500 shrink-0" />
                {COLLEGE_CONTACT.campusTiming}
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sand-500 shrink-0" />
                <span className="font-mono text-sand-300 font-bold">{COLLEGE_CONTACT.phones[0]}</span>
                <span className="text-navy-600">|</span>
                <span className="font-mono">{COLLEGE_CONTACT.phones[1]}</span>
                <span className="text-navy-600">|</span>
                <span className="font-mono">{COLLEGE_CONTACT.phones[2]}</span>
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
            </div>

            {/* Set 3 (3-set infinite loop guarantee) */}
            <div className="flex items-center gap-6 pr-6 shrink-0 text-xs font-medium" aria-hidden="true">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sand-500/20 text-sand-300 text-[11px] font-bold uppercase tracking-wider border border-sand-500/30 shrink-0">
                <Megaphone className="w-3 h-3 text-sand-400 shrink-0" /> Admissions Open
              </span>
              <span className="font-semibold text-white">
                BS Nursing (4 Years) & LHV (2 Years) — Contact College Desk for Prospectus & Admissions!
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center text-slate-300">
                <MapPin className="w-3.5 h-3.5 mr-1 text-sand-500 shrink-0" />
                {COLLEGE_CONTACT.address}
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 mr-1 text-sand-500 shrink-0" />
                {COLLEGE_CONTACT.campusTiming}
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
              <span className="inline-flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sand-500 shrink-0" />
                <span className="font-mono text-sand-300 font-bold">{COLLEGE_CONTACT.phones[0]}</span>
                <span className="text-navy-600">|</span>
                <span className="font-mono">{COLLEGE_CONTACT.phones[1]}</span>
                <span className="text-navy-600">|</span>
                <span className="font-mono">{COLLEGE_CONTACT.phones[2]}</span>
              </span>
              <span className="text-sand-500/60 font-serif">✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-navy-700 rounded-lg p-0.5 shrink-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-900 via-navy-700 to-navy-800 flex items-center justify-center text-white shadow-md border border-sand-500/30 group-hover:scale-105 transition-transform duration-150 shrink-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-sand-400" />
          </div>
          <div className="flex flex-col justify-center shrink-0">
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-navy-900 dark:text-white leading-none font-serif whitespace-nowrap">
              AL-RAHEEM
            </h1>
            <p className="text-[10px] sm:text-[11px] font-semibold text-navy-700 dark:text-sand-400 tracking-wide uppercase leading-tight mt-0.5 whitespace-nowrap">
              COLLEGE OF NURSING
            </p>
            <p className="text-[9px] sm:text-[10px] font-bold text-navy-900/80 dark:text-sand-300 tracking-widest uppercase leading-none mt-0.5 whitespace-nowrap">
              KOT ADDU
            </p>
          </div>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5 shrink-0">
          {navItems.map(item => {
            if (item.hasDropdown) {
              return (
                <div key={item.route} className="relative group shrink-0" onMouseLeave={() => setProgramsDropdownOpen(false)}>
                  <button
                    onClick={() => handleNavClick('programs')}
                    onMouseEnter={() => setProgramsDropdownOpen(true)}
                    className={`px-2 lg:px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-lg transition-fast flex items-center gap-1 whitespace-nowrap ${
                      currentRoute.startsWith('program') 
                        ? 'text-navy-900 dark:text-sand-400 bg-navy-50 dark:bg-navy-900 font-bold border-b-2 border-sand-500' 
                        : 'text-slate-700 dark:text-slate-200 hover:text-navy-700 dark:hover:text-sand-400 hover:bg-navy-50/80 dark:hover:bg-navy-900/60'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-75 shrink-0" />
                  </button>

                  {/* Dropdown Menu */}
                  {programsDropdownOpen && (
                    <div className="absolute left-0 mt-1 w-80 bg-white dark:bg-navy-900 rounded-xl shadow-2xl border border-border-med dark:border-navy-800 p-2 z-50 animate-fadeIn space-y-2">
                      {/* Group: Core Degree & Diploma Programs */}
                      <div>
                        <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                          Degree & Diploma Programs
                        </div>
                        <button
                          onClick={() => handleNavClick('program-bsn')}
                          className="w-full text-left px-3 py-2 text-xs hover:bg-navy-50 dark:hover:bg-navy-800 font-semibold text-navy-900 dark:text-slate-100 hover:text-navy-700 dark:hover:text-sand-400 flex items-center justify-between rounded-lg transition-fast"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-navy-700 shrink-0"></span>
                            <span>BS Nursing (4 Years Degree)</span>
                          </div>
                        </button>
                        <button
                          onClick={() => handleNavClick('program-lhv')}
                          className="w-full text-left px-3 py-2 text-xs hover:bg-navy-50 dark:hover:bg-navy-800 font-semibold text-navy-900 dark:text-slate-100 hover:text-navy-700 dark:hover:text-sand-400 flex items-center justify-between rounded-lg transition-fast"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sand-500 shrink-0"></span>
                            <span>LHV (2 Years Diploma)</span>
                          </div>
                        </button>
                      </div>

                      {/* Group: Computer & AI Skill Programs */}
                      <div className="pt-1.5 border-t border-border-med/80 dark:border-navy-800 space-y-1">
                        <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-700 dark:text-sand-400 font-mono">
                          Computer & AI Skill Programs
                        </div>

                        {/* Audience 1: Existing Healthcare Students */}
                        <button
                          onClick={() => handleNavClick('programs-existing-students')}
                          className="w-full text-left p-2.5 hover:bg-navy-50 dark:hover:bg-navy-800/80 rounded-lg group/item transition-fast border border-transparent hover:border-navy-200 dark:hover:border-navy-700"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-navy-100 dark:bg-navy-950 text-navy-900 dark:text-sand-400 flex items-center justify-center shrink-0 mt-0.5 border border-navy-200 dark:border-navy-800">
                              <Stethoscope className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="text-xs font-bold text-navy-900 dark:text-white group-hover/item:text-navy-700 dark:group-hover/item:text-sand-300">
                                Specialized Computer & AI Skills
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                4 Courses for Nursing, LHV & Pharmacy
                              </div>
                            </div>
                          </div>
                        </button>

                        {/* Audience 2: External Students & Professionals */}
                        <button
                          onClick={() => handleNavClick('programs-external-students')}
                          className="w-full text-left p-2.5 hover:bg-sand-50 dark:hover:bg-navy-800/80 rounded-lg group/item transition-fast border border-transparent hover:border-sand-200 dark:hover:border-navy-700"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-sand-100 dark:bg-navy-950 text-sand-600 dark:text-sand-400 flex items-center justify-center shrink-0 mt-0.5 border border-sand-200 dark:border-navy-800">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="text-xs font-bold text-navy-900 dark:text-white group-hover/item:text-sand-600 dark:group-hover/item:text-sand-300">
                                External Professional & Skill Courses
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                9 Market Certifications (Public / External)
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-2 lg:px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-lg transition-fast whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-navy-900 dark:text-sand-400 bg-navy-50 dark:bg-navy-900 font-bold border-b-2 border-sand-500'
                    : 'text-slate-700 dark:text-slate-200 hover:text-navy-700 dark:hover:text-sand-400 hover:bg-navy-50/80 dark:hover:bg-navy-900/60'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-navy-900 transition-fast border border-border-med dark:border-navy-800 shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-sand-400 shrink-0" />
            ) : (
              <Moon className="w-4 h-4 text-navy-900 shrink-0" />
            )}
          </button>

          {/* Apply Now Primary CTA */}
          <button
            onClick={() => handleNavClick('admissions')}
            className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 bg-navy-700 hover:bg-navy-900 active:bg-navy-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md border border-sand-500/30 transition-fast transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-sand-400 shrink-0" />
            <span className="whitespace-nowrap uppercase tracking-wider">APPLY NOW</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-navy-900 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-navy-900 border border-border-med dark:border-navy-800 shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 shrink-0" /> : <Menu className="w-5 h-5 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-navy-950 border-b border-border-med dark:border-navy-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-fadeIn">
          {navItems.map(item => {
            const isActive = currentRoute === item.route;
            return (
              <div key={item.route}>
                <button
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-fast ${
                    isActive
                      ? 'bg-navy-50 dark:bg-navy-900 text-navy-900 dark:text-sand-400 font-bold border-l-4 border-sand-500'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-navy-900'
                  }`}
                >
                  <span>{item.label}</span>
                </button>

                {/* Mobile Submenu for Programs */}
                {item.route === 'programs' && (
                  <div className="ml-4 pl-3 border-l-2 border-sand-500/40 my-1 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 pt-1 font-mono">
                      Degree & Diploma
                    </div>
                    <button
                      onClick={() => handleNavClick('program-bsn')}
                      className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-navy-700 dark:hover:text-sand-400 transition-fast"
                    >
                      • BS Nursing (4 Years Degree)
                    </button>
                    <button
                      onClick={() => handleNavClick('program-lhv')}
                      className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-navy-700 dark:hover:text-sand-400 transition-fast"
                    >
                      • LHV (2 Years Diploma)
                    </button>

                    <div className="text-[10px] font-bold text-navy-700 dark:text-sand-400 uppercase tracking-wider px-2 pt-2 font-mono">
                      Computer & AI Programs
                    </div>
                    <button
                      onClick={() => handleNavClick('programs-existing-students')}
                      className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-navy-700 dark:hover:text-sand-400 transition-fast"
                    >
                      • Existing Healthcare Student Courses (4 Tracks)
                    </button>
                    <button
                      onClick={() => handleNavClick('programs-external-students')}
                      className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sand-600 dark:hover:text-sand-400 transition-fast"
                    >
                      • External Professional Certifications (9 Tracks)
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-3">
            <button
              onClick={() => handleNavClick('admissions')}
              className="w-full py-3 bg-navy-700 hover:bg-navy-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md border border-sand-500/30 transition-fast"
            >
              <FileText className="w-4 h-4 text-sand-400" />
              <span>Admissions & Admission Form</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
