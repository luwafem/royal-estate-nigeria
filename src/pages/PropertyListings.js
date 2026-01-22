import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import FilterSidebar from '../components/FilterSidebar';
import { FiSliders, FiRotateCcw } from 'react-icons/fi';

const PropertyListings = ({ properties }) => {
  // 1. UPDATED INITIAL STATE: Increased price max and added new fields
  const [filters, setFilters] = useState({
    type: 'all',
    location: 'all',
    category: 'all',
    priceRange: [0, 5000000000], // Matches the new 5B max
    bedrooms: 'any',
    status: 'all',
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    applyFilters(filters);
  }, [properties, filters]); // Added filters to dependency array for better reliability

  const applyFilters = (newFilters) => {
    const filtered = properties.filter((property) => {
      // A. TYPE FILTER (Case-insensitive)
      if (newFilters.type !== 'all' && 
          property.type.toLowerCase() !== newFilters.type.toLowerCase()) {
        return false;
      }

      // B. STATUS FILTER (Handle "For Sale" vs "for-sale")
      const formattedStatus = property.status.toLowerCase().replace(/\s+/g, '-');
      if (newFilters.status !== 'all' && formattedStatus !== newFilters.status) {
        return false;
      }

      // C. LOCATION FILTER (Partial match for "Lagos" in "Banana Island, Lagos")
      if (newFilters.location !== 'all' && 
          !property.location.toLowerCase().includes(newFilters.location.toLowerCase())) {
        return false;
      }

      // D. CATEGORY FILTER
      const formattedCategory = property.category?.toLowerCase().replace(/\s+/g, '-');
      if (newFilters.category && newFilters.category !== 'all' && 
          formattedCategory !== newFilters.category) {
        return false;
      }

      // E. BEDROOMS FILTER (Handles "3+" string logic)
      if (newFilters.bedrooms !== 'any') {
        const minBeds = parseInt(newFilters.bedrooms);
        if (property.bedrooms < minBeds) return false;
      }

      // F. PRICE FILTER
      if (property.price < newFilters.priceRange[0] || property.price > newFilters.priceRange[1]) {
        return false;
      }

      return true;
    });
    setFilteredProperties(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      location: 'all',
      category: 'all',
      priceRange: [0, 5000000000],
      bedrooms: 'any',
      status: 'all',
    });
  };

  return (
    <Layout
      title="The Portfolio | Royal Estates"
      description="Browse our curated selection of Nigeria's most prestigious real estate."
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-32 pb-24">
        
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-neutral-900" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
              The Sovereign Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-none">
            Our <span className="text-neutral-300 italic font-light">Portfolio.</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-500 font-light max-w-xl leading-relaxed">
            From the shores of Victoria Island to the hills of Maitama, explore 
            assets that redefine the standard of Nigerian luxury.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-8 text-neutral-900">
              <FiSliders size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Refine Search</span>
            </div>
            
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 pb-6 border-b border-neutral-100 gap-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Found <span className="text-neutral-900">{filteredProperties.length}</span> curated residences
              </p>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Sort By</span>
                <select className="bg-transparent text-[11px] font-bold uppercase tracking-wider text-neutral-900 focus:outline-none cursor-pointer border-none">
                  <option>Latest Arrivals</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="py-32 flex flex-col items-center justify-center border border-dashed border-neutral-200 rounded-[3rem] bg-neutral-50/50">
                <div className="mb-6 p-6 rounded-full bg-white shadow-sm">
                  <FiRotateCcw className="text-neutral-300" size={32} />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-2">No matches found</h3>
                <p className="text-neutral-500 font-light mb-8 text-center max-w-xs leading-relaxed">
                  Try adjusting your budget or selecting a different region.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-10 py-4 bg-neutral-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition hover:bg-black"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                {filteredProperties.map((property, index) => (
                  <div 
                    key={property.id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${(index % 6) * 100}ms` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyListings;