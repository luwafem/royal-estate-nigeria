import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiHeart, FiMaximize, FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineBed, MdOutlineBathtub } from 'react-icons/md';
import { toast } from 'react-toastify';

const formatPrice = (amount) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    location,
    price,
    type,
    bedrooms,
    bathrooms,
    squareFootage,
    images, // Correctly mapping to the array in properties.js
    featured,
    status,
  } = property;

  return (
    <Link to={`/property/${id}`} className="group block">
      <article className="overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
        
        {/* IMAGE SECTION */}
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
          <img
            src={images && images.length > 0 ? images[0] : 'https://placehold.co/600x800?text=Premium+Listing'}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          
          {/* BADGES: Top Left */}
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
            <span className="backdrop-blur-md bg-black/30 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10">
              {status}
            </span>
            {featured && (
              <span className="bg-white text-neutral-950 text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                Exclusive
              </span>
            )}
          </div>

          {/* ACTION: Top Right */}
          <div className="absolute top-6 right-6 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10">
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                toast.dark('Saved to your private collection'); 
              }}
              className="p-4 bg-white text-neutral-950 rounded-full shadow-2xl hover:bg-neutral-900 hover:text-white transition-all"
            >
              <FiHeart size={18} />
            </button>
          </div>

          {/* BOTTOM GRADIENT (For readability on light photos) */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          
          <div className="absolute bottom-6 left-8 text-white opacity-0 translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
                View Property <FiArrowUpRight />
             </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-8">
          <div className="flex justify-between items-baseline mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400">
              {type}
            </span>
            <div className="text-neutral-950 font-bold">
              <span className="text-2xl tracking-tighter">{formatPrice(price)}</span>
              {status === 'For Rent' && <span className="text-[10px] font-light text-neutral-400 ml-1">/ annum</span>}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-neutral-500 transition-colors line-clamp-1">
            {title}
          </h3>

          <div className="flex items-center text-sm text-neutral-400 font-light mb-8">
            <FiMapPin className="mr-2 text-neutral-900" size={14} />
            <span className="truncate">{location}</span>
          </div>

          {/* AMENITY BAR */}
          <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
            <div className="flex items-center gap-6">
              <IconStat icon={<MdOutlineBed />} value={bedrooms} label="Beds" />
              <IconStat icon={<MdOutlineBathtub />} value={bathrooms} label="Baths" />
              <IconStat icon={<FiMaximize />} value={`${squareFootage.toLocaleString()}`} label="Sq Ft" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

// Reusable Sub-component for Amenity Stats
const IconStat = ({ icon, value, label }) => (
  <div className="flex items-center gap-2">
    <span className="text-neutral-300 text-lg">{icon}</span>
    <div className="flex flex-col">
       <span className="text-[11px] font-bold text-neutral-900 leading-none">{value}</span>
       <span className="text-[8px] uppercase tracking-tighter text-neutral-400 mt-0.5">{label}</span>
    </div>
  </div>
);

export default PropertyCard;