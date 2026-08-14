import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-22 right-6 z-30 p-2.5 rounded-full bg-navy-900/90 hover:bg-navy-700 text-white shadow-xl border border-sand-500/40 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-navy-700"
    >
      <ArrowUp className="w-4 h-4 text-sand-400" />
    </button>
  );
};

