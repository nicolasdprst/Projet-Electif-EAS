import { useState } from 'react';
import { GraduationCap, ChevronLeft, ChevronDown, BookOpen, Lock } from 'lucide-react';
import { MOCK_COURSES } from '../constants';
import ResourceCard from '../components/ResourceCard';
import CourseViewer from './resources/CourseViewer';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';

export default function ResourcesScreen() {
  const [level, setLevel] = useState<'terminale' | 'cpge'>('terminale');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [chapterFilter, setChapterFilter] = useState<string>('all');

  const filteredCourses = MOCK_COURSES;

  const filteredChapters = selectedCourse?.chapters.filter(ch => 
    chapterFilter === 'all' || ch.category === chapterFilter
  ) || [];

  return (
    <div className="h-full w-full bg-background overflow-y-auto scroll-hide pb-32">
      {/* overlay cours */}
      <AnimatePresence>
        {activeChapterId && (
          <CourseViewer 
            chapterId={activeChapterId} 
            onBack={() => setActiveChapterId(null)} 
          />
        )}
      </AnimatePresence>

      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-primary/10 py-6 px-6">
        <h1 className="text-2xl font-black text-black uppercase tracking-tighter text-center">
          Prépares ton <span className="text-primary italic">Avenir</span>
        </h1>
      </div>

      <div className="px-6 pt-6">
        {/* badge niveau */}
        <div className="mb-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
               <GraduationCap size={16} className="text-primary" />
               <span className="text-[10px] font-black text-primary uppercase tracking-widest">{level === 'terminale' ? 'Terminale' : 'Classes Prépa'}</span>
            </div>
        </div>

        {/* selecteur niveau */}
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

        {/* liste des cours */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ResourceCard 
                course={course} 
                onSelect={(selected) => {
                  setSelectedCourse(selected);
                  setChapterFilter('all');
                }} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background overflow-y-auto scroll-hide pb-32"
          >
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-primary/10 px-6 py-4 flex items-center justify-between">
               <button 
                 onClick={() => setSelectedCourse(null)}
                 className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary cursor-pointer hover:bg-primary/20 active:scale-95 transition-all"
               >
                 <ChevronLeft size={20} />
               </button>
               <h2 className="text-sm font-black uppercase tracking-tighter text-black">
                 {selectedCourse.title}
               </h2>
            </div>

            <div className="px-6 py-8">
               {/* filtres */}
                <div className="flex gap-2 overflow-x-auto scroll-hide mb-8">
                  {(selectedCourse.subject === 'physics' 
                    ? ['all', 'mecanique', 'ondes', 'optique'] 
                    : selectedCourse.subject === 'chemistry'
                    ? ['all', 'chimie']
                    : ['all', 'analyse', 'probabilites', 'algebre']
                  ).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setChapterFilter(cat)}
                      className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                        chapterFilter === cat 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                        : 'bg-white border border-primary/5 text-primary/40'
                      }`}
                    >
                      {cat === 'all' ? 'Tous' : 
                       cat === 'analyse' ? 'Analyse' : 
                       cat === 'probabilites' ? 'Probabilités' : 
                       cat === 'algebre' ? 'Algèbre' : 
                       cat === 'mecanique' ? 'Mécanique' : 
                       cat === 'ondes' ? 'Ondes' : 
                       cat === 'optique' ? 'Optique' : cat}
                    </button>
                  ))}
                </div>

               {/* liste chapitres */}
               <div className="grid grid-cols-1 gap-6">
                 {filteredChapters.map((chapter, idx) => {
                   const isAvailable = chapter.isCompleted;
                   return (
                     <motion.div
                       key={chapter.id}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.05 }}
                       className={`relative rounded-[32px] border p-6 shadow-sm overflow-hidden transition-all ${
                         isAvailable
                           ? 'border-primary/5 bg-[#F8F5E9]'
                           : 'border-black/5 bg-white opacity-60 grayscale'
                       }`}
                     >
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start gap-4">
                             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary text-[18px] font-black shadow-sm">
                               {chapter.icon || '📚'}
                             </div>
                             <div className="flex-1 pr-2">
                               <h4 className="text-sm font-black text-black uppercase tracking-tight max-w-[180px] leading-tight pt-1">
                                 {chapter.title}
                               </h4>
                               <p className="text-[9px] font-medium text-black/40 leading-normal mt-1">
                                 {chapter.description}
                               </p>
                             </div>
                          </div>
                          <div className="text-primary opacity-20">
                             <ChevronDown size={20} />
                          </div>
                        </div>

                         <div className="flex gap-3">
                           <button 
                             onClick={() => isAvailable && setActiveChapterId(chapter.id)}
                             className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm active:scale-95 transition-all ${
                               isAvailable 
                               ? 'bg-[#00A3E0] text-white cursor-pointer' 
                               : 'bg-black/5 text-black/20 cursor-not-allowed shadow-none'
                             }`}
                             disabled={!isAvailable}
                           >
                             {isAvailable ? 'Cours' : 'Bientôt'}
                           </button>
                           <button 
                             className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm active:scale-95 transition-transform ${
                               isAvailable
                               ? 'bg-[#00A3E0] text-white cursor-pointer'
                               : 'bg-black/5 text-black/20 cursor-not-allowed shadow-none'
                             }`}
                             disabled={!isAvailable}
                           >
                             TD
                           </button>
                        </div>
                     </motion.div>
                   );
                 })}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
