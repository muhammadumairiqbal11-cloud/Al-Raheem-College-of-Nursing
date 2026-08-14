import { ContactInfo, FeeStructure, SemesterData, AdmissionDocument, GalleryItem, ExistingStudentCourse, ExternalStudentCourse } from '../types';

export const COLLEGE_CONTACT: ContactInfo = {
  institutionName: 'AL RAHEEM COLLEGE OF NURSING',
  district: 'Tehsil & District Kot Addu',
  address: 'Bukhari Road Near Phattay Wali Pull Kot Addu.',
  phones: [
    '0321-7361001',
    '0312-7361001',
    '0344-7005220',
    '0307-7178125'
  ],
  campusTiming: 'Monday – Saturday: 8:00 AM – 3:00 PM'
};

export const BSN_FEE_STRUCTURE: FeeStructure = {
  programName: 'BS Nursing (4 Years Degree Program)',
  duration: '4 Years (8 Semesters)',
  fees: [
    { head: 'Application Fee', amount: 'Rs. 3,000', frequency: 'One Time' },
    { head: 'Admission Fee', amount: 'Rs. 70,000', frequency: 'One Time' },
    { head: 'Tuition Fee', amount: 'Rs. 110,000', frequency: 'Per Semester' },
    { head: 'Library & Other Lab Charges', amount: 'Rs. 10,000', frequency: 'Annual' },
    { head: 'Security Fee (Refundable)', amount: 'Rs. 5,000', frequency: 'One Time' },
    { head: 'Student Activity Fee', amount: 'Rs. 3,000', frequency: 'Annual' }
  ],
  officialNotes: [
    'University registration & examination fees will be payable according to university schedule.',
    'PNC registration charges will be submitted according to Pakistan Nursing Council policy.',
    'All fees are subject to changes according to the policy of the university & PNC.',
    'Admission fee will not be refunded in any case as per college policy.'
  ]
};

export const LHV_FEE_STRUCTURE: FeeStructure = {
  programName: 'LHV (Lady Health Visitor - 2 Years Diploma Program)',
  duration: '2 Years Diploma',
  fees: [
    { head: 'Admission Fee', amount: 'Rs. 20,000', frequency: 'One Time' },
    { head: 'Tuition Fee', amount: 'Rs. 100,000', frequency: 'Per Year' },
    { head: 'Library & Other Lab Charges', amount: 'Rs. 5,000', frequency: 'Annual' },
    { head: 'Security Fee (Refundable)', amount: 'Rs. 5,000', frequency: 'One Time' }
  ],
  officialNotes: [
    'Examination & board registration charges will be charged as per board schedule.',
    'Fees are subject to changes according to governing council policy.',
    'Admission fee will not be refunded in any case.'
  ]
};

export const ACADEMIC_STRUCTURE_OVERVIEW = {
  durationYears: 4,
  totalSemesters: 8,
  weeksPerSemester: '16–18 weeks',
  creditHoursPerSemester: '15–18 Cr. Hr.',
  coursesPerSemester: '4–6 courses',
  totalCreditHoursRange: '124–136 Cr. Hr.',
  totalCoursesRange: '40–44 courses',
  categories: [
    { name: 'Compulsory Requirement', coursesCount: '9', creditHours: '25' },
    { name: 'General Courses (from other departments)', coursesCount: '7–8', creditHours: '21–24' },
    { name: 'Discipline Specific Foundation Courses', coursesCount: '9–10', creditHours: '30–33' },
    { name: 'Major Courses (incl. research project/internship)', coursesCount: '11–13', creditHours: '36–42' },
    { name: 'Electives within the major', coursesCount: '4', creditHours: '12' }
  ]
};

