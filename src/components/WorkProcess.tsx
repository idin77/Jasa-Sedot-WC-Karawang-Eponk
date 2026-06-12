import React from 'react';
import { PhoneCall, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Hubungi Kami',
    description: 'Pesan layanan melalui WhatsApp, telepon, atau form booking kami.',
  },
  {
    icon: MapPin,
    title: 'Survei Lokasi',
    description: 'Tim teknisi datang ke lokasi untuk melakukan pengecekan awal.',
  },
  {
    icon: Loader2,
    title: 'Proses Pengerjaan',
    description: 'Pengerjaan sedot WC dilakukan dengan peralatan profesional.',
  },
  {
    icon: CheckCircle2,
    title: 'Selesai & Bergaransi',
    description: 'Saluran bersih total, kembali lancar, dan bergaransi.',
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">
          Bagaimana Proses Kerja Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-6 shadow-inner">
                <step.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-slate-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
