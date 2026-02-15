import React from 'react';

export const LegalPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Informations Juridiques</p>
          <h1 className="text-4xl md:text-6xl font-serif-elegant italic mb-6">Mentions <span className="text-[#eb5e9d]">Légales</span></h1>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-[#eb5e9d] font-bold">1</div>
              <h3 className="text-2xl font-bold text-gray-900">Éditeur du site</h3>
            </div>
            <div className="pl-4 md:pl-16 space-y-2 text-gray-600 leading-relaxed">
              <p className="flex justify-between items-center border-b border-gray-50 pb-2"><strong>Dénomination sociale</strong> <span className="text-right">Noah Dekeyzer</span></p>
              <p className="flex justify-between items-center border-b border-gray-50 pb-2"><strong>Forme juridique</strong> <span className="text-right">(Entrepreneur Individuel - EI)</span></p>
              <p className="flex justify-between items-center border-b border-gray-50 pb-2"><strong>Siège social</strong> <span className="text-right">74000 Annecy</span></p>
              <p className="flex justify-between items-center border-b border-gray-50 pb-2"><strong>SIREN</strong> <span className="text-right">NON</span></p>
              <p className="flex justify-between items-center border-b border-gray-50 pb-2"><strong>Directeur de la publication</strong> <span className="text-right">Noah Dekeyzer</span></p>
              <p className="flex justify-between items-center pt-2"><strong>Contact</strong> <span className="text-right">contact@blyss.eu</span></p>
            </div>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-[#eb5e9d] font-bold">2</div>
              <h3 className="text-2xl font-bold text-gray-900">Hébergement</h3>
            </div>
            <div className="pl-4 md:pl-16 text-gray-600 leading-relaxed">
              <p className="mb-2">Le site est hébergé par <strong>OVH SAS</strong>.</p>
              <p className="text-sm mt-2">
                2 rue Kellermann - 59100 Roubaix - France<br />
                RCS Lille Métropole 424 761 419 00045<br />
                Code APE 2620Z<br />
                N° TVA : FR 22 424 761 419
              </p>
            </div>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-[#eb5e9d] font-bold">3</div>
              <h3 className="text-2xl font-bold text-gray-900">Propriété Intellectuelle</h3>
            </div>
            <div className="pl-4 md:pl-16 text-gray-600 leading-relaxed text-left md:text-justify">
              L'ensemble du contenu de ce site (textes, images, vidéos, animations, sons, marque, logo, etc.) est la propriété exclusive de Blyss, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Blyss.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