export const BSN_SEMESTERS: SemesterData[] = [
  {
    number: 1,
    roman: 'I',
    totalCredits: 16.0,
    courses: [
      { id: '101', title: 'Fundamental of Nursing-I', theory: 2.0, skillsLab: 2.0, totalCredit: 4.0 },
      { id: '102', title: 'Microbiology', theory: 2.5, skillsLab: 0.5, totalCredit: 3.0 },
      { id: '103', title: 'Anatomy & Physiology-I', theory: 3.0, totalCredit: 3.0 },
      { id: '104', title: 'Biochemistry for Nurses', theory: 2.0, skillsLab: 1.0, totalCredit: 3.0 },
      { id: '105', title: 'English-I', theory: 2.0, totalCredit: 2.0 },
      { id: '106', title: 'Computer Skills', theory: 0, skillsLab: 1.0, totalCredit: 1.0 }
    ]
  },
  {
    number: 2,
    roman: 'II',
    totalCredits: 17.0,
    courses: [
      { id: '201', title: 'Fundamental of Nursing-II', theory: 2.0, clinical: 1.0, totalCredit: 4.0 },
      { id: '202', title: 'Anatomy & Physiology-II', theory: 3.0, totalCredit: 3.0 },
      { id: '203', title: 'Community Health Nursing-I', theory: 2.0, clinical: 1.0, totalCredit: 3.0 },
      { id: '204', title: 'Applied Nutrition', theory: 1.0, totalCredit: 1.0 },
      { id: '205', title: 'English-II', theory: 2.0, totalCredit: 2.0 },
      { id: '206', title: 'Islamiat', theory: 2.0, totalCredit: 2.0 },
      { id: '207', title: 'Pak. Studies', theory: 2.0, totalCredit: 2.0 }
    ]
  },
  {
    number: 3,
    roman: 'III',
    totalCredits: 17.0,
    courses: [
      { id: '301', title: 'Adult Health Nursing-I', theory: 4.0, clinical: 3.0, skillsLab: 1.0, totalCredit: 8.0 },
      { id: '302', title: 'Pathophysiology-I', theory: 1.75, skillsLab: 0.25, totalCredit: 2.0 },
      { id: '303', title: 'Health Assessment-I', theory: 1.0, skillsLab: 1.0, totalCredit: 2.0 },
      { id: '304', title: 'Pharmacology-I', theory: 2.0, totalCredit: 2.0 },
      { id: '305', title: 'Mathematics', theory: 1.0, totalCredit: 1.0 },
      { id: '306', title: 'English-III', theory: 2.0, totalCredit: 2.0 }
    ]
  },
  {
    number: 4,
    roman: 'IV',
    totalCredits: 20.0,
    courses: [
      { id: '401', title: 'Adult Health Nursing-II', theory: 4.0, clinical: 3.0, skillsLab: 1.0, totalCredit: 8.0 },
      { id: '402', title: 'Pathophysiology-II', theory: 2.75, skillsLab: 0.25, totalCredit: 3.0 },
      { id: '403', title: 'Health Assessment-II', theory: 1.0, skillsLab: 1.0, totalCredit: 2.0 },
      { id: '404', title: 'Developmental Psychology', theory: 2.0, totalCredit: 2.0 },
      { id: '405', title: 'Pharmacology-II', theory: 2.0, totalCredit: 2.0 },
      { id: '406', title: 'English-III', theory: 2.0, totalCredit: 2.0 },
      { id: '407', title: 'Nursing Ethics', theory: 1.0, totalCredit: 1.0 }
    ]
  },
  {
    number: 5,
    roman: 'V',
    totalCredits: 18.0,
    courses: [
      { id: '501', title: 'Pediatrics Health Nursing', theory: 3.0, clinical: 3.0, skillsLab: 1.0, totalCredit: 7.0 },
      { id: '502', title: 'Community Health Nursing-II', theory: 2.5, clinical: 2.5, skillsLab: 1.0, totalCredit: 6.0 },
      { id: '503', title: 'Teaching/Learning Principles and Practices', theory: 3.0, totalCredit: 3.0 },
      { id: '504', title: 'English-V', theory: 2.0, totalCredit: 2.0 }
    ]
  },
  {
    number: 6,
    roman: 'VI',
    totalCredits: 18.0,
    courses: [
      { id: '601', title: 'Mental Health Nursing', theory: 3.0, clinical: 3.0, totalCredit: 6.0 },
      { id: '602', title: 'Introduction to Biostatistics', theory: 2.5, skillsLab: 0.5, totalCredit: 3.0 },
      { id: '603', title: 'Behavioural Psychology', theory: 3.0, totalCredit: 3.0 },
      { id: '604', title: 'Epidemiology', theory: 2.0, totalCredit: 2.0 },
      { id: '605', title: 'English-VI', theory: 2.0, totalCredit: 2.0 },
      { id: '606', title: 'Culture, Health and Society', theory: 2.0, totalCredit: 2.0 }
    ]
  },
  {
    number: 7,
    roman: 'VII',
    totalCredits: 17.0,
    courses: [
      { id: '701', title: 'Critical Care Nursing', theory: 2.5, clinical: 4.0, skillsLab: 0.5, totalCredit: 7.0 },
      { id: '702', title: 'Introduction to Nursing Theories', theory: 2.0, totalCredit: 2.0 },
      { id: '703', title: 'Leadership and Management in Nursing', theory: 2.0, clinical: 1.0, totalCredit: 3.0 },
      { id: '704', title: 'Nursing Research', theory: 3.0, totalCredit: 3.0 },
      { id: '705', title: 'English VII', theory: 2.0, totalCredit: 2.0 }
    ]
  },
  {
    number: 8,
    roman: 'VIII',
    totalCredits: 12.0,
    courses: [
      { id: '801', title: 'Community Health Nursing-III', theory: 2.0, clinical: 3.0, totalCredit: 5.0 },
      { id: '802', title: 'Nursing Seminar / Role Transition', theory: 2.0, clinical: 4.0, totalCredit: 2.0 },
      { id: '803', title: 'Clinical Practicum', theory: 0, skillsLab: 1.0, totalCredit: 5.0 }
    ]
  }
];

