import React, { useState, useEffect } from 'react';
import { Menu, X, Box, ChevronRight } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the navbar should have a solid background
  // This happens if the user has scrolled OR if the mobile menu is open
  const isSolid = isScrolled || isOpen;

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Proyek', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
                <div className={`p-2.5 rounded-lg transition-colors duration-300 ${isSolid ? 'bg-cabindo-secondary text-cabindo-primary' : 'bg-white/10 backdrop-blur-sm text-cabindo-primary border border-white/20'}`}>
                    <Box size={26} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className={`font-bold text-xl tracking-tight leading-none ${isSolid ? 'text-cabindo-secondary' : 'text-white'}`}>
                        {COMPANY_NAME}
                    </span>
                    <span className={`text-[10px] font-medium tracking-widest uppercase ${isSolid ? 'text-gray-500' : 'text-gray-300'}`}>
                        Modular Construction
                    </span>
                </div>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${isSolid ? 'text-gray-600 hover:text-cabindo-secondary' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cabindo-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
                href="#contact"
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                    isSolid 
                    ? 'bg-cabindo-secondary text-white hover:bg-gray-800' 
                    : 'bg-cabindo-primary text-cabindo-secondary hover:bg-amber-400'
                }`}
            >
                Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${isSolid ? 'text-cabindo-secondary' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
            >
              <span className="text-lg font-semibold text-gray-700 group-hover:text-cabindo-secondary">{link.name}</span>
              <ChevronRight size={20} className="text-gray-300 group-hover:text-cabindo-primary transition-colors transform group-hover:translate-x-1" />
            </a>
          ))}
            <div className="pt-4 mt-2 px-2">
                <a 
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full bg-cabindo-primary text-cabindo-secondary px-6 py-4 rounded-xl font-bold shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all transform active:scale-95"
                >
                    Minta Penawaran
                </a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;