import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

export default function BookingForm() {
  const { trackEvent } = useAnalytics();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('booking_form_submitted', { name: formData.name });
    const message = `Halo, saya ingin memesan layanan sedot WC.
Nama: ${formData.name}
Alamat: ${formData.address}
Tanggal Pelayanan: ${formData.date}`;
    const whatsappLink = `https://wa.me/6285817692245?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="kontak-booking" className="py-16 bg-slate-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Booking Pelayanan via WhatsApp
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nama</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-700">Alamat Lengkap</label>
              <textarea
                id="address"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-700">Tanggal Pelayanan</label>
              <input
                type="date"
                id="date"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg shadow-md transition-all"
            >
              <MessageCircle size={20} />
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
