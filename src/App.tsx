import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollNarrative } from './components/sections/ScrollNarrative';
import { FeaturesBento } from './components/sections/FeaturesBento';
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

const HomePage: React.FC = () => (
  <>
    <SEO
      title="Blyss - La plateforme dédiée aux professionnels ongulaires"
      description="La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires. Réservation en ligne, gestion de planning, notifications automatiques et bien plus."
      canonical="https://blyssapp.fr/"
    />
    <ScrollNarrative />
    <FeaturesBento />
    <PricingSection />
  </>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-pink-100 selection:text-[#eb5e9d]">
      <BackgroundEffects />
      <Navbar scrolled={scrolled} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/tarifs" element={
            <>
              <SEO
                title="Tarifs"
                description="Découvrez nos formules d'abonnement pour les prothésistes ongulaires : Start, Sérénité et Signature. Un abonnement clair, sans frais cachés."
                canonical="https://blyssapp.fr/tarifs"
              />
              <PricingPage />
            </>
          } />

          <Route path="/telecharger" element={
            <>
              <SEO
                title="Télécharger l'application"
                description="Téléchargez l'application Blyss sur iOS et Android. Gérez votre salon depuis votre smartphone."
                canonical="https://blyssapp.fr/telecharger"
              />
              <DownloadPage />
            </>
          } />

          <Route path="/a-propos" element={
            <>
              <SEO
                title="À propos"
                description="Découvrez l'histoire de Blyss, notre mission et nos valeurs. Redéfinir les standards de la beauté connectée, un salon à la fois."
                canonical="https://blyssapp.fr/a-propos"
              />
              <AboutPage />
            </>
          } />

          <Route path="/contact" element={
            <>
              <SEO
                title="Contact"
                description="Contactez l'équipe Blyss. Notre équipe vous répond sous 24h."
                canonical="https://blyssapp.fr/contact"
              />
              <ContactPage />
            </>
          } />

          <Route path="/mentions-legales" element={
            <>
              <SEO
                title="Mentions Légales"
                description="Mentions légales de Blyss - Informations juridiques et hébergement."
                canonical="https://blyssapp.fr/mentions-legales"
              />
              <LegalPage />
            </>
          } />

          <Route path="/confidentialite" element={
            <>
              <SEO
                title="Politique de Confidentialité"
                description="Politique de confidentialité de Blyss - Protection de vos données personnelles."
                canonical="https://blyssapp.fr/confidentialite"
              />
              <PrivacyPage />
            </>
          } />

          <Route path="/cgv" element={
            <>
              <SEO
                title="Conditions Générales de Vente"
                description="Conditions générales de vente de Blyss - CGV et conditions d'utilisation."
                canonical="https://blyssapp.fr/cgv"
              />
              <TermsPage />
            </>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
