import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
// Import Social Logos
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinks = [
    { name: 'Our Portfolio', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const textColor = isScrolled || isMenuOpen ? 'text-neutral-900' : 'text-white';
  const outlineClass = !isScrolled && !isMenuOpen ? 'text-outline' : '';
  const outlineClassSm = !isScrolled && !isMenuOpen ? 'text-outline-sm' : '';

  return (
    <>
      {/* 1. MAIN HEADER BAR */}
      <header 
        className={`fixed top-0 left-0 z-[110] w-full transition-all duration-700 ease-in-out ${
          isScrolled || isMenuOpen 
            ? 'bg-white py-4 shadow-sm' 
            : 'bg-black/20 backdrop-blur-md py-6 md:py-8'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex items-center justify-between">
            
            {/* BRAND */}
            <Link to="/" className="relative flex items-center gap-4 group">
              <div className="leading-none">
                <h1 className={`text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-500 ${textColor} ${outlineClass}`}>
                  AK-AD REAL Estate
                </h1>
                <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                  isScrolled || isMenuOpen ? 'text-neutral-500' : 'text-gray-200'
                } ${outlineClassSm}`}>
                  services
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    relative text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300
                    hover:opacity-60 ${textColor} ${outlineClassSm}
                    ${isActive ? 'after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-current' : ''}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className={`p-2 transition-colors duration-500 ${textColor}`}>
                <FiSearch size={18} />
              </button>
              
              <Link 
                to="/contact"
                className={`hidden md:flex items-center gap-3 px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
                  isScrolled || isMenuOpen
                    ? 'bg-neutral-900 text-white hover:bg-black' 
                    : 'bg-white text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Private Inquiry <FiArrowRight />
              </Link>

              {/* HAMBURGER */}
              <button
                className={`lg:hidden p-2 transition-colors duration-500 ${textColor}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 flex flex-col items-end gap-1.5">
                  <span className={`h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                  <span className={`h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
                  <span className={`h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MOBILE MENU PANEL */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-700 cubic-bezier(0.77, 0, 0.175, 1) ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full pt-40 pb-12 px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-300 mb-12">Navigation</span>
          
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={`text-4xl font-semibold tracking-tighter text-neutral-900 transition-all duration-500 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${isMenuOpen ? 300 + i * 100 : 0}ms` }}
              >
                {link.name}.
              </NavLink>
            ))}
          </nav>
          
          {/* Divider line for structure */}
          <div className={`w-full h-[1px] bg-neutral-100 my-12 transition-opacity duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

          <div className={`mt-auto grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700 delay-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Inquiries</p>
              <p className="text-sm font-medium text-neutral-900 leading-tight">concierge@akadrealestate.com</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Follow Us</p>
              <div className="flex gap-6 items-center text-neutral-900">
                <a href="#" className="hover:text-neutral-400 transition-colors"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-neutral-400 transition-colors"><FaLinkedinIn size={20} /></a>
                <a href="#" className="hover:text-neutral-400 transition-colors"><FaTwitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;