import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialFormProps {
  onAddTestimonial: (testimonial: any) => void;
}

export default function TestimonialForm({ onAddTestimonial }: TestimonialFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTestimonial = {
      name,
      title: 'Pelanggan',
      text: comment,
      rating,
    };
    onAddTestimonial(newTestimonial);
    setName('');
    setComment('');
    setRating(5);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 mt-12 max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold mb-6 text-slate-900">Tambahkan Testimoni Anda</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={star <= rating ? 'text-amber-400' : 'text-slate-300'}
            >
              <Star className="fill-current w-8 h-8" />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Nama</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-slate-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Testimoni</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={3}
          className="w-full border border-slate-300 rounded-lg p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-slate-900 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all w-full"
      >
        <Send size={18} />
        Kirim Testimoni
      </button>
    </motion.form>
  );
}
