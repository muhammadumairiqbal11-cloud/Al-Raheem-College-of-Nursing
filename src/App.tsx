import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ErrorBoundary } from './components/ErrorBoundary';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ExistingStudentsProgramsPage } from './pages/ExistingStudentsProgramsPage';
import { ExternalStudentsProgramsPage } from './pages/ExternalStudentsProgramsPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { FeesPage } from './pages/FeesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Dynamic document title update according to route
    const titleMap: Record<string, string> = {
      home: 'Al Raheem College of Nursing – Tehsil & District Kot Addu',
      about: 'About Al Raheem College of Nursing',
      programs: 'Nursing Programs – Al Raheem College of Nursing',
      'program-bsn': 'BS Nursing 4 Years Degree Program – Al Raheem College of Nursing',
      'program-lhv': 'LHV 2 Years Diploma Program – Al Raheem College of Nursing',
      'programs-existing-students': 'Specialized Computer & AI Skill Programs – Al Raheem College of Nursing',
      'programs-external-students': 'External Professional & Skill Certification Courses – Al Raheem College of Nursing',
      academics: 'BS Nursing Curriculum & Academic Structure',
      fees: 'BS Nursing & LHV Fee Structure',
      admissions: 'Admissions – Al Raheem College of Nursing',
      'campus-life': 'Campus Life – Al Raheem College of Nursing',
      gallery: 'Gallery – Al Raheem College of Nursing',
      contact: 'Contact – Al Raheem College of Nursing'
    };

    document.title = titleMap[currentRoute] || 'Al Raheem College of Nursing Kot Addu';
  }, [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'programs':
      case 'program-bsn':
      case 'program-lhv':
        return <ProgramsPage currentRoute={currentRoute} onNavigate={handleNavigate} />;
      case 'programs-existing-students':
        return <ExistingStudentsProgramsPage onNavigate={handleNavigate} />;
      case 'programs-external-students':
        return <ExternalStudentsProgramsPage onNavigate={handleNavigate} />;
      case 'academics':
        return <AcademicsPage />;
      case 'fees':
        return <FeesPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'campus-life':
        return <CampusLifePage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200 relative">
          <Header currentRoute={currentRoute} onNavigate={handleNavigate} />
          <Breadcrumbs currentRoute={currentRoute} onNavigate={handleNavigate} />
          <main className="flex-grow animate-fadeIn">
            {renderPage()}
          </main>
          <Footer onNavigate={handleNavigate} />
          <BackToTop />
          <FloatingWhatsApp />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
