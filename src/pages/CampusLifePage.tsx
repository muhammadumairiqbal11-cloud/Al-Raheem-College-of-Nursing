import React from 'react';
import { PageRoute } from '../types';
import { SectionHeader, Card, Badge } from '../components/UI';
import { Activity, Trophy, Heart, Users, Sparkles, ChevronRight } from 'lucide-react';

interface CampusLifePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Student Activities
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
          Life at Campus & Annual Sports Gala
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Experiencing student life, practical skills training, and annual sports events at Al Raheem College of Nursing Kot Addu.
        </p>
      </div>

      {/* Sports Gala Spotlight */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-emerald-800/80 shadow-2xl space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="amber">Annual Event</Badge>
          <span className="text-xs text-amber-300 font-mono font-bold uppercase">Sports Gala</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              Annual Sports Gala
            </h2>
            <blockquote className="p-4 rounded-xl bg-slate-800/80 border-l-4 border-amber-500 italic text-slate-200 text-sm">
              "Annual Sports Gala is conducted every year on a regular basis."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The college organizes regular sports activities as part of campus life, encouraging physical fitness, teamwork, and student camaraderie alongside academic nursing studies.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-amber-500/30 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80"
                alt="Annual Sports Gala Activities"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Campus Life Features */}
      <div className="space-y-8">
        <SectionHeader
          badge="Campus Environment"
          title="Practical Skills & Student Learning"
          subtitle="The learning atmosphere provided across laboratories and classrooms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base font-serif">
              Anatomy & Skills Lab
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Demonstration models and laboratory setups supporting practical learning in Anatomy, Physiology, and Fundamentals of Nursing.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base font-serif">
              Co-Curricular Seminars
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Nursing ethics workshops, research presentations, and student discussions integrated into senior academic years.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base font-serif">
              Student Wellness & Sports
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Regular athletic competitions and outdoor sports gala organized annually for student development.
            </p>
          </Card>
        </div>
      </div>

      {/* Gallery Link Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-bold font-serif">Explore the College Photo Gallery</h3>
          <p className="text-xs text-slate-300">View photographs of campus, laboratory learning, and sports events.</p>
        </div>
        <button
          onClick={() => onNavigate('gallery')}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl shrink-0 transition-colors flex items-center gap-2"
        >
          <span>View Photo Gallery</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
