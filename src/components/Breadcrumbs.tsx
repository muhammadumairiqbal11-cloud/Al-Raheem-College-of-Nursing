import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  subTitle?: string;
}

const ROUTE_LABELS: Record<PageRoute, string> = {
  home: 'Home',
  about: 'About College',
  programs: 'Academic Programs',
  'program-bsn': 'BS Nursing (4 Years)',
  'program-lhv': 'LHV (2 Years)',
  'programs-existing-students': 'Specialized Computer & AI Skill Programs (Existing Students)',
  'programs-external-students': 'External Professional & Skill Certification Courses',
  academics: 'Academics & Curriculum',
  fees: 'Fee Structure',
  admissions: 'Admission Info & Form',
  'campus-life': 'Life at Campus & Sports Gala',
  gallery: 'Photo Gallery',
  contact: 'Contact & Location'
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentRoute, onNavigate, subTitle }) => {
  if (currentRoute === 'home') return null;

  return (
    <nav className="bg-navy-50/70 dark:bg-navy-900/60 border-b border-border-med/80 dark:border-navy-800 py-3 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center text-xs sm:text-sm text-secondary-text dark:text-slate-300 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center hover:text-navy-700 dark:hover:text-sand-400 font-medium transition-fast"
        >
          <Home className="w-3.5 h-3.5 mr-1 text-sand-500" />
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 dark:text-slate-500 shrink-0" />
        
        {(currentRoute.startsWith('program-') || currentRoute.startsWith('programs-')) && (
          <>
            <button
              onClick={() => onNavigate('programs')}
              className="hover:text-navy-700 dark:hover:text-sand-400 font-medium transition-fast"
            >
              Programs
            </button>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 dark:text-slate-500 shrink-0" />
          </>
        )}

        <span className="font-semibold text-navy-900 dark:text-white">
          {subTitle || ROUTE_LABELS[currentRoute]}
        </span>
      </div>
    </nav>
  );
};

