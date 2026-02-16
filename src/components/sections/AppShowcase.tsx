import React from 'react';
import { Calendar, User, Zap, Heart } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import PhoneMockup from '../ui/PhoneMockup';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export const AppShowcase: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-6 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#feeef2] via-pink-50 to-white">
      {/* Maximum Pink Atmosphere - Same as Hero */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[#eb5e9d]/15 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-pink-200/40 rounded-full blur-[80px] md:blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#eb5e9d]/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16 max-w-7xl">
        <div className="lg:w-1/2 relative z-10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-8 leading-tight">Tout votre salon <br /> dans votre <span className="text-[#eb5e9d]">poche.</span></h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {[
              { prefix: "Votre", label: "planning", icon: <Calendar size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { prefix: "Vos", label: "Clientes", icon: <User size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { prefix: "Votre", label: "Profil", icon: <Zap size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { prefix: "Votre", label: "Fidélité", icon: <Heart size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" }
            ].map((item, i) => (
              <GlassCard key={i} className={`p-5 md:p-8 flex flex-col items-center text-center hover:bg-white transition-all border-2 ${item.bg.includes('border') ? '' : 'border-pink-50'} hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50 group bg-white/60 active:scale-95 duration-200`}>
                <div className={`${item.color} ${item.bg} p-3 md:p-4 rounded-2xl mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-[1.2] shadow-sm border`}>{item.icon}</div>
                <span className="font-bold text-gray-800 text-sm md:text-lg group-hover:text-[#eb5e9d] transition-colors">{item.prefix} {item.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
        <div
          ref={targetRef as any}
          className={`hidden lg:flex lg:w-1/2 relative justify-center items-center w-full order-1 lg:order-2 mb-8 lg:mb-0 transition-all duration-[2000ms] ease-out transform ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
        >
          {/* Static Phone Mockup with Custom Screenshot */}
          <div className="relative z-10 transform scale-90 md:scale-100 origin-center animate-float">
            <PhoneMockup
              type="screenshot"
              imageSrc="/dashboard_final_v2.jpg"
              className="shadow-2xl scale-95 md:scale-100"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#eb5e9d]/20 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-300/30 blur-[60px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