export const FOUNDATION_COURSES = [
  { code: 'FON I', name: 'Fundamentals of Nursing I', credits: 4 },
  { code: 'FON II', name: 'Fundamentals of Nursing II', credits: 4 },
  { code: 'AHN I', name: 'Adult Health Nursing I', credits: 8 },
  { code: 'AHN II', name: 'Adult Health Nursing II', credits: 8 },
  { code: 'CHN I', name: 'Community Health Nursing I', credits: 3 },
  { code: 'HA', name: 'Health Assessment', credits: 4 },
  { code: 'CHS', name: 'Culture, Health & Society', credits: 2 }
];

export const MAJOR_COURSES = [
  { name: 'BIOSTATISTICS', credits: 3 },
  { name: 'RESEARCH', credits: 3 },
  { name: 'EPIDEMIOLOGY', credits: 2 },
  { name: 'LEADERSHIP & MANAGEMENT', credits: 3 },
  { name: 'CRITICAL CARE NURSING', credits: 5 },
  { name: 'NURSING TEACHING / LEARNING', credits: 5 },
  { name: 'COMMUNITY HEALTH NURSING II', credits: 6 },
  { name: 'MENTAL HEALTH NURSING', credits: 6 },
  { name: 'PEDIATRIC HEALTH NURSING', credits: 7 },
  { name: 'PHARMACOLOGY', credits: 4 }
];

export const ELECTIVE_COURSES = [
  { name: 'COMMUNITY HEALTH NURSING III', credits: 5 },
  { name: 'NURSING SEMINAR', credits: 2 },
  { name: 'SENIOR ELECTIVE: CLINICAL PRACTICUM', credits: 5 }
];

