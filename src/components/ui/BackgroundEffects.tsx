import React from 'react';

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
