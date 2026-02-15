import React from 'react';

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`glass-light rounded-[2.5rem] ${className}`}>
    {children}
  </div>
);
