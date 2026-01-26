
import React, { useState, useRef, useEffect } from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  Instagram,
  Heart,
  Calendar,
  Zap,
  User,
  CreditCard,
  Smartphone,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Plus,
  Minus,
  X,
  Star,
  ArrowLeft,
  Mail,
  Phone,
  Store,
  MapPin,
  Clock,
  Rocket,
  Shield,
  Smile,
  MessageCircle,
  Send,
  Loader2,
  Apple,
  Play,
  Lock,
  Eye,
  EyeOff,
  HelpCircle,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  FileText,
  Bell,
  Menu,
  MoreHorizontal,
  Search,
  PieChart,
  Wifi,
  Battery,
  Building2,
  Twitter,
  Linkedin,
  Facebook,
  CheckCircle,
  Download,
  LayoutGrid,
  Palette,
  Users,
  Home,
  Pencil,
  Ban
} from 'lucide-react';
import { GlassCard } from './Visuals';
import { geminiService } from '../services/geminiService';
import { PageView } from '../App';

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

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current as Element);
    }

    return () => observer.disconnect();
  }, []);

  return { targetRef, isIntersecting };
};

/* --- PHONE MOCKUP COMPONENT IPHONE 17 STYLE --- */
const PhoneMockup: React.FC<{ type: 'dashboard' | 'calendar-month' | 'calendar-day' | 'clients' | 'overview' | 'screenshot'; className?: string; imageSrc?: string; imageClassName?: string }> = ({ type, className = "", imageSrc, imageClassName = "" }) => {
  const isCustomScreen = !!imageSrc;

  return (
    // Base width reduced to 280px for better mobile fit on small screens, expands on md
    <div className={`relative w-[280px] md:w-[300px] h-[580px] md:h-[620px] bg-[#e3e3e3] rounded-[45px] md:rounded-[55px] p-[4px] shadow-[0_0_2px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.2)] ring-1 ring-white/50 shrink-0 select-none ${className}`}>

      {/* Side Buttons */}
      <div className="absolute top-28 -left-[2px] w-[3px] h-7 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-40 -left-[2px] w-[3px] h-14 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-56 -left-[2px] w-[3px] h-14 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-44 -right-[2px] w-[3px] h-20 bg-[#bdbdbd] rounded-r-md"></div>

      {/* Titanium Frame Bezel */}
      <div className="w-full h-full bg-[#1c1c1c] rounded-[42px] md:rounded-[52px] p-[8px] shadow-inner">
        {/* Screen */}
        <div className={`w-full h-full ${type === 'screenshot' || isCustomScreen ? 'bg-[#fff0f6]' : 'bg-[#FDFBFD]'} rounded-[34px] md:rounded-[44px] overflow-hidden flex flex-col font-inter relative isolate`}>

          {/* Background Decorative Elements for Screenshot Type - Only if NO custom screen */}
          {(type === 'screenshot' || isCustomScreen) && (
            <>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#eb5e9d]/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#eb5e9d]/10 to-transparent"></div>
            </>
          )}

          {/* Dynamic Island / Notch */}
          <div className="absolute top-0 left-0 right-0 h-[32px] z-50 flex justify-center pointer-events-none">
            <div className={`w-[80px] md:w-[100px] h-[24px] md:h-[28px] bg-black rounded-b-[16px] md:rounded-b-[18px] flex items-center justify-center gap-2 shadow-sm mt-0`}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#101010]"></div>
            </div>
          </div>

          {/* Status Bar - Always render spacer for layout consistency */}
          <div className="h-9 md:h-12 w-full flex items-end justify-between pl-5 md:pl-7 pr-8 md:pr-12 pb-4 md:pb-7 z-40 text-gray-900 select-none">
            <div className="flex-1">
              {type !== 'screenshot' && !isCustomScreen && (
                <span className="text-[12px] md:text-[14px] font-semibold tracking-wide">12:35</span>
              )}
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div>

          {/* Content Area */}
          <div
            className={`flex-1 relative ${type === 'screenshot' || isCustomScreen ? 'h-full w-full overflow-hidden' : 'overflow-y-auto px-4 md:px-5 pt-2 pb-24 space-y-4 md:space-y-5 [&::-webkit-scrollbar]:hidden'}`}
            style={type !== 'screenshot' && !isCustomScreen ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          >
            {isCustomScreen ? (
              <img
                src={imageSrc}
                loading="lazy"
                className={`absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom ${imageClassName}`}
                alt="App Screen"
              />

            ) : (
              <>
                {type === 'screenshot' && (
                  <img
                    src="/dashboard_final_v2.jpg"
                    loading="lazy"
                    className="absolute inset-x-0 -top-[5%] w-full h-[105%] object-cover object-top"
                    alt="App Dashboard"
                  />
                )}

                {type === 'dashboard' && (
                  <>
                    <div className="bg-[#eb5e9d] rounded-[2rem] p-6 text-white shadow-lg shadow-pink-200/50 relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="text-pink-100 text-sm mb-1">Cette semaine</div>
                        <div className="flex justify-between items-end mb-1">
                          <div className="text-4xl font-bold">24</div>
                          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <TrendingUp size={12} /> +12%
                          </div>
                        </div>
                        <div className="text-pink-100 text-sm mb-4">prestations</div>
                        <div className="text-right text-xs text-pink-200">vs semaine dernière</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-50">
                        <div className="w-12 h-12 rounded-full bg-pink-100 text-[#eb5e9d] flex items-center justify-center">
                          <Plus size={24} />
                        </div>
                        <span className="text-xs font-medium text-gray-600">Créneaux</span>
                      </div>
                      <div className="flex-1 bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-50">
                        <div className="w-12 h-12 rounded-full bg-pink-100/50 text-[#eb5e9d] flex items-center justify-center">
                          <Ban size={24} />
                        </div>
                        <span className="text-xs font-medium text-gray-600">Bloquer</span>
                      </div>
                      <div className="flex-1 bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-50">
                        <div className="w-12 h-12 rounded-full bg-pink-100/50 text-[#eb5e9d] flex items-center justify-center">
                          <Eye size={24} />
                        </div>
                        <span className="text-xs font-medium text-gray-600">Planning</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-50 flex justify-between items-center">
                      <div className="text-sm font-medium text-gray-500">Estimation du jour</div>
                      <div className="text-xl font-bold text-gray-900">320€</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center px-1 mb-3">
                        <h4 className="text-xs font-bold text-gray-800">Prochaines clientes</h4>
                        <span className="text-[10px] text-[#eb5e9d] font-bold">Voir tout</span>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#eb5e9d] text-white flex items-center justify-center text-xs font-bold">MD</div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Marie Dupont</div>
                              <div className="text-xs text-gray-400">Pose complète gel</div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] bg-[#eb5e9d] text-white px-2 py-0.5 rounded-full font-bold mb-1">En cours</span>
                            <span className="font-bold text-sm">65€</span>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between opacity-60">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#ffadd6] text-white flex items-center justify-center text-xs font-bold">SM</div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Sophie Martin</div>
                              <div className="text-xs text-gray-400">Remplissage</div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] bg-[#fce4ec] text-[#eb5e9d] px-2 py-0.5 rounded-full font-bold mb-1">À venir</span>
                            <span className="font-bold text-sm">45€</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {type === 'calendar-month' && (
                  <>
                    <div className="flex justify-between items-center mb-6 pt-2">
                      <h3 className="text-2xl font-bold">Calendrier</h3>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-600"><Search size={20} /></button>
                        <button className="w-10 h-10 rounded-full bg-[#eb5e9d] flex items-center justify-center shadow-sm text-white"><Plus size={24} /></button>
                      </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50">
                      <div className="flex justify-between items-center mb-6">
                        <ChevronLeft size={20} className="text-gray-400" />
                        <span className="font-bold text-lg">Janvier 2026</span>
                        <ChevronRight size={20} className="text-gray-400" />
                      </div>
                      <div className="grid grid-cols-7 gap-y-4 text-center text-sm mb-2">
                        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => (
                          <div key={d} className="text-gray-400 text-xs font-medium">{d}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-y-4 text-center text-sm font-medium text-gray-800">
                        <span className="text-gray-200">29</span><span className="text-gray-200">30</span><span className="text-gray-200">31</span>
                        <span>1</span><span>2</span><span>3</span><span>4</span>
                        <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                        <span className="relative flex justify-center">
                          <span className="absolute -inset-2 bg-[#eb5e9d] rounded-xl z-0 shadow-md"></span>
                          <span className="relative z-10 text-white font-bold">10</span>
                        </span>
                        <span>11</span>
                        <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                        <span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span>
                        <span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center px-1 mb-3">
                        <h4 className="text-xs font-bold text-gray-800">Rendez-vous du jour</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex gap-4">
                          <div className="flex flex-col items-center justify-center border-r border-gray-100 pr-4">
                            <span className="text-lg font-bold text-gray-900">09:00</span>
                            <span className="text-xs text-gray-400">1h30</span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">Claire Petit</div>
                            <div className="text-xs text-gray-500 mb-1">Pose complète</div>
                            <span className="text-[10px] font-bold text-[#eb5e9d] bg-pink-50 px-2 py-0.5 rounded-full">65€</span>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex gap-4">
                          <div className="flex flex-col items-center justify-center border-r border-gray-100 pr-4">
                            <span className="text-lg font-bold text-gray-900">11:00</span>
                            <span className="text-xs text-gray-400">1h</span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">Julie Moreau</div>
                            <div className="text-xs text-gray-500 mb-1">Remplissage</div>
                            <span className="text-[10px] font-bold text-[#eb5e9d] bg-pink-50 px-2 py-0.5 rounded-full">45€</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {(type === 'clients' || type === 'overview') && (
                  <>
                    <div className="flex justify-between items-center mb-6 pt-2">
                      <h3 className="text-2xl font-bold">Clientes</h3>
                      <button className="w-10 h-10 rounded-full bg-[#eb5e9d] flex items-center justify-center shadow-sm text-white"><Plus size={24} /></button>
                    </div>

                    <div className="relative mb-6">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input type="text" placeholder="Rechercher..." className="w-full bg-white border border-gray-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all font-medium" />
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center px-1">
                        <h4 className="text-xs font-bold text-gray-800">Récents</h4>
                      </div>
                      <div className="flex gap-4 overflow-x-auto pb-4 pl-1 no-scrollbar">
                        {['MD', 'SM', 'EB', 'LM', 'CP'].map((initials, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                            <div className={`w-14 h-14 rounded-full ${i === 0 ? 'border-2 border-[#eb5e9d] p-[2px]' : ''}`}>
                              <div className={`w-full h-full rounded-full flex items-center justify-center text-sm font-bold text-white ${['bg-pink-400', 'bg-purple-400', 'bg-orange-400', 'bg-blue-400', 'bg-green-400'][i]}`}>
                                {initials}
                              </div>
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">Marie D.</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center px-1 mb-3">
                        <h4 className="text-xs font-bold text-gray-800">Liste (142)</h4>
                      </div>
                      <div className="bg-white rounded-[2rem] p-2 shadow-sm border border-gray-50">
                        {['Emma Bernard', 'Léa Martin', 'Camille Thomas', 'Manon Richard'].map((name, i) => (
                          <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${['bg-orange-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400'][i]}`}>
                                {name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-sm">{name}</div>
                                <div className="text-[10px] text-gray-400">Dernière visite: Il y a 3j</div>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-[#eb5e9d] group-hover:border-pink-100 transition-all">
                              <ChevronRight size={14} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services Preview for Clients/Overview */}
                    <div>
                      <div className="flex justify-between items-center px-1 mb-3">
                        <h4 className="text-xs font-bold text-gray-800 flex items-center gap-2">
                          <Sparkles size={12} className="text-[#eb5e9d]" /> Prestations
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gradient-to-br from-pink-50 to-white p-3 rounded-2xl border border-pink-100 flex flex-col gap-2 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="text-[10px] font-bold text-gray-800">Babyboomer</div>
                          <div className="flex justify-between items-end">
                            <span className="text-[11px] font-black text-[#eb5e9d]">45€</span>
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                              <ChevronRight size={10} />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-2xl border border-gray-100 flex flex-col gap-2 hover:border-pink-200 transition-colors cursor-pointer">
                          <div className="text-[10px] font-bold text-gray-800">Nail Art</div>
                          <div className="flex justify-between items-end">
                            <span className="text-[11px] font-black text-gray-800">15€</span>
                            <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                              <ChevronRight size={10} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Bottom Nav */}
          {type !== 'screenshot' && !isCustomScreen && (
            <div className="absolute bottom-6 left-4 right-4 h-16 bg-white rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex justify-around items-center px-4 z-40">
              <div className={`p-2 transition-all cursor-pointer ${type === 'dashboard' ? 'text-[#eb5e9d] bg-pink-50 rounded-full' : 'text-gray-400'}`}>
                <Home size={24} strokeWidth={type === 'dashboard' ? 2.5 : 2} />
              </div>
              <div className={`p-2 transition-all cursor-pointer ${(type === 'calendar-month' || type === 'calendar-day') ? 'text-[#eb5e9d] bg-pink-50 rounded-full' : 'text-gray-400'}`}>
                <Calendar size={24} strokeWidth={(type === 'calendar-month' || type === 'calendar-day') ? 2.5 : 2} />
              </div>
              <div className="p-2 text-gray-400">
                <Heart size={24} />
              </div>
              <div className={`p-2 transition-all cursor-pointer ${type === 'clients' ? 'text-[#eb5e9d] bg-pink-50 rounded-full' : 'text-gray-400'}`}>
                <User size={24} strokeWidth={type === 'clients' ? 2.5 : 2} />
              </div>
            </div>
          )}

          {/* Home Indicator */}
          {type !== 'screenshot' && !isCustomScreen && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/80 rounded-full z-50 pointer-events-none"></div>
          )}

        </div>
      </div>
    </div>
  );
};

const ChevronLeft = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);


export const Navbar: React.FC<{ scrolled: boolean; currentPage: PageView; setCurrentPage: (p: PageView) => void }> = ({ scrolled, currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down AND past 50px. Show if scrolling up.
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'}`}>
        <nav className="pointer-events-auto w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-4 py-2 pl-6 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-white/15 hover:border-white/30">

          {/* Logo (Left) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="https://i.ibb.co/35940F13/B3-B.png"
              alt="Blyss"
              width="32"
              height="32"
              className="w-8 h-8 object-contain group-hover:rotate-[10deg] transition-transform"
            />
          </button>

          {/* Right Section: Links + CTA + Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNav('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'download'
                  ? 'text-white/90 hover:text-white'
                  : currentPage === 'home' ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
              >
                Découvrir
              </button>
              <button
                onClick={() => handleNav('pricing')}
                className={`text-sm font-medium transition-colors ${currentPage === 'download'
                  ? 'text-white/90 hover:text-white'
                  : currentPage === 'pricing' ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
              >
                Tarifs
              </button>
            </div>

            <div className="flex items-center gap-2 relative">
              {/* CTA (Right) */}
              <button
                onClick={() => handleNav('download')}
                className="hidden md:block bg-[#eb5e9d] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-pink-600 transition-colors whitespace-nowrap shadow-lg shadow-pink-500/30"
              >
                Télécharger l'app
              </button>

              {/* Mobile Menu Trigger */}
              <button
                className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 'download' ? 'text-white' : 'text-gray-900'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Mobile Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-[1.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-3 flex flex-col gap-2 transform transition-all duration-300 ease-out origin-top-right z-[100] ${isMobileMenuOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-95 opacity-0 -translate-y-2 pointer-events-none'}`}>

                <button
                  onClick={() => handleNav('home')}
                  className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 border backdrop-blur-md ${currentPage === 'home' ? 'bg-[#eb5e9d]/10 border-[#eb5e9d]/10 text-[#eb5e9d] shadow-sm' : 'bg-white/80 border-gray-100 hover:bg-[#eb5e9d]/10 hover:border-[#eb5e9d]/20 hover:text-[#eb5e9d] text-gray-700 hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span className={`font-bold text-sm ${currentPage === 'home' ? '' : 'group-hover:translate-x-1 transition-transform'}`}>Découvrir</span>
                  {currentPage === 'home' && <div className="w-1.5 h-1.5 rounded-full bg-[#eb5e9d] shadow-[0_0_10px_rgba(235,94,157,0.5)]"></div>}
                </button>

                <button
                  onClick={() => handleNav('pricing')}
                  className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 border backdrop-blur-md ${currentPage === 'pricing' ? 'bg-[#eb5e9d]/10 border-[#eb5e9d]/10 text-[#eb5e9d] shadow-sm' : 'bg-white/80 border-gray-100 hover:bg-[#eb5e9d]/10 hover:border-[#eb5e9d]/20 hover:text-[#eb5e9d] text-gray-700 hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span className={`font-bold text-sm ${currentPage === 'pricing' ? '' : 'group-hover:translate-x-1 transition-transform'}`}>Tarifs</span>
                  {currentPage === 'pricing' && <div className="w-1.5 h-1.5 rounded-full bg-[#eb5e9d] shadow-[0_0_10px_rgba(235,94,157,0.5)]"></div>}
                </button>

                <div className="h-px bg-gray-100 mx-2 my-1"></div>

                <button
                  onClick={() => handleNav('download')}
                  className="flex items-center gap-3 w-full p-4 rounded-2xl bg-[#eb5e9d]/90 backdrop-blur-md text-white font-black transition-all duration-300 hover:bg-[#eb5e9d] hover:shadow-[0_10px_20px_-5px_rgba(235,94,157,0.4)] hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20"
                >
                  <Download size={18} />
                  <span className="text-sm">Télécharger l'app</span>
                </button>
              </div>
            </div>
          </div>

        </nav>
      </div>


    </>
  );
};

export const Hero: React.FC<{ onJoin?: () => void }> = ({ onJoin }) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 px-6 overflow-hidden bg-gradient-to-b from-[#ffecf5] to-white">
      {/* Maximum Pink Atmosphere */}
      <div className="absolute top-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-[#eb5e9d]/15 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-pink-200/40 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-[#eb5e9d]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/20 blur-[120px] -z-10 rounded-full"></div>

      {/* Background Giant Logo - Watermark style with increased opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[80vw] max-w-[800px] opacity-[0.06] md:opacity-[0.12] pointer-events-none z-0 select-none mix-blend-multiply transform -translate-y-10 md:translate-y-0">
        <img
          src="https://i.ibb.co/1YVVTQTc/B3-B2.png"
          alt=""
          width="800"
          height="800"
          decoding="async"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center max-w-7xl relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif-elegant italic mb-6 leading-[1.1] md:leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Sublimez votre <br className="hidden md:block" /> <span className="text-[#eb5e9d] drop-shadow-sm italic">quotidien.</span>
        </h1>
        <p className="text-gray-500 text-base md:text-xl max-w-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-light px-2 md:px-4">
          La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 z-20 relative w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onJoin}
            className="bg-[#c73a74] text-white px-8 md:px-10 py-4 rounded-xl font-bold text-base shadow-xl shadow-pink-200/50 flex items-center justify-center gap-3 group transition-all hover:scale-105 hover:bg-pink-700 active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            Commencer l'aventure <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </section >
  );
};

export const Mission: React.FC = () => (
  <section className="pt-16 pb-8 md:py-20 px-6 bg-gradient-to-b from-pink-50/20 via-white to-pink-50/30 overflow-hidden relative">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="md:w-1/2 relative z-10 order-2 md:order-1 text-center md:text-left">
          <div className="w-12 h-1 bg-[#eb5e9d] mb-6 md:mb-8 rounded-full shadow-sm mx-auto md:mx-0"></div>
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">Élevez la <br /> <span className="text-[#eb5e9d] drop-shadow-sm">beauté</span> de votre métier.</h2>
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2 text-gray-900 tracking-tight">Le temps de créer</h3>
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">Nous pensons que votre énergie doit être dédiée à votre art, pas à vos relances. Blyss est votre assistant invisible qui gère tout en arrière-plan.</p>
            </div>
            <div className="relative p-6 md:p-8 bg-pink-50/40 rounded-[2rem] md:rounded-[2.5rem] border border-pink-100/50 italic text-gray-700 text-base md:text-lg shadow-sm">
              "Nous avons créé Blyss pour les professionnelles ongulaires à leurs comptes ou en salons. Elles doivent passer moins de temps sur la partie organisationnelle et prioriser leurs talents !"
              <br /><span className="font-bold text-[#eb5e9d] mt-4 block not-italic font-outfit text-xs tracking-widest uppercase">— Noah, Fondateur de Blyss</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative group order-1 md:order-2 w-full px-4 md:px-0">
          <div className="grid grid-cols-2 gap-2 md:gap-6 relative z-10">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop" width="400" height="600" loading="lazy" className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl transform -rotate-2 md:-rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-out" alt="Nail Studio" />
            <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop" width="400" height="600" loading="lazy" className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl mt-3 md:mt-12 transform rotate-2 md:rotate-3 group-hover:rotate-0 transition-all duration-1000 delay-100 ease-out" alt="Manicure" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-pink-100/30 blur-[60px] md:blur-[100px] -z-0 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="pt-4 pb-12 md:py-20 px-6 bg-gradient-to-b from-pink-50/30 via-white to-pink-100/20" id="features">
      <div className="container mx-auto max-w-7xl">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-12">
          {[
            { icon: <Calendar size={32} className="w-10 h-10" />, title: "Notifications Instantanées", desc: "Soyez alertée immédiatement pour chaque réservation ou annulation.", color: "bg-pink-100/80 text-[#eb5e9d]" },
            { icon: <Sparkles size={32} className="w-10 h-10" />, title: "Portfolio Photo", desc: "Liez votre profil instagram pour présenter vos réalisations.", color: "bg-pink-100/80 text-[#eb5e9d]" },
            { icon: <ShieldCheck size={32} className="w-10 h-10" />, title: "Sécurité Totale", desc: "Terminés les 'No-shows'. Vos revenus sont garantis grâce aux acomptes automatisés.", color: "bg-pink-100/80 text-[#eb5e9d]" }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group cursor-default">
              <div className={`w-20 h-20 ${feature.color} rounded-[1.75rem] flex items-center justify-center mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[15deg] shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs text-base font-light">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Interactive Layout */}
        <div className="md:hidden flex flex-col items-center">
          <div className="flex justify-between w-full max-w-sm gap-4">
            {[
              { icon: <Calendar size={20} />, title: "Notifications", fullTitle: "Notifications Instantanées", desc: "Soyez alertée immédiatement pour chaque réservation ou annulation.", color: "bg-pink-100/80 text-[#eb5e9d]" },
              { icon: <Sparkles size={20} />, title: "Portfolio", fullTitle: "Portfolio Photo", desc: "Liez votre profil instagram pour présenter vos réalisations.", color: "bg-pink-100/80 text-[#eb5e9d]" },
              { icon: <ShieldCheck size={20} />, title: "Sécurité", fullTitle: "Sécurité Totale", desc: "Terminés les 'No-shows'. Vos revenus sont garantis grâce aux acomptes automatisés.", color: "bg-pink-100/80 text-[#eb5e9d]" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center w-1/3" onClick={() => setActiveFeature(activeFeature === i ? null : i)}>
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 ${activeFeature === i ? 'scale-110 ring-2 ring-pink-100 shadow-lg' : 'shadow-sm'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xs font-bold text-center leading-tight transition-colors ${activeFeature === i ? 'text-[#eb5e9d]' : 'text-gray-600'}`}>
                  {feature.title}
                </h3>
                {/* Mobile Description Popup */}
                <div className={`mt-4 absolute left-6 right-6 p-4 bg-white rounded-2xl border border-pink-100 shadow-xl z-20 transition-all duration-300 transform origin-top ${activeFeature === i ? 'opacity-100 translate-y-20 scale-100' : 'opacity-0 translate-y-16 scale-95 pointer-events-none'}`}>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.fullTitle}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Spacer for the popup */}
          <div className={`transition-all duration-300 ${activeFeature !== null ? 'h-32' : 'h-4'}`}></div>
        </div>
      </div>
    </section>
  );
};


export const AppShowcase: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#feeef2] via-pink-50 to-white">
      {/* Maximum Pink Atmosphere - Same as Hero */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[#eb5e9d]/15 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-pink-200/40 rounded-full blur-[80px] md:blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#eb5e9d]/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16 max-w-7xl">
        <div className="lg:w-1/2 relative z-10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-8 leading-tight">Tout votre salon <br /> dans votre <span className="text-[#eb5e9d]">poche.</span></h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {[
              { prefix: "Votre", label: "planning", icon: <Calendar size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { prefix: "Vos", label: "Clientes", icon: <User size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { prefix: "Votre", label: "Profil", icon: <Zap size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { prefix: "Votre", label: "Fidélité", icon: <Heart size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" }
            ].map((item, i) => (
              <GlassCard key={i} className={`p-6 md:p-8 flex flex-col items-center text-center hover:bg-white transition-all border-2 ${item.bg.includes('border') ? '' : 'border-pink-50'} hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50 group bg-white/60 active:scale-95 duration-200`}>
                <div className={`${item.color} ${item.bg} p-3 md:p-4 rounded-2xl mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-[1.2] shadow-sm border`}>{item.icon}</div>
                <span className="font-bold text-gray-800 text-sm md:text-lg group-hover:text-[#eb5e9d] transition-colors">{item.prefix} {item.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
        <div
          ref={targetRef as any}
          className={`hidden lg:flex lg:w-1/2 relative justify-center items-center w-full order-1 lg:order-2 mb-8 lg:mb-0 transition-all duration-[2000ms] ease-out transform ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
        >
          {/* Static Phone Mockup with Custom Screenshot */}
          <div className="relative z-10 transform scale-90 md:scale-100 origin-center animate-float">
            <PhoneMockup
              type="screenshot"
              imageSrc="/dashboard_final_v2.jpg"
              className="shadow-2xl scale-95 md:scale-100"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#eb5e9d]/20 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-300/30 blur-[60px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};



/* Pricing Modal */
const PricingModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  plan: { title: string; price: string; description: string; features: string[] };
  onJoin: () => void;
}> = ({ isOpen, onClose, plan, onJoin }) => {
  if (!isOpen) return null;

  // Static detailed features based on plan type (simplified for demo, would be prop driven in real app)
  const isSignature = plan.title === 'Signature';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors" aria-label="Fermer">
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-10">
          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-sm ${isSignature ? 'bg-[#eb5e9d] text-white' : 'bg-gray-100 text-gray-600'}`}>
            <Sparkles size={32} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-4xl font-serif-elegant italic">{plan.title}</h2>
            {isSignature && <span className="bg-[#eb5e9d] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Recommandé</span>}
          </div>
          <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">{plan.description}</p>
          <div className="text-5xl font-black text-[#eb5e9d]">{plan.price}<span className="text-base font-medium text-gray-400 ml-1">€/mois</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <CheckCircle2 size={16} className="text-green-500" /> Tout inclus dans Start
            </h4>
            <div className="bg-gray-50 p-4 rounded-2xl text-sm font-medium text-gray-600">
              Toutes les fonctionnalités Start
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Lock size={16} className="text-[#eb5e9d]" /> Sécurisation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Paiement en ligne</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Prélèvement d'acomptes (Anti no-show)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Empreinte bancaire</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Sparkles size={16} className="text-[#eb5e9d]" /> Marketing & Image
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Galerie Photos HD</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Site web personnalisé premium</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Avis clients vérifiés</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Codes promo & Cartes cadeaux</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <TrendingUp size={16} className="text-[#eb5e9d]" /> Pilotage
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Tableau de bord statistiques</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Suivi du chiffre d'affaires</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 mt-auto">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">Fermer</button>
          <button onClick={onJoin} className="bg-[#eb5e9d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors flex items-center gap-2">
            Choisir cette offre
          </button>
        </div>
      </div>
    </div>
  );
}

/* Salons Modal */
const SalonsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors" aria-label="Fermer">
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#eb5e9d] text-white flex items-center justify-center mb-4 shadow-sm">
            <Building2 size={32} />
          </div>
          <h2 className="text-4xl font-serif-elegant italic mb-2">Salons & Franchises</h2>
          <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">Une solution sur-mesure pour les grandes structures et les réseaux de salons.</p>
          <div className="text-3xl font-black text-[#c73a74]">Sur Devis</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Building2 size={16} className="text-[#eb5e9d]" /> Multi-Comptes
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Gestion centralisée de plusieurs établissements</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Comptes collaborateurs illimités</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Palette size={16} className="text-[#eb5e9d]" /> Personnalisation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Marque blanche (White label)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Développement de fonctionnalités sur mesure</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Users size={16} className="text-[#eb5e9d]" /> Accompagnement
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Chef de projet dédié</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Formation des équipes sur site</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">API ouverte</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 mt-auto">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">Fermer</button>
          <button className="bg-[#eb5e9d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors flex items-center gap-2">
            Demander un devis <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

const ComparisonTable: React.FC = () => {
  const checkIcon = <div className="flex justify-center"><div className="bg-green-100 p-1 rounded-full"><Check size={12} className="text-green-600" strokeWidth={3} /></div></div>;
  const minusIcon = <div className="flex justify-center text-gray-300">—</div>;

  const rows = [
    { label: "Réservation en ligne pour les clients", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Gestion des rendez-vous", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Notifications clients (Push notifications)", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Tableau de bord des rendez-vous", start: checkIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Module finance : Statistiques & Facturation", start: minusIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Portfolio photos intégré au profil", start: minusIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Rappels automatiques des rendez-vous", start: minusIcon, serenite: checkIcon, signature: checkIcon },
    { label: "Rappels client post-prestation", start: minusIcon, serenite: minusIcon, signature: checkIcon },
    { label: "Visibilité premium dans les résultats", start: minusIcon, serenite: minusIcon, signature: checkIcon },
    { label: "Encaissement en ligne des prestations *", start: minusIcon, serenite: minusIcon, signature: checkIcon },
  ];

  return (
    <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
        <div className="min-w-[800px] md:min-w-full bg-white rounded-[2rem] p-4 md:p-8 border border-gray-100 shadow-xl shadow-pink-100/20">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-center pb-6 border-b border-gray-100">
            <div className="text-left font-serif-elegant text-2xl text-gray-400 italic self-center">Fonctionnalités</div>

            {/* Start */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Formule <span className="text-pink-400">Start</span></span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">39,90€</span>
              </div>
              <span className="text-[11px] text-gray-400">Sans engagement</span>
            </div>

            {/* Sérénité */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Formule <span className="text-pink-400">Sérénité</span></span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">29,90€</span>
              </div>
              <span className="text-[11px] text-gray-400">Engagement 3 mois</span>
            </div>

            {/* Signature */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Formule <span className="text-pink-400">Signature</span></span>
                <span className="bg-[#eb5e9d] text-white text-[11px] font-bold px-3 py-1 rounded-full">24,90€</span>
              </div>
              <span className="text-[11px] text-gray-400">Engagement 12 mois</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-1">
            {rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 gap-4 items-center text-center py-4 px-4 rounded-xl transition-colors ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-pink-50/30`}>
                <div className="text-left font-medium text-gray-700 text-xs md:text-sm">{row.label}</div>
                <div>{row.start}</div>
                <div>{row.serenite}</div>
                <div>{row.signature}</div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-left text-[11px] text-gray-400 italic border-t border-gray-50 pt-4">
            *Encaissement en ligne soumis à conditions.
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCards = ({ onJoin }: { onJoin: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState<{ title: string, price: string, description: string, features: string[] } | null>(null);
  const [isSalonsModalOpen, setIsSalonsModalOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Signature (middle) par défaut
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll Initial instantané pour centrer l'offre Signature (index 1) sans animation
    // Timeout léger pour s'assurer que le rendu est terminé
    const timer = setTimeout(() => {
      scrollToIndex(1, false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToIndex = (index: number, smooth = true) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetCard = container.children[index] as HTMLElement;

      if (targetCard) {
        // Calcul précis pour centrer l'élément
        // On s'assure de récupérer la position relative au conteneur
        const cardLeft = targetCard.offsetLeft;
        const cardWidth = targetCard.offsetWidth;
        const containerWidth = container.offsetWidth;

        // Formule : Position gauche de la carte - (Marge pour centrer dans le conteneur)
        // Marge = (Largeur conteneur - Largeur carte) / 2
        const centerOffset = (containerWidth - cardWidth) / 2;
        const newScrollLeft = cardLeft - centerOffset;

        container.scrollTo({
          left: newScrollLeft,
          behavior: smooth ? 'smooth' : 'auto'
        });

        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPos = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      // Estimation pour la mise à jour de l'index pendant le scroll manuel
      const cardWidth = containerWidth * 0.8;
      const gap = 24;

      const newIndex = Math.round(scrollPos / (cardWidth + gap));

      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < plans.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const plans = [
    {
      title: "Start",
      price: "39,90",
      description: "L'essentiel pour lancer votre activité sereinement.",
      features: [
        "Réservation en ligne 24/7",
        "Gestion des Rendez-vous",
        "Notifications clients App",
        "Tableau de bord complet"
      ],
      icon: <Zap size={28} />,
      desktopOrder: "md:order-1"
    },
    {
      title: "Signature",
      price: "24,90",
      description: "Le boost ultime : visibilité premium et automatisation complète.",
      features: [
        "Visibilité résultats Premium",
        "Rappels post-prestation",
        "Encaissement en ligne",
        "+ fonctionnalités Start et Sérénité"
      ],
      isPopular: true,
      commitment: "Engagement 12 mois",
      icon: <Sparkles size={32} />,
      desktopOrder: "md:order-2"
    },
    {
      title: "Sérénité",
      price: "29,90",
      description: "Gagnez du temps avec une gestion financière et photo intégrée.",
      features: [
        "Module Finances & Stats",
        "Portfolio photos intégré",
        "Rappels rdv automatiques",
        "+ fonctionnalités de la formule Start"
      ],
      commitment: "Engagement 3 mois",
      icon: <ShieldCheck size={28} />,
      desktopOrder: "md:order-3"
    }
  ];

  return (
    <>
      <div className="relative">
        {/* Navigation Arrows (Mobile only) */}
        <div className="md:hidden flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-30 pointer-events-none">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1), true)}
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#eb5e9d] pointer-events-auto transition-opacity ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
            aria-label="Offre précédente"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(plans.length - 1, activeIndex + 1), true)}
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#eb5e9d] pointer-events-auto transition-opacity ${activeIndex === plans.length - 1 ? 'opacity-0' : 'opacity-100'}`}
            aria-label="Offre suivante"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 max-w-6xl mx-auto items-center md:items-stretch pt-20 md:pt-0 pb-12 md:pb-0 scroll-smooth px-[10vw] md:px-0 no-scrollbar scroll-px-[10vw]"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group min-w-[80vw] md:min-w-0 snap-center transition-all duration-500 ease-out ${plan.desktopOrder || ''}
              ${activeIndex === i ? 'scale-105 z-20 opacity-100' : 'scale-[0.85] z-10 opacity-40 blur-[0.5px]'}
              md:scale-100 md:opacity-100 md:z-0 md:blur-none
              ${plan.isPopular ? 'md:scale-105 md:z-10' : ''}
            `}
            >
              <div className={`flex flex-col relative min-h-[550px] md:h-full rounded-2xl md:rounded-[3rem] border transition-all duration-500 
              ${plan.isPopular
                  ? 'bg-[#fff0f6] border-[#eb5e9d] shadow-xl md:shadow-2xl md:shadow-pink-200/50 md:hover:shadow-pink-200/80'
                  : 'bg-[#fff5f9] border-pink-100/50 md:shadow-sm md:hover:shadow-xl md:hover:shadow-pink-100/50 md:hover:border-[#eb5e9d]/30'
                } 
              md:hover:-translate-y-2 px-5 py-10 md:p-8 items-center text-center`}
              >

                {plan.isPopular && (
                  <div className="block absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#eb5e9d] text-white text-[7px] md:text-[10px] font-bold px-3 md:px-6 py-1 md:py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                    Plus Populaire
                  </div>
                )}

                <div className={`flex w-14 h-14 md:w-16 md:h-16 rounded-2xl items-center justify-center mb-6 transition-all duration-300 border 
                  ${(plan.isPopular || activeIndex === i)
                    ? 'bg-[#eb5e9d] text-white border-[#eb5e9d] shadow-lg shadow-pink-200'
                    : 'bg-white/50 backdrop-blur-sm text-gray-400 border-white/50 group-hover:bg-[#eb5e9d] group-hover:text-white group-hover:border-[#eb5e9d] group-hover:shadow-lg group-hover:shadow-pink-200 group-active:bg-[#eb5e9d] group-active:text-white group-active:scale-95'
                  }`}>
                  {plan.icon}
                </div>

                <h3 className={`text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2`}>
                  {plan.title}
                </h3>

                <div className="flex flex-col md:flex-row items-center md:items-baseline md:gap-1 mb-2 md:mb-1">
                  <span className={`text-4xl md:text-5xl font-black text-[#eb5e9d]`}>
                    {plan.price}
                  </span>
                  <span className="text-xs md:text-base text-gray-400 font-medium">€/mois</span>
                </div>

                <p className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-8">
                  {plan.commitment || "Sans engagement"}
                </p>

                <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-1 px-2">
                  {plan.description}
                </p>

                <ul className="space-y-3 text-left w-full mb-8 flex-1 pl-2 md:pl-4">
                  {plan.features.slice(0, 4).map((f, featureIdx) => {
                    const isHighlighted = f.startsWith('+');
                    return (
                      <li key={featureIdx} className={`flex items-center gap-3 text-[12px] md:text-sm ${isHighlighted ? 'text-[#eb5e9d] font-bold' : 'text-gray-600'}`}>
                        <div className={`bg-white/60 p-1 rounded-full border ${isHighlighted ? 'border-[#eb5e9d]/30' : 'border-pink-100/50'}`}>
                          <Check size={10} className="text-[#eb5e9d]" />
                        </div>
                        {f}
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all shadow-md text-sm md:text-base ${plan.isPopular
                    ? 'bg-[#eb5e9d] text-white hover:bg-pink-600 shadow-pink-100'
                    : 'bg-white text-[#eb5e9d] border border-white/50 hover:bg-[#eb5e9d] hover:text-white'
                    } hover:scale-[1.02] active:scale-[0.98]`}
                >
                  Choisir cette offre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-12 max-w-2xl mx-auto bg-[#fff5f9] rounded-[2rem] py-3 px-6 md:p-5 border border-pink-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 hover:shadow-lg hover:shadow-pink-100 transition-all cursor-pointer group" onClick={() => setIsSalonsModalOpen(true)}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl border border-pink-100 flex items-center justify-center text-[#eb5e9d] group-hover:scale-110 transition-transform">
            <Building2 size={24} strokeWidth={1.5} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900 text-base group-hover:text-[#eb5e9d] transition-colors">Salons & Franchises</h4>
            <p className="text-[13px] text-gray-500">Une solution sur-mesure.</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-[10px] font-bold text-[#c73a74] uppercase tracking-wider">Sur devis</span>
          <button className="bg-white text-[#c73a74] border border-pink-100 px-5 py-2.5 rounded-xl font-bold transition-colors text-xs hover:bg-[#c73a74] hover:text-white shadow-sm">Nous contacter</button>
        </div>
      </div>

      {/* Comparison Toggle */}
      <div className="mt-8 md:mt-12 text-center hidden md:block">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-2 bg-white border border-pink-100 text-gray-500 px-5 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-sm hover:shadow-md hover:text-[#eb5e9d] transition-all text-xs md:text-sm"
        >
          {showComparison ? 'Masquer le comparatif' : 'Comparer toutes les fonctionnalités'}
          {showComparison ? <ChevronUp size={14} className="md:w-[18px]" /> : <ChevronDown size={14} className="md:w-[18px]" />}
        </button>
      </div>

      {/* Comparison Table */}
      {showComparison && <ComparisonTable />}

      {/* Modals */}
      <PricingModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan || plans[1]}
        onJoin={onJoin}
      />

      <SalonsModal
        isOpen={isSalonsModalOpen}
        onClose={() => setIsSalonsModalOpen(false)}
      />
    </>
  );
};

/* PricingSection */
export const PricingSection: React.FC<{ onSeeDetails: () => void; onJoin: () => void }> = ({ onSeeDetails, onJoin }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-100 via-gray-50 to-white" id="pricing">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6">Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span></h2>
        <p className="text-gray-500 text-lg mb-8 md:mb-16 max-w-xl mx-auto font-light">Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.</p>

        <PricingCards onJoin={onJoin} />

      </div>
    </section>
  );
};

/* PricingPage */
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

/* AboutPage */
export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#eb5e9d] text-sm font-bold mb-6 border border-pink-100">
            Notre Vision
          </div>
          <h1 className="text-5xl md:text-7xl font-serif-elegant italic mb-8">
            L'ambition <span className="text-[#eb5e9d]">Blyss</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Redéfinir les standards de la beauté connectée, un salon à la fois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100 to-transparent rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-2 duration-500" />
            <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-pink-100/20 border border-gray-100">
              <h3 className="text-3xl font-serif-elegant mb-6">Notre Histoire</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Blyss est née d'un constat simple mais puissant : les professionnels de la beauté, et en particulier les prothésistes ongulaires, sont des artistes qui méritent des outils à la hauteur de leur talent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fondée en 2025 à Annecy, notre aventure a commencé avec une mission claire : révolutionner la gestion des salons grâce à une technologie invisible, fluide et élégante, préservant l'humain au cœur de chaque échange.
              </p>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-[#eb5e9d] shrink-0">
                <Star size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Excellence</h4>
                <p className="text-gray-500 leading-relaxed">Nous ne faisons aucun compromis sur la qualité. Chaque fonctionnalité est pensée, designée et peaufinée pour être la meilleure du marché.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Simplicité</h4>
                <p className="text-gray-500 leading-relaxed">Nous croyons en la puissance de la simplicité. Des outils intuitifs et efficaces qui vous font gagner du temps au quotidien.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Passion</h4>
                <p className="text-gray-500 leading-relaxed">Votre passion est notre moteur. Nous mettons tout notre cœur et notre énergie à soutenir votre créativité au quotidien.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Témoignage Section */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="bg-pink-50/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 lg:p-16 border border-pink-100/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle size={120} className="text-[#eb5e9d]" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#eb5e9d] text-xs font-bold mb-6 border border-pink-100 shadow-sm">
                <Smile size={14} /> Note du Fondateur
              </div>
              <h3 className="text-3xl md:text-4xl font-serif-elegant italic mb-6">
                Une idée née de la <span className="text-[#eb5e9d]">proximité</span>
              </h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light italic">
                "C'est en observant mes proches passionnés par leur métier, en partageant leurs défis et leurs réussites quotidiennes, que l'évidence s'est imposée. Blyss n'est pas seulement un outil, c'est le fruit de ces moments partagés et d'une volonté de simplifier votre art. Aujourd'hui, ce produit prend vie pour donner à chacun la liberté de créer sereinement."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="/noah_profile.jpg"
                  alt="Noah Dekeyzer"
                  width="48"
                  height="48"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-bold text-gray-900">Noah Dekeyzer</p>
                  <p className="text-sm text-[#eb5e9d] font-medium tracking-wide uppercase text-[10px]">Fondateur de Blyss</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden border border-white shadow-xl shadow-gray-200/50 max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#eb5e9d]/5 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-serif-elegant italic mb-4 text-gray-900">Notre Mission</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-6">
              "Libérer les entrepreneurs de la beauté des contraintes administratives pour qu'ils puissent se concentrer sur l'essentiel : sublimer leurs clients."
            </p>
            <div className="w-16 h-1 bg-[#eb5e9d] mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ContactPage */
export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-transparent rounded-b-[4rem] shadow-sm z-0" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-6xl font-serif-elegant italic mb-6">Parlons de <span className="text-[#eb5e9d]">Vous</span></h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Une question, un partenariat ou simplement envie de discuter ?<br />
            Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            <div className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-100 border border-white hover:border-pink-100 transition-colors group">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-[#eb5e9d] mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-500 text-sm mb-4">Notre équipe vous répond sous 24h.</p>
              <a href="mailto:contact@blyss.eu" className="text-[#eb5e9d] font-semibold hover:underline">contact@blyss.eu</a>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-100 border border-white hover:border-pink-100 transition-colors group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Réseaux Sociaux</h3>
              <p className="text-gray-500 text-sm mb-4">Suivez nos actualités et coulisses.</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/blyss_app/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#eb5e9d] hover:text-white transition-all" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="https://www.linkedin.com/company/blysapp/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all" aria-label="LinkedIn"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-white">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Nom complet</label>
                    <div className="relative">
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium" placeholder="Votre nom" />
                      <User size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Email</label>
                    <div className="relative">
                      <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium" placeholder="votre@email.com" />
                      <Mail size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Sujet</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium" placeholder="De quoi s'agit-il ?" />
                </div>

                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Message</label>
                  <textarea rows={6} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium resize-none" placeholder="Racontez-nous tout..."></textarea>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-[#eb5e9d] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 hover:bg-pink-600 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
                    Envoyer le message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* LegalPage */
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

/* PrivacyPage */
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

/* TermsPage */
export const TermsPage: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleArticle = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const articles = [
    {
      title: "Préambule",
      content: "Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations contractuelles entre Blyss, représentée par Noah Dekeyzer, et ses clients professionnels utilisateurs de l'application et des services Blyss. Ces conditions s'appliquent à toute souscription d'abonnement, qu'il s'agisse de la formule Start, Sérénité ou Signature. En souscrivant à nos services, le client reconnaît avoir pris connaissance des présentes CGV et les accepte sans réserve. Toute condition contraire opposée par le client sera donc, à défaut d'acceptation expresse, inopposable à Blyss. Blyss se réserve le droit de modifier les présentes CGV à tout moment, les nouvelles conditions s'appliquant aux souscriptions postérieures à leur mise en ligne."
    },
    {
      title: "Article 1 - Objet et Description des Services",
      content: "Blyss propose une plateforme SaaS (Software as a Service) dédiée à la gestion d'activité pour les prothésistes ongulaires. Les services incluent notamment : la gestion de planning et des rendez-vous, la réservation en ligne 24/7 pour les clients, les notifications push automatiques, le tableau de bord statistiques, le module de gestion financière (selon formule), le portfolio photo intégré (selon formule), les rappels automatiques pré et post-prestation (selon formule), l'encaissement en ligne sécurisé (selon formule), et la visibilité premium dans les résultats de recherche (selon formule). Les fonctionnalités détaillées de chaque formule sont disponibles sur notre site web et peuvent évoluer pour améliorer l'expérience utilisateur."
    },
    {
      title: "Article 2 - Tarifs et Modalités de Paiement",
      content: "Les prix de nos abonnements sont indiqués en euros toutes taxes comprises (TTC) et incluent la TVA au taux en vigueur. Trois formules sont proposées : Start à 39,90€/mois sans engagement, Sérénité à 29,90€/mois avec engagement de 3 mois, et Signature à 24,90€/mois avec engagement de 12 mois. Blyss se réserve le droit de modifier ses tarifs à tout moment, étant entendu que le prix applicable est celui en vigueur au jour de la souscription. En cas d'augmentation tarifaire, les clients existants seront informés au moins 30 jours avant l'application du nouveau tarif. Le paiement s'effectue par prélèvement automatique mensuel via carte bancaire, par l'intermédiaire de notre prestataire de paiement sécurisé (Stripe). Le client garantit qu'il dispose des autorisations nécessaires pour utiliser le mode de paiement choisi. En cas de défaut de paiement, l'accès aux services pourra être suspendu après mise en demeure restée sans effet pendant 8 jours."
    },
    {
      title: "Article 3 - Souscription et Activation",
      content: "La souscription s'effectue directement en ligne via notre site web ou application mobile. Le client doit remplir le formulaire d'inscription en fournissant des informations exactes et à jour. L'accès aux services premium est activé immédiatement après confirmation du paiement et validation des informations fournies. Un email de confirmation contenant les identifiants de connexion et un récapitulatif de l'abonnement est envoyé systématiquement à l'adresse email renseignée. Le client s'engage à conserver la confidentialité de ses identifiants et à informer immédiatement Blyss de toute utilisation non autorisée de son compte. La durée de l'abonnement court à compter de la date d'activation et se renouvelle automatiquement par tacite reconduction pour des périodes identiques, sauf résiliation dans les conditions prévues à l'article 5."
    },
    {
      title: "Article 4 - Droit de Rétractation",
      content: "Conformément aux dispositions du Code de la consommation, le client professionnel dispose d'un délai de 14 jours à compter de la souscription pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités. Toutefois, en acceptant l'activation immédiate du service lors de la souscription, le client reconnaît expressément renoncer à son droit de rétractation si l'exécution du service a commencé avant la fin du délai de 14 jours. Pour exercer ce droit, le client doit notifier sa décision de rétractation par email à contact@blyssapp.fr. En cas de rétractation dans les délais et conditions légales, Blyss procédera au remboursement de l'intégralité des sommes versées dans un délai maximum de 14 jours à compter de la notification de rétractation, en utilisant le même moyen de paiement que celui utilisé pour la transaction initiale."
    },
    {
      title: "Article 5 - Résiliation",
      content: "Pour les abonnements sans engagement (formule Start), le client peut résilier à tout moment depuis son espace personnel ou par email à contact@blyssapp.fr. La résiliation prend effet à la fin de la période de facturation en cours, sans remboursement au prorata. Pour les abonnements avec engagement (formules Sérénité et Signature), la résiliation anticipée avant la fin de la période d'engagement n'est possible qu'en cas de manquement grave de Blyss à ses obligations contractuelles. À l'issue de la période d'engagement, l'abonnement se poursuit sans engagement et peut être résilié à tout moment dans les mêmes conditions que la formule Start. Blyss se réserve le droit de résilier l'abonnement en cas de manquement du client à ses obligations, notamment en cas de non-paiement, d'utilisation frauduleuse ou contraire aux présentes CGV, après mise en demeure restée sans effet pendant 15 jours."
    },
    {
      title: "Article 6 - Responsabilité et Garanties",
      content: "Blyss s'engage à fournir ses services avec diligence et selon les règles de l'art. Toutefois, Blyss ne saurait être tenue responsable des dommages indirects tels que perte de chiffre d'affaires, perte de clientèle, ou préjudice d'image résultant de l'utilisation ou de l'impossibilité d'utiliser les services. Blyss garantit un taux de disponibilité de 99% sur une base mensuelle, hors opérations de maintenance programmées dont les clients seront informés à l'avance. En cas d'indisponibilité dépassant ce seuil, le client pourra prétendre à un avoir proportionnel au temps d'indisponibilité. Blyss ne peut être tenue responsable des dysfonctionnements imputables au client, à un cas de force majeure, ou à un tiers. Le client reste seul responsable de l'utilisation qu'il fait des services et des données qu'il y intègre."
    },
    {
      title: "Article 7 - Données Personnelles",
      content: "Blyss s'engage à traiter les données personnelles de ses clients conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. Les données collectées sont nécessaires à la fourniture des services et à la gestion de la relation client. Elles sont conservées pendant la durée de l'abonnement et 3 ans après sa résiliation à des fins de preuve. Le client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur ses données personnelles, qu'il peut exercer à tout moment en contactant privacy@blyss.app. Pour plus d'informations, nous vous invitons à consulter notre Politique de Confidentialité disponible sur notre site web."
    },
    {
      title: "Article 8 - Propriété Intellectuelle",
      content: "L'ensemble des éléments de l'application Blyss (structure, logiciels, textes, images, graphismes, logo, marques, base de données, etc.) sont la propriété exclusive de Blyss et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, totale ou partielle, est strictement interdite sans autorisation écrite préalable de Blyss. Le client bénéficie d'un droit d'utilisation personnel, non exclusif et non cessible des services, strictement limité à l'usage professionnel pour lequel l'abonnement a été souscrit. Les contenus créés et téléchargés par le client (photos, descriptions, etc.) restent sa propriété, mais il accorde à Blyss une licence d'utilisation nécessaire à la fourniture des services."
    },
    {
      title: "Article 9 - Loi Applicable et Juridiction",
      content: "Les présentes CGV sont soumises au droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord amiable dans un délai de 30 jours, le litige sera porté devant les tribunaux compétents du ressort du siège social de Blyss, nonobstant pluralité de défendeurs ou appel en garantie. Conformément aux dispositions du Code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en cas de litige, dont les coordonnées sont disponibles sur demande."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">CGV</p>
          <h1 className="text-4xl md:text-6xl font-serif-elegant italic mb-6">Conditions Générales de <span className="text-[#eb5e9d]">Vente</span></h1>
        </div>

        <div className="space-y-4">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleArticle(idx)}
                className="w-full p-6 md:p-10 flex items-center justify-between text-left group focus:outline-none"
              >
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-[#eb5e9d] font-serif-elegant italic text-xl md:text-2xl opacity-80">{idx === 0 ? '§' : idx}</span>
                  {article.title}
                </h3>
                <div className={`transition-transform duration-300 ${expandedIdx === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className={`text-gray-400 group-hover:text-[#eb5e9d] transition-colors`} size={20} />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIdx === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-10 pb-6 md:pb-10">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-pink-100">
                    {article.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400">Dernière mise à jour : Janvier 2026</p>
        </div>
      </div>
    </div>
  );
};

/* DownloadAppSection */
export const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-0 md:py-20 bg-[#1c1c1c] text-white overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 pt-32 md:pt-0">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">
            Gérez votre salon <br /><span className="text-[#eb5e9d]">depuis votre smartphone.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Retrouvez toutes les fonctionnalités de Blyss où que vous soyez. Gérez votre planning, encaissez vos clientes et suivez vos stats en temps réel.
          </p>
          <div className="flex flex-row justify-center gap-3 mb-8 md:mb-12 w-full px-2">
            <div className="relative group">
              <div className="absolute -top-3 -right-2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm">
                Bientôt
              </div>
              <button
                className="
        flex-1 w-[160px] h-12
        bg-black/80 backdrop-blur-xl
        text-white font-semibold
        flex items-center justify-center gap-2
        rounded-xl
        border border-white/10
        transition-all duration-300
        group-hover:scale-105
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        group-hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
        text-xs sm:text-sm
        cursor-not-allowed opacity-80
      "
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>App Store</span>
              </button>
            </div>

            <div className="relative group">
              <div className="absolute -top-3 -right-2 bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm delay-100">
                Bientôt
              </div>
              <button
                className="
        flex-1 w-[160px] h-12
        bg-white/20 backdrop-blur-xl
        text-white font-semibold
        flex items-center justify-center gap-2
        rounded-xl
        border border-white/30
        transition-all duration-300
        group-hover:scale-105
        shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
        group-hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]
        text-xs sm:text-sm
        cursor-not-allowed opacity-80
      "
              >
                <img
                  src="/google_play_icon.webp"
                  alt="Google Play"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="w-5 h-5"
                />
                <span>Google Play</span>
              </button>
            </div>
          </div>


          {/* 3 Phones Display Grid - PC Layout Mirrored on Mobile */}
          <div className="flex flex-row items-end justify-center -space-x-24 md:-space-x-16 mt-8 lg:mt-20 pb-10 md:pb-0 perspective-1000 h-[280px] md:h-auto z-10 w-full overflow-visible">

            {/* Phone 1: Clients - Left Wing */}
            <div className="transform transition-all duration-500 z-20 scale-[0.4] md:scale-95 opacity-90 hover:opacity-100 origin-bottom-right translate-y-16 -rotate-12 lg:-translate-y-8 lg:-rotate-6 relative">
              <PhoneMockup type="clients" imageSrc="/screen_calendar_final.jpg" className="shadow-2xl shadow-black/50" imageClassName="!object-bottom scale-105 !bottom-5" />
            </div>

            {/* Phone 2: Dashboard - Center Hero (Prominent) */}
            <div className="transform transition-all duration-500 z-30 scale-[0.5] md:scale-110 hover:z-50 origin-bottom mb-10 md:mb-0 relative translate-y-24 lg:translate-y-0">
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-[60px] animate-pulse"></div>
                <PhoneMockup type="dashboard" imageSrc="/screen_center_final.jpg" className="shadow-[0_0_80px_rgba(235,94,157,0.4)] border border-[#eb5e9d]/30" imageClassName="!object-bottom scale-105 !bottom-5" />
              </div>
            </div>

            {/* Phone 3: Calendar Month - Right Wing */}
            <div className="transform transition-all duration-500 z-10 md:z-10 scale-[0.4] md:scale-95 opacity-90 hover:opacity-100 origin-bottom-left translate-y-16 rotate-12 lg:-translate-y-8 lg:rotate-6 relative">
              <PhoneMockup type="calendar-month" imageSrc="/screen_clients_final.jpg" className="shadow-2xl shadow-black/50" imageClassName="!object-right-bottom scale-105 !bottom-5" />
            </div>

          </div>

          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#eb5e9d]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

/* Footer */
export const Footer: React.FC<{ setCurrentPage: (page: PageView) => void }> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img
                src="https://i.ibb.co/35940F13/B3-B.png"
                alt="Blyss Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain group-hover:rotate-[10deg] transition-transform"
              />
              <span className="font-serif-elegant italic text-2xl">Blyss</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              La première plateforme tout-en-un conçue pour l'excellence des prothésistes ongulaires.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/blyss_app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/blysapp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:contact@blyssapp.fr" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Produit</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#eb5e9d] transition-colors">Fonctionnalités</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-[#eb5e9d] transition-colors">Tarifs</button></li>
              <li><button onClick={() => setCurrentPage('download')} className="hover:text-[#eb5e9d] transition-colors">Télécharger</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Entreprise</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-[#eb5e9d] transition-colors">À propos</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-[#eb5e9d] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Légal</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => setCurrentPage('legal')} className="hover:text-[#eb5e9d] transition-colors">Mentions légales</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-[#eb5e9d] transition-colors">Politique de confidentialité</button></li>
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-[#eb5e9d] transition-colors">CGV</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 Blyss App. Tous droits réservés.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <span>Fait avec ❤️ à Annecy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


/* NewsletterModal */
const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return !sessionStorage.getItem('blyss_newsletter_seen');
  });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('blyss_newsletter_seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    setStatus('loading');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setStatus('error');
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose}></div>
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-5 md:p-10 relative z-10 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-2xl md:rounded-3xl bg-pink-50 flex items-center justify-center mb-3 md:mb-6 shadow-sm border border-pink-100/50">
            <Mail size={24} className="text-[#eb5e9d] md:w-10 md:h-10" />
          </div>

          <h2 className="text-xl md:text-3xl font-serif-elegant italic mb-2 md:mb-4">Prête pour <span className="text-[#eb5e9d]">l'excellence ?</span></h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
            Rejoins notre newsletter pour recevoir nos conseils business exclusifs et les dernières tendances Nail Art directement dans ta boîte mail.
          </p>

          {status === 'success' ? (
            <div className="bg-green-50 text-green-600 p-4 rounded-2xl flex items-center justify-center gap-2 animate-in zoom-in-95">
              <CheckCircle2 size={20} />
              <span className="font-bold">Inscription réussie ! ✨</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="ton@email.com"
                  className={`w-full bg-gray-50 border ${status === 'error' ? 'border-red-300' : 'border-gray-200'} rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all`}
                  required
                />
                {status === 'error' && (
                  <p className="text-red-500 text-[10px] absolute -bottom-5 left-2 font-medium">
                    {errorMessage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#eb5e9d] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Traitement...</span>
                  </>
                ) : (
                  <span>S'inscrire</span>
                )}
              </button>
            </form>
          )}

          <button
            onClick={handleClose}
            className="mt-6 text-gray-400 text-xs font-medium hover:text-gray-600 transition-colors uppercase tracking-widest"
          >
            Accéder directement au téléchargement
          </button>
        </div>
      </div>
    </div>
  );
};

/* DownloadPage */
export const DownloadPage: React.FC = () => {
  return (
    <div className="bg-white">
      <NewsletterModal />
      <DownloadAppSection />
    </div>
  );
};
