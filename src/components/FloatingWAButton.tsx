import { MessageCircle } from 'lucide-react';

export default function FloatingWAButton() {
  return (
    <a
      href="https://wa.me/6285817692245?text=Halo%20Jasa%20Sedot%20WC%20Karawang%2C%20saya%20ingin%20tanya%20layanan%20dan%20biaya."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105 duration-300 md:px-6"
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <MessageCircle size={32} className="relative" />
      </span>
      <div className="text-left leading-none">
        <p className="text-[10px] uppercase tracking-wider font-bold text-green-100">Hubungi 24 Jam</p>
        <p className="text-sm font-extrabold">Sedot WC Karawang</p>
      </div>
    </a>
  );
}
