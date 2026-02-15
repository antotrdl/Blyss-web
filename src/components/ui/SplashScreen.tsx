import React from 'react';

export const SplashScreen: React.FC<{ isFading: boolean }> = ({ isFading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative w-32 md:w-48 aspect-square flex items-center justify-center">
        <div className="absolute inset-0 bg-[#eb5e9d] rounded-full opacity-20 animate-ping"></div>
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-3xl flex items-center justify-center shadow-lg transform rotate-3 transition-transform animate-draw">
           <span className="text-4xl md:text-5xl font-black text-[#eb5e9d] tracking-tighter">B.</span>
        </div>
      </div>
    </div>
  );
};
