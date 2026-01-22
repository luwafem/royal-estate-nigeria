import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FiMapPin,
  FiChevronLeft,
  FiDownload,
  FiCalendar,
  FiMaximize,
  FiArrowRight,
  FiShare2
} from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from 'react-icons/md';

import Layout from '../components/Layout';
import PropertyGallery from '../components/PropertyGallery';
import AgentCard from '../components/AgentCard';
import SimilarProperties from '../components/SimilarProperties';
import { properties } from '../data/properties';
import { agents } from '../data/agents';

const formatPrice = (amount) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find((p) => p.id === parseInt(id));
  const agent = agents.find((a) => a.id === property?.agentId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <Layout title="Property Not Found">
        <div className="py-40 text-center">
          <h1 className="text-2xl font-light mb-8 italic text-neutral-400">Estate not found in our current portfolio.</h1>
          <button
            onClick={() => navigate('/properties')}
            className="px-10 py-4 bg-neutral-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition hover:bg-black"
          >
            Return to Collection
          </button>
        </div>
      </Layout>
    );
  }

  const shareUrl = `${window.location.origin}/property/${property.id}`;
  const shareText = `Explore ${property.title} in ${property.location}`;

  return (
    <Layout
      title={`${property.title} | Royal Estates`}
      description={property.description.slice(0, 160)}
      image={property.images[0]}
      url={shareUrl}
    >
      {/* Padding Top (pt-28 to pt-32) is critical here to prevent 
          the fixed Navbar from obstructing the content.
      */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-28 pb-24">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-12 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <FiChevronLeft className="mr-3 text-sm transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
          <div className="flex gap-6">
             <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 flex items-center gap-2">
                <FiDownload /> Brochure
             </button>
             <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 flex items-center gap-2">
                <FiShare2 /> Share
             </button>
          </div>
        </nav>

        {/* Cinematic Header Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] bg-neutral-100 text-neutral-600 border border-neutral-200">
                {property.type}
              </span>
              <span className="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] bg-neutral-900 text-white">
                {property.status}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              {property.title}
            </h1>
            <div className="mt-6 flex items-center text-neutral-500 font-light text-lg">
              <FiMapPin className="mr-3 text-neutral-900" />
              {property.location}
            </div>
          </div>

          <div className="lg:col-span-4 lg:text-right border-l lg:border-l-0 lg:border-r border-neutral-100 pl-8 lg:pl-0 lg:pr-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-3 text-right">Investment Value</p>
            <p className="text-5xl font-bold text-neutral-900 tracking-tighter text-right">
              {formatPrice(property.price)}
            </p>
          </div>
        </div>

        {/* Gallery Component */}
        <div className="mb-20  overflow-hidden shadow-2xl shadow-neutral-200/50">
          <PropertyGallery images={property.images} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Details (8 Units) */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Key Architectural Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-neutral-100">
              <Stat icon={<MdOutlineBed />} label="Bedrooms" value={property.bedrooms} />
              <Stat icon={<MdOutlineBathtub />} label="Bathrooms" value={property.bathrooms} />
              <Stat icon={<FiMaximize />} label="Interior Area" value={`${property.squareFootage.toLocaleString()} m²`} />
              <Stat icon={<MdOutlineGarage />} label="Secure Parking" value={property.garage} />
            </div>

            {/* Narrative Content */}
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-10 flex items-center gap-4">
                The Narrative <span className="h-px w-12 bg-neutral-200" />
              </h2>
              <div className="prose prose-xl max-w-none text-neutral-500 font-light leading-[2] first-letter:text-5xl first-letter:font-bold first-letter:text-neutral-900 first-letter:mr-3 first-letter:float-left">
                {property.description}
              </div>
            </section>

            {/* Curated Amenities */}
            <section className="bg-neutral-50 rounded-[3rem] p-12 md:p-16">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-12">Premier Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {property.amenities.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-neutral-200/60 group cursor-default">
                    <span className="text-neutral-600 font-medium group-hover:text-neutral-900 transition-colors">{item}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-all" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Advisory (4 Units) */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-32">
              <AgentCard agent={agent} property={property} />

              <div className="mt-8 bg-neutral-900 text-white rounded-[2.5rem] p-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-8 flex items-center gap-3">
                  <FiCalendar /> Private Viewing
                </h3>
                <form className="space-y-5">
                  <FloatingInput placeholder="Full Name" type="text" />
                  <FloatingInput placeholder="Email Address" type="email" />
                  <div className="relative">
                    <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-2 ml-2">Preferred Date</p>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-white/40 transition-all" type="date" />
                  </div>
                  <button className="w-full py-5 bg-white text-neutral-900 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-200 transition-all active:scale-95 mt-4">
                    Request Concierge Access
                  </button>
                </form>
              </div>

              <div className="mt-8 p-6 border border-neutral-100 rounded-3xl flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Share Asset</span>
                <div className="flex gap-5">
                   <ShareLink href={`https://api.whatsapp.com/send?text=${shareUrl}`} icon={<FaWhatsapp />} />
                   <ShareLink href={`https://linkedin.com/share...`} icon={<FaLinkedinIn />} />
                   <ShareLink href={`https://twitter.com/...`} icon={<FaTwitter />} />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Recommendations */}
        <div className="mt-40">
           <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-4">Complementary Assets</h2>
              <div className="h-12 w-px bg-neutral-100" />
           </div>
           <SimilarProperties properties={properties.filter(p => p.type === property.type && p.id !== property.id).slice(0, 3)} />
        </div>
      </div>
    </Layout>
  );
};

/* --- Helpers --- */

const Stat = ({ icon, label, value }) => (
  <div className="flex flex-col items-start">
    <div className="text-neutral-900 text-3xl mb-4">{icon}</div>
    <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">{label}</p>
    <p className="text-lg font-semibold text-neutral-900 tracking-tight">{value}</p>
  </div>
);

const FloatingInput = ({ placeholder, type }) => (
  <input 
    type={type}
    placeholder={placeholder}
    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder-neutral-500 outline-none focus:border-white/40 transition-all"
  />
);

const ShareLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">
    {icon}
  </a>
);

export default PropertyDetails;