import React, { useState } from 'react';
import { COLLEGE_CONTACT } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { MapPin, Phone, Clock, Send, CheckCircle2, Building2, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    program: 'BS Nursing (4 Years)',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-sand-400 text-xs font-bold uppercase tracking-wider border border-navy-200 dark:border-navy-700">
          College Office Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-navy-900 dark:text-white">
          Contact Al Raheem College of Nursing
        </h1>
        <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300">
          Official contact numbers and location details for the main campus in Kot Addu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-6">
            <div className="border-b border-border-med dark:border-navy-800 pb-4">
              <Badge variant="navy">Kot Addu Campus</Badge>
              <h2 className="text-xl font-bold font-serif text-navy-900 dark:text-white mt-2">
                Main Campus Location
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-900 dark:text-sand-400 shrink-0 border border-navy-200 dark:border-navy-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-navy-900 dark:text-white font-semibold">Address:</strong>
                  <p className="text-secondary-text dark:text-slate-300 mt-0.5">
                    {COLLEGE_CONTACT.address}
                  </p>
                  <span className="text-navy-800 dark:text-sand-400 font-semibold text-xs mt-1 block">
                    {COLLEGE_CONTACT.district}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border-med/60 dark:border-navy-800 pt-4">
                <div className="p-2.5 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-900 dark:text-sand-400 shrink-0 border border-navy-200 dark:border-navy-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="block text-navy-900 dark:text-white font-semibold">Official Phone Numbers:</strong>
                  <div className="grid grid-cols-1 gap-1 font-mono text-navy-800 dark:text-sand-400 font-bold">
                    {COLLEGE_CONTACT.phones.map((p, idx) => (
                      <a key={idx} href={`tel:${p.replace(/-/g, '')}`} className="hover:underline">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border-med/60 dark:border-navy-800 pt-4">
                <div className="p-2.5 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-900 dark:text-sand-400 shrink-0 border border-navy-200 dark:border-navy-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-navy-900 dark:text-white font-semibold">Campus Office Hours:</strong>
                  <p className="text-secondary-text dark:text-slate-300 mt-0.5">
                    {COLLEGE_CONTACT.campusTiming}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 space-y-2 shadow-md">
            <h3 className="font-bold font-serif text-sm text-sand-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sand-400" />
              Physical Campus Visit
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Prospective students and parents are welcome to visit the Kot Addu campus during office hours to obtain the physical prospectus and submit admission forms.
            </p>
          </div>
        </div>

        {/* Inquiry Form Column */}
        <div className="lg:col-span-7">
          <Card className="space-y-6">
            <div className="border-b border-border-med dark:border-navy-800 pb-4">
              <h2 className="text-xl font-bold font-serif text-navy-900 dark:text-white">
                Send Prospectus Inquiry Message
              </h2>
              <p className="text-xs text-secondary-text dark:text-slate-400 mt-1">
                Have a query regarding BS Nursing or LHV admissions? Send a message to the college desk.
              </p>
            </div>

            {sent ? (
              <div className="p-6 bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-800 rounded-xl space-y-3 text-center">
                <CheckCircle2 className="w-8 h-8 text-navy-800 dark:text-sand-400 mx-auto" />
                <h3 className="font-bold text-navy-900 dark:text-white text-base font-serif">
                  Inquiry Message Sent Successfully!
                </h3>
                <p className="text-xs text-secondary-text dark:text-slate-300">
                  Thank you for contacting Al Raheem College of Nursing Kot Addu. For urgent assistance, please call our official phone numbers:
                </p>
                <div className="font-mono text-navy-900 dark:text-sand-400 font-bold text-xs">
                  {COLLEGE_CONTACT.phones[0]} | {COLLEGE_CONTACT.phones[1]}
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-xl mt-2 border border-sand-500/30 transition-fast"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-navy-900 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryData.name}
                    onChange={e => setInquiryData({ ...inquiryData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-navy-900 dark:text-slate-300 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryData.phone}
                    onChange={e => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    placeholder="03xx-xxxxxxx"
                    className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-navy-900 dark:text-slate-300 mb-1">
                    Program of Interest
                  </label>
                  <select
                    value={inquiryData.program}
                    onChange={e => setInquiryData({ ...inquiryData, program: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-medium"
                  >
                    <option value="BS Nursing (4 Years)">BS Nursing — 4 Years Degree Program</option>
                    <option value="LHV (2 Years)">LHV — 2 Years Diploma Program</option>
                    <option value="General Inquiry">General Admission Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-navy-900 dark:text-slate-300 mb-1">
                    Your Inquiry Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryData.message}
                    onChange={e => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Ask your question about admission, requirements, or fees..."
                    className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm rounded-xl border border-sand-500/30 shadow-md flex items-center justify-center gap-2 transition-fast"
                >
                  <Send className="w-4 h-4 text-sand-400" />
                  <span>Send Inquiry Message</span>
                </button>
              </form>
            )}
          </Card>
        </div>

      </div>
    </div>
  );
};
