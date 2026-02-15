import React from 'react';
import { PricingCards } from '../components/sections/PricingSection';

export const PricingPage: React.FC<{ onJoin: () => void }> = ({ onJoin }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-300 via-gray-50 to-white min-h-screen">
      <div className="container mx-auto max-w-7xl text-center">
        <h1 className="text-4xl md:text-7xl font-serif-elegant italic mb-6">Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span></h1>
        <p className="text-gray-500 text-lg mb-8 md:mb-16 max-w-xl mx-auto font-light">Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.</p>

        <PricingCards onJoin={onJoin} />
      </div>
    </div>
  )
}
