import React from 'react';
import { ArrowRight, Bell } from 'lucide-react';

export const Hero: React.FC<{ onJoin?: () => void }> = ({ onJoin }) => {
  return (
    <>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen md:min-h-0 pt-24 md:pt-40 pb-12 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#ffecf5] via-pink-50/50 to-white flex flex-col justify-center md:block">
        {/* Atmosphère rose optimisée */}
        <div className="absolute top-[-20%] left-[-10%] w-[1200px] h-[1200px] bg-[#eb5e9d]/12 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[1000px] h-[1000px] bg-pink-200/30 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#eb5e9d]/8 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Background Giant Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[70vw] max-w-[900px] opacity-[0.05] md:opacity-[0.09] pointer-events-none select-none mix-blend-multiply animate-float-gentle">
          <img
            src="https://i.ibb.co/1YVVTQTc/B3-B2.png"
            alt=""
            width="900"
            height="900"
            decoding="async"
            className="w-full h-auto"
          />
        </div>

        <div className="container mx-auto flex flex-col items-center text-center max-w-7xl relative z-10">
          
          {/* Badge lancement */}
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg shadow-pink-100/50 border border-pink-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <Bell size={14} className="text-[#eb5e9d] animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Lancement prévu en 2026</span>
            </div>
          </div>

          {/* Titre principal avec effet subtil */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif-elegant italic mb-8 leading-[1.05] tracking-tight">
            <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-75 text-gray-900">
              Sublimez votre
            </span>
            <br />
            <span className="relative inline-block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <span className="text-[#eb5e9d] relative z-10">quotidien.</span>
              {/* Underline subtil */}
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-pink-200/40 via-[#eb5e9d]/30 to-pink-200/40 blur-sm"></div>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 font-light px-4">
            La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires.
          </p>

          {/* CTA Principal */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[400ms] mb-8 md:mb-12">
            <button
              onClick={onJoin}
              className="group relative bg-gradient-to-r from-[#c73a74] to-[#eb5e9d] text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl shadow-pink-300/40 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-400/50 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
            >
              {/* Effet shimmer au survol */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <span className="relative">Rejoindre la liste d'attente</span>
              <ArrowRight size={22} className="relative group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust badges adaptés */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 animate-in fade-in duration-700 delay-500">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-[#eb5e9d]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span className="font-medium">Accès prioritaire</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-[#eb5e9d]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Soyez informée en premier</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-[#eb5e9d]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Offres de lancement exclusives</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
