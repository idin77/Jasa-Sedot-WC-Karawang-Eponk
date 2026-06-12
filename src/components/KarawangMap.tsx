import React from 'react';

// A stylized interactive SVG map for Karawang
export default function KarawangMap() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-sm mx-auto h-auto cursor-pointer" fill="none" strokeWidth="2" stroke="#1e293b">
      {/* Container shapes for zones, interactive on hover */}
      
      {/* Kabupaten */}
      <path d="M50 50 L150 50 L150 150 L50 200 Z" fill="#334155" className="hover:fill-amber-500 transition-all duration-300" />
      <text x="70" y="100" fill="white" className="text-[10px] font-bold pointer-events-none uppercase">Karawang Barat</text>
      
      {/* Kota */}
      <path d="M160 50 L350 30 L350 200 L160 160 Z" fill="#475569" className="hover:fill-amber-500 transition-all duration-300" />
      <text x="200" y="100" fill="white" className="text-[10px] font-bold pointer-events-none uppercase">Karawang Timur</text>
      
      {/* Tangsel */}
      <path d="M50 210 L250 250 L350 210 L160 170 Z" fill="#64748b" className="hover:fill-amber-500 transition-all duration-300" />
      <text x="100" y="230" fill="white" className="text-[10px] font-bold pointer-events-none uppercase">Karawang Selatan</text>
    </svg>
  );
}
