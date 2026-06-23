import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export default function TeamAvailability() {
  const [activeTeams, setActiveTeams] = useState(0);

  useEffect(() => {
    const updateTeams = () => {
      const hour = new Date().getHours();
      // Business hours: 07:00 - 22:00 (more teams)
      if (hour >= 7 && hour < 22) {
        setActiveTeams(Math.floor(Math.random() * 3) + 3); // 3-5 teams
      } else {
        setActiveTeams(1);
      }
    };

    updateTeams();
    const interval = setInterval(updateTeams, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 text-slate-300 px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
      <Users size={14} className="text-amber-400" />
      <span>Currently Serving: <strong className="text-white">{activeTeams} active teams</strong> in Karawang</span>
    </div>
  );
}