export const ADMISSION_CHECKLIST: AdmissionDocument[] = [
  { id: 1, title: 'Picture (Passport Size) Blue Background', copies: '8 Nos.', required: true },
  { id: 2, title: 'HSSC / FSC (Pre-Medical) with Physics, Chemistry & Biology', copies: '8 Sets', required: true },
  { id: 3, title: 'HSSC / Matric (Science) with Physics, Chemistry & Biology', copies: '8 Sets', required: true },
  { id: 4, title: 'CNIC / B-Form of Candidate (Computerized)', copies: '8 Sets', required: true },
  { id: 5, title: 'CNIC of Father / Guardian (Computerized)', copies: '8 Sets', required: true },
  { id: 6, title: 'Domicile Certificate', copies: '8 Sets', required: true },
  { id: 7, title: 'Character Certificate from Last Attended Institute', copies: '8 Sets', required: true },
  { id: 8, title: 'Medical Fitness Certificate', copies: '8 Sets', required: true },
  { id: 9, title: 'Others (Additional Academic or Identity Records)', copies: 'As Required', required: false }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Anatomy & Practical Science Learning',
    category: 'laboratory',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Students engaged in interactive anatomy model studies and clinical skills lab sessions.'
  },
  {
    id: 'g2',
    title: 'Nursing Skills Lab Practicum',
    category: 'nursing',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    description: 'Hands-on practice in health assessment and patient care techniques.'
  },
  {
    id: 'g3',
    title: 'Annual Sports Gala Event',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
    description: 'Regular annual sports gala conducted every year for student wellness and teamwork.'
  },
  {
    id: 'g4',
    title: 'Campus Life & Academic Activities',
    category: 'campus-life',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Student interactions, seminars, and collaborative academic learning on campus.'
  },
  {
    id: 'g5',
    title: 'Kot Addu Main Campus Entrance',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Main campus grounds located at Bukhari Road Near Phattay Wali Pull Kot Addu.'
  },
  {
    id: 'g6',
    title: 'Microbiology & Biochemistry Lab',
    category: 'laboratory',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    description: 'Equipped science laboratories supporting foundational pre-clinical courses.'
  }
];

