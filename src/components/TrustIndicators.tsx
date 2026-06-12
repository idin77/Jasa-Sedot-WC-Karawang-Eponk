import { Award, Zap, CheckCircle } from 'lucide-react';

export default function TrustIndicators() {
  const items = [
    { icon: Award, title: 'Certified Professional', desc: 'Teknisi Berpengalaman' },
    { icon: Zap, title: 'Fast Response', desc: 'Respon Cepat 24 Jam' },
    { icon: CheckCircle, title: 'Guaranteed Results', desc: 'Hasil Kerja Terjamin' },
  ];

  return (
    <div className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <div className="bg-amber-100 p-4 rounded-full text-amber-600">
              <item.icon size={32} />
            </div>
            <h3 className="font-bold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
