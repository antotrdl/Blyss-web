import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export const Mission: React.FC = () => {
  const { targetRef: textRef, isIntersecting: textVisible } = useIntersectionObserver({ threshold: 0.15 });
  const { targetRef: imgRef, isIntersecting: imgVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
  <section className="pt-8 pb-4 md:py-20 px-6 bg-gradient-to-b from-pink-50/20 via-white to-pink-50/30 overflow-hidden relative">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div
          ref={textRef as any}
          className={`md:w-1/2 relative z-10 order-2 md:order-1 text-center md:text-left transition-all duration-700 ease-out ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <div className="w-12 h-1 bg-[#eb5e9d] mb-6 md:mb-8 rounded-full shadow-sm mx-auto md:mx-0"></div>
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">Élevez la <br /> <span className="text-[#eb5e9d] drop-shadow-sm">beauté</span> de votre métier.</h2>
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2 text-gray-900 tracking-tight">Le temps de créer</h3>
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">Nous pensons que votre énergie doit être dédiée à votre art, pas à vos relances. Blyss est votre assistant invisible qui gère tout en arrière-plan.</p>
            </div>
            <div className="relative p-5 md:p-8 bg-pink-50/40 rounded-[2rem] md:rounded-[2.5rem] border border-pink-100/50 italic text-gray-700 text-base md:text-lg shadow-sm">
              "Nous avons créé Blyss pour les professionnelles ongulaires à leurs comptes ou en salons. Elles doivent passer moins de temps sur la partie organisationnelle et prioriser leurs talents !"
              <br /><span className="font-bold text-[#eb5e9d] mt-4 block not-italic font-outfit text-xs tracking-widest uppercase">— Noah, Fondateur de Blyss</span>
            </div>
          </div>
        </div>
        <div
          ref={imgRef as any}
          className={`md:w-1/2 relative group order-1 md:order-2 w-full px-4 md:px-0 transition-all duration-700 ease-out delay-150 ${imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className="grid grid-cols-2 gap-3 md:gap-6 relative z-10">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop" width="400" height="600" loading="lazy" className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl transform -rotate-2 md:-rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-out" alt="Nail Studio" />
            <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop" width="400" height="600" loading="lazy" className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl mt-3 md:mt-12 transform rotate-2 md:rotate-3 group-hover:rotate-0 transition-all duration-1000 delay-100 ease-out" alt="Manicure" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-pink-100/30 blur-[60px] md:blur-[100px] -z-0 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
  );
};
