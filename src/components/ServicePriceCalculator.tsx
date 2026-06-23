import { useState } from 'react';
import { Calculator } from 'lucide-react';

const services = [
  { name: 'Sedot Septic Tank', basePrice: 350000 },
  { name: 'Pembuangan Saluran Mampet', basePrice: 250000 },
  { name: 'Servis Grease Trap', basePrice: 300000 },
];

const sizes = [
  { name: 'Kecil (1-2 m^3)', multiplier: 1 },
  { name: 'Sedang (3-4 m^3)', multiplier: 1.3 },
  { name: 'Besar (>4 m^3)', multiplier: 1.6 },
];

export default function ServicePriceCalculator() {
  const [service, setService] = useState(services[0]);
  const [size, setSize] = useState(sizes[0]);

  const estimate = Math.floor(service.basePrice * size.multiplier);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 mt-12 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-amber-500 w-8 h-8" />
        <h3 className="text-2xl font-bold text-slate-900">Estimasi Harga</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Jenis Layanan</label>
          <select 
            className="w-full border border-slate-300 rounded-lg p-3"
            value={service.name}
            onChange={(e) => setService(services.find(s => s.name === e.target.value) || services[0])}
          >
            {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Ukuran Septic Tank</label>
          <select 
            className="w-full border border-slate-300 rounded-lg p-3"
            value={size.name}
            onChange={(e) => setSize(sizes.find(s => s.name === e.target.value) || sizes[0])}
          >
            {sizes.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
        </div>
      </div>
      <div className="bg-slate-900 p-6 rounded-xl flex items-center justify-between mt-6">
        <p className="text-slate-400">Estimasi Biaya</p>
        <p className="text-3xl font-bold text-amber-400">Rp {estimate.toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
}
