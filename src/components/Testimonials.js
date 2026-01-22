import React from 'react';
import { FiStar, FiQuote } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Ogunlesi',
      role: 'Private Equity Investor',
      content:
        'The level of discretion and market intelligence provided by Royal Estates is unmatched in the Nigerian space. They didn’t just find a property; they secured an asset.',
      location: 'Lagos',
    },
    {
      name: 'Chinwe Okonkwo',
      role: 'Philanthropist',
      content:
        'Finding a home that matches a specific architectural vision is difficult. Royal Estates curated a private viewing of an off-market estate that exceeded every expectation.',
      location: 'Abuja',
    },
    {
      name: 'Tunde Adebayo',
      role: 'Managing Director',
      content:
        'Their advisory team understands the nuances of real estate as a wealth preservation tool. A seamless, professional, and truly world-class experience.',
      location: 'London / Lagos',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-50/50">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        
        {/* Header: Centered & Minimal */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-neutral-900" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400">
              The Peerage
            </span>
            <span className="h-[1px] w-6 bg-neutral-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
            Voices of <span className="text-neutral-400 italic font-light">Distinction.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((item, idx) => (
            <div key={idx} className="relative flex flex-col">
              {/* Large Aesthetic Quote Icon */}
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Rating - Subtle */}
                <div className="flex mb-8 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-neutral-900 text-neutral-900" size={10} />
                  ))}
                </div>

                {/* Content: Serif for a "Literary/Premium" feel */}
                <blockquote className="text-xl md:text-2xl text-neutral-800 font-serif leading-relaxed mb-12">
                  "{item.content}"
                </blockquote>

                {/* Footer: Modern & Clean */}
                <div className="mt-auto pt-8 border-t border-neutral-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-neutral-900 text-xs uppercase tracking-widest">
                      {item.name}
                    </p>
                    <p className="text-neutral-400 text-[10px] mt-1 uppercase tracking-wider font-medium">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-neutral-300 uppercase tracking-widest">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;