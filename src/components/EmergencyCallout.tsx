import React, { useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';

export default function EmergencyCallout() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '0858-1769-2245';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-red-600 text-white py-3 px-4 shadow-lg text-center relative">
      {copied && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 text-sm flex items-center gap-2">
          <Check size={16} /> Number copied!
        </div>
      )}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wide">
          <AlertCircle className="animate-bounce" />
          <span>Darurat WC Meluap?</span>
        </div>
        <p className="text-sm font-medium opacity-90 hidden md:block">
          Butuh penanganan cepat? Hubungi prioritas kami sekarang!
        </p>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="bg-white/20 text-white px-5 py-1.5 rounded-full text-sm font-bold hover:bg-white/30 transition-all transform hover:scale-105"
          >
            Salin Nomor
          </button>
          <a
            href="https://wa.me/6285817692245?text=DARURAT%20WC%20MELUAP%20-%20Mohon%20bantuan%20segera"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-5 py-1.5 rounded-full text-sm font-bold hover:bg-slate-100 transition-all transform hover:scale-105"
          >
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
