import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { MOCK_COURSES } from '../constants';
import ResourceCard from '../components/ResourceCard';
import { motion } from 'motion/react';

export default function ResourcesScreen() {
  const [level, setLevel] = useState<'terminale' | 'cpge'>('terminale');

  const filteredCourses = MOCK_COURSES;

  return (
    <div className="h-full w-full bg-background overflow-y-auto scroll-hide pb-32">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-primary/10 py-6 px-6">
        <h1 className="text-2xl font-black text-black uppercase tracking-tighter text-center">
          Prépares ton <span className="text-primary italic">Avenir</span>
        </h1>
      </div>

      <div className="px-6 pt-6">
        <div className="mb-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
               <GraduationCap size={16} className="text-primary" />
               <span className="text-[10px] font-black text-primary uppercase tracking-widest">{level === 'terminale' ? 'Terminale' : 'Classes Prépa'}</span>
            </div>
        </div>

        <div className="mb-12 flex items-center justify-between gap-4 p-4 rounded-[32px] bg-surface border border-primary/5 shadow-sm">
           <div className="flex flex-col">
              <span className="text-[7px] font-black text-black/20 uppercase tracking-[0.4em] mb-1">Choisir Niveau</span>
              <div className="flex items-center gap-2">
                 <div className="h-1 w-8 rounded-full bg-primary" />
                 <span className="text-[10px] font-black text-black uppercase">{level === 'terminale' ? 'Terminale' : 'CPGE'}</span>
              </div>
           </div>

           <div className="relative flex rounded-2xl bg-primary/5 p-1 border border-primary/10 w-32">
            <button 
              onClick={() => setLevel('terminale')}
              className={`relative z-10 flex-1 py-2 rounded-xl text-[9px] font-black transition-colors ${
                level === 'terminale' ? 'text-white' : 'text-primary/40'
              }`}
            >
              TER
            </button>
            <button 
              onClick={() => setLevel('cpge')}
              className={`relative z-10 flex-1 py-2 rounded-xl text-[9px] font-black transition-colors ${
                level === 'cpge' ? 'text-white' : 'text-primary/40'
              }`}
            >
              PREPA
            </button>
            <motion.div
              layoutId="switcher-bg"
              className="absolute inset-y-1 rounded-xl bg-primary shadow-lg shadow-primary/20"
              initial={false}
              animate={{ 
                left: level === 'terminale' ? '4px' : '50%',
                right: level === 'terminale' ? '50%' : '4px'
              }}
              transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ResourceCard course={course} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );

}