export const EXISTING_STUDENT_COURSES: ExistingStudentCourse[] = [
  {
    id: 'ex-digital-healthcare-office',
    slug: 'digital-healthcare-office-productivity',
    title: 'Digital Healthcare & Office Productivity',
    duration: '2.5 Months (10 Weeks)',
    targetAudience: 'Nursing, LHV, & Pharmacy Students',
    badge: 'Clinical Productivity',
    overview: 'Comprehensive training in modern digital office tools, professional typing, official correspondence, and digital patient documentation specifically tailored for healthcare environments.',
    keyModules: [
      'Advanced MS Word: Nursing Reports, Handover Notes & Shift Summaries',
      'MS Excel: Patient Vitals Logging, Duty Rosters & Clinical Tabulation',
      'MS PowerPoint: Medical Case Presentations & Academic Seminars',
      'Dual Language Typing Mastery: English & Urdu InPage Formats',
      'Google Workspace, Cloud Storage & Secure Healthcare File Sharing'
    ],
    clinicalApplication: 'Equips nursing and pharmacy students to maintain error-free clinical records, draft official nursing shift notes, and manage administrative ward duties efficiently.',
    iconName: 'productivity'
  },
  {
    id: 'ex-hospital-pharmacy-systems',
    slug: 'hospital-pharmacy-management',
    title: 'Hospital & Pharmacy Management Systems',
    duration: '2.5 Months (10 Weeks)',
    targetAudience: 'Nursing, LHV, & Pharmacy Students',
    badge: 'Hospital Software (HIMS / EMR)',
    overview: 'Hands-on practical training in digital hospital management systems, electronic health records (EHR/EMR), patient admission triage, prescription tracking, and pharmacy inventory control.',
    keyModules: [
      'Hospital Information Management Systems (HIMS / HMS) Architecture',
      'Electronic Medical Records (EMR / EHR): Patient History & Charting',
      'Inpatient & Outpatient Department (IPD/OPD) Digital Workflow',
      'Digital Pharmacy Inventory: Drug Stocking, Expiry & POS Billing',
      'Laboratory & Diagnostic Report Archiving & Clinical Telemetry'
    ],
    clinicalApplication: 'Prepares students for immediate clinical readiness in automated tertiary care hospitals, private clinical centers, and institutional pharmacy setups.',
    iconName: 'hospital-system'
  },
  {
    id: 'ex-ai-healthcare-students',
    slug: 'ai-healthcare-students',
    title: 'AI Applications for Healthcare Students',
    duration: '1.5 Months (6 Weeks)',
    targetAudience: 'Nursing, LHV, & Pharmacy Students',
    badge: 'AI in Healthcare',
    overview: 'Practical introduction to ethical Generative AI tools, modern prompt engineering frameworks, automated literature review synthesis, and AI-assisted clinical study workflows.',
    keyModules: [
      'Prompt Engineering for Medical & Nursing Queries',
      'AI-Powered Medical Research, Literature Search & Article Synthesis',
      'Automated Care Plan Outlining & Patient Education Material Generation',
      'Ethical AI, Data Verification, Hallucination Checks & Patient Privacy',
      'AI Productivity Workflows for Nursing Assignments & Examination Prep'
    ],
    clinicalApplication: 'Accelerates academic learning, streamlines nursing research literature reviews, and provides structured frameworks for evidence-based clinical study.',
    iconName: 'ai-health'
  },
  {
    id: 'ex-healthcare-graphic-design',
    slug: 'healthcare-graphic-design',
    title: 'Healthcare Graphic Design & Social Media',
    duration: '1.5 Months (6 Weeks)',
    targetAudience: 'Nursing, LHV, & Pharmacy Students',
    badge: 'Health Visuals & Media',
    overview: 'Creative design skills using modern design tools to create professional public health awareness flyers, clinical infographics, educational social media campaigns, and academic posters.',
    keyModules: [
      'Canva Pro Essentials: Layouts, Medical Palettes & Typography',
      'Public Health Awareness Posters & Patient Advisory Pamphlets',
      'Clinical Infographics & Disease Prevention Visual Guides',
      'Designing Academic Research Posters for Medical Conferences',
      'Social Media Campaign Creatives for Hospital Drives & Health Days'
    ],
    clinicalApplication: 'Empowers healthcare practitioners to visually communicate health hygiene guidelines, maternal health awareness, and institutional event materials.',
    iconName: 'graphic-design'
  }
];

