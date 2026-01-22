import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiArrowRight } from 'react-icons/fi';

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

  // Global color variable based on scroll/menu state
  const textColor = isScrolled || isMenuOpen ? 'text-neutral-900' : 'text-gray-200';

  return (
    <header 
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center justify-between">
          
          {/* BRAND */}
          <Link to="/" className="relative z-[110] flex items-center gap-4 group">
            <div className="hidden sm:block leading-none">
              <h1 className={`text-sm font-bold uppercase tracking-[0.4em] transition-colors duration-500 ${textColor}`}>
                AK-AD REAL Estate
              </h1>
              <span className={`text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${
                isScrolled ? 'text-neutral-500' : 'text-gray-200'
              }`}>
                services
              </span>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300
                  hover:opacity-60
                  ${textColor}
                  ${isActive ? 'after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-current' : ''}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="relative z-[110] flex items-center gap-4">
            <button className={`p-2 transition-colors duration-500 ${textColor}`}>
              <FiSearch size={18} />
            </button>
            
            <Link 
              to="/contact"
              className={`hidden md:flex items-center gap-3 px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
                isScrolled 
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
                {/* We use bg-current so the bars inherit the textColor (black or white) */}
                <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
                <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[100] bg-white transition-all duration-700 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-300 mb-12">Navigation</span>
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 hover:text-neutral-400 transition-colors"
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