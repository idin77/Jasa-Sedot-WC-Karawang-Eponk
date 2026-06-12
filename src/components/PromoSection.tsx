import React from 'react';
import { Tag } from 'lucide-react';

export default function PromoSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full font-bold mb-6">
                <Tag size={18} />
                <span>PENAWARAN TERBATAS</span>
            </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Paket Hemat Perawatan Septic Tank Karawang
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Dapatkan harga spesial untuk sedot septic tank dan pelancaran saluran tersumbat. Solusi cepat, higienis, dan bergaransi!
          </p>
          <div className="bg-slate-900 text-white rounded-2xl py-6 px-4 mb-8">
             <p className="text-lg">Harga normal: <span className="line-through text-slate-400">Rp 1.000.000</span></p>
             <p className="text-4xl font-extrabold text-amber-400">Hanya Rp 750.000</p>
          </div>
          <a
            href="https://wa.me/6285817692245?text=Halo%20saya%20tertarik%20dengan%20promo%20paket%20hemat%20perawatan%20septic%20tank."
            className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold py-4 px-10 rounded-xl text-lg shadow-lg transition-all"
          >
            Claim Promo Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
