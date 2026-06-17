import React, { useState } from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useAnalytics } from '../hooks/useAnalytics';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function BookingForm() {
  const { trackEvent } = useAnalytics();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsappLink, setLastWhatsappLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('booking_form_submitted', { name: formData.name });
    const message = `Halo, saya ingin memesan layanan sedot WC.
Nama: ${formData.name}
Alamat: ${formData.address}
Tanggal Pelayanan: ${formData.date}`;
    const whatsappLink = generateWhatsAppLink(message);
    setLastWhatsappLink(whatsappLink);
    window.open(whatsappLink, '_blank');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="kontak-booking" className="py-16 bg-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="flex justify-center mb-4"
            >
              <CheckCircle className="text-green-500 w-16 h-16" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Terima Kasih!
            </h2>
            <p className="text-slate-600 mb-6">
              Pesan Anda sudah dikirim. Untuk respons yang lebih cepat, silakan klik tombol di bawah ini:
            </p>
            <a
              href={lastWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all"
            >
              <MessageCircle size={20} />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

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