export const EXTERNAL_STUDENT_COURSES: ExternalStudentCourse[] = [
  {
    id: 'ext-modern-office-ai',
    slug: 'modern-office-management-ai',
    title: 'Modern Office Management with AI Tools',
    duration: '2.5 Months (10 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'Office AI & Administration',
    overview: 'Complete modern office automation course combining advanced Microsoft Office suite with modern AI assistants for automated document creation, corporate emailing, and administrative management.',
    mainModules: [
      'MS Office Automation: Advanced Word, Excel & PowerPoint',
      'AI-Powered Corporate Email Drafting, Minutes of Meeting & Formal Reports',
      'Calendar Scheduling, Task Automation & Google Workspace Integration',
      'High-Speed Typing, Professional Formatting & Document Archiving',
      'Office Administration, Filing Systems & Executive Assistant Skills'
    ],
    careerOutcome: 'Prepares learners for high-demand roles as Office Administrators, Executive Assistants, Data Entry Operators, and Corporate Coordinators.',
    iconName: 'office-ai'
  },
  {
    id: 'ext-digital-marketing-ads',
    slug: 'digital-marketing-social-media-ads',
    title: 'Digital Marketing & Social Media Ads Masterclass',
    duration: '2.5 Months (10 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'Digital Marketing & Ads',
    overview: 'Practical, results-oriented training in digital marketing strategies, Meta Ads Manager (Facebook & Instagram), TikTok Ads, lead generation funnels, and performance tracking.',
    mainModules: [
      'Social Media Marketing Strategy & Organic Growth Fundamentals',
      'Meta Ads Manager: Campaign Setup, Detailed Targeting & Budgeting',
      'Pixel Integration, Retargeting Strategies & Custom Audiences',
      'TikTok Ads & Short-Form Video Marketing for Brand Awareness',
      'Lead Generation Funnels, Copywriting & Campaign Analytics'
    ],
    careerOutcome: 'Enables students to launch freelance digital marketing careers, work with international clients, or scale local businesses through paid advertising.',
    iconName: 'marketing'
  },
  {
    id: 'ext-wordpress-web-blogging',
    slug: 'wordpress-website-designing-blogging',
    title: 'WordPress Website Designing & Blogging',
    duration: '2.5 Months (10 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'Web Design & CMS',
    overview: 'Hands-on training in building custom, responsive websites, corporate portfolios, e-commerce stores, and monetizeable blogs using WordPress and Elementor without coding.',
    mainModules: [
      'Domain, CPanel & WordPress Installation & Setup',
      'Elementor Page Builder: Drag-and-Drop Responsive Web Layouts',
      'WooCommerce Setup: Products, Payment Gateways & Store Management',
      'Blogging Fundamentals, Content Structuring & On-Page SEO Basics',
      'Website Security, Speed Optimization & Client Project Handover'
    ],
    careerOutcome: 'Qualifies graduates to build commercial client websites, offer freelance WordPress services on Fiverr/Upwork, or run profitable niche blogs.',
    iconName: 'wordpress'
  },
  {
    id: 'ext-seo-link-building',
    slug: 'link-building-seo-guest-posting',
    title: 'Link Building, SEO & Guest Posting Course',
    duration: '2 Months (8 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'SEO & Outreach',
    overview: 'Specialized course in Search Engine Optimization (SEO), off-page backlink acquisition, high-authority guest posting, blogger outreach, and link-building monetization.',
    mainModules: [
      'Search Engine Optimization (SEO) Core Fundamentals & Algorithms',
      'Keyword Research, Competitor Analysis & Search Intent Mapping',
      'Off-Page SEO & High-Authority Backlink Acquisition Strategies',
      'Blogger Outreach, Email Pitching & Guest Posting Brokering',
      'Monetization: Client SEO Packages, Fiverr Gigs & Reseller Services'
    ],
    careerOutcome: 'Enables students to provide in-demand off-page SEO services, guest posting vendor services, and rank digital assets on Google search.',
    iconName: 'seo'
  },
  {
    id: 'ext-ai-canva-design',
    slug: 'ai-graphic-design-canva',
    title: 'AI-Powered Graphic Design with Canva',
    duration: '2 Months (8 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'AI Visual Design',
    overview: 'Master modern commercial graphic design using Canva Pro integrated with modern AI image generators, brand kit systems, and marketing creative workflows.',
    mainModules: [
      'Canva Pro Tools, Grid Systems, Color Harmonies & Typography',
      'AI Image Generation Tools: Magic Media, Text to Image & Expander',
      'Social Media Post Sets, Carousel Design & Video Reels',
      'Print Media: Professional Brochures, Business Cards, Posters & Banners',
      'Portfolio Development, Client Mockups & Design Freelancing'
    ],
    careerOutcome: 'Prepares students for freelancing as Social Media Graphic Designers, Content Creators, and Branding Specialists.',
    iconName: 'canva-ai'
  },
  {
    id: 'ext-practical-ai-prompt',
    slug: 'practical-ai-tools-prompt-engineering',
    title: 'Practical AI Tools & Prompt Engineering Course',
    duration: '1.5 Months (6 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'Generative AI & Automation',
    overview: 'In-depth masterclass on cutting-edge Generative AI models (ChatGPT, Claude, Gemini, Perplexity), advanced prompt frameworks, automated content generation, and workflow optimization.',
    mainModules: [
      'Foundations of LLMs & Architecture of Effective Prompting',
      'Role, Context, Few-Shot & Chain-of-Thought Prompt Frameworks',
      'Automated Long-Form Writing, Research Summarization & Coding Help',
      'AI for Data Cleaning, Spreadsheet Analysis & Presentation Outlines',
      'AI Tools Workflow Integration: Automation & Productivity Mastery'
    ],
    careerOutcome: 'Transforms professionals and students into high-efficiency AI power-users, multiplying productivity across all workplace and creative tasks.',
    iconName: 'ai-prompt'
  },
  {
    id: 'ext-female-freelancing-ecommerce',
    slug: 'female-freelancing-ecommerce',
    title: 'Female Freelancing & Home-Based E-Commerce',
    duration: '2.5 Months (10 Weeks)',
    targetAudience: 'External Students & Professionals (Special Female Track)',
    badge: 'Freelancing & E-Commerce',
    overview: 'Empowerment program designed for women seeking to build independent income from home through global freelancing platforms, local e-commerce, and social commerce businesses.',
    mainModules: [
      'Introduction to High-Demand Remote Digital Skills & Freelance Economy',
      'Upwork & Fiverr Profile Setup, Proposal Writing & Client Communication',
      'Home-Based Social Commerce (Daraz, WhatsApp Business & Instagram Shop)',
      'Product Sourcing, Order Dispatch, Customer Support & Basic Accounting',
      'Safe Digital Payment Methods & Home-Based Career Sustainability'
    ],
    careerOutcome: 'Empowers female learners to establish sustainable home-based freelancing agencies and profitable social e-commerce businesses.',
    iconName: 'freelance'
  },
  {
    id: 'ext-spoken-english-ai-emailing',
    slug: 'spoken-english-professional-emailing',
    title: 'Spoken English & Professional Emailing with AI',
    duration: '2 Months (8 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'Business Communication',
    overview: 'Practical fluency program focusing on spoken conversational English, workplace presentations, interview confidence, and AI-assisted formal business correspondence.',
    mainModules: [
      'Everyday Spoken English Fluency, Accent Neutralization & Pronunciation',
      'Job Interview Preparation, Self-Introduction & Presentation Skills',
      'Corporate Email Etiquette, Inquiry Letters & Business Proposals',
      'AI-Powered Grammar Correction, Vocabulary Enhancers & Tone Adjustment',
      'Interactive Dialogue Sessions, Listening Comprehension & Speaking Labs'
    ],
    careerOutcome: 'Builds fluent English communication for corporate jobs, international client handling, and academic interviews.',
    iconName: 'spoken-english'
  },
  {
    id: 'ext-canva-offline-masterclass',
    slug: 'complete-canva-graphic-design-masterclass',
    title: 'Complete Canva Graphic Design Masterclass (Offline On-Campus)',
    duration: '2 Months (8 Weeks)',
    targetAudience: 'External Students & Professionals',
    badge: 'On-Campus Studio Lab',
    overview: 'Intensive on-campus computer laboratory masterclass focusing on hands-on practical design projects, print production, corporate identity packages, and client portfolio creation.',
    mainModules: [
      'On-Campus Lab Sessions: Advanced Canvas Tools & Layer Techniques',
      'Corporate Identity: Logo Design, Letterheads & Brand Guidelines',
      'Commercial Marketing Collateral: Flyers, Menus, Roll-up Banners',
      'Digital Assets: YouTube Thumbnails, UI Mockups & Ad Creatives',
      'Print Production File Preparation (CMYK, Bleed, High-Res Export)'
    ],
    careerOutcome: 'Graduates gain hands-on studio experience and a complete professional design portfolio ready for immediate client acquisition.',
    iconName: 'canva-master'
  }
];

