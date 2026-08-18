import React, { useState } from 'react';
import { ADMISSION_CHECKLIST, COLLEGE_CONTACT } from '../data/collegeData';
import { SectionHeader, Card, Badge } from '../components/UI';
import { 
  FileText, 
  CheckSquare, 
  Printer, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  Phone, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';

// Helper function to get current local date in YYYY-MM-DD format
const getTodayDateString = (): string => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

// Date-based completed age calculation formula
const calculateAge = (dobStr: string, appDateStr: string): string => {
  if (!dobStr || !appDateStr) return '';

  const dobParts = dobStr.split('-').map(Number);
  const appParts = appDateStr.split('-').map(Number);

  if (dobParts.length !== 3 || appParts.length !== 3) return '';
  const [birthYear, birthMonth, birthDay] = dobParts;
  const [appYear, appMonth, appDay] = appParts;

  if (
    isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay) ||
    isNaN(appYear) || isNaN(appMonth) || isNaN(appDay)
  ) {
    return '';
  }

  // Future DOB protection: if Date of Birth is later than Application Date
  if (
    birthYear > appYear ||
    (birthYear === appYear && birthMonth > appMonth) ||
    (birthYear === appYear && birthMonth === appMonth && birthDay > appDay)
  ) {
    return '';
  }

  let age = appYear - birthYear;

  // If the Application Month/Day is BEFORE the Birth Month/Day, age = age - 1
  if (appMonth < birthMonth || (appMonth === birthMonth && appDay < birthDay)) {
    age -= 1;
  }

  if (age < 0) return '';
  return age.toString();
};

