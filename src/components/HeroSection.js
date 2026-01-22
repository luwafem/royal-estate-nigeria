import React from 'react';
import { FiSearch, FiMapPin, FiChevronRight, FiMousePointer } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      
      {/* Background Image with Layered Masking */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Royal Estate Exterior"
          className="h-full w-full object-cover object-center transition-transform duration-[10000ms] scale-105 group-hover:scale-100"
        />
        {/* Subtle radial gradient to make text pop while keeping edges moody */}
        <div className="absolute inset-0 bg-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 min-h-screen flex flex-col justify-center">
        
        <div className="max-w-4xl pt-20">
          <div className="flex items-center gap-4 mb-8 translate-y-4 animate-fade-in-up">
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60">
              The Sovereign Collection
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white leading-[1.05] animate-fade-in-up transition-all">
            Architectural <br />
            <span className="text-neutral-400 italic font-light">Elegance.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg md:text-xl text-neutral-300 font-light leading-relaxed animate-fade-in-up delay-100">
            Private access to the most exclusive residential portfolios in Lagos, Abuja, and beyond.
          </p>

          {/* New Architectural Search Function */}
          <div className="mt-16 inline-flex flex-col md:flex-row items-stretch bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-2 shadow-2xl animate-fade-in-up delay-200">
            <div className="flex items-center px-6 py-4 border-r border-white/10">
              <FiMapPin className="text-white/40 mr-4" />
              <input 
                type="text" 
                placeholder="Region of interest..."
                className="bg-transparent text-white outline-none placeholder:text-neutral-500 text-sm w-48"
              />
            </div>
            
            <button className="group flex items-center justify-between gap-12 bg-white px-8 py-4 rounded-[1.5rem] transition-all hover:bg-neutral-200 active:scale-95">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                Begin Discovery
              </span>
              <div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <FiChevronRight size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* Status Indicators / Social Proof */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl border-t border-white/10 pt-10">
          <StatItem label="Active Listings" value="120+" />
          <StatItem label="Private Sales" value="₦40B+" />
        </div>

        {/* Minimal Scroll Anchor */}
        <div className="absolute bottom-12 right-10 hidden md:flex items-center gap-6 rotate-90 origin-right">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">
            Scroll to Navigate
          </span>
          <div className="h-20 w-[1px] bg-gradient-to-t from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-xl font-semibold text-white tracking-tighter">{value}</span>
    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">{label}</span>
  </div>
);

export default HeroSection;