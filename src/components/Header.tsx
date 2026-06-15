import { Phone, MessageCircle, Truck, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const phoneNumber = '0858-1769-2245';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="sticky top-0 z-45 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {copied && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 text-sm flex items-center gap-2">
          <Check size={16} /> Number copied successfully!
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-slate-900 p-2.5 rounded-xl shadow-lg flex items-center justify-center">
              <Truck size={24} />
            </div>
            <div>
              <span className="block font-extrabold text-lg sm:text-xl tracking-tight leading-none text-white">
                {t('header.title')}
              </span>
              <span className="text-[11px] text-slate-300 tracking-widest font-semibold uppercase mt-1 block">
                {t('header.subtitle')}
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#masalah" className="text-slate-200 hover:text-amber-400 transition-colors">{t('header.nav.masalah')}</a>
            <a href="#layanan" className="text-slate-200 hover:text-amber-400 transition-colors">{t('header.nav.layanan')}</a>
            <a href="#keunggulan" className="text-slate-200 hover:text-amber-400 transition-colors">{t('header.nav.keunggulan')}</a>
            <a href="#estimasi" className="text-slate-200 hover:text-amber-400 transition-colors">{t('header.nav.estimasi')}</a>
          </nav>

          {/* Header CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              <span className={language === 'id' ? 'text-white' : ''}>ID</span>
              <div className="w-8 h-4 bg-slate-700 rounded-full relative flex items-center p-0.5">
                <div
                  className={`w-3 h-3 bg-white rounded-full transition-transform duration-200 ${
                    language === 'en' ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className={language === 'en' ? 'text-white' : ''}>EN</span>
            </button>
            <button 
              onClick={copyToClipboard}
              className="hidden lg:flex items-center gap-2 bg-slate-800 border border-slate-200/20 px-4 py-2 rounded-xl text-slate-200 text-sm font-semibold hover:bg-slate-800/80 transition-all cursor-pointer"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <Phone size={16} className="text-amber-400" />
              <span>{phoneNumber}</span>
            </button>
            <a href="https://wa.me/6285817692245" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md transition-all">
              <MessageCircle size={18} />
              <span>{t('header.cta')}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
