import { useState, useEffect } from 'react';

export default function AvailabilityBanner() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const hours = new Date().getHours();
      // Business hours: 08:00 to 20:00 (8 AM to 8 PM)
      setIsAvailable(hours >= 8 && hours < 20);
    };

    checkAvailability();
    // Optional: add a timer to re-check if necessary, but checking on mount is sufficient for simple needs
  }, []);

  return (
    <div className={`text-center py-2 text-xs font-medium flex justify-center items-center gap-2 ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'}`}>
      <span className={`h-2 w-2 rounded-full ${isAvailable ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
      {isAvailable ? 'Kami Tersedia Sekarang' : 'Kami Sedang Offline'}
    </div>
  );
}
