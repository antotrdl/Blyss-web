import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-pink-100 rounded-full mb-4 text-[#eb5e9d]"><ShieldCheck size={32} /></div>
          <h1 className="text-4xl md:text-6xl font-serif-elegant italic mb-6">Politique de <span className="text-[#eb5e9d]">Confidentialité</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Votre confiance est précieuse. Nous nous engageons à protéger vos données avec la plus grande transparence.</p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl shadow-gray-100/50 space-y-12">
          <p className="text-lg text-gray-600 leading-relaxed font-light border-b border-gray-100 pb-8">
            Chez Blyss, la protection de vos données personnelles est une priorité absolue. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations conformément au RGPD.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">1. Collecte des données</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Nous collectons les informations que vous nous fournissez directement (inscription, formulaires) et certaines données techniques automatiques (cookies, logs) nécessaires au bon fonctionnement du service.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">2. Utilisation</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#eb5e9d] rounded-full" /> Amélioration de nos services</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#eb5e9d] rounded-full" /> Gestion de votre compte</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#eb5e9d] rounded-full" /> Support client et assistance</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#eb5e9d] rounded-full" /> Sécurité de la plateforme</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2"><div className="w-2 h-6 bg-[#eb5e9d] rounded-full"></div> Vos Droits</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:contact@blyss.eu" className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#eb5e9d] hover:text-white hover:border-[#eb5e9d] transition-all shadow-sm">Exercer mes droits</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
