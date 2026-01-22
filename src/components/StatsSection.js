import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '500+', label: 'Exclusive Listings' },
    { value: '1,200+', label: 'Hedge Funds & Private Clients' },
    { value: '15+', label: 'Years of Market Heritage' },
    { value: '25+', label: 'Global Investment Hubs' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        
        {/* Layout: Asymmetrical split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Narrative Header (5 units) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-neutral-900" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                The Performance Audit
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Numbers that define <br />
              <span className="text-neutral-300 italic font-light">Industry Authority.</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-500 font-light leading-relaxed max-w-md">
              A decade and a half of navigating the complexities of the Nigerian luxury 
              market with surgical precision and unwavering discretion.
            </p>
          </div>

          {/* Right: Architectural Stats Grid (7 units) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group border-t border-neutral-100 pt-8 transition-all duration-500 hover:border-neutral-900"
              >
                <div className="flex justify-between items-baseline mb-4">
                   <span className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 group-hover:scale-105 transition-transform duration-500 origin-left">
                     {stat.value}
                   </span>
                   <span className="text-[10px] font-bold text-neutral-300">/ 0{index + 1}</span>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Decorative subtle line to separate from next section */}
        <div className="mt-32 h-px w-full bg-neutral-50" />
      </div>
    </section>
  );
};

export default StatsSection;