export const AdmissionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'form'>('form');
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    forClass: 'BS Nursing (4 Years)',
    session: '2025–2029',
    applicationDate: getTodayDateString(),
    candidateName: '',
    fatherName: '',
    dob: '',
    age: '',
    domicile: '',
    religion: '',
    maritalStatus: 'Single',
    candidateCnic: '',
    fatherCnic: '',
    permanentAddress: '',
    mailingAddress: '',
    mobile1: '',
    mobile2: '',
    // SSC
    sscYear: '',
    sscTotalMarks: '',
    sscObtainedMarks: '',
    sscPercentage: '',
    sscInstitute: '',
    sscBoard: '',
    // FSC
    fscYear: '',
    fscTotalMarks: '',
    fscObtainedMarks: '',
    fscPercentage: '',
    fscInstitute: '',
    fscBoard: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      if (name === 'dob' || name === 'applicationDate') {
        const nextDob = name === 'dob' ? value : updated.dob;
        const nextAppDate = name === 'applicationDate' ? value : updated.applicationDate;
        updated.age = calculateAge(nextDob, nextAppDate);
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-900 dark:bg-navy-900 dark:text-sand-400 text-xs font-bold uppercase tracking-wider border border-navy-200 dark:border-navy-700">
          Prospectus Admission Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-navy-900 dark:text-white">
          Admission Guidelines & Application Form
        </h1>
        <p className="text-xs sm:text-sm text-secondary-text dark:text-slate-300">
          Digital representation of the official Al Raheem College of Nursing admission form and required documents checklist.
        </p>
      </div>

      {/* Mode Navigation Bar */}
      <div className="flex justify-center border-b border-border-med dark:border-navy-800 pb-4">
        <div className="inline-flex p-1 bg-light-bg dark:bg-navy-900 rounded-xl border border-border-med dark:border-navy-800">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-fast flex items-center gap-2 ${
              activeTab === 'form'
                ? 'bg-navy-900 text-white shadow-xs border border-sand-500/30'
                : 'text-slate-700 dark:text-slate-300 hover:text-navy-800 dark:hover:text-sand-400'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Digital Admission Form</span>
          </button>
          
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-fast flex items-center gap-2 ${
              activeTab === 'checklist'
                ? 'bg-navy-900 text-white shadow-xs border border-sand-500/30'
                : 'text-slate-700 dark:text-slate-300 hover:text-navy-800 dark:hover:text-sand-400'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Required Documents Checklist</span>
          </button>
        </div>
      </div>


      {/* FORM TAB */}
      {activeTab === 'form' && (
        <div className="space-y-8">
          
          {/* Submission Banner Notification */}
          {submitted && (
            <div className="bg-navy-50 dark:bg-navy-950 border-2 border-navy-700 rounded-2xl p-6 text-navy-950 dark:text-sand-100 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-navy-800 dark:text-sand-400 shrink-0" />
                <h3 className="text-lg font-bold font-serif text-navy-900 dark:text-sand-400">
                  Admission Application Form Preview Generated!
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-secondary-text dark:text-slate-300">
                Your admission details have been formatted. Please print this form using the print button below and submit it along with 8 sets of required documents in a file cover at the college campus office:
              </p>
              <div className="p-3 bg-white dark:bg-navy-900 rounded-xl text-xs font-medium border border-navy-200 dark:border-navy-800">
                <strong>Main Campus:</strong> {COLLEGE_CONTACT.address} | <strong>Phones:</strong> {COLLEGE_CONTACT.phones.join(', ')}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 border border-sand-500/30 shadow-xs transition-fast"
                >
                  <Printer className="w-4 h-4 text-sand-400" />
                  <span>Print Form Copy</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-light-bg dark:bg-navy-900 text-navy-900 dark:text-slate-200 font-medium text-xs rounded-xl border border-border-med dark:border-navy-800"
                >
                  Edit Information
                </button>
              </div>
            </div>
          )}

          {/* Printable Form Container */}
          <div className="bg-white dark:bg-navy-950 p-6 sm:p-10 rounded-2xl border-2 border-border-med dark:border-navy-800 shadow-xl space-y-8">
            
            {/* Form Header */}
            <div className="text-center border-b-2 border-navy-900 dark:border-navy-700 pb-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-navy-900 dark:text-white">
                AL RAHEEM COLLEGE OF NURSING
              </h2>
              <p className="text-xs font-bold tracking-widest text-navy-800 dark:text-sand-400 uppercase">
                TEHSIL & DISTRICT KOT ADDU
              </p>
              <p className="text-sm font-serif font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide pt-1">
                ADMISSION FORM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Program & Session */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-navy-50/60 dark:bg-navy-900 p-4 rounded-xl border border-navy-200 dark:border-navy-800">
                <div>
                  <label className="block text-xs font-bold text-navy-900 dark:text-slate-300 mb-1">
                    For Class / Program *
                  </label>
                  <select
                    name="forClass"
                    value={formData.forClass}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-medium"
                  >
                    <option value="BS Nursing (4 Years)">BS Nursing — 4 Years Degree</option>
                    <option value="LHV (2 Years)">LHV — 2 Years Diploma</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 dark:text-slate-300 mb-1">
                    Session *
                  </label>
                  <input
                    type="text"
                    name="session"
                    value={formData.session}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 dark:text-slate-300 mb-1">
                    App. Received No.
                  </label>
                  <input
                    type="text"
                    placeholder="Auto / Office Use"
                    disabled
                    className="w-full text-xs p-2.5 rounded-lg border border-border-med dark:border-navy-800 bg-light-bg dark:bg-navy-900 text-slate-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 dark:text-slate-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-medium"
                  />
                </div>
              </div>


              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-serif text-navy-900 dark:text-white border-b border-border-med dark:border-navy-800 pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Candidate Name *</label>
                    <input
                      type="text"
                      name="candidateName"
                      required
                      value={formData.candidateName}
                      onChange={handleChange}
                      placeholder="Full Candidate Name"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Father's Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Father / Guardian Name"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Age at Admission</label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      readOnly
                      placeholder="Auto-calculated"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-light-bg dark:bg-navy-900 text-navy-900 dark:text-white font-medium cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Domicile *</label>
                    <input
                      type="text"
                      name="domicile"
                      required
                      value={formData.domicile}
                      onChange={handleChange}
                      placeholder="District Domicile"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Religion</label>
                    <input
                      type="text"
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      placeholder="Islam"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Candidate CNIC / B-Form *</label>
                    <input
                      type="text"
                      name="candidateCnic"
                      required
                      value={formData.candidateCnic}
                      onChange={handleChange}
                      placeholder="xxxxx-xxxxxxx-x"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Father's CNIC *</label>
                    <input
                      type="text"
                      name="fatherCnic"
                      required
                      value={formData.fatherCnic}
                      onChange={handleChange}
                      placeholder="xxxxx-xxxxxxx-x"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Marital Status</label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    >
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-3">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Permanent Address *</label>
                    <input
                      type="text"
                      name="permanentAddress"
                      required
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-3">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Mailing Address</label>
                    <input
                      type="text"
                      name="mailingAddress"
                      value={formData.mailingAddress}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile No. 1 *</label>
                    <input
                      type="text"
                      name="mobile1"
                      required
                      value={formData.mobile1}
                      onChange={handleChange}
                      placeholder="03xx-xxxxxxx"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile No. 2</label>
                    <input
                      type="text"
                      name="mobile2"
                      value={formData.mobile2}
                      onChange={handleChange}
                      placeholder="03xx-xxxxxxx"
                      className="w-full p-2.5 rounded-lg border border-border-med dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white font-mono"
                    />
                  </div>
                </div>
              </div>


              {/* Educational Qualifications Table */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-serif text-navy-900 dark:text-white border-b border-border-med dark:border-navy-800 pb-2">
                  Academic Qualifications Record
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-navy-50 dark:bg-navy-900 border-b border-border-med dark:border-navy-800 text-navy-900 dark:text-slate-300 font-mono uppercase">
                        <th className="py-2.5 px-2">Exam</th>
                        <th className="py-2.5 px-2">Passing Year</th>
                        <th className="py-2.5 px-2">Total Marks</th>
                        <th className="py-2.5 px-2">Obtained Marks</th>
                        <th className="py-2.5 px-2">%age</th>
                        <th className="py-2.5 px-2">Institute</th>
                        <th className="py-2.5 px-2">Board</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-med/60 dark:divide-navy-800">
                      {/* SSC */}
                      <tr>
                        <td className="py-2 px-2 font-bold text-navy-900 dark:text-white">S.S.C. (Matric)</td>
                        <td className="py-2 px-2">
                          <input type="text" name="sscYear" value={formData.sscYear} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="sscTotalMarks" value={formData.sscTotalMarks} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="sscObtainedMarks" value={formData.sscObtainedMarks} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="sscPercentage" value={formData.sscPercentage} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="sscInstitute" value={formData.sscInstitute} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="sscBoard" value={formData.sscBoard} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                      </tr>

                      {/* FSC */}
                      <tr>
                        <td className="py-2 px-2 font-bold text-navy-900 dark:text-white">F.Sc. (Pre-Med)</td>
                        <td className="py-2 px-2">
                          <input type="text" name="fscYear" value={formData.fscYear} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="fscTotalMarks" value={formData.fscTotalMarks} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="fscObtainedMarks" value={formData.fscObtainedMarks} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="fscPercentage" value={formData.fscPercentage} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="fscInstitute" value={formData.fscInstitute} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                        <td className="py-2 px-2">
                          <input type="text" name="fscBoard" value={formData.fscBoard} onChange={handleChange} className="w-full p-1.5 rounded border border-border-med dark:border-navy-700 dark:bg-navy-900" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              {/* Undertaking Note */}
              <div className="p-4 bg-navy-50/70 dark:bg-navy-900 rounded-xl border border-navy-200 dark:border-navy-800 text-xs space-y-2">
                <h4 className="font-bold text-navy-900 dark:text-sand-400 uppercase tracking-wider font-mono">
                  Undertaking by Candidate & Guardian
                </h4>
                <p className="text-secondary-text dark:text-slate-300 leading-relaxed">
                  I hereby declare that all information provided in this admission application is correct and authentic. I agree to abide by all institutional rules, university guidelines, and PNC regulations. I understand that the admission fee will not be refunded in any case.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border-med dark:border-navy-800">
                <p className="text-xs text-slate-500">
                  * Note: Complete application form along with 8 sets of required documents must be submitted in a file cover at Kot Addu campus.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm rounded-xl border border-sand-500/30 shadow-md flex items-center justify-center gap-2 transition-fast"
                >
                  <Send className="w-4 h-4 text-sand-400" />
                  <span>Generate Application Preview</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}


      {/* CHECKLIST TAB */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          <SectionHeader
            badge="Documents Required"
            title="Required Documents Checklist (8 Sets)"
            subtitle="The following documents must be attached in a file cover with the completed admission form."
          />

          <Card className="space-y-4">
            <div className="p-3 bg-sand-50 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 rounded-xl text-sand-900 dark:text-sand-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-sand-600 dark:text-sand-400 shrink-0" />
              <span>
                <strong>Prospectus Submission Requirement:</strong> All attested copies must be submitted in 8 sets along with 8 blue background passport photos.
              </span>
            </div>

            <div className="divide-y divide-border-med/60 dark:divide-navy-800">
              {ADMISSION_CHECKLIST.map(doc => (
                <div key={doc.id} className="py-3 px-2 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-navy-100 dark:bg-navy-900 text-navy-900 dark:text-sand-400 font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-navy-200 dark:border-navy-800">
                      {doc.id}
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {doc.title}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 font-mono text-xs font-bold text-navy-900 dark:text-sand-400 border border-navy-200 dark:border-navy-800 shrink-0">
                    {doc.copies}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

    </div>
  );
};
