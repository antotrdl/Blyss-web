import React from 'react';
import {
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';
import type { PageView } from '../../types';

export const Footer: React.FC<{ setCurrentPage: (page: PageView) => void; currentPage?: PageView }> = ({ setCurrentPage, currentPage }) => {
  const isDark = currentPage === 'download';

  return (
    <footer
      className={`border-t pt-16 transition-colors ${isDark ? 'bg-[#1c1c1c] border-white/10' : 'bg-gray-50 border-gray-100'}`}
      style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 2rem))' }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img
                src="https://i.ibb.co/35940F13/B3-B.png"
                alt="Blyss Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain group-hover:rotate-[10deg] transition-transform"
              />
            </div>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              La première plateforme tout-en-un conçue pour l'excellence des prothésistes ongulaires.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/blyss_app/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors ${isDark ? 'bg-white/5 border border-white/10 text-gray-500' : 'bg-white border border-gray-100 text-gray-400'}`} aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/blysapp/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors ${isDark ? 'bg-white/5 border border-white/10 text-gray-500' : 'bg-white border border-gray-100 text-gray-400'}`} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:contact@blyssapp.fr" className={`w-10 h-10 rounded-full flex items-center justify-center hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors ${isDark ? 'bg-white/5 border border-white/10 text-gray-500' : 'bg-white border border-gray-100 text-gray-400'}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Produit</h3>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#eb5e9d] transition-colors">Fonctionnalités</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-[#eb5e9d] transition-colors">Tarifs</button></li>
              <li><button onClick={() => setCurrentPage('download')} className="hover:text-[#eb5e9d] transition-colors">Télécharger</button></li>
            </ul>
          </div>

          <div>
            <h3 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Entreprise</h3>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-[#eb5e9d] transition-colors">À propos</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-[#eb5e9d] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Légal</h3>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <li><button onClick={() => setCurrentPage('legal')} className="hover:text-[#eb5e9d] transition-colors">Mentions légales</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-[#eb5e9d] transition-colors">Politique de confidentialité</button></li>
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-[#eb5e9d] transition-colors">CGV</button></li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>© 2026 Blyss App. Tous droits réservés.</p>
          <div className={`flex gap-6 text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            <span>Fait avec ❤️ à Annecy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
