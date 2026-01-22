import React from 'react';
import { FiPhone, FiMail, FiMessageSquare, FiStar, FiChevronRight } from 'react-icons/fi';
import { MdOutlineApartment } from 'react-icons/md';

const AgentCard = ({ agent, property }) => {
  if (!agent) return null;

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-2xl shadow-sm">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 pb-4 border-b border-gray-50">
        Inquiry & Advisory
      </h3>
      
      {/* Agent Profile Section */}
      <div className="flex items-center gap-5 mb-8">
        <div className="relative group">
          <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            {agent.photo ? (
              <img 
                src={agent.photo} 
                alt={agent.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white font-bold text-xl">
                {agent.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 leading-tight">
            {agent.name}
          </h4>
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">
            {agent.title}
          </p>
          <div className="flex items-center mt-2 bg-gray-50 w-fit px-2 py-1 rounded-md">
            <FiStar className="text-gray-900 fill-gray-900 mr-1" size={10} />
            <span className="text-[10px] font-bold text-gray-900 tracking-tighter">
              {agent.rating} / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 mb-8 py-5 border-y border-gray-50">
        <div className="text-center">
          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Portfolio</p>
          <p className="text-sm font-bold text-gray-900">{agent.propertiesSold}+ Sold</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Experience</p>
          <p className="text-sm font-bold text-gray-900">Expert</p>
        </div>
      </div>

      {/* CTA Actions */}
      <div className="space-y-3">
        <a
          href={`tel:${agent.phone}`}
          className="group flex items-center justify-between w-full py-4 px-6 bg-gray-900 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all hover:bg-black active:scale-95 shadow-lg shadow-gray-200"
        >
          <span className="flex items-center gap-3">
            <FiPhone size={14} /> Direct Call
          </span>
          <FiChevronRight className="transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href={`mailto:${agent.email}?subject=Inquiry about ${property.title}`}
          className="flex items-center justify-center gap-3 w-full py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all hover:border-gray-900 active:scale-95"
        >
          <FiMail size={14} /> Send Email
        </a>

        {/* FIXED: Balanced button tag here */}
        <button 
          className="flex items-center justify-center gap-3 w-full py-4 bg-gray-50 text-gray-500 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all hover:bg-gray-100 active:scale-95"
          onClick={() => window.open(`https://wa.me/${agent.phone.replace(/\s/g, '')}`, '_blank')}
        >
          <FiMessageSquare size={14} /> WhatsApp
        </button>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 pt-6 border-t border-dashed border-gray-100">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Property Ref</p>
            <p className="text-xl font-bold text-gray-900 tracking-tight">
              RE-{property.id.toString().padStart(4, '0')}
            </p>
          </div>
          <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center">
            <MdOutlineApartment className="text-gray-300 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;