import { useState } from 'react';
import { Calculator, MessageCircle, FileDown } from 'lucide-react';
import { jsPDF } from "jspdf";

const services = [
  { name: 'Sedot Septic Tank Rumah Tangga', basePrice: 350000 },
  { name: 'Pelancaran Saluran / WC Mampet', basePrice: 450000 },
  { name: 'Sedot Limbah Cair Restoran / Kantor', basePrice: 850000 },
];

const urgencies = [
  { name: 'Normal (Dapat Dijadwalkan)', multiplier: 1 },
  { name: 'Darurat (Butuh Segera)', multiplier: 1.25 },
  { name: 'Khusus (Malam / Hari Libur)', multiplier: 1.5 },
];

export default function ServicePriceCalculator() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedUrgency, setSelectedUrgency] = useState(urgencies[0]);

  const estimate = Math.floor(selectedService.basePrice * selectedUrgency.multiplier);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Estimasi Harga Sedot WC Karawang", 10, 20);
    doc.setFontSize(12);
    doc.text(`Layanan: ${selectedService.name}`, 10, 40);
    doc.text(`Urgensi: ${selectedUrgency.name}`, 10, 50);
    doc.text(`Estimasi Biaya: Rp ${estimate.toLocaleString('id-ID')}`, 10, 60);
    doc.save("estimasi_biaya_sedot_wc.pdf");
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 mt-12 shadow-xl text-white">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-amber-400" size={28} />
        <h3 className="text-2xl font-extrabold">Kalkulator Estimasi</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Jenis Layanan</label>
          <select 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
            onChange={(e) => setSelectedService(services.find(s => s.name === e.target.value) || services[0])}
          >
            {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Waktu Layanan / Urgensi</label>
          <select 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
            onChange={(e) => setSelectedUrgency(urgencies.find(u => u.name === e.target.value) || urgencies[0])}
          >
            {urgencies.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <div>
          <p className="text-slate-400 text-sm">Estimasi Biaya</p>
          <p className="text-3xl font-black text-amber-400">Rp {estimate.toLocaleString('id-ID')}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={`https://wa.me/6285882448632?text=Halo%20Sedot%20WC%20Karawang%2C%20saya%20ingin%20memesan%20layanan%20${selectedService.name}%20dengan%20urgensi%3A%20${selectedUrgency.name}.%20Estimasi%20biaya%3A%20Rp%20${estimate.toLocaleString('id-ID')}.`} 
             target="_blank" rel="noopener noreferrer"
             className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
            <MessageCircle size={20} />
            <span>Pesan via WhatsApp</span>
          </a>
          <button onClick={downloadPDF}
             className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
            <FileDown size={20} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
