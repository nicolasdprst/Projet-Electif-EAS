import { useState } from 'react';
import { Settings } from 'lucide-react';
import { MOCK_USER_STATS } from '../constants';
import { motion } from 'motion/react';

export default function ProfileScreen() {
  const [xp, setXp] = useState(MOCK_USER_STATS.xp);
  const [level, setLevel] = useState(MOCK_USER_STATS.level);

  const handleOpenSettings = () => {
    alert('ouverture des paramètres (simulation)');
  };

  //profil de moi même (Nicolas Deprost)
  const profile = {
    first_name: 'Nicolas',
    last_name: 'Deprost',
    grade_level: 'CPGE (MP*)', //test pour le niveau 
    school_name: 'Centrale Lille',
  };

  const userStats = {
    xp: xp,
    level: level,
  };

  return (
    <div className="h-full w-full relative bg-background">
      <div className="h-full w-full overflow-y-auto scroll-hide pb-32">
        {/* en-tête dynamique */}
        <div className="relative pt-24 pb-12 px-6 border-b border-primary/10">
          <div className="absolute top-8 right-6 flex gap-4">
             <button 
               onClick={handleOpenSettings}
               className="h-10 w-10 flex items-center justify-center rounded-full bg-surface border border-primary/10 active:scale-95 transition-all shadow-sm cursor-pointer"
             >
                <Settings size={18} className="text-primary" />
             </button>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Identité Vérifiée</span>
            <h2 className="text-[14vw] font-black text-black uppercase leading-[0.8] tracking-tighter mb-4 break-words">
              {profile.first_name}<br />{profile.last_name}
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-2xl border border-primary/20 p-0.5 shadow-sm bg-surface flex items-center justify-center">
                <span className="text-xl font-black text-primary">
                  {profile.first_name[0]}{profile.last_name[0]}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-black uppercase tracking-tight">
                  {profile.grade_level}
                </span>
                <span className="text-[8px] font-black text-black/40 uppercase tracking-widest leading-none">
                  {profile.school_name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* niveau et xp */}
        <div className="grid grid-cols-12 border-b border-primary/10">
          <div className="col-span-4 p-8 flex flex-col items-center justify-center border-r border-primary/10 bg-primary/5">
            <span className="text-[10px] font-black text-black/20 uppercase tracking-widest mb-2">Niveau</span>
            <span className="text-5xl font-black text-primary italic tracking-tighter">{userStats.level}</span>
          </div>
          <div className="col-span-8 p-8 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
               <span className="text-[8px] font-black text-black/40 uppercase tracking-[0.3em]">Points d'Expérience</span>
               <span className="text-[10px] font-black text-black">{userStats.xp} / 1000</span>
            </div>
            <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${Math.min((userStats.xp / 1000) * 100, 100)}%` }}
                 className="h-full bg-primary"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
