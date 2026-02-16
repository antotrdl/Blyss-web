import React, { useState } from 'react';
import { Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section className="pt-4 pb-4 md:py-20 px-6 bg-gradient-to-b from-pink-50/30 via-white to-pink-100/20" id="features">
      <div className="container mx-auto max-w-7xl">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-12">
          {[
            { icon: <Calendar size={32} className="w-10 h-10" />, title: "Notifications Instantanées", desc: "Soyez alertée immédiatement pour chaque réservation ou annulation.", color: "bg-pink-100/80 text-[#eb5e9d]" },
            { icon: <Sparkles size={32} className="w-10 h-10" />, title: "Portfolio Photo", desc: "Liez votre profil instagram pour présenter vos réalisations.", color: "bg-pink-100/80 text-[#eb5e9d]" },
            { icon: <ShieldCheck size={32} className="w-10 h-10" />, title: "Sécurité Totale", desc: "Terminés les 'No-shows'. Vos revenus sont garantis grâce aux acomptes automatisés.", color: "bg-pink-100/80 text-[#eb5e9d]" }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group cursor-default">
              <div className={`w-20 h-20 ${feature.color} rounded-[1.75rem] flex items-center justify-center mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[15deg] shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs text-base font-light">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Stack Layout */}
        <div className="md:hidden flex flex-col gap-4">
          {[
            { icon: <Calendar size={24} />, title: "Notifications Instantanées", desc: "Soyez alertée immédiatement pour chaque réservation ou annulation.", color: "bg-pink-100/80 text-[#eb5e9d]" },
            { icon: <Sparkles size={24} />, title: "Portfolio Photo", desc: "Liez votre profil instagram pour présenter vos réalisations.", color: "bg-pink-100/80 text-[#eb5e9d]" },
            { icon: <ShieldCheck size={24} />, title: "Sécurité Totale", desc: "Terminés les 'No-shows'. Vos revenus sont garantis grâce aux acomptes automatisés.", color: "bg-pink-100/80 text-[#eb5e9d]" }
          ].map((feature, i) => (
            <div
              key={i}
              onClick={() => setActiveFeature(activeFeature === i ? -1 : i)}
              className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeFeature === i
                  ? 'border-pink-200 shadow-lg shadow-pink-100/50'
                  : 'border-pink-100/50 shadow-sm'
              }`}
            >
              {/* Header (always visible) */}
              <div className="flex items-center gap-4 p-4">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  activeFeature === i ? 'scale-110 shadow-md' : 'shadow-sm'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-base font-bold text-left leading-tight transition-colors ${
                  activeFeature === i ? 'text-[#eb5e9d]' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>
                {/* Chevron indicator */}
                <svg
                  className={`w-5 h-5 ml-auto flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    activeFeature === i ? 'rotate-180 text-[#eb5e9d]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expandable Description */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFeature === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 pt-0">
                  <p className="text-sm text-gray-600 leading-relaxed border-t border-pink-50 pt-3">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
