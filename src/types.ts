export type PageRoute = 
  | 'home'
  | 'about'
  | 'programs'
  | 'program-bsn'
  | 'program-lhv'
  | 'programs-existing-students'
  | 'programs-external-students'
  | 'academics'
  | 'fees'
  | 'admissions'
  | 'campus-life'
  | 'gallery'
  | 'contact';

export interface CourseItem {
  id: string;
  title: string;
  theory: number;
  clinical?: number;
  skillsLab?: number;
  totalCredit: number;
}

export interface SemesterData {
  number: number;
  roman: string;
  courses: CourseItem[];
  totalCredits: number;
}

export interface FoundationCourse {
  code: string;
  name: string;
  credits: number;
}

export interface MajorCourse {
  name: string;
  credits: number;
}

export interface FeeItem {
  head: string;
  amount: string;
  frequency: string;
  notes?: string;
}

export interface FeeStructure {
  programName: string;
  duration: string;
  fees: FeeItem[];
  officialNotes: string[];
}

export interface AdmissionDocument {
  id: number;
  title: string;
  copies: string;
  required: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'nursing' | 'laboratory' | 'sports' | 'campus-life';
  imageUrl: string;
  description: string;
}

export interface ContactInfo {
  institutionName: string;
  district: string;
  address: string;
  phones: string[];
  campusTiming: string;
}

export interface ExistingStudentCourse {
  id: string;
  slug: string;
  title: string;
  duration: string;
  targetAudience: string;
  badge: string;
  overview: string;
  keyModules: string[];
  clinicalApplication: string;
  iconName: 'productivity' | 'hospital-system' | 'ai-health' | 'graphic-design';
}

export interface ExternalStudentCourse {
  id: string;
  slug: string;
  title: string;
  duration: string;
  targetAudience: string;
  badge: string;
  overview: string;
  mainModules: string[];
  careerOutcome: string;
  iconName: 'office-ai' | 'marketing' | 'wordpress' | 'seo' | 'canva-ai' | 'ai-prompt' | 'freelance' | 'spoken-english' | 'canva-master';
}
