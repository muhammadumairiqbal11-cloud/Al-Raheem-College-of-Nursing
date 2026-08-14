import React, { useState } from 'react';
import { BSN_SEMESTERS, FOUNDATION_COURSES, MAJOR_COURSES, ELECTIVE_COURSES, ACADEMIC_STRUCTURE_OVERVIEW } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { BookOpen, Layers, Award, CheckCircle2, Search, Filter } from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sem12' | 'sem34' | 'sem56' | 'sem78' | 'categories'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSemesters = BSN_SEMESTERS.filter(sem => {
    if (activeTab === 'sem12') return sem.number === 1 || sem.number === 2;
    if (activeTab === 'sem34') return sem.number === 3 || sem.number === 4;
    if (activeTab === 'sem56') return sem.number === 5 || sem.number === 6;
    if (activeTab === 'sem78') return sem.number === 7 || sem.number === 8;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-sand-400 text-xs font-bold uppercase tracking-wider border border-navy-200 dark:border-navy-700">
          Official Prospectus Curriculum
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-navy-900 dark:text-white">
          Academics & Semester-Wise Scheme of Studies
        </h1>
        <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300">
          Complete course distribution across 8 semesters for the 4-Year BS Nursing Degree Program as documented in the official booklet.
        </p>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-light-bg dark:bg-navy-900 p-3 rounded-2xl border border-border-med dark:border-navy-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: 'All 8 Semesters' },
            { id: 'sem12', label: 'Year I (Sem 1 & 2)' },
            { id: 'sem34', label: 'Year II (Sem 3 & 4)' },
            { id: 'sem56', label: 'Year III (Sem 5 & 6)' },
            { id: 'sem78', label: 'Year IV (Sem 7 & 8)' },
            { id: 'categories', label: 'Course Categories' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-fast whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-navy-900 text-white shadow-xs border border-sand-500/30'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-navy-100 dark:hover:bg-navy-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search subject title..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-navy-950 text-xs text-navy-900 dark:text-slate-100 rounded-xl border border-border-med dark:border-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700"
          />
        </div>
      </div>

      {/* Main Semester Breakdown View */}
      {activeTab !== 'categories' && (
        <div className="space-y-10">
          {filteredSemesters.map(semester => {
            const matchedCourses = semester.courses.filter(c => 
              c.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchedCourses.length === 0) return null;

            return (
              <Card key={semester.number} className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-border-med dark:border-navy-800 pb-3">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <Badge variant="navy">SEMESTER {semester.roman}</Badge>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        (Year {Math.ceil(semester.number / 2)})
                      </span>
                    </div>
                    <h2 className="text-xl font-bold font-serif text-navy-900 dark:text-white mt-1">
                      Semester {semester.number} Course Breakdown
                    </h2>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-800 text-navy-900 dark:text-sand-400 font-mono text-xs font-bold self-start sm:self-auto">
                    Total Credit: {semester.totalCredits.toFixed(2)}
                  </div>
                </div>

                {/* Table for Semester */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-navy-50/70 dark:bg-navy-900 text-navy-900 dark:text-slate-300 font-mono uppercase border-b border-border-med dark:border-navy-800">
                        <th className="py-2.5 px-3">Course Title</th>
                        <th className="py-2.5 px-3 text-center">Theory</th>
                        <th className="py-2.5 px-3 text-center">Clinical</th>
                        <th className="py-2.5 px-3 text-center">Skills / Lab</th>
                        <th className="py-2.5 px-3 text-right">Total Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-med/60 dark:divide-navy-800 text-slate-800 dark:text-slate-200">
                      {(searchQuery ? matchedCourses : semester.courses).map(course => (
                        <tr key={course.id} className="hover:bg-navy-50/50 dark:hover:bg-navy-800/40 transition-fast">
                          <td className="py-2.5 px-3 font-semibold">{course.title}</td>
                          <td className="py-2.5 px-3 text-center font-mono text-slate-600 dark:text-slate-400">
                            {course.theory ? course.theory.toFixed(2) : '—'}
                          </td>
                          <td className="py-2.5 px-3 text-center font-mono text-slate-600 dark:text-slate-400">
                            {course.clinical ? course.clinical.toFixed(2) : '—'}
                          </td>
                          <td className="py-2.5 px-3 text-center font-mono text-slate-600 dark:text-slate-400">
                            {course.skillsLab ? course.skillsLab.toFixed(2) : '—'}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-navy-800 dark:text-sand-400">
                            {course.totalCredit.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-navy-100/60 dark:bg-navy-900/90 font-bold text-navy-950 dark:text-white border-t-2 border-navy-200 dark:border-navy-700">
                        <td className="py-3 px-3">Semester {semester.number} Total</td>
                        <td className="py-3 px-3 text-center font-mono">—</td>
                        <td className="py-3 px-3 text-center font-mono">—</td>
                        <td className="py-3 px-3 text-center font-mono">—</td>
                        <td className="py-3 px-3 text-right font-mono text-navy-900 dark:text-sand-400 text-sm">
                          {semester.totalCredits.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Course Categories Breakdown View */}
      {(activeTab === 'categories' || activeTab === 'all') && (
        <div className="space-y-10 pt-6 border-t border-border-med dark:border-navy-800">
          <SectionHeader
            badge="Categorized Framework"
            title="Foundation, Major & Elective Subject Groups"
            subtitle="Categorical breakdown as documented in the institutional prospectus tables."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Foundation Courses */}
            <Card className="space-y-4">
              <div className="border-b border-border-med dark:border-navy-800 pb-2">
                <Badge variant="navy">30–33 Credit Hours</Badge>
                <h3 className="text-lg font-bold font-serif text-navy-900 dark:text-white mt-1">
                  Discipline Specific Foundation Courses
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {FOUNDATION_COURSES.map((fc, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded bg-navy-50/50 dark:bg-navy-900 border border-border-med/40 dark:border-navy-800">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{fc.code} — {fc.name}</span>
                    <span className="font-mono font-bold text-navy-800 dark:text-sand-400">{fc.credits} Cr</span>
                  </div>
                ))}
              </div>
              <div className="p-2 bg-navy-100 dark:bg-navy-900 rounded text-xs font-bold text-navy-900 dark:text-sand-400 text-right font-mono border border-navy-200 dark:border-navy-800">
                Total Foundation Credit Hours: 33
              </div>
            </Card>

            {/* Major Courses */}
            <Card className="space-y-4">
              <div className="border-b border-border-med dark:border-navy-800 pb-2">
                <Badge variant="sand">36–42 Credit Hours</Badge>
                <h3 className="text-lg font-bold font-serif text-navy-900 dark:text-white mt-1">
                  Major Courses (incl. Research/Practicum)
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {MAJOR_COURSES.map((mc, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded bg-sand-50/50 dark:bg-navy-900 border border-border-med/40 dark:border-navy-800">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{mc.name}</span>
                    <span className="font-mono font-bold text-sand-600 dark:text-sand-400">{mc.credits} Cr</span>
                  </div>
                ))}
              </div>
              <div className="p-2 bg-sand-100 dark:bg-navy-900 rounded text-xs font-bold text-sand-700 dark:text-sand-400 text-right font-mono border border-sand-200 dark:border-navy-800">
                Total Major Credit Hours: 42
              </div>
            </Card>

            {/* Elective Courses */}
            <Card className="space-y-4">
              <div className="border-b border-border-med dark:border-navy-800 pb-2">
                <Badge variant="blue">12 Credit Hours</Badge>
                <h3 className="text-lg font-bold font-serif text-navy-900 dark:text-white mt-1">
                  Elective Courses within Major
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {ELECTIVE_COURSES.map((ec, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded bg-medblue-50/50 dark:bg-navy-900 border border-border-med/40 dark:border-navy-800">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{ec.name}</span>
                    <span className="font-mono font-bold text-navy-800 dark:text-sand-400">{ec.credits} Cr</span>
                  </div>
                ))}
              </div>
              <div className="p-2 bg-medblue-100 dark:bg-navy-900 rounded text-xs font-bold text-navy-900 dark:text-sand-400 text-right font-mono border border-medblue-200 dark:border-navy-800">
                Total Elective Credit Hours: 12
              </div>
            </Card>

          </div>
        </div>
      )}

    </div>
  );
};
