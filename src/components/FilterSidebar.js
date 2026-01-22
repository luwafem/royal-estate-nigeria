import React from 'react';
import { FiFilter, FiChevronRight } from 'react-icons/fi';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const propertyTypes = ['All', 'Apartment', 'Villa', 'Penthouse', 'Commercial', 'Duplex', 'Mansion'];
  const categories = ['All', 'Ultra-Luxury', 'Waterfront', 'Contemporary', 'Smart Home', 'Eco-Friendly'];
  const locations = ['All', 'Lagos', 'Abuja', 'Port Harcourt', 'Enugu', 'Calabar'];
  const bedroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];

  const formatPrice = (amount) => {
    if (amount >= 1000000000) return `₦${(amount / 1000000000).toFixed(1)}B`;
    if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(0)}M`;
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 sticky top-28 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
        <h3 className="text-xs font-bold uppercase tracking-widest">Filters</h3>
        <button 
          onClick={() => onFilterChange({
            type: 'all', category: 'all', location: 'all', priceRange: [0, 5000000000], bedrooms: 'any', status: 'all',
          })}
          className="text-[10px] uppercase text-gray-400 hover:text-black font-bold"
        >
          Reset
        </button>
      </div>

      {/* Region Dropdown */}
      <div className="mb-8">
        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-3">Region</label>
        <select 
          value={filters.location}
          onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none cursor-pointer"
        >
          {locations.map(loc => (
            <option key={loc} value={loc.toLowerCase()}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Price Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <label className="text-[10px] uppercase font-bold text-gray-400">Max Budget</label>
          <span className="text-xs font-bold">{formatPrice(filters.priceRange[1])}</span>
        </div>
        <input
          type="range"
          min="0"
          max="5000000000"
          step="50000000"
          value={filters.priceRange[1]}
          onChange={(e) => onFilterChange({
            ...filters,
            priceRange: [0, parseInt(e.target.value)]
          })}
          className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black"
        />
      </div>

      {/* Bedroom Grid */}
      <div className="mb-8">
        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-4">Bedrooms</label>
        <div className="grid grid-cols-3 gap-2">
          {bedroomOptions.map(opt => (
            <button
              key={opt}
              onClick={() => onFilterChange({ ...filters, bedrooms: opt.toLowerCase() })}
              className={`py-2 text-[10px] font-bold rounded-lg border transition-all ${
                filters.bedrooms === opt.toLowerCase() 
                ? 'bg-black border-black text-white' 
                : 'border-gray-100 text-gray-500 hover:border-black'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      
      {/* Category Chips */}
      <div>
        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-4">Vibe</label>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onFilterChange({ ...filters, category: cat.toLowerCase().replace(/\s+/g, '-') })}
              className={`px-3 py-1.5 text-[9px] font-bold rounded-full border transition-all ${
                filters.category === cat.toLowerCase().replace(/\s+/g, '-')
                ? 'bg-black text-white'
                : 'bg-gray-50 text-gray-500 border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;