import React, { useState } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
import PhoneMockup from '../components/ui/PhoneMockup';

/* DownloadAppSection */
const DownloadAppSection: React.FC = () => {
  return (
    <section className="bg-[#1c1c1c] text-white relative overflow-hidden">

      {/* ══════════════════════════════════════
    MOBILE LAYOUT
══════════════════════════════════════ */}
      <div className="md:hidden flex flex-col px-5 pt-36 pb-16 relative z-10">

        {/* Titre */}
        <h2 className="text-4xl font-serif-elegant italic leading-tight mb-4">
          Gérez votre salon<br />
          <span className="text-[#eb5e9d]">depuis votre smartphone.</span>
        </h2>

        {/* Sous-titre */}
        <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
          Gérez votre planning, encaissez vos clientes et suivez vos stats en temps réel — où que vous soyez.
        </p>

        {/* Boutons store côte à côte */}
        <div className="flex flex-row gap-3 mb-3">
          <div className="relative flex-1">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm whitespace-nowrap">Bientôt</div>
            <button className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2.5 text-white font-semibold text-sm cursor-not-allowed transition-all duration-200 active:scale-[0.97] active:bg-white/10 select-none">
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </button>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm whitespace-nowrap">Bientôt</div>
            <button className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2.5 text-white font-semibold text-sm cursor-not-allowed transition-all duration-200 active:scale-[0.97] active:bg-white/10 select-none">
              <img src="/google_play_icon.webp" alt="Google Play" width="20" height="20" className="w-5 h-5 shrink-0" />
              Android
            </button>
          </div>
        </div>

        {/* Séparateur */}
        <div className="flex items-center gap-3 my-1 mb-3">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-600 text-xs font-medium">ou</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* CTA liste d'attente */}
        <div className="relative group mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-[#eb5e9d] to-pink-400 rounded-2xl blur opacity-40 group-active:opacity-70 transition-all duration-300" />
          <a
            href="https://tally.so/r/Meb8Dp"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-14 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#eb5e9d] to-pink-500 text-white rounded-2xl font-bold text-sm shadow-lg shadow-pink-500/20 transition-all duration-200 active:scale-[0.97] select-none"
          >
            <Mail size={17} className="shrink-0" />
            Rejoindre la liste d'attente
            <ArrowRight size={17} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-2 gap-3">

          {/* Card 1 — Dashboard (grande) */}
          <div className="col-span-2 rounded-3xl bg-gradient-to-br from-[#eb5e9d]/20 to-pink-900/10 border border-[#eb5e9d]/20 p-6 h-44 flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-transform duration-150">
            <div className="w-10 h-10 rounded-2xl bg-[#eb5e9d]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eb5e9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <div>
              <p className="text-[#eb5e9d] text-[11px] font-bold uppercase tracking-widest mb-1">Dashboard</p>
              <p className="text-white font-bold text-xl leading-tight">Ton activité<br />en un coup d'œil</p>
            </div>
            {/* Déco glows */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-[#eb5e9d]/20 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-600/10 blur-3xl rounded-full pointer-events-none" />
          </div>

          {/* Card 2 — Agenda */}
          <div className="col-span-1 rounded-3xl bg-white/5 border border-white/8 p-5 h-36 flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-transform duration-150">
            <div className="w-9 h-9 rounded-xl bg-[#eb5e9d]/15 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eb5e9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Planning & agenda</p>
              <p className="text-gray-500 text-xs mt-0.5">En temps réel</p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#eb5e9d]/10 rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Card 3 — Rappels */}
          <div className="col-span-1 rounded-3xl bg-[#eb5e9d]/10 border border-[#eb5e9d]/20 p-5 h-36 flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-transform duration-150">
            <div className="w-9 h-9 rounded-xl bg-[#eb5e9d]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eb5e9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Rappels auto</p>
              <p className="text-[#eb5e9d]/70 text-xs mt-0.5">Fini les no-shows</p>
            </div>
          </div>

          {/* Card 4 — Stats (large) */}
          <div className="col-span-2 rounded-3xl bg-white/5 border border-white/8 p-5 h-32 flex items-center gap-5 relative overflow-hidden active:scale-[0.98] transition-transform duration-150">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Statistiques & Facturation</p>
              <p className="text-gray-500 text-xs mt-0.5">Pilote ton chiffre d'affaires</p>
            </div>
            {/* Mini bar chart décoratif */}
            <div className="flex items-end gap-1 shrink-0 opacity-50">
              {[3, 5, 4, 7, 6, 8, 7].map((h, i) => (
                <div key={i} className="w-1.5 bg-purple-400 rounded-full" style={{ height: `${h * 4}px` }} />
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Card 5 — Clientes */}
          <div className="col-span-1 rounded-3xl bg-white/5 border border-white/8 p-5 h-40 flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-transform duration-150">
            <div className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Suivi clientes</p>
              <p className="text-gray-500 text-xs mt-0.5">Fidélité & historique</p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Card 6 — Encaissement */}
          <div className="col-span-1 rounded-3xl bg-white/5 border border-white/8 p-5 h-40 flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-transform duration-150">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Encaissement</p>
              <p className="text-gray-500 text-xs mt-0.5">Paiement en ligne</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">Q4 2026</span>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          </div>

        </div>
      </div>


      {/* ══════════════════════════════════════
          DESKTOP LAYOUT (inchangé)
      ══════════════════════════════════════ */}
      <div className="hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-0 md:mb-16 pt-24 md:pt-28 md:pb-20">
            <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">
              Gérez votre salon <br />
              <span className="text-[#eb5e9d]">depuis votre smartphone.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Retrouvez toutes les fonctionnalités de Blyss où que vous soyez. Gérez votre planning, encaissez vos clientes et suivez vos stats en temps réel.
            </p>
            <div className="flex flex-row justify-center gap-3 mb-8 md:mb-12 w-full px-2">
              <div className="relative group">
                <div className="absolute -top-3 -right-2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm">Bientôt</div>
                <button className="flex-1 w-[160px] h-12 bg-black/80 backdrop-blur-xl text-white font-semibold flex items-center justify-center gap-2 rounded-xl border border-white/10 transition-all duration-300 group-hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-xs sm:text-sm cursor-not-allowed opacity-80">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span>App Store</span>
                </button>
              </div>
              <div className="relative group">
                <div className="absolute -top-3 -right-2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm">Bientôt</div>
                <button className="flex-1 w-[160px] h-12 bg-white/20 backdrop-blur-xl text-white font-semibold flex items-center justify-center gap-2 rounded-xl border border-white/30 transition-all duration-300 group-hover:scale-105 text-xs sm:text-sm cursor-not-allowed opacity-80">
                  <img src="/google_play_icon.webp" alt="Google Play" width="20" height="20" loading="lazy" className="w-5 h-5" />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
            <div className="relative mb-3 md:mb-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-[#eb5e9d] to-pink-400 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <a href="https://tally.so/r/Meb8Dp" target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#eb5e9d] to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-base tracking-wide shadow-xl transition-all duration-300 group-hover:scale-[1.03] active:scale-[0.98]">
                <Mail size={18} className="shrink-0" />
                <span>Rejoindre la liste d'attente</span>
                <ArrowRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="flex flex-row items-end justify-center -space-x-16 mt-8 lg:mt-20 pb-0 perspective-1000 z-10 w-full overflow-visible">
              <div className="transform transition-all duration-500 z-20 scale-95 opacity-90 hover:opacity-100 origin-bottom-right translate-y-16 lg:-translate-y-8 lg:-rotate-6 relative">
                <PhoneMockup type="clients" imageSrc="/calendar_screen.jpg" className="shadow-2xl shadow-black/50" imageClassName="!object-bottom scale-105 !bottom-5" />
              </div>
              <div className="transform transition-all duration-500 z-30 scale-110 hover:z-50 origin-bottom relative translate-y-24 lg:translate-y-0">
                <div className="relative animate-float">
                  <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-[60px] animate-pulse"></div>
                  <PhoneMockup type="dashboard" imageSrc="/profile_screen.jpg" className="shadow-[0_0_80px_rgba(235,94,157,0.4)] border border-[#eb5e9d]/30" imageClassName="!object-bottom scale-105 !bottom-5" />
                </div>
              </div>
              <div className="transform transition-all duration-500 z-20 md:z-10 scale-95 opacity-90 hover:opacity-100 origin-bottom-left translate-y-16 lg:-translate-y-8 lg:rotate-6 relative">
                <PhoneMockup type="calendar-month" imageSrc="/client_screen.jpg" className="shadow-2xl shadow-black/50" imageClassName="!object-right-bottom scale-105 !bottom-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#eb5e9d]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none z-0"></div>
    </section>
  );
};

/* NewsletterModal — inchangé */
const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => !sessionStorage.getItem('blyss_newsletter_seen'));
  const handleClose = () => { setIsOpen(false); sessionStorage.setItem('blyss_newsletter_seen', 'true'); };
  const handleTallyRedirect = () => { handleClose(); window.open('https://tally.so/r/Meb8Dp', '_blank', 'noopener,noreferrer'); };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose}></div>
      <div className="bg-[#1c1c1c] w-full max-w-md rounded-[2.5rem] p-5 md:p-10 relative z-10 shadow-2xl border border-white/10">
        <button onClick={handleClose} className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Fermer">
          <X size={20} className="text-gray-400" />
        </button>
        <div className="text-center">
          <div className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-2xl md:rounded-3xl bg-pink-900/20 flex items-center justify-center mb-3 md:mb-6 border border-pink-500/20">
            <Mail size={24} className="text-[#eb5e9d]" />
          </div>
          <h2 className="text-xl md:text-3xl font-serif-elegant italic mb-2 md:mb-4 text-white">Prête pour <span className="text-[#eb5e9d]">l'excellence ?</span></h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">Rejoins notre liste d'attente pour être parmi les premières à accéder à Blyss et recevoir nos conseils business exclusifs.</p>
          <button onClick={handleTallyRedirect} className="w-full bg-[#eb5e9d] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-lg shadow-pink-500/30 hover:bg-pink-600 transition-all hover:scale-[1.02] active:scale-[0.98]">S'inscrire</button>
          <button onClick={handleClose} className="mt-6 text-gray-500 text-xs font-medium hover:text-gray-400 transition-colors uppercase tracking-widest">Accéder directement au téléchargement</button>
        </div>
      </div>
    </div>
  );
};

export const DownloadPage: React.FC = () => (
  <div className="bg-[#1c1c1c]">
    <NewsletterModal />
    <DownloadAppSection />
  </div>
);
