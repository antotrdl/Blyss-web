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
          <PricingPage onJoin={() => setCurrentPage('download')} />
        )}

        {currentPage === 'download' && (
          <DownloadPage />
        )}

        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'legal' && <LegalPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
