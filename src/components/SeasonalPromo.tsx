import { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SeasonalPromo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-amber-600 text-white p-3 text-center shadow-md relative z-40"
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 flex-1">
                    <Calendar size={18} className="shrink-0" />
                    <p className="text-sm font-bold">Promo Spesial: Paket Pembersihan Pasca Hujan! Diskon 15% untuk layanan hari ini.</p>
                </div>
                <button onClick={() => setIsVisible(false)} className="hover:bg-amber-700 p-1 rounded-full shrink-0">
                    <X size={16} />
                </button>
            </div>
        </motion.div>
    </AnimatePresence>
  );
}
