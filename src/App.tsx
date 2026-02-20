import React, { useState, useEffect } from 'react';
import type { PageView } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Mission } from './components/sections/Mission';
import { Features } from './components/sections/Features';
import { AppShowcase } from './components/sections/AppShowcase';
import { PricingSection } from './components/sections/PricingSection';
import { PricingPage } from './pages/PricingPage';
import { DownloadPage } from './pages/DownloadPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SEO } from './components/ui/SEO';
import { BackgroundEffects } from './components/ui/BackgroundEffects';

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

      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default App;
