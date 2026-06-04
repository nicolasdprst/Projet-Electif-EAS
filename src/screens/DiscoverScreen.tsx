import { useState } from 'react';
import { MOCK_FEED } from '../constants';
import FeedCard from '../components/FeedCard';
import { Filter, Monitor, X, Play, Book, Lightbulb, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FeedContentType } from '../types';

export default function DiscoverScreen() {
  const [filter, setFilter] = useState<FeedContentType | 'all'>('all');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filteredFeed = filter === 'all' 
    ? MOCK_FEED 
    : MOCK_FEED.filter(item => item.type === filter);

  const filterOptions = [
    { id: 'all', label: 'Tout', icon: Monitor },
    { id: 'video', label: 'Vidéos', icon: Play },
    { id: 'method', label: 'Démonstrations', icon: Book },
    { id: 'funfact', label: 'Faits Scientifiques', icon: Lightbulb },
    { id: 'formula', label: 'Formules', icon: Calculator },
  ];

  return (
    <div className="relative h-full w-full bg-black">
      {/* Header Overlay */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-end px-6 py-12 pointer-events-none">
         <button 
           onClick={() => setShowFilterMenu(true)}
           className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 pointer-events-auto active:scale-95 transition-transform shadow-xl"
         >
            <Filter size={20} />
         </button>
      </div>

      {/* Vertical Feed */}
      <div className="h-full w-full snap-y overflow-y-scroll scroll-hide bg-black">
        {filteredFeed.length > 0 ? (
          filteredFeed.map((item) => (
            <FeedCard key={item.id} item={item} />
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-black px-10 text-center">
             <div className="flex flex-col items-center gap-4">
                <Filter size={48} className="text-white/20" />
                <p className="text-sm font-medium text-white/40 uppercase tracking-widest">Aucun contenu trouvé</p>
                <button 
                  onClick={() => setFilter('all')}
                  className="rounded-full bg-primary px-6 py-2 text-xs font-bold text-white uppercase shadow-lg shadow-primary/30"
                >
                  Réinitialiser
                </button>
             </div>
          </div>
        )}
      </div>

      {/* Filter Menu Overlay */}
      <AnimatePresence>
        {showFilterMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilterMenu(false)}
              className="absolute inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="absolute bottom-0 left-0 right-0 z-[101] rounded-t-[40px] bg-background pb-12 pt-8 px-8 border-t border-primary/10 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-black text-black uppercase tracking-tighter italic"><span className="text-primary">Filtrer</span> le contenu</h3>
                <button onClick={() => setShowFilterMenu(false)} className="text-black/40">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3">
                {filterOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isActive = filter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFilter(opt.id as any);
                        setShowFilterMenu(false);
                      }}
                      className={`flex w-full items-center gap-4 rounded-2xl p-4 transition-all border ${
                        isActive 
                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                        : 'bg-white border-primary/5 text-primary/60 active:bg-primary/5'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="text-sm font-black uppercase tracking-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
