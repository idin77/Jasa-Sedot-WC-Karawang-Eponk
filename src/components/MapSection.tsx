import React from 'react';
import { MessageCircle } from 'lucide-react';

const KECAMATAN = [
  'Karawang Barat', 'Karawang Timur', 'Klari', 'Telukjambe Timur', 'Telukjambe Barat', 
  'Kotabaru', 'Cikampek', 'Jatisari', 'Lemahabang', 'Rawamerta'
];

export default function MapSection() {
  const whatsappLink = (kec: string) => 
    `https://wa.me/6285817692245?text=Halo%20Sedot%20WC%20Karawang%2C%20saya%20berada%20di%20${kec}%20dan%20membutuhkan%20layanan%20sedot%20WC.`;

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-8">
          Area Layanan Kami
        </h2>
        <div className="relative w-full h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-300 flex items-center justify-center mb-12">
            <div className="absolute inset-0 bg-slate-300 opacity-50 bg-cover bg-center bg-no-repeat"></div>
            
            <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-slate-900">Karawang & Sekitarnya</h3>
                <p className="text-slate-600 mt-2">Kami melayani pengerjaan di seluruh area Karawang.</p>
            </div>
            <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {KECAMATAN.map((kec) => (
            <a 
              key={kec}
              href={whatsappLink(kec)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 text-center group"
            >
              <span className="text-slate-800 font-medium text-sm">{kec}</span>
              <MessageCircle size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
