import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const NAV_LINKS = {
  produit: [
    { label: 'Fonctionnalités', path: '/' },
    { label: 'Tarifs', path: '/tarifs' },
    { label: 'Télécharger', path: '/telecharger' },
  ],
  entreprise: [
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'Politique de confidentialité', path: '/confidentialite' },
    { label: 'CGV', path: '/cgv' },
  ],
};

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isDark = pathname === '/telecharger';

  const btnCls = `hover:text-[#eb5e9d] transition-colors text-left`;
  const socialCls = `w-10 h-10 rounded-full flex items-center justify-center hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors ${isDark ? 'bg-white/5 border border-white/10 text-gray-500' : 'bg-white border border-gray-100 text-gray-400'}`;

  return (
    <footer
      className={`border-t pt-16 transition-colors ${isDark ? 'bg-[#1c1c1c] border-white/10' : 'bg-gray-50 border-gray-100'}`}
      style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 2rem))' }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">

          {/* Brand */}
          <div className="col-span-1">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 mb-6 group cursor-pointer">
              <img
                src="https://i.ibb.co/35940F13/B3-B.png"
                alt="Blyss Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain group-hover:rotate-[10deg] transition-transform"
              />
            </button>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              La première plateforme tout-en-un conçue pour l'excellence des prothésistes ongulaires.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/blyss_app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialCls}><Instagram size={18} /></a>
              <a href="https://www.tiktok.com/@blyss_app" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={socialCls}><TikTokIcon /></a>
              <a href="https://www.linkedin.com/company/blysapp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialCls}><Linkedin size={18} /></a>
              <a href="mailto:contact@blyssapp.fr" aria-label="Email" className={socialCls}><Mail size={18} /></a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Produit</h3>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {NAV_LINKS.produit.map(({ label, path }) => (
                <li key={path}><button onClick={() => navigate(path)} className={btnCls}>{label}</button></li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Entreprise</h3>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {NAV_LINKS.entreprise.map(({ label, path }) => (
                <li key={path}><button onClick={() => navigate(path)} className={btnCls}>{label}</button></li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Légal</h3>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {NAV_LINKS.legal.map(({ label, path }) => (
                <li key={path}><button onClick={() => navigate(path)} className={btnCls}>{label}</button></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>© 2026 Blyss App. Tous droits réservés.</p>
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Fait avec ❤️ à Annecy</span>
        </div>
      </div>
    </footer>
  );
};
