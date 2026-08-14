import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-sand-400 border border-navy-200 dark:border-navy-700 mb-3 shadow-xs">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white font-serif tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-secondary-text dark:text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface BadgeProps {
  variant?: 'navy' | 'blue' | 'sand' | 'slate' | 'emerald' | 'amber' | 'teal';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'navy', children }) => {
  const styles = {
    navy: 'bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-navy-100 border-navy-300 dark:border-navy-700',
    blue: 'bg-navy-50 text-navy-800 dark:bg-navy-950 dark:text-navy-200 border-navy-200 dark:border-navy-800',
    sand: 'bg-sand-100 text-sand-600 dark:bg-navy-900 dark:text-sand-400 border-sand-500/40 dark:border-sand-500/50',
    slate: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
    emerald: 'bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-navy-100 border-navy-300 dark:border-navy-700',
    amber: 'bg-sand-100 text-sand-600 dark:bg-navy-900 dark:text-sand-400 border-sand-500/40 dark:border-sand-500/50',
    teal: 'bg-navy-50 text-navy-800 dark:bg-navy-950 dark:text-navy-200 border-navy-200 dark:border-navy-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${styles[variant]}`}>
      {children}
    </span>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-navy-900/90 rounded-2xl border border-border-med/80 dark:border-navy-800 p-6 shadow-sm ${
        hoverEffect ? 'hover:shadow-lg hover:border-navy-700/50 dark:hover:border-sand-500/50 hover:-translate-y-0.5 transition-all duration-150' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

