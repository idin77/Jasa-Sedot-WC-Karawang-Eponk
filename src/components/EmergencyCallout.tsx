import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function EmergencyCallout() {
  return (
    <div className="bg-red-600 text-white py-3 px-4 shadow-lg text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wide">
          <AlertCircle className="animate-bounce" />
          <span>Darurat WC Meluap?</span>
        </div>
        <p className="text-sm font-medium opacity-90 hidden md:block">
          Butuh penanganan cepat? Hubungi prioritas kami sekarang!
        </p>
        <a
          href="https://wa.me/6285817692245?text=DARURAT%20WC%20MELUAP%20-%20Mohon%20bantuan%20segera"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-600 px-5 py-1.5 rounded-full text-sm font-bold hover:bg-slate-100 transition-all transform hover:scale-105"
        >
          HUBUNGI WHATSAPP PRIORITAS
        </a>
      </div>
    </div>
  );
}
