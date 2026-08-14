import React from 'react';
import { BSN_FEE_STRUCTURE, LHV_FEE_STRUCTURE } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { DollarSign, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export const FeesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-sand-400 text-xs font-bold uppercase tracking-wider border border-navy-200 dark:border-navy-700">
          Institutional Fee Schedules
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-navy-900 dark:text-white">
          Fee Structure & Financial Guidelines
        </h1>
        <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300">
          Official fee details for BS Nursing and LHV programs preserved directly from the Al Raheem College of Nursing prospectus.
        </p>
      </div>

      {/* Grid of Fees */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* BSN Fee Card */}
        <Card className="space-y-6">
          <div className="border-b border-border-med dark:border-navy-800 pb-4 flex justify-between items-start">
            <div>
              <Badge variant="navy">Degree Program</Badge>
              <h2 className="text-2xl font-bold font-serif text-navy-900 dark:text-white mt-2">
                {BSN_FEE_STRUCTURE.programName}
              </h2>
              <p className="text-xs text-navy-700 dark:text-sand-400 font-mono mt-0.5 font-semibold">
                Duration: {BSN_FEE_STRUCTURE.duration}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-50 dark:bg-navy-900 border-b border-border-med dark:border-navy-800 text-navy-900 dark:text-slate-300 font-mono uppercase">
                  <th className="py-2.5 px-3">Fee Head</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                  <th className="py-2.5 px-3 text-right">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-med/60 dark:divide-navy-800 text-slate-800 dark:text-slate-200">
                {BSN_FEE_STRUCTURE.fees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-navy-50/50 dark:hover:bg-navy-800/50 transition-fast">
                    <td className="py-3 px-3 font-semibold">{fee.head}</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-navy-800 dark:text-sand-400 text-sm">
                      {fee.amount}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-500 dark:text-slate-400">
                      {fee.frequency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-navy-50 dark:bg-navy-900 p-4 rounded-xl border border-navy-200 dark:border-navy-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-sand-400 flex items-center gap-1.5 font-serif">
              <ShieldAlert className="w-4 h-4 text-navy-700 dark:text-sand-400" />
              Official Policy Notes (BS Nursing):
            </h4>
            <ul className="text-xs text-secondary-text dark:text-slate-300 space-y-1.5 list-disc list-inside">
              {BSN_FEE_STRUCTURE.officialNotes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        </Card>

        {/* LHV Fee Card */}
        <Card className="space-y-6">
          <div className="border-b border-border-med dark:border-navy-800 pb-4 flex justify-between items-start">
            <div>
              <Badge variant="sand">Diploma Program</Badge>
              <h2 className="text-2xl font-bold font-serif text-navy-900 dark:text-white mt-2">
                {LHV_FEE_STRUCTURE.programName}
              </h2>
              <p className="text-xs text-sand-600 dark:text-sand-400 font-mono mt-0.5 font-semibold">
                Duration: {LHV_FEE_STRUCTURE.duration}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-sand-50/60 dark:bg-navy-900 border-b border-border-med dark:border-navy-800 text-navy-900 dark:text-slate-300 font-mono uppercase">
                  <th className="py-2.5 px-3">Fee Head</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                  <th className="py-2.5 px-3 text-right">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-med/60 dark:divide-navy-800 text-slate-800 dark:text-slate-200">
                {LHV_FEE_STRUCTURE.fees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-sand-50/50 dark:hover:bg-navy-800/50 transition-fast">
                    <td className="py-3 px-3 font-semibold">{fee.head}</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-sand-600 dark:text-sand-400 text-sm">
                      {fee.amount}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-500 dark:text-slate-400">
                      {fee.frequency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-sand-50 dark:bg-navy-900 p-4 rounded-xl border border-sand-200 dark:border-navy-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sand-700 dark:text-sand-400 flex items-center gap-1.5 font-serif">
              <ShieldAlert className="w-4 h-4 text-sand-600 dark:text-sand-400" />
              Official Policy Notes (LHV Diploma):
            </h4>
            <ul className="text-xs text-secondary-text dark:text-slate-300 space-y-1.5 list-disc list-inside">
              {LHV_FEE_STRUCTURE.officialNotes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        </Card>

      </div>
    </div>
  );
};
