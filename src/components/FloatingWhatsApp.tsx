import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '923217361001';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Optional Desktop Hover Tooltip */}
      <div 
        role="tooltip"
        className={`hidden sm:flex items-center bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-800 pointer-events-none transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Chat with us on WhatsApp</span>
        <span className="ml-1.5 text-[10px] text-emerald-400 font-mono font-bold">0321-7361001</span>
      </div>

      {/* Primary Floating WhatsApp Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Al-Raheem College of Nursing on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white flex items-center justify-center shadow-lg hover:shadow-2xl border-2 border-white dark:border-slate-900 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 select-none"
      >
        {/* Canonical WhatsApp SVG Icon for pristine recognition */}
        <svg 
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
        >
          <path d="M12.031 2C6.502 2 2.012 6.486 2.012 12.01c0 1.879.52 3.637 1.424 5.148L2 22.083l5.068-1.401a9.96 9.96 0 0 0 4.963 1.328h.004c5.528 0 10.018-4.486 10.018-10.01C22.053 6.486 17.56 2 12.031 2zm5.83 14.283c-.244.686-1.42 1.309-1.96 1.38-.507.067-1.168.1-3.376-.814-2.824-1.169-4.636-4.045-4.777-4.233-.14-.188-1.144-1.52-1.144-2.9 0-1.38.723-2.06.98-2.342.257-.282.56-.353.748-.353.187 0 .374.002.537.01.173.009.406-.066.635.485.234.563.795 1.94.865 2.082.07.141.117.306.023.493-.093.188-.14.306-.28.47-.14.165-.295.367-.42.493-.141.141-.289.294-.124.576.164.282.73 1.205 1.568 1.951 1.077.958 1.986 1.256 2.268 1.397.282.141.447.118.612-.07.164-.188.702-.816.89-1.098.187-.282.374-.235.632-.141.258.094 1.637.772 1.918.913.281.141.468.211.538.329.07.117.07.68-.174 1.366z" />
        </svg>
      </a>
    </div>
  );
};
