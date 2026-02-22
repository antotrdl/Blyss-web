import React, { useState } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
import PhoneMockup from '../components/ui/PhoneMockup';


/* DownloadAppSection */
const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-0 md:py-20 bg-[#1c1c1c] text-white overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 pt-24 md:pt-0">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">
            Gérez votre salon <br /><span className="text-[#eb5e9d]">depuis votre smartphone.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Retrouvez toutes les fonctionnalités de Blyss où que vous soyez. Gérez votre planning, encaissez vos clientes et suivez vos stats en temps réel.
          </p>
          <div className="flex flex-row justify-center gap-3 mb-8 md:mb-12 w-full px-2">
            <div className="relative group">
              <div className="absolute -top-3 -right-2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm">
                Bientôt
              </div>
              <button
                className="
        flex-1 w-[160px] h-12
        bg-black/80 backdrop-blur-xl
        text-white font-semibold
        flex items-center justify-center gap-2
        rounded-xl
        border border-white/10
        transition-all duration-300
        group-hover:scale-105
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        group-hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
        text-xs sm:text-sm
        cursor-not-allowed opacity-80
      "
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>App Store</span>
              </button>
            </div>


            <div className="relative group">
              <div className="absolute -top-3 -right-2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm delay-100">
                Bientôt
              </div>
              <button
                className="
        flex-1 w-[160px] h-12
        bg-white/20 backdrop-blur-xl
        text-white font-semibold
        flex items-center justify-center gap-2
        rounded-xl
        border border-white/30
        transition-all duration-300
        group-hover:scale-105
        shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
        group-hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]
        text-xs sm:text-sm
        cursor-not-allowed opacity-80
      "
              >
                <img
                  src="/google_play_icon.webp"
                  alt="Google Play"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="w-5 h-5"
                />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Tally signup CTA */}
          <div className="relative mb-8 md:mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-[#eb5e9d] to-pink-400 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              href="https://tally.so/r/Meb8Dp"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#eb5e9d] to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-base tracking-wide shadow-xl transition-all duration-300 group-hover:scale-[1.03] active:scale-[0.98]"
            >
              <Mail size={18} className="shrink-0" />
              <span>Rejoindre la liste d'attente</span>
              <ArrowRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile: Single centered phone */}
          <div className="flex md:hidden justify-center mt-6 pb-10 overflow-visible">
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-[60px] animate-pulse"></div>
              <PhoneMockup
                type="dashboard"
                imageSrc="/profile_screen.jpg"
                className="shadow-[0_0_80px_rgba(235,94,157,0.4)] border border-[#eb5e9d]/30"
                imageClassName="!object-bottom scale-105 !bottom-5"
              />
            </div>
          </div>

          {/* 3 Phones Display Grid - Desktop only */}
          <div className="hidden md:flex flex-row items-end justify-center md:-space-x-16 mt-8 lg:mt-20 pb-10 md:pb-0 perspective-1000 md:h-auto z-10 w-full overflow-visible">


            {/* Phone 1: Clients - Left Wing */}
            <div className="transform transition-all duration-500 z-20 scale-[0.4] md:scale-95 opacity-90 hover:opacity-100 origin-bottom-right translate-y-16 -rotate-12 lg:-translate-y-8 lg:-rotate-6 relative">
              <PhoneMockup type="clients" imageSrc="/calendar_screen.jpg" className="shadow-2xl shadow-black/50" imageClassName="!object-bottom scale-105 !bottom-5" />
            </div>


            {/* Phone 2: Dashboard - Center Hero (Prominent) */}
            <div className="transform transition-all duration-500 z-30 scale-[0.5] md:scale-110 hover:z-50 origin-bottom mb-10 md:mb-0 relative translate-y-24 lg:translate-y-0">
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-[60px] animate-pulse"></div>
                <PhoneMockup type="dashboard" imageSrc="/profile_screen.jpg" className="shadow-[0_0_80px_rgba(235,94,157,0.4)] border border-[#eb5e9d]/30" imageClassName="!object-bottom scale-105 !bottom-5" />
              </div>
            </div>


            {/* Phone 3: Calendar Month - Right Wing */}
            <div className="transform transition-all duration-500 z-10 md:z-10 scale-[0.4] md:scale-95 opacity-90 hover:opacity-100 origin-bottom-left translate-y-16 rotate-12 lg:-translate-y-8 lg:rotate-6 relative">
              <PhoneMockup type="calendar-month" imageSrc="/client_screen.jpg" className="shadow-2xl shadow-black/50" imageClassName="!object-right-bottom scale-105 !bottom-5" />
            </div>


          </div>


          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#eb5e9d]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};


/* NewsletterModal */
const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return !sessionStorage.getItem('blyss_newsletter_seen');
  });

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('blyss_newsletter_seen', 'true');
  };

  const handleTallyRedirect = () => {
    handleClose();
    window.open('https://tally.so/r/Meb8Dp', '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose}></div>
      <div className="bg-[#1c1c1c] w-full max-w-md rounded-[2.5rem] p-5 md:p-10 relative z-10 shadow-2xl border border-white/10">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Fermer"
        >
          <X size={20} className="text-gray-400" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-2xl md:rounded-3xl bg-pink-900/20 flex items-center justify-center mb-3 md:mb-6 shadow-sm border border-pink-500/20">
            <Mail size={24} className="text-[#eb5e9d] md:w-10 md:h-10" />
          </div>

          <h2 className="text-xl md:text-3xl font-serif-elegant italic mb-2 md:mb-4 text-white">Prête pour <span className="text-[#eb5e9d]">l'excellence ?</span></h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
            Rejoins notre liste d'attente pour être parmi les premières à accéder à Blyss et recevoir nos conseils business exclusifs.
          </p>

          <button
            onClick={handleTallyRedirect}
            className="w-full bg-[#eb5e9d] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-lg shadow-pink-500/30 hover:bg-pink-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            S'inscrire
          </button>

          <button
            onClick={handleClose}
            className="mt-6 text-gray-500 text-xs font-medium hover:text-gray-400 transition-colors uppercase tracking-widest"
          >
            Accéder directement au téléchargement
          </button>
        </div>
      </div>
    </div>
  );
};


/* DownloadPage */
export const DownloadPage: React.FC = () => {
  return (
    <div className="bg-[#1c1c1c]">
      <NewsletterModal />
      <DownloadAppSection />
    </div>
  );
};
