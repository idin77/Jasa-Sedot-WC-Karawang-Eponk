import { Home, Wrench, Factory } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { icon: Home, title: 'Rumah Tangga', desc: 'Sedot septic tank berkala untuk rumah pribadi.' },
    { icon: Wrench, title: 'WC Tersumbat', desc: 'Pelancaran saluran mampet tanpa bongkar.' },
    { icon: Factory, title: 'Komersial', desc: 'Sedot limbah restoran, kantor, dan pabrik.' },
  ];

  return (
    <section id="layanan" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
              <s.icon className="text-amber-500 mb-4" size={40} />
              <h3 className="font-bold text-lg text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
