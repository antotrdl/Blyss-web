import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  Download
} from 'lucide-react';
import type { PageView } from '../../types';

export const Navbar: React.FC<{ scrolled: boolean; currentPage: PageView; setCurrentPage: (p: PageView) => void }> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div style={{ top: 'max(1.5rem, env(safe-area-inset-top, 1.5rem))' }} className={`fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'}`}>
        <nav className="pointer-events-auto w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-4 py-2 pl-6 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-white/15 hover:border-white/30">

          {/* Logo (Left) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="https://i.ibb.co/35940F13/B3-B.png"
              alt="Blyss"
              width="32"
              height="32"
              className="w-8 h-8 object-contain group-hover:rotate-[10deg] transition-transform"
            />
          </button>

          {/* Right Section: Links + CTA + Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNav('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'download'
                  ? 'text-white/90 hover:text-white'
                  : currentPage === 'home' ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
              >
                Découvrir
              </button>
              <button
                onClick={() => handleNav('pricing')}
                className={`text-sm font-medium transition-colors ${currentPage === 'download'
                  ? 'text-white/90 hover:text-white'
                  : currentPage === 'pricing' ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
              >
                Tarifs
              </button>
            </div>

            <div className="flex items-center gap-2 relative">
              {/* CTA (Right) */}
              <button
                onClick={() => handleNav('download')}
                className="hidden md:block bg-[#eb5e9d] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-pink-600 transition-colors whitespace-nowrap shadow-lg shadow-pink-500/30"
              >
                Télécharger l'app
              </button>

              {/* Mobile Menu Trigger */}
              <button
                className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 'download' ? 'text-white' : 'text-gray-900'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Mobile Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-[1.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-3 flex flex-col gap-2 transform transition-all duration-300 ease-out origin-top-right z-[100] ${isMobileMenuOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-95 opacity-0 -translate-y-2 pointer-events-none'}`}>

                <button
                  onClick={() => handleNav('home')}
                  className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 border backdrop-blur-md ${currentPage === 'home' ? 'bg-[#eb5e9d]/10 border-[#eb5e9d]/10 text-[#eb5e9d] shadow-sm' : 'bg-white/80 border-gray-100 hover:bg-[#eb5e9d]/10 hover:border-[#eb5e9d]/20 hover:text-[#eb5e9d] text-gray-700 hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span className={`font-bold text-sm ${currentPage === 'home' ? '' : 'group-hover:translate-x-1 transition-transform'}`}>Découvrir</span>
                  {currentPage === 'home' && <div className="w-1.5 h-1.5 rounded-full bg-[#eb5e9d] shadow-[0_0_10px_rgba(235,94,157,0.5)]"></div>}
                </button>

                <button
                  onClick={() => handleNav('pricing')}
                  className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 border backdrop-blur-md ${currentPage === 'pricing' ? 'bg-[#eb5e9d]/10 border-[#eb5e9d]/10 text-[#eb5e9d] shadow-sm' : 'bg-white/80 border-gray-100 hover:bg-[#eb5e9d]/10 hover:border-[#eb5e9d]/20 hover:text-[#eb5e9d] text-gray-700 hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span className={`font-bold text-sm ${currentPage === 'pricing' ? '' : 'group-hover:translate-x-1 transition-transform'}`}>Tarifs</span>
                  {currentPage === 'pricing' && <div className="w-1.5 h-1.5 rounded-full bg-[#eb5e9d] shadow-[0_0_10px_rgba(235,94,157,0.5)]"></div>}
                </button>

                <div className="h-px bg-gray-100 mx-2 my-1"></div>

                <button
                  onClick={() => handleNav('download')}
                  className="flex items-center gap-3 w-full p-4 rounded-2xl bg-[#eb5e9d]/90 backdrop-blur-md text-white font-black transition-all duration-300 hover:bg-[#eb5e9d] hover:shadow-[0_10px_20px_-5px_rgba(235,94,157,0.4)] hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20"
                >
                  <Download size={18} />
                  <span className="text-sm">Télécharger l'app</span>
                </button>
              </div>
            </div>
          </div>

        </nav>
      </div>


    </>
  );
};
