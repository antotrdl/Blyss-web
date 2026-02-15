import React from 'react';
import {
  Star,
  Zap,
  Heart,
  MessageCircle,
  Smile
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#eb5e9d] text-sm font-bold mb-6 border border-pink-100">
            Notre Vision
          </div>
          <h1 className="text-5xl md:text-7xl font-serif-elegant italic mb-8">
            L'ambition <span className="text-[#eb5e9d]">Blyss</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Redéfinir les standards de la beauté connectée, un salon à la fois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100 to-transparent rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-2 duration-500" />
            <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-pink-100/20 border border-gray-100">
              <h3 className="text-3xl font-serif-elegant mb-6">Notre Histoire</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Blyss est née d'un constat simple mais puissant : les professionnels de la beauté, et en particulier les prothésistes ongulaires, sont des artistes qui méritent des outils à la hauteur de leur talent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fondée en 2025 à Annecy, notre aventure a commencé avec une mission claire : révolutionner la gestion des salons grâce à une technologie invisible, fluide et élégante, préservant l'humain au cœur de chaque échange.
              </p>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-[#eb5e9d] shrink-0">
                <Star size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Excellence</h4>
                <p className="text-gray-500 leading-relaxed">Nous ne faisons aucun compromis sur la qualité. Chaque fonctionnalité est pensée, designée et peaufinée pour être la meilleure du marché.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Simplicité</h4>
                <p className="text-gray-500 leading-relaxed">Nous croyons en la puissance de la simplicité. Des outils intuitifs et efficaces qui vous font gagner du temps au quotidien.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Passion</h4>
                <p className="text-gray-500 leading-relaxed">Votre passion est notre moteur. Nous mettons tout notre cœur et notre énergie à soutenir votre créativité au quotidien.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Témoignage Section */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="bg-pink-50/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 lg:p-16 border border-pink-100/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle size={120} className="text-[#eb5e9d]" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#eb5e9d] text-xs font-bold mb-6 border border-pink-100 shadow-sm">
                <Smile size={14} /> Note du Fondateur
              </div>
              <h3 className="text-3xl md:text-4xl font-serif-elegant italic mb-6">
                Une idée née de la <span className="text-[#eb5e9d]">proximité</span>
              </h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light italic">
                "C'est en observant mes proches passionnés par leur métier, en partageant leurs défis et leurs réussites quotidiennes, que l'évidence s'est imposée. Blyss n'est pas seulement un outil, c'est le fruit de ces moments partagés et d'une volonté de simplifier votre art. Aujourd'hui, ce produit prend vie pour donner à chacun la liberté de créer sereinement."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="/noah_profile.jpg"
                  alt="Noah Dekeyzer"
                  width="48"
                  height="48"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-bold text-gray-900">Noah Dekeyzer</p>
                  <p className="text-sm text-[#eb5e9d] font-medium tracking-wide uppercase text-[10px]">Fondateur de Blyss</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden border border-white shadow-xl shadow-gray-200/50 max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#eb5e9d]/5 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-serif-elegant italic mb-4 text-gray-900">Notre Mission</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-6">
              "Libérer les entrepreneurs de la beauté des contraintes administratives pour qu'ils puissent se concentrer sur l'essentiel : sublimer leurs clients."
            </p>
            <div className="w-16 h-1 bg-[#eb5e9d] mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
