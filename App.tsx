import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  Features,
  AppShowcase,
  PricingSection,
  Mission,
  Footer,
  PricingPage,
  DownloadPage,
  AboutPage,
  ContactPage,
  LegalPage,
  PrivacyPage,
  TermsPage
} from './components/Sections';
import { SEO } from './components/SEO';
import { BackgroundEffects } from './components/Visuals';

export type PageView = 'home' | 'pricing' | 'download' | 'about' | 'contact' | 'legal' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="relative min-h-screen selection:bg-pink-100 selection:text-[#eb5e9d]">
      <BackgroundEffects />
      <Navbar scrolled={scrolled} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="transition-all duration-500 animate-in fade-in">
        {currentPage === 'home' && (
          <>
            <SEO
              title="Blyss - La plateforme dédiée aux professionnels ongulaires"
              description="La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires. Réservation en ligne, gestion de planning, notifications automatiques et bien plus."
            />
            <Hero onJoin={() => setCurrentPage('download')} />
            <Mission />
            <Features />
            <AppShowcase />
            {/* White to Gray Transition */}
            <div className="h-40 w-full bg-gradient-to-b from-white via-gray-50 to-gray-100" />
            <PricingSection
              onSeeDetails={() => setCurrentPage('pricing')}
              onJoin={() => setCurrentPage('download')}
            />
          </>
        )}

        {currentPage === 'pricing' && (
          <>
            <SEO
              title="Tarifs"
              description="Découvrez nos formules d'abonnement pour les prothésistes ongulaires : Start, Sérénité et Signature. Un abonnement clair, sans frais cachés."
              canonical="https://blyss.app/tarifs"
            />
            <PricingPage onJoin={() => setCurrentPage('download')} />
          </>
        )}

        {currentPage === 'download' && (
          <>
            <SEO
              title="Télécharger l'application"
              description="Téléchargez l'application Blyss sur iOS et Android. Gérez votre salon depuis votre smartphone."
              canonical="https://blyss.app/telecharger"
            />
            <DownloadPage />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <SEO
              title="À propos"
              description="Découvrez l'histoire de Blyss, notre mission et nos valeurs. Redéfinir les standards de la beauté connectée, un salon à la fois."
              canonical="https://blyss.app/a-propos"
            />
            <AboutPage />
          </>
        )}
        {currentPage === 'contact' && (
          <>
            <SEO
              title="Contact"
              description="Contactez l'équipe Blyss. Notre équipe vous répond sous 24h."
              canonical="https://blyss.app/contact"
            />
            <ContactPage />
          </>
        )}
        {currentPage === 'legal' && (
          <>
            <SEO
              title="Mentions Légales"
              description="Mentions légales de Blyss - Informations juridiques et hébergement."
              canonical="https://blyss.app/mentions-legales"
            />
            <LegalPage />
          </>
        )}
        {currentPage === 'privacy' && (
          <>
            <SEO
              title="Politique de Confidentialité"
              description="Politique de confidentialité de Blyss - Protection de vos données personnelles."
              canonical="https://blyss.app/confidentialite"
            />
            <PrivacyPage />
          </>
        )}
        {currentPage === 'terms' && (
          <>
            <SEO
              title="Conditions Générales de Vente"
              description="Conditions générales de vente de Blyss - CGV et conditions d'utilisation."
              canonical="https://blyss.app/cgv"
            />
            <TermsPage />
          </>
        )}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
