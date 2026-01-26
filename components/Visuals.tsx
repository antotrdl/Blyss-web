
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

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#fdfbfd]">
      {/* Gradients Flous d'Arrière-plan - Version "Lava Lamp" */}
      <div 
        className="absolute w-[80vw] h-[80vw] bg-pink-100/40 rounded-full blur-[120px] -top-[20%] -right-[20%] animate-drift-slow"
        style={{ animationDelay: '0s' }}
      ></div>
      
      <div 
        className="absolute w-[60vw] h-[60vw] bg-purple-100/30 rounded-full blur-[100px] top-[40%] -left-[20%] animate-drift-medium"
        style={{ animationDelay: '-5s' }}
      ></div>
      
      <div 
        className="absolute w-[50vw] h-[50vw] bg-blue-50/40 rounded-full blur-[80px] bottom-[-10%] right-[10%] animate-drift-fast"
        style={{ animationDelay: '-10s' }}
      ></div>

      {/* Grain Texture Overlay */}
      <div className="grainy-bg opacity-30"></div>
    </div>
  );
};

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`glass-light rounded-[2.5rem] ${className}`}>
    {children}
  </div>
);
