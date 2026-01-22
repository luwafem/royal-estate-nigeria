import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { FiArrowRight } from 'react-icons/fi';

const SimilarProperties = ({ properties }) => {
  if (!properties || properties.length === 0) return null;

  return (
    <div className="w-full">
      {/* Header: Refined & Understated */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-neutral-900" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
              Curated Recommendations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Complementary <span className="text-neutral-300 italic font-light">Assets.</span>
          </h2>
        </div>

        <Link
          to="/properties"
          className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 border-b border-transparent hover:border-neutral-900 pb-1 transition-all"
        >
          Explore Entire Portfolio
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid: Clean & Spacious */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {properties.map((property, index) => (
          <div 
            key={property.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* Subtle Footer for the Section */}
      <div className="mt-24 flex justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
      </div>
    </div>
  );
};

export default SimilarProperties;