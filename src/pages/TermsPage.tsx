import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleArticle = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const articles = [
    {
      title: "Préambule",
      content: "Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations contractuelles entre Blyss, représentée par Noah Dekeyzer, et ses clients professionnels utilisateurs de l'application et des services Blyss. Ces conditions s'appliquent à toute souscription d'abonnement, qu'il s'agisse de la formule Start, Sérénité ou Signature. En souscrivant à nos services, le client reconnaît avoir pris connaissance des présentes CGV et les accepte sans réserve. Toute condition contraire opposée par le client sera donc, à défaut d'acceptation expresse, inopposable à Blyss. Blyss se réserve le droit de modifier les présentes CGV à tout moment, les nouvelles conditions s'appliquant aux souscriptions postérieures à leur mise en ligne."
    },
    {
      title: "Article 1 - Objet et Description des Services",
      content: "Blyss propose une plateforme SaaS (Software as a Service) dédiée à la gestion d'activité pour les prothésistes ongulaires. Les services incluent notamment : la gestion de planning et des rendez-vous, la réservation en ligne 24/7 pour les clients, les notifications push automatiques, le tableau de bord statistiques, le module de gestion financière (selon formule), le portfolio photo intégré (selon formule), les rappels automatiques pré et post-prestation (selon formule), l'encaissement en ligne sécurisé (selon formule), et la visibilité premium dans les résultats de recherche (selon formule). Les fonctionnalités détaillées de chaque formule sont disponibles sur notre site web et peuvent évoluer pour améliorer l'expérience utilisateur."
    },
    {
      title: "Article 2 - Tarifs et Modalités de Paiement",
      content: "Les prix de nos abonnements sont indiqués en euros toutes taxes comprises (TTC) et incluent la TVA au taux en vigueur. Trois formules sont proposées : Start à 39,90€/mois sans engagement, Sérénité à 29,90€/mois avec engagement de 3 mois, et Signature à 24,90€/mois avec engagement de 12 mois. Blyss se réserve le droit de modifier ses tarifs à tout moment, étant entendu que le prix applicable est celui en vigueur au jour de la souscription. En cas d'augmentation tarifaire, les clients existants seront informés au moins 30 jours avant l'application du nouveau tarif. Le paiement s'effectue par prélèvement automatique mensuel via carte bancaire, par l'intermédiaire de notre prestataire de paiement sécurisé (Stripe). Le client garantit qu'il dispose des autorisations nécessaires pour utiliser le mode de paiement choisi. En cas de défaut de paiement, l'accès aux services pourra être suspendu après mise en demeure restée sans effet pendant 8 jours."
    },
    {
      title: "Article 3 - Souscription et Activation",
      content: "La souscription s'effectue directement en ligne via notre site web ou application mobile. Le client doit remplir le formulaire d'inscription en fournissant des informations exactes et à jour. L'accès aux services premium est activé immédiatement après confirmation du paiement et validation des informations fournies. Un email de confirmation contenant les identifiants de connexion et un récapitulatif de l'abonnement est envoyé systématiquement à l'adresse email renseignée. Le client s'engage à conserver la confidentialité de ses identifiants et à informer immédiatement Blyss de toute utilisation non autorisée de son compte. La durée de l'abonnement court à compter de la date d'activation et se renouvelle automatiquement par tacite reconduction pour des périodes identiques, sauf résiliation dans les conditions prévues à l'article 5."
    },
    {
      title: "Article 4 - Droit de Rétractation",
      content: "Conformément aux dispositions du Code de la consommation, le client professionnel dispose d'un délai de 14 jours à compter de la souscription pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités. Toutefois, en acceptant l'activation immédiate du service lors de la souscription, le client reconnaît expressément renoncer à son droit de rétractation si l'exécution du service a commencé avant la fin du délai de 14 jours. Pour exercer ce droit, le client doit notifier sa décision de rétractation par email à contact@blyssapp.fr. En cas de rétractation dans les délais et conditions légales, Blyss procédera au remboursement de l'intégralité des sommes versées dans un délai maximum de 14 jours à compter de la notification de rétractation, en utilisant le même moyen de paiement que celui utilisé pour la transaction initiale."
    },
    {
      title: "Article 5 - Résiliation",
      content: "Pour les abonnements sans engagement (formule Start), le client peut résilier à tout moment depuis son espace personnel ou par email à contact@blyssapp.fr. La résiliation prend effet à la fin de la période de facturation en cours, sans remboursement au prorata. Pour les abonnements avec engagement (formules Sérénité et Signature), la résiliation anticipée avant la fin de la période d'engagement n'est possible qu'en cas de manquement grave de Blyss à ses obligations contractuelles. À l'issue de la période d'engagement, l'abonnement se poursuit sans engagement et peut être résilié à tout moment dans les mêmes conditions que la formule Start. Blyss se réserve le droit de résilier l'abonnement en cas de manquement du client à ses obligations, notamment en cas de non-paiement, d'utilisation frauduleuse ou contraire aux présentes CGV, après mise en demeure restée sans effet pendant 15 jours."
    },
    {
      title: "Article 6 - Responsabilité et Garanties",
      content: "Blyss s'engage à fournir ses services avec diligence et selon les règles de l'art. Toutefois, Blyss ne saurait être tenue responsable des dommages indirects tels que perte de chiffre d'affaires, perte de clientèle, ou préjudice d'image résultant de l'utilisation ou de l'impossibilité d'utiliser les services. Blyss garantit un taux de disponibilité de 99% sur une base mensuelle, hors opérations de maintenance programmées dont les clients seront informés à l'avance. En cas d'indisponibilité dépassant ce seuil, le client pourra prétendre à un avoir proportionnel au temps d'indisponibilité. Blyss ne peut être tenue responsable des dysfonctionnements imputables au client, à un cas de force majeure, ou à un tiers. Le client reste seul responsable de l'utilisation qu'il fait des services et des données qu'il y intègre."
    },
    {
      title: "Article 7 - Données Personnelles",
      content: "Blyss s'engage à traiter les données personnelles de ses clients conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. Les données collectées sont nécessaires à la fourniture des services et à la gestion de la relation client. Elles sont conservées pendant la durée de l'abonnement et 3 ans après sa résiliation à des fins de preuve. Le client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur ses données personnelles, qu'il peut exercer à tout moment en contactant privacy@blyss.app. Pour plus d'informations, nous vous invitons à consulter notre Politique de Confidentialité disponible sur notre site web."
    },
    {
      title: "Article 8 - Propriété Intellectuelle",
      content: "L'ensemble des éléments de l'application Blyss (structure, logiciels, textes, images, graphismes, logo, marques, base de données, etc.) sont la propriété exclusive de Blyss et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, totale ou partielle, est strictement interdite sans autorisation écrite préalable de Blyss. Le client bénéficie d'un droit d'utilisation personnel, non exclusif et non cessible des services, strictement limité à l'usage professionnel pour lequel l'abonnement a été souscrit. Les contenus créés et téléchargés par le client (photos, descriptions, etc.) restent sa propriété, mais il accorde à Blyss une licence d'utilisation nécessaire à la fourniture des services."
    },
    {
      title: "Article 9 - Loi Applicable et Juridiction",
      content: "Les présentes CGV sont soumises au droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord amiable dans un délai de 30 jours, le litige sera porté devant les tribunaux compétents du ressort du siège social de Blyss, nonobstant pluralité de défendeurs ou appel en garantie. Conformément aux dispositions du Code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en cas de litige, dont les coordonnées sont disponibles sur demande."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">CGV</p>
          <h1 className="text-4xl md:text-6xl font-serif-elegant italic mb-6">Conditions Générales de <span className="text-[#eb5e9d]">Vente</span></h1>
        </div>

        <div className="space-y-4">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleArticle(idx)}
                className="w-full p-6 md:p-10 flex items-center justify-between text-left group focus:outline-none"
              >
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-[#eb5e9d] font-serif-elegant italic text-xl md:text-2xl opacity-80">{idx === 0 ? '§' : idx}</span>
                  {article.title}
                </h3>
                <div className={`transition-transform duration-300 ${expandedIdx === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className={`text-gray-400 group-hover:text-[#eb5e9d] transition-colors`} size={20} />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIdx === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-10 pb-6 md:pb-10">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-pink-100">
                    {article.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400">Dernière mise à jour : Janvier 2026</p>
        </div>
      </div>
    </div>
  );
};
