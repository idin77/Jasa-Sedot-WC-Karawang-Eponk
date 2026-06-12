import { AlertTriangle, Droplet, Droplets } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    { icon: AlertTriangle, title: 'WC Mampet & Bau', desc: 'Air tidak mengalir lancar dan memicu bau busuk.' },
    { icon: Droplet, title: 'Septic Tank Penuh', desc: 'Penumpukan limbah kotoran yang sudah bertahun-tahun.' },
    { icon: Droplets, title: 'Air Turun Lambat', desc: 'Air menggenang sangat lama saat diguyur.' },
    { icon: AlertTriangle, title: 'Saluran Tersumbat', desc: 'Lemak sisa makanan atau benda asing di wastafel.' },
  ];

  return (
    <section id="masalah" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Masalah yang Kami Atasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p.icon className="text-red-500 text-3xl mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
