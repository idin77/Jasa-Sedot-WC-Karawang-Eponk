import { Phone, MessageCircle, Truck } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-45 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-slate-900 p-2.5 rounded-xl shadow-lg flex items-center justify-center">
              <Truck size={24} />
            </div>
            <div>
              <span className="block font-extrabold text-lg sm:text-xl tracking-tight leading-none text-white">
                JASA SEDOT WC <span className="text-amber-400">KARAWANG</span>
              </span>
              <span className="text-[11px] text-slate-300 tracking-widest font-semibold uppercase mt-1 block">
                Layanan Cepat & Terpercaya
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#masalah" className="text-slate-200 hover:text-amber-400 transition-colors">Masalah WC</a>
            <a href="#layanan" className="text-slate-200 hover:text-amber-400 transition-colors">Layanan Kami</a>
            <a href="#keunggulan" className="text-slate-200 hover:text-amber-400 transition-colors">Keunggulan</a>
            <a href="#estimasi" className="text-slate-200 hover:text-amber-400 transition-colors">Estimasi Biaya</a>
          </nav>

          {/* Header CTA */}
          <div className="flex items-center gap-3">
            <a href="tel:0858-1769-2245" className="hidden lg:flex items-center gap-2 bg-slate-800 border border-slate-200/20 px-4 py-2 rounded-xl text-slate-200 text-sm font-semibold hover:bg-slate-800/80 transition-all">
              <Phone size={16} className="text-amber-400" />
              <span>0858-1769-2245</span>
            </a>
            <a href="https://wa.me/6285817692245" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md transition-all">
              <MessageCircle size={18} />
              <span>Order WA</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
