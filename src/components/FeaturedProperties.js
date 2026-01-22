import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSliders } from 'react-icons/fi';
import PropertyCard from './PropertyCard';

const FeaturedProperties = ({ properties }) => {
  // Defensive check and limit to top 3 for a curated feel
  const featuredProperties = properties?.filter(p => p.featured).slice(0, 3) || [];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        
        {/* Header: Editorial Alignment */}
        <div className="relative mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-10 bg-neutral-900" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                  The Curated Collection
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
                Architectural <br />
                <span className="text-neutral-300 italic font-light">Masterpieces.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-6">
              <p className="max-w-xs text-sm md:text-base text-neutral-500 font-light leading-relaxed lg:text-right">
                A definitive selection of residential assets representing the 
                pinnacle of Nigerian luxury and design.
              </p>
              <Link
                to="/properties"
                className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-900"
              >
                <span>View Full Portfolio</span>
                <div className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Properties Grid: High-End Spacing */}
        <div className="grid grid-cols-1 gap-y-16 md:gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.length > 0 ? (
            featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className={`transition-all duration-700 ${index === 1 ? 'lg:translate-y-12' : ''}`}
              >
                <PropertyCard property={property} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center border border-neutral-100 rounded-[3rem] bg-neutral-50/50">
              <FiSliders className="text-neutral-200 mb-4" size={40} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Awaiting Exclusive Listings
              </p>
            </div>
          )}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-32 flex justify-center">
          <div className="h-px w-24 bg-neutral-100" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;