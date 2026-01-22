import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinks = [
    { name: 'The Portfolio', path: '/properties' },
    { name: 'Advisory', path: '/about' },
    { name: 'Concierge', path: '/contact' },
  ];

  const textColor = isScrolled || isMenuOpen ? 'text-neutral-900' : 'text-white';
  const outlineClass = !isScrolled && !isMenuOpen ? 'text-outline' : '';
  const outlineClassSm = !isScrolled && !isMenuOpen ? 'text-outline-sm' : '';

  return (
    <header 
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 ${
        /* FIX: Header now turns solid white if menu is open OR scrolled */
        isScrolled || isMenuOpen 
          ? 'bg-white py-4 shadow-sm' 
          : 'bg-black/20 backdrop-blur-md py-6 md:py-8'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center justify-between">
          
          {/* BRAND */}
          <Link to="/" className="relative z-[110] flex items-center gap-4 group">
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

          {/* NAVIGATION (Desktop) */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300
                  hover:opacity-60
                  ${textColor} ${outlineClassSm}
                  ${isActive ? 'after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-current' : ''}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="relative z-[110] flex items-center gap-2 md:gap-4">
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
              Private Inquiry
              <FiArrowRight />
            </Link>

            {/* HAMBURGER TOGGLE */}
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

      {/* MOBILE MENU PANEL */}
      <div className={`fixed inset-0 z-[90] bg-white transition-all duration-700 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col h-full pt-40 px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-300 mb-12">Navigation</span>
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-4xl font-semibold tracking-tighter text-neutral-900"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}.
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;