import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';
import BudiPhoto from '../assets/images/team_budi_santoso_1781602898033.jpg';
import AndiPhoto from '../assets/images/team_andi_wijaya_1781602913170.jpg';

export default function TeamSection() {
  const { t } = useLanguage();
  const team = t('team');

  const teamImages: { [key: string]: string } = {
    'Budi Santoso': BudiPhoto,
    'Andi Wijaya': AndiPhoto,
  };

  return (
    <section className="py-16 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{team.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.members.map((member: any, index: number) => (
            <div key={index} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <img
                  src={teamImages[member.name] || '/placeholder.jpg'}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                  <p className="text-amber-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 bg-slate-100 p-3 rounded-lg">
                <Award size={16} className="text-amber-500" />
                <span className="font-semibold">{member.certification}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
