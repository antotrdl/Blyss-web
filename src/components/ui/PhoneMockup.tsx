import React from 'react';
import {
  TrendingUp,
  Plus,
  Ban,
  Eye,
  Search,
  ChevronRight,
  Sparkles,
  Home,
  Calendar,
  Heart,
  User
} from 'lucide-react';

export const ChevronLeft = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);

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

export default PhoneMockup;
