import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import TestimonialForm from './TestimonialForm';

const initialTestimonials = [
  {
    name: 'Ibu Endang',
    title: 'Ibu Rumah Tangga - Gading Serpong',
    text: 'Sangat puas dengan jasa ini! Pipa WC mampet total, hubungi tim ini cuma nunggu 25 menit udah nyampe. Kerja cepat tanpa bongkar ubin!',
    rating: 5,
  },
  {
    name: 'Pak Haryono',
    title: 'Pemilik Kontrakan - Balaraja',
    text: 'Punya 12 pintu kontrakan, septic tank penuh. Jasa ini jujur, timbangan muatan tangki transparan. Sangat direkomendasikan buat pemilik kontrakan!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    title: 'Pemilik Restoran - Serpong',
    text: 'Limbah cair dapur restoran tertangani dengan baik. Harganya sangat transparan dan pengerjaannya rapi sekali.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  useEffect(() => {
    const saved = localStorage.getItem('testimonials');
    if (saved) {
      setTestimonials([...initialTestimonials, ...JSON.parse(saved)]);
    }
  }, []);

  const handleAddTestimonial = (newTestimonial: any) => {
    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    
    // Save only new ones
    const saved = JSON.parse(localStorage.getItem('testimonials') || '[]');
    localStorage.setItem('testimonials', JSON.stringify([...saved, newTestimonial]));
  };

  return (
    <section id="testimoni" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Apa Kata Pelanggan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <StarRating rating={t.rating} />
              <p className="text-sm text-slate-700 italic my-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-600">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TestimonialForm onAddTestimonial={handleAddTestimonial} />
      </div>
    </section>
  );
}
