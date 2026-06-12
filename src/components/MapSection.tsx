import React from 'react';

export default function MapSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-8">
          Area Layanan Kami
        </h2>
        <div className="relative w-full h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-300 flex items-center justify-center">
            {/* Styled Placeholder Map */}
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Karawang,Indonesia&zoom=11&size=600x300&maptype=roadmap&markers=color:red%7CKarawang,Indonesia&key=')] opacity-50 bg-cover bg-center bg-no-repeat"></div>
            
            <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-slate-900">Karawang & Sekitarnya</h3>
                <p className="text-slate-600 mt-2">Kami melayani pengerjaan di seluruh area Karawang.</p>
                <button className="mt-4 bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition">
                    Hubungi Kami
                </button>
            </div>
            
            {/* Aesthetic overlay */}
            <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>
      </div>
    </section>
  );
}
