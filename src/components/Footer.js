import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import { MdOutlineApartment } from 'react-icons/md';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/properties' },
    { name: 'Modern Villas', path: '/properties?type=villa' },
    { name: 'Commercial', path: '/properties?type=commercial' },
    { name: 'Our Heritage', path: '/about' },
    { name: 'Concierge', path: '/contact' },
  ];

  const services = [
    'Private Acquisition',
    'Asset Management',
    'Investment Advisory',
    'Off-Market Search',
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 font-light">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-900">
        <div className="mx-auto max-w-[1440px] px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">The Royal Brief</h3>
            <p className="text-sm text-neutral-500">Subscribe to receive exclusive off-market listings and market insights.</p>
          </div>
          <div className="relative w-full max-w-md">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-neutral-900 border-none rounded-full px-8 py-5 text-sm text-white focus:ring-1 focus:ring-neutral-700 transition-all outline-none"
            />
            <button className="absolute right-2 top-2 h-11 w-11 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl font-bold text-white tracking-[0.2em] uppercase">AK-AD REAL Estate services</span>
            </div>
            <p className="max-w-sm text-lg leading-relaxed mb-10 text-neutral-500">
              Curating Nigeria's most prestigious addresses since 2008. We provide private wealth advisory for the discerning investor.
            </p>
            <div className="flex gap-8">
              <SocialLink href="#" icon={<FiInstagram size={20} />} />
              <SocialLink href="#" icon={<FiLinkedin size={20} />} />
              <SocialLink href="#" icon={<FiTwitter size={20} />} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Offerings */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Advisory Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-12 p-8 bg-neutral-900 rounded-3xl border border-neutral-800">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Lagos HQ</p>
              <p className="text-white text-sm">123 Adeola Odeku, Victoria Island</p>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-24 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-neutral-600">
            © {new Date().getFullYear()} AK-AD REAL Estate services. All rights reserved.
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- Helper Component --- */
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="h-12 w-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:border-white hover:text-white transition-all duration-500"
  >
    {icon}
  </a>
);

export default Footer;