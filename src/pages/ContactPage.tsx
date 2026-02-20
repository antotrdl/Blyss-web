import React, { useState } from 'react';
import {
  Mail,
  User,
  MessageCircle,
  Instagram,
  Linkedin,
  Send
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    window.location.href = `mailto:contact@blyssapp.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
              <a href="mailto:contact@blyssapp.fr" className="text-[#eb5e9d] font-semibold hover:underline">contact@blyssapp.fr</a>
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
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Nom complet</label>
                    <div className="relative">
                      <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium" placeholder="Votre nom" />
                      <User size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Email</label>
                    <div className="relative">
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium" placeholder="votre@email.com" />
                      <Mail size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Sujet</label>
                  <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium" placeholder="De quoi s'agit-il ?" />
                </div>

                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-[#eb5e9d] transition-colors">Message</label>
                  <textarea rows={6} value={message} onChange={e => setMessage(e.target.value)} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#eb5e9d] focus:ring-4 focus:ring-pink-50 transition-all font-medium resize-none" placeholder="Racontez-nous tout..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#eb5e9d] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 hover:bg-pink-600 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
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
