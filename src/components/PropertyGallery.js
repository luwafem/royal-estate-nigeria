import React, { useState, useRef } from 'react';
import { FiMaximize2, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const PropertyGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef(null);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full space-y-6">
      {/* 1. LARGE HERO STAGE */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden  bg-neutral-100 group">
        <img
          src={images[currentIndex]}
          alt="Property Main View"
          className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
        />
        
        {/* Overlay Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImage} className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
            <FiChevronLeft size={24} />
          </button>
          <button onClick={nextImage} className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Floating Indicator */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-8 right-8 flex items-center gap-3 px-6 py-3 rounded-full bg-black/50 backdrop-blur-xl text-white border border-white/10 hover:bg-black transition-all"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">View Fullscreen</span>
          <FiMaximize2 size={14} />
        </button>
      </div>

      {/* 2. THE FILMSTRIP (Horizontal Scroll) */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 transition-all duration-500  overflow-hidden ${
                currentIndex === idx 
                  ? 'w-48 md:w-72 ring-2 ring-neutral-900 opacity-100' 
                  : 'w-32 md:w-40 opacity-40 hover:opacity-70'
              }`}
            >
              <img src={img} className="h-24 md:h-32 w-full object-cover" alt={`Slide ${idx}`} />
              {currentIndex === idx && (
                 <div className="absolute inset-0 bg-neutral-900/10 flex items-center justify-center">
                    <div className="h-1 w-1 rounded-full bg-white animate-ping" />
                 </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL (Same immersive logic as before) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] bg-neutral-950 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in-95 duration-300">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
          >
            <FiX size={32} />
          </button>
          
          <img 
            src={images[currentIndex]} 
            className="max-w-full max-h-[80vh] object-contain shadow-2xl" 
            alt="Fullscreen" 
          />
          
          <div className="mt-12 text-white/40 text-[10px] font-bold uppercase tracking-[0.5em]">
            Asset Portfolio — 0{currentIndex + 1} / 0{images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;