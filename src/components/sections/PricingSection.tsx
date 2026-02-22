import React, { useState, useRef, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {
  Check, Sparkles, ChevronRight, ChevronDown, ChevronUp,
  X, ShieldCheck, ArrowRight, Lock, CheckCircle2,
  TrendingUp, Building2, Palette, Users, Zap
} from 'lucide-react';
import { ChevronLeft } from '../ui/PhoneMockup';

// ─────────────────────────────────────────────────────────────────
//  ✏️  CONFIGURATION — Tout modifier ici, jamais ailleurs
// ─────────────────────────────────────────────────────────────────

type PlanSection = {
  icon: React.ReactNode;
  title: string;
  items: string[];
  isIncluded?: boolean; // true = style badge gris "tout inclus"
};

type Plan = {
  title: string;
  price: string;              // ex. "54,90"
  commitment: string | null;  // null = "Sans engagement"
  description: string;
  icon: React.ReactNode;
  cardFeatures: string[];     // 4 bullets sur la carte (préfixe "+" = surligné)
  sections: PlanSection[];    // Sections du modal
  isPopular?: boolean;
};

export const PLANS: Plan[] = [
  {
    title: "Start",
    price: "69,90",
    commitment: null,
    description: "L'essentiel pour lancer votre activité sereinement.",
    icon: <Zap size={28} />,
    cardFeatures: [
      "Réservation en ligne 24/7",
      "Gestion des Rendez-vous",
      "Notifications clients",
      "Tableau de bord complet",
    ],
    sections: [
      {
        icon: <Zap size={14} />,
        title: "Gestion & Réservation",
        items: [
          "Réservation en ligne 24/7",
          "Gestion des rendez-vous",
          "Gestion de votre agenda",
          "Page pro personnalisée",
          "Notifications clients",
          "Tableau de bord complet",
        ],
      },
    ],
  },
  {
    title: "Signature",
    price: "49,90",
    commitment: "Engagement 12 mois",
    description: "Le boost ultime : visibilité premium et automatisation complète.",
    icon: <Sparkles size={32} />,
    isPopular: true,
    cardFeatures: [
      "Visibilité résultats Premium",
      "Rappels post-prestation",
      "Encaissement en ligne",
      "+ fonctionnalités Start & Sérénité",
    ],
    sections: [
      {
        icon: <CheckCircle2 size={14} />,
        title: "Tout inclus dans Start & Sérénité",
        items: ["Toutes les fonctionnalités Start & Sérénité"],
        isIncluded: true,
      },
      {
        icon: <Lock size={14} />,
        title: "Sécurisation",
        items: [
          "Paiement en ligne",
          "Prélèvement d'acomptes (Anti no-show)",
          "Empreinte bancaire",
        ],
      },
      {
        icon: <Sparkles size={14} />,
        title: "Marketing & Image",
        items: [
          "Galerie Photos Instagram",
        ],
      },
      {
        icon: <TrendingUp size={14} />,
        title: "Pilotage",
        items: [
          "Tableau de bord statistiques",
          "Suivi du chiffre d'affaires",
          "Suivis post-prestation",
        ],
      },
    ],
  },
  {
    title: "Sérénité",
    price: "54,90",
    commitment: "Engagement 3 mois",
    description: "Gagnez du temps avec une gestion financière et photo intégrée.",
    icon: <ShieldCheck size={28} />,
    cardFeatures: [
      "Module Finances & Stats",
      "Portfolio photos instagram",
      "Rappels rdv automatiques",
      "+ fonctionnalités de la formule Start",
    ],
    sections: [
      {
        icon: <CheckCircle2 size={14} />,
        title: "Tout inclus dans Start",
        items: ["Toutes les fonctionnalités de la formule Start"],
        isIncluded: true,
      },
      {
        icon: <Sparkles size={14} />,
        title: "Marketing & Image",
        items: ["Portfolio photos instagram", "Rappels & messages automatiques"],
      },
      {
        icon: <TrendingUp size={14} />,
        title: "Finance",
        items: ["Module statistiques avancé", "Facturation intégrée"],
      },
    ],
  },
];

// Colonnes du comparatif (ordre d'affichage dans le tableau)
// key doit correspondre aux clés de COMPARISON_ROWS
const COMPARISON_COLS = [
  { key: 'start' as const, plan: PLANS[0] },
  { key: 'serenite' as const, plan: PLANS[2] },
  { key: 'signature' as const, plan: PLANS[1] },
];

type CompRow = { label: string; start: boolean; serenite: boolean; signature: boolean };

const COMPARISON_ROWS: CompRow[] = [
  { label: "Réservation en ligne pour les clients", start: true, serenite: true, signature: true },
  { label: "Gestion des rendez-vous", start: true, serenite: true, signature: true },
  { label: "Gestion de votre agenda", start: true, serenite: true, signature: true },
  { label: "Page pro", start: true, serenite: true, signature: true },
  { label: "Portfolio Instagram", start: false, serenite: true, signature: true },
  { label: "Rappels & messages automatiques", start: false, serenite: true, signature: true },
  { label: "Module finance : Statistiques & Facturation", start: false, serenite: true, signature: true },
  { label: "Suivis post-prestation", start: false, serenite: false, signature: true },
  { label: "Encaissement en ligne (bientôt disponible)*", start: false, serenite: false, signature: true },
];

const SALONS_SECTIONS = [
  {
    icon: <Building2 size={14} />,
    title: "Multi-Comptes",
    items: ["Gestion centralisée de plusieurs établissements", "Comptes collaborateurs illimités"],
  },
  {
    icon: <Palette size={14} />,
    title: "Personnalisation",
    items: ["Marque blanche (White label)", "Développement de fonctionnalités sur mesure"],
  },
  {
    icon: <Users size={14} />,
    title: "Accompagnement",
    items: ["Chef de projet dédié", "Formation des équipes sur site", "API ouverte"],
  },
];

// ─────────────────────────────────────────────────────────────────
//  Helpers UI
// ─────────────────────────────────────────────────────────────────

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 bg-[#fff8fb] border border-pink-50 px-3.5 py-2.5 rounded-xl">
    <div className="w-5 h-5 rounded-full bg-[#eb5e9d]/10 flex items-center justify-center shrink-0">
      <Check size={10} className="text-[#eb5e9d]" strokeWidth={3} />
    </div>
    <span className="text-[13px] text-gray-700">{text}</span>
  </div>
);

const CellIcon = ({ check }: { check: boolean }) =>
  check ? (
    <div className="flex justify-center">
      <div className="bg-green-100 p-1 rounded-full">
        <Check size={12} className="text-green-600" strokeWidth={3} />
      </div>
    </div>
  ) : (
    <div className="flex justify-center text-gray-300">—</div>
  );

// ─────────────────────────────────────────────────────────────────
//  BaseModal — 4 zones strictement séparées, 0 positionnement absolu
// ─────────────────────────────────────────────────────────────────

const BaseModal: React.FC<{
  onClose: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}> = ({ onClose, header, body, footer }) => (
  <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

    <div className="relative z-10 w-full sm:max-w-lg bg-white sm:rounded-[2.5rem] rounded-t-[2rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden">

      {/* Zone 1 — Header coloré avec drag handle + bouton fermer intégrés */}
      <div className="relative shrink-0">
        {/* Drag handle mobile — flotte au-dessus du gradient */}
        <div className="sm:hidden absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-black/10 rounded-full z-10" />

        {/* Bouton fermer — flotte dans le coin, sur le gradient */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 z-10 p-2 bg-white/70 hover:bg-white active:scale-95 backdrop-blur-sm rounded-full shadow-sm transition-all"
          aria-label="Fermer"
        >
          <X size={15} className="text-gray-500" />
        </button>

        {/* Contenu header — doit avoir pt-10 pour ne pas passer sous drag/X */}
        <div className="pt-10">{header}</div>
      </div>

      {/* Zone 2 — Body scrollable */}
      <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5 space-y-5">
        {body}
      </div>

      {/* Zone 3 — Footer sticky */}
      <div className="shrink-0 flex items-center justify-between gap-3 px-6 py-4 border-t border-gray-100 bg-white">
        {footer}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────
//  PricingModal
// ─────────────────────────────────────────────────────────────────

const PricingModal: React.FC<{ plan: Plan; onClose: () => void; onJoin: () => void }> = ({
  plan,
  onClose,
  onJoin,
}) => {
  const startPrice = parseFloat(PLANS[0].price.replace(',', '.'));
  const planPrice = parseFloat(plan.price.replace(',', '.'));
  const months = plan.title === 'Signature' ? 12 : plan.title === 'Sérénité' ? 3 : 0;
  const saving = months > 0 ? Math.round((startPrice - planPrice) * months) : 0;

  return (
    <BaseModal
      onClose={onClose}

      // ── Header ──────────────────────────────────────────────────
      header={
        <div className={`px-6 pb-5 ${plan.isPopular ? 'bg-gradient-to-br from-[#fff0f6] to-[#fce4f0]' : 'bg-gray-50'}`}>

          {/* Badge populaire */}
          {plan.isPopular && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 bg-[#eb5e9d] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles size={9} /> Plus Populaire
              </span>
            </div>
          )}

          {/* Ligne principale : icône | titre+desc | prix */}
          <div className="flex items-center gap-3">
            {/* Icône */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0
              ${plan.isPopular
                ? 'bg-[#eb5e9d] text-white shadow-md shadow-pink-200'
                : 'bg-white text-gray-500 border border-gray-200'}`}>
              {plan.icon}
            </div>

            {/* Titre + description */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-serif-elegant italic text-gray-900 leading-tight">
                {plan.title}
              </h2>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug line-clamp-2">
                {plan.description}
              </p>
            </div>

            {/* Prix — séparé visuellement, jamais recouvert */}
            <div className="text-right shrink-0 pl-2">
              <div className="text-3xl font-black text-[#eb5e9d] leading-none">{plan.price}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">€ / mois</div>
              {saving > 0 && (
                <div className="mt-1.5 inline-flex items-center gap-1 bg-green-50 text-green-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap">
                  <TrendingUp size={8} /> -{saving}€ économisés
                </div>
              )}
            </div>
          </div>

          {/* Engagement — en dessous, aligné sur le texte (pas l'icône) */}
          <div className="mt-3 ml-[60px] flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            <Lock size={9} />
            {plan.commitment ?? 'Sans engagement'}
          </div>
        </div>
      }

      // ── Body ────────────────────────────────────────────────────
      body={
        <>
          {plan.sections.map((section, i) => (
            <div key={i}>
              <h4 className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">
                <span className="text-[#eb5e9d]">{section.icon}</span>
                {section.title}
              </h4>

              {section.isIncluded ? (
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl">
                  <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                  <span className="text-sm text-gray-500 font-medium">{section.items[0]}</span>
                </div>
              ) : (
                <div className="grid gap-2">
                  {section.items.map((item, j) => <FeatureItem key={j} text={item} />)}
                </div>
              )}
            </div>
          ))}

          {/* Trust badge */}
          <div className="flex items-start gap-3 bg-green-50 border border-green-100 p-4 rounded-2xl">
            <ShieldCheck size={16} className="text-green-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-green-700 font-medium leading-relaxed">
              Paiement sécurisé · Aucun frais caché ·{' '}
              {plan.commitment
                ? `Résiliable après l'engagement ${plan.commitment.toLowerCase()}.`
                : 'Résiliable à tout moment.'}
            </p>
          </div>
        </>
      }

      // ── Footer ──────────────────────────────────────────────────
      footer={
        <>
          <button
            onClick={onClose}
            className="text-sm font-bold text-gray-400 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Annuler
          </button>
          <button
            onClick={onJoin}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#eb5e9d] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-pink-200 hover:bg-pink-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Commencer avec {plan.title} <ArrowRight size={16} />
          </button>
        </>
      }
    />
  );
};

// ─────────────────────────────────────────────────────────────────
//  SalonsModal — même structure, même garanties
// ─────────────────────────────────────────────────────────────────

const SalonsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <BaseModal
    onClose={onClose}

    header={
      <div className="px-6 pb-5 bg-gradient-to-br from-[#fff0f6] to-[#fce4f0]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#eb5e9d] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-200">
            <Building2 size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-serif-elegant italic text-gray-900">Salons & Franchises</h2>
            <p className="text-[11px] text-gray-400 mt-0.5">Solution sur-mesure pour grandes structures</p>
          </div>
          <div className="text-right shrink-0 pl-2">
            <div className="text-2xl font-black text-[#c73a74] leading-none">Sur</div>
            <div className="text-2xl font-black text-[#c73a74] leading-none">Devis</div>
          </div>
        </div>
      </div>
    }

    body={SALONS_SECTIONS.map((section, i) => (
      <div key={i}>
        <h4 className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">
          <span className="text-[#eb5e9d]">{section.icon}</span>
          {section.title}
        </h4>
        <div className="grid gap-2">
          {section.items.map((item, j) => <FeatureItem key={j} text={item} />)}
        </div>
      </div>
    ))}

    footer={
      <>
        <button
          onClick={onClose}
          className="text-sm font-bold text-gray-400 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Fermer
        </button>
        <button className="flex items-center gap-2 bg-[#eb5e9d] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-pink-200 hover:bg-pink-600 transition-all hover:scale-[1.02] active:scale-[0.98]">
          Demander un devis <ArrowRight size={16} />
        </button>
      </>
    }
  />
);

// ─────────────────────────────────────────────────────────────────
//  ComparisonTable
// ─────────────────────────────────────────────────────────────────

const ComparisonTable: React.FC = () => (
  <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="min-w-[800px] md:min-w-full bg-white rounded-[2rem] p-4 md:p-8 border border-gray-100 shadow-xl shadow-pink-100/20">
        <div className="grid grid-cols-4 gap-4 mb-4 text-center pb-6 border-b border-gray-100">
          <div className="text-left font-serif-elegant text-2xl text-gray-400 italic self-center">Fonctionnalités</div>
          {COMPARISON_COLS.map(({ plan }) => (
            <div key={plan.title} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">
                  Formule <span className="text-pink-400">{plan.title}</span>
                </span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">{plan.price}€</span>
              </div>
              <span className="text-[11px] text-gray-400">{plan.commitment ?? 'Sans engagement'}</span>
            </div>
          ))}
        </div>

        <div className="space-y-1">
          {COMPARISON_ROWS.map((row, i) => (
            <div key={i} className={`grid grid-cols-4 gap-4 items-center text-center py-4 px-4 rounded-xl transition-colors ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-pink-50/30`}>
              <div className="text-left font-medium text-gray-700 text-xs md:text-sm">{row.label}</div>
              {COMPARISON_COLS.map(({ key }) => <CellIcon key={key} check={row[key]} />)}
            </div>
          ))}
        </div>

        <div className="mt-8 text-[11px] text-gray-400 italic border-t border-gray-50 pt-4">
          *Encaissement en ligne soumis à conditions.
        </div>
      </div>
    </div>
    <p className="md:hidden text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
      <span>←</span> Glissez pour comparer les offres <span>→</span>
    </p>
  </div>
);

// ─────────────────────────────────────────────────────────────────
//  PricingCards
// ─────────────────────────────────────────────────────────────────

const PricingCards = ({ onJoin }: { onJoin: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isSalonsOpen, setIsSalonsOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Signature centrée par défaut
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number, smooth = true) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2,
      behavior: smooth ? 'smooth' : 'auto',
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const t = setTimeout(() => scrollToIndex(1, false), 50);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const newIndex = Math.round(container.scrollLeft / (container.offsetWidth * 0.8 + 24));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < PLANS.length)
      setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="relative">
        {/* Flèches mobile */}
        <div className="md:hidden flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-30 pointer-events-none">
          {[
            { delta: -1, icon: <ChevronLeft size={24} />, label: "Offre précédente", hide: activeIndex === 0 },
            { delta: +1, icon: <ChevronRight size={24} />, label: "Offre suivante", hide: activeIndex === PLANS.length - 1 },
          ].map(({ delta, icon, label, hide }) => (
            <button
              key={delta}
              onClick={() => scrollToIndex(activeIndex + delta)}
              className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#eb5e9d] pointer-events-auto transition-opacity ${hide ? 'opacity-0' : 'opacity-100'}`}
              aria-label={label}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Cartes */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 max-w-6xl mx-auto items-center md:items-stretch pt-6 md:pt-0 pb-12 md:pb-0 px-[10vw] md:px-0 no-scrollbar scroll-px-[10vw]"
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.title}
              className={`relative group min-w-[80vw] md:min-w-0 snap-center transition-all duration-500 ease-out
                ${plan.isPopular ? 'md:order-2 md:scale-105 md:z-10' : i === 0 ? 'md:order-1' : 'md:order-3'}
                ${activeIndex === i ? 'scale-105 z-20 opacity-100' : 'scale-[0.85] z-10 opacity-60'}
                md:scale-100 md:opacity-100 md:z-0
                ${plan.isPopular ? 'md:!scale-105 md:!z-10' : ''}
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

                <div className={`flex w-14 h-14 md:w-16 md:h-16 rounded-2xl items-center justify-center mb-6 border transition-all duration-300
                  ${(plan.isPopular || activeIndex === i)
                    ? 'bg-[#eb5e9d] text-white border-[#eb5e9d] shadow-lg shadow-pink-200'
                    : 'bg-white/50 text-gray-400 border-white/50 group-hover:bg-[#eb5e9d] group-hover:text-white group-hover:border-[#eb5e9d] group-hover:shadow-lg group-hover:shadow-pink-200'
                  }`}
                >
                  {plan.icon}
                </div>

                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{plan.title}</h3>

                <div className="flex flex-col md:flex-row items-center md:items-baseline md:gap-1 mb-2 md:mb-1">
                  <span className="text-4xl md:text-5xl font-black text-[#eb5e9d]">{plan.price}</span>
                  <span className="text-xs md:text-base text-gray-400 font-medium">€/mois</span>
                </div>

                <p className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-8">
                  {plan.commitment ?? 'Sans engagement'}
                </p>

                <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-1 px-2">{plan.description}</p>

                <ul className="space-y-3 text-left w-full mb-8 flex-1 pl-2 md:pl-4">
                  {plan.cardFeatures.map((f, j) => {
                    const highlighted = f.startsWith('+');
                    return (
                      <li key={j} className={`flex items-center gap-3 text-[12px] md:text-sm ${highlighted ? 'text-[#eb5e9d] font-bold' : 'text-gray-600'}`}>
                        <div className={`bg-white/60 p-1 rounded-full border ${highlighted ? 'border-[#eb5e9d]/30' : 'border-pink-100/50'}`}>
                          <Check size={10} className="text-[#eb5e9d]" />
                        </div>
                        {f}
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all shadow-md text-sm md:text-base hover:scale-[1.02] active:scale-[0.98]
                    ${plan.isPopular
                      ? 'bg-[#eb5e9d] text-white hover:bg-pink-600 shadow-pink-100'
                      : 'bg-white text-[#eb5e9d] border border-white/50 hover:bg-[#eb5e9d] hover:text-white'
                    }`}
                >
                  Choisir cette offre
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Indicateurs dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2">
          {PLANS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 h-2 bg-[#eb5e9d]' : 'w-2 h-2 bg-gray-300'}`}
              aria-label={`Aller à l'offre ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bannière Salons */}
      <div
        className="mt-4 md:mt-12 max-w-2xl mx-auto bg-[#fff5f9] rounded-[2rem] py-3 px-4 md:p-5 border border-pink-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 hover:shadow-lg hover:shadow-pink-100 transition-all cursor-pointer group"
        onClick={() => setIsSalonsOpen(true)}
      >
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
          <button className="bg-white text-[#c73a74] border border-pink-100 px-5 py-2.5 rounded-xl font-bold transition-colors text-xs hover:bg-[#c73a74] hover:text-white shadow-sm">
            Nous contacter
          </button>
        </div>
      </div>

      {/* Toggle comparatif */}
      <div className="mt-8 md:mt-12 text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-2 bg-white border border-pink-100 text-gray-500 px-5 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-sm hover:shadow-md hover:text-[#eb5e9d] transition-all text-xs md:text-sm"
        >
          {showComparison ? 'Masquer le comparatif' : 'Comparer toutes les fonctionnalités'}
          {showComparison ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {showComparison && <ComparisonTable />}

      {selectedPlan && (
        <PricingModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} onJoin={onJoin} />
      )}
      {isSalonsOpen && <SalonsModal onClose={() => setIsSalonsOpen(false)} />}
    </>
  );
};

export { PricingCards };

// ─────────────────────────────────────────────────────────────────
//  PricingSection
// ─────────────────────────────────────────────────────────────────

export const PricingSection: React.FC<{ onSeeDetails: () => void; onJoin: () => void }> = ({ onJoin }) => {
  const { targetRef: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-10 md:py-20 px-6" id="pricing" style={{ background: 'linear-gradient(135deg, #F6EEFF 0%, #FFF0F7 50%, #FFF8FB 100%)' }}>
      <div className="container mx-auto max-w-7xl text-center">
        <div
          ref={headerRef as any}
          className={`transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6">
            Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8 md:mb-16 max-w-xl mx-auto font-light">
            Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.
          </p>
        </div>
        <PricingCards onJoin={onJoin} />
      </div>
    </section>
  );
};