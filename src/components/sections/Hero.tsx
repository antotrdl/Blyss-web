import React from 'react';

export const Hero: React.FC<{ onJoin?: () => void }> = ({ }) => {
  return (
    <>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen md:min-h-0 pt-24 md:pt-40 pb-12 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#ffecf5] via-pink-50/50 to-white flex flex-col justify-center md:block">
        {/* Atmosphère rose optimisée */}
        <div className="absolute top-[-20%] left-[-10%] w-[1200px] h-[1200px] bg-[#eb5e9d]/12 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[1000px] h-[1000px] bg-pink-200/30 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#eb5e9d]/8 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Background*/}
        <div className="  backgroundImage: 'linear-gradient(135deg, #FFF8FB 0%, #FFF0F7 50%, #F6EEFF 100%)">
        </div>
      </section>
    </>
  );
};
