import React from 'react';

const BlyssLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="flex items-center gap-3 group cursor-pointer" onClick={onClick}>
    <img
      src="https://i.ibb.co/35940F13/B3-B.png"
      alt="Blyss Logo"
      width="64"
      height="64"
      className="w-10 h-10 md:w-16 md:h-16 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg]"
    />
  </div>
);

export default BlyssLogo;
