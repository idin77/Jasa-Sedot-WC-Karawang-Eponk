import { Zap, Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 z-0">
        <img src="/src/assets/images/jasa-sedot-wc-karawang.jpg" alt="Sedot WC Karawang" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            Pelayanan Siaga 24 Jam Karawang
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white">
            Jasa Sedot WC Karawang <br />
            <span className="text-amber-400">Cepat, Bersih & Terpercaya</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Solusi tepat mengatasi WC mampet, septic tank penuh, dan saluran tersumbat. Garansi hasil bersih!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="https://wa.me/6285817692245" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold px-8 py-4 rounded-xl flex items-center gap-3">
              <MessageCircle size={24} />
              <span>Hubungi WhatsApp</span>
            </a>
            <a href="tel:0858-1769-2245" className="bg-white/5 border border-slate-600 hover:border-white px-8 py-4 rounded-xl flex items-center gap-2">
                <Phone />
                <span>Telepon</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
