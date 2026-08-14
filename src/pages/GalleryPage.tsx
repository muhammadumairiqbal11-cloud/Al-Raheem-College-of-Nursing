import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/collegeData';
import { GalleryItem } from '../types';
import { SectionHeader, Card, Badge } from '../components/UI';
import { Image, X, ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'laboratory', label: 'Laboratory & Skills' },
    { id: 'nursing', label: 'Nursing Practicum' },
    { id: 'sports', label: 'Sports Gala' },
    { id: 'campus-life', label: 'Campus Life' },
    { id: 'campus', label: 'Main Campus' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Visual Highlights
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
          Institutional Photo Gallery
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Photographic overview of laboratory setups, skills learning, sports gala, and campus activities.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors"></div>
              <div className="absolute top-3 right-3 p-2 bg-slate-900/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {item.category.toUpperCase()}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm font-serif">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[70vh] object-contain bg-slate-950"
            />

            <div className="p-6 text-white space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                {activeImage.category}
              </span>
              <h3 className="text-xl font-bold font-serif">{activeImage.title}</h3>
              <p className="text-xs text-slate-300">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
