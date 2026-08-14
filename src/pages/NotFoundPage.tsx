import React from 'react';
import { PageRoute } from '../types';
import { Card, Badge } from '../components/UI';
import { Home, BookOpen, Phone, AlertCircle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center space-y-8">
      <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-300 dark:border-amber-800">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <Badge variant="amber">404 — Page Not Found</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
          Requested Information Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          The requested section might have been moved or updated. Please use the quick navigation buttons below to explore official academic and admission details for Al Raheem College of Nursing.
        </p>
      </div>

      <Card className="max-w-xl mx-auto p-6 space-y-4 text-left">
        <h3 className="font-bold text-sm font-serif text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
          Recommended Official Navigation
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <button
            onClick={() => onNavigate('home')}
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:border-emerald-300 text-left flex items-center gap-2.5 transition-colors font-medium text-slate-800 dark:text-slate-200"
          >
            <Home className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => onNavigate('programs')}
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:border-emerald-300 text-left flex items-center gap-2.5 transition-colors font-medium text-slate-800 dark:text-slate-200"
          >
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Nursing Programs</span>
          </button>

          <button
            onClick={() => onNavigate('admissions')}
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:border-emerald-300 text-left flex items-center gap-2.5 transition-colors font-medium text-slate-800 dark:text-slate-200"
          >
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Admission Information</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:border-emerald-300 text-left flex items-center gap-2.5 transition-colors font-medium text-slate-800 dark:text-slate-200"
          >
            <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Contact College Desk</span>
          </button>
        </div>
      </Card>
    </div>
  );
};
