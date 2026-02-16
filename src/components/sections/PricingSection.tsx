import React, { useState, useRef, useEffect } from 'react';
import {
  Check,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  ShieldCheck,
  ArrowRight,
  Lock,
  CheckCircle2,
  TrendingUp,
  Building2,
  Palette,
  Users,
  Zap
} from 'lucide-react';
import { ChevronLeft } from '../ui/PhoneMockup';

/* Pricing Modal */
const PricingModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  plan: { title: string; price: string; description: string; features: string[] };
  onJoin: () => void;
}> = ({ isOpen, onClose, plan, onJoin }) => {
  if (!isOpen) return null;

  // Static detailed features based on plan type (simplified for demo, would be prop driven in real app)
  const isSignature = plan.title === 'Signature';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors" aria-label="Fermer">
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-10">
          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-sm ${isSignature ? 'bg-[#eb5e9d] text-white' : 'bg-gray-100 text-gray-600'}`}>
            <Sparkles size={32} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-4xl font-serif-elegant italic">{plan.title}</h2>
            {isSignature && <span className="bg-[#eb5e9d] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Recommandé</span>}
          </div>
          <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">{plan.description}</p>
          <div className="text-5xl font-black text-[#eb5e9d]">{plan.price}<span className="text-base font-medium text-gray-400 ml-1">€/mois</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <CheckCircle2 size={16} className="text-green-500" /> Tout inclus dans Start
            </h4>
            <div className="bg-gray-50 p-4 rounded-2xl text-sm font-medium text-gray-600">
              Toutes les fonctionnalités Start
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Lock size={16} className="text-[#eb5e9d]" /> Sécurisation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Paiement en ligne</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Prélèvement d'acomptes (Anti no-show)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Empreinte bancaire</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Sparkles size={16} className="text-[#eb5e9d]" /> Marketing & Image
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Galerie Photos HD</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Site web personnalisé premium</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Avis clients vérifiés</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Codes promo & Cartes cadeaux</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <TrendingUp size={16} className="text-[#eb5e9d]" /> Pilotage
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Tableau de bord statistiques</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Suivi du chiffre d'affaires</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 mt-auto">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">Fermer</button>
          <button onClick={onJoin} className="bg-[#eb5e9d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors flex items-center gap-2">
            Choisir cette offre
          </button>
        </div>
      </div>
    </div>
  );
}

/* Salons Modal */
const SalonsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors" aria-label="Fermer">
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#eb5e9d] text-white flex items-center justify-center mb-4 shadow-sm">
            <Building2 size={32} />
          </div>
          <h2 className="text-4xl font-serif-elegant italic mb-2">Salons & Franchises</h2>
          <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">Une solution sur-mesure pour les grandes structures et les réseaux de salons.</p>
          <div className="text-3xl font-black text-[#c73a74]">Sur Devis</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Building2 size={16} className="text-[#eb5e9d]" /> Multi-Comptes
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Gestion centralisée de plusieurs établissements</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Comptes collaborateurs illimités</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Palette size={16} className="text-[#eb5e9d]" /> Personnalisation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Marque blanche (White label)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Développement de fonctionnalités sur mesure</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Users size={16} className="text-[#eb5e9d]" /> Accompagnement
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Chef de projet dédié</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Formation des équipes sur site</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">API ouverte</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 mt-auto">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">Fermer</button>
          <button className="bg-[#eb5e9d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors flex items-center gap-2">
            Demander un devis <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

const ComparisonTable: React.FC = () => {
  const checkIcon = <div className="flex justify-center"><div className="bg-green-100 p-1 rounded-full"><Check size={12} className="text-green-600" strokeWidth={3} /></div></div>;
  const minusIcon = <div className="flex justify-center text-gray-300">—</div>;

  const rows = [
    { label: "Réservation en ligne pour les clients", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Gestion des rendez-vous", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Gestion de votre agenda", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Page pro", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Portfolio", start: minusIcon, serenite: checkIcon, signature: checkIcon},
    { label: "Rappels & messages automatiques	", start: minusIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Module finance : Statistiques & Facturation", start: minusIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Suivis post-prestation", start: minusIcon, serenite: minusIcon, signature: checkIcon },
    { label: "Visibilité premium", start: minusIcon, serenite: minusIcon, signature: checkIcon },
    { label: "Encaissement en ligne*", start: minusIcon, serenite: minusIcon, signature: checkIcon },
  ];

  return (
    <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
        <div className="min-w-[800px] md:min-w-full bg-white rounded-[2rem] p-4 md:p-8 border border-gray-100 shadow-xl shadow-pink-100/20">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-center pb-6 border-b border-gray-100">
            <div className="text-left font-serif-elegant text-2xl text-gray-400 italic self-center">Fonctionnalités</div>

            {/* Start */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Formule <span className="text-pink-400">Start</span></span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">54,90€</span>
              </div>
              <span className="text-[11px] text-gray-400">Sans engagement</span>
            </div>

            {/* Sérénité */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Formule <span className="text-pink-400">Sérénité</span></span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">44,90€</span>
              </div>
              <span className="text-[11px] text-gray-400">Engagement 3 mois</span>
            </div>

            {/* Signature */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Formule <span className="text-pink-400">Signature</span></span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">39,90€</span>
              </div>
              <span className="text-[11px] text-gray-400">Engagement 12 mois</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-1">
            {rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 gap-4 items-center text-center py-4 px-4 rounded-xl transition-colors ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-pink-50/30`}>
                <div className="text-left font-medium text-gray-700 text-xs md:text-sm">{row.label}</div>
                <div>{row.start}</div>
                <div>{row.serenite}</div>
                <div>{row.signature}</div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-left text-[11px] text-gray-400 italic border-t border-gray-50 pt-4">
            *Encaissement en ligne soumis à conditions.
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCards = ({ onJoin }: { onJoin: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState<{ title: string, price: string, description: string, features: string[] } | null>(null);
  const [isSalonsModalOpen, setIsSalonsModalOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Signature (middle) par défaut
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll Initial instantané pour centrer l'offre Signature (index 1) sans animation
    // Timeout léger pour s'assurer que le rendu est terminé
    const timer = setTimeout(() => {
      scrollToIndex(1, false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToIndex = (index: number, smooth = true) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetCard = container.children[index] as HTMLElement;

      if (targetCard) {
        // Calcul précis pour centrer l'élément
        // On s'assure de récupérer la position relative au conteneur
        const cardLeft = targetCard.offsetLeft;
        const cardWidth = targetCard.offsetWidth;
        const containerWidth = container.offsetWidth;

        // Formule : Position gauche de la carte - (Marge pour centrer dans le conteneur)
        // Marge = (Largeur conteneur - Largeur carte) / 2
        const centerOffset = (containerWidth - cardWidth) / 2;
        const newScrollLeft = cardLeft - centerOffset;

        container.scrollTo({
          left: newScrollLeft,
          behavior: smooth ? 'smooth' : 'auto'
        });

        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPos = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      // Estimation pour la mise à jour de l'index pendant le scroll manuel
      const cardWidth = containerWidth * 0.8;
      const gap = 24;

      const newIndex = Math.round(scrollPos / (cardWidth + gap));

      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < plans.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const plans = [
    {
      title: "Start",
      price: "54,90",
      description: "L'essentiel pour lancer votre activité sereinement.",
      features: [
        "Réservation en ligne 24/7",
        "Gestion des Rendez-vous",
        "Notifications clients App",
        "Tableau de bord complet"
      ],
      icon: <Zap size={28} />,
      desktopOrder: "md:order-1"
    },
    {
      title: "Signature",
      price: "44,90",
      description: "Le boost ultime : visibilité premium et automatisation complète.",
      features: [
        "Visibilité résultats Premium",
        "Rappels post-prestation",
        "Encaissement en ligne",
        "+ fonctionnalités Start et Sérénité"
      ],
      isPopular: true,
      commitment: "Engagement 12 mois",
      icon: <Sparkles size={32} />,
      desktopOrder: "md:order-2"
    },
    {
      title: "Sérénité",
      price: "39,90",
      description: "Gagnez du temps avec une gestion financière et photo intégrée.",
      features: [
        "Module Finances & Stats",
        "Portfolio photos intégré",
        "Rappels rdv automatiques",
        "+ fonctionnalités de la formule Start"
      ],
      commitment: "Engagement 3 mois",
      icon: <ShieldCheck size={28} />,
      desktopOrder: "md:order-3"
    }
  ];

  return (
    <>
      <div className="relative">
        {/* Navigation Arrows (Mobile only) */}
        <div className="md:hidden flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-30 pointer-events-none">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1), true)}
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#eb5e9d] pointer-events-auto transition-opacity ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
            aria-label="Offre précédente"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(plans.length - 1, activeIndex + 1), true)}
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#eb5e9d] pointer-events-auto transition-opacity ${activeIndex === plans.length - 1 ? 'opacity-0' : 'opacity-100'}`}
            aria-label="Offre suivante"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 max-w-6xl mx-auto items-center md:items-stretch pt-6 md:pt-0 pb-12 md:pb-0 scroll-smooth px-[10vw] md:px-0 no-scrollbar scroll-px-[10vw]"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group min-w-[80vw] md:min-w-0 snap-center transition-all duration-500 ease-out ${plan.desktopOrder || ''}
              ${activeIndex === i ? 'scale-105 z-20 opacity-100' : 'scale-[0.85] z-10 opacity-60'}
              md:scale-100 md:opacity-100 md:z-0 md:blur-none
              ${plan.isPopular ? 'md:scale-105 md:z-10' : ''}
            `}
            >
              <div className={`flex flex-col relative min-h-[480px] md:min-h-[550px] md:h-full rounded-2xl md:rounded-[3rem] border transition-all duration-500
              ${plan.isPopular
                  ? 'bg-[#fff0f6] border-[#eb5e9d] shadow-xl md:shadow-2xl md:shadow-pink-200/50 md:hover:shadow-pink-200/80'
                  : 'bg-[#fff5f9] border-pink-100/50 md:shadow-sm md:hover:shadow-xl md:hover:shadow-pink-100/50 md:hover:border-[#eb5e9d]/30'
                }
              md:hover:-translate-y-2 px-5 py-8 md:p-8 items-center text-center`}
              >

                {plan.isPopular && (
                  <div className="block absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#eb5e9d] text-white text-[7px] md:text-[10px] font-bold px-3 md:px-6 py-1 md:py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                    Plus Populaire
                  </div>
                )}

                <div className={`flex w-14 h-14 md:w-16 md:h-16 rounded-2xl items-center justify-center mb-6 transition-all duration-300 border
                  ${(plan.isPopular || activeIndex === i)
                    ? 'bg-[#eb5e9d] text-white border-[#eb5e9d] shadow-lg shadow-pink-200'
                    : 'bg-white/50 backdrop-blur-sm text-gray-400 border-white/50 group-hover:bg-[#eb5e9d] group-hover:text-white group-hover:border-[#eb5e9d] group-hover:shadow-lg group-hover:shadow-pink-200 group-active:bg-[#eb5e9d] group-active:text-white group-active:scale-95'
                  }`}>
                  {plan.icon}
                </div>

                <h3 className={`text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2`}>
                  {plan.title}
                </h3>

                <div className="flex flex-col md:flex-row items-center md:items-baseline md:gap-1 mb-2 md:mb-1">
                  <span className={`text-4xl md:text-5xl font-black text-[#eb5e9d]`}>
                    {plan.price}
                  </span>
                  <span className="text-xs md:text-base text-gray-400 font-medium">€/mois</span>
                </div>

                <p className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-8">
                  {plan.commitment || "Sans engagement"}
                </p>

                <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-1 px-2">
                  {plan.description}
                </p>

                <ul className="space-y-3 text-left w-full mb-8 flex-1 pl-2 md:pl-4">
                  {plan.features.slice(0, 4).map((f, featureIdx) => {
                    const isHighlighted = f.startsWith('+');
                    return (
                      <li key={featureIdx} className={`flex items-center gap-3 text-[12px] md:text-sm ${isHighlighted ? 'text-[#eb5e9d] font-bold' : 'text-gray-600'}`}>
                        <div className={`bg-white/60 p-1 rounded-full border ${isHighlighted ? 'border-[#eb5e9d]/30' : 'border-pink-100/50'}`}>
                          <Check size={10} className="text-[#eb5e9d]" />
                        </div>
                        {f}
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all shadow-md text-sm md:text-base ${plan.isPopular
                    ? 'bg-[#eb5e9d] text-white hover:bg-pink-600 shadow-pink-100'
                    : 'bg-white text-[#eb5e9d] border border-white/50 hover:bg-[#eb5e9d] hover:text-white'
                    } hover:scale-[1.02] active:scale-[0.98]`}
                >
                  Choisir cette offre
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators (Mobile only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2">
          {plans.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i, true)}
              className={`rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 h-2 bg-[#eb5e9d]' : 'w-2 h-2 bg-gray-300'}`}
              aria-label={`Aller à l'offre ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-12 max-w-2xl mx-auto bg-[#fff5f9] rounded-[2rem] py-3 px-4 md:p-5 border border-pink-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 hover:shadow-lg hover:shadow-pink-100 transition-all cursor-pointer group" onClick={() => setIsSalonsModalOpen(true)}>
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 bg-white rounded-2xl border border-pink-100 flex items-center justify-center text-[#eb5e9d] group-hover:scale-110 transition-transform">
            <Building2 size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base group-hover:text-[#eb5e9d] transition-colors">Salons & Franchises</h4>
            <p className="text-[13px] text-gray-500">Une solution sur-mesure.</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-[10px] font-bold text-[#c73a74] uppercase tracking-wider">Sur devis</span>
          <button className="bg-white text-[#c73a74] border border-pink-100 px-5 py-2.5 rounded-xl font-bold transition-colors text-xs hover:bg-[#c73a74] hover:text-white shadow-sm">Nous contacter</button>
        </div>
      </div>

      {/* Comparison Toggle */}
      <div className="mt-8 md:mt-12 text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-2 bg-white border border-pink-100 text-gray-500 px-5 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-sm hover:shadow-md hover:text-[#eb5e9d] transition-all text-xs md:text-sm"
        >
          {showComparison ? 'Masquer le comparatif' : 'Comparer toutes les fonctionnalités'}
          {showComparison ? <ChevronUp size={14} className="md:w-[18px]" /> : <ChevronDown size={14} className="md:w-[18px]" />}
        </button>
      </div>

      {/* Comparison Table */}
      {showComparison && <ComparisonTable />}

      {/* Modals */}
      <PricingModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan || plans[1]}
        onJoin={onJoin}
      />

      <SalonsModal
        isOpen={isSalonsModalOpen}
        onClose={() => setIsSalonsModalOpen(false)}
      />
    </>
  );
};

export { PricingCards };

/* PricingSection */
export const PricingSection: React.FC<{ onSeeDetails: () => void; onJoin: () => void }> = ({ onJoin }) => {
  return (
    <section className="py-10 md:py-20 px-6 bg-gradient-to-b from-gray-100 via-gray-50 to-white" id="pricing">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6">Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span></h2>
        <p className="text-gray-500 text-lg mb-8 md:mb-16 max-w-xl mx-auto font-light">Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.</p>

        <PricingCards onJoin={onJoin} />

      </div>
    </section>
  );
};
