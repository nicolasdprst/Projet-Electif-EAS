import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';

interface ResourceCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
}

export default function ResourceCard({ course, onSelect }: ResourceCardProps) {
  const subjectColors: Record<string, string> = {
    maths: '#E9E4D1',
    physics: '#E9E4D1',
    chemistry: '#E9E4D1',
  };

  const iconColors: Record<string, string> = {
    maths: 'bg-primary shadow-primary/20',
    physics: 'bg-blue-500 shadow-blue-500/20',
    chemistry: 'bg-emerald-500 shadow-emerald-500/20',
  };

  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect?.(course)}
      className="group relative flex flex-col overflow-hidden rounded-[32px] border border-primary/10 transition-all bg-[#E9E4D1] shadow-sm pb-2 cursor-pointer"
    >
      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between mb-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconColors[course.subject] || 'bg-primary'} text-white shadow-xl`}>
            <BookOpen size={18} strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="mb-2 text-sm font-black uppercase text-black tracking-tighter whitespace-nowrap">
            {course.subject === 'maths' ? 'Maths' : 
             course.subject === 'physics' ? 'Physique' : 'Chimie'}
          </h3>
          
          <p className="text-[8px] font-bold text-black/40 uppercase mb-4 leading-tight">
            {course.subject === 'maths' ? 'Analyse, algèbre et probabilités.' : 
             course.subject === 'physics' ? 'Mécanique, optique, électricité.' : 'Transformation, équilibre.'}
          </p>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-black">📚 {course.chaptersCount} Chapitres</span>
            </div>
            <div className="text-right flex flex-col">
              <span className="text-[9px] font-black text-primary">⚡ {course.progress}%</span>
            </div>
          </div>
          
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
