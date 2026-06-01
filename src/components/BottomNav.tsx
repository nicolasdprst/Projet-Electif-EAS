import { Star, Folder, User } from 'lucide-react';
import { motion } from 'motion/react';

type Tab = 'discover' | 'resources' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'discover' as Tab, label: 'FLUX', icon: Star },
    { id: 'resources' as Tab, label: 'RESSOURCES', icon: Folder },
    { id: 'profile' as Tab, label: 'PROFIL', icon: User },
  ];



  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-10 pointer-events-none">
      <div className="flex w-full max-w-[280px] items-center justify-around rounded-[24px] bg-accent-peach px-2 py-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto border border-black/5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex flex-col items-center justify-center outline-none cursor-pointer flex-1 h-12"
            >
              <motion.div 
                animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                className="flex flex-col items-center gap-0.5"
              >
                <div className="relative flex h-6 w-6 items-center justify-center">
                  <Icon
                    size={16}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`relative z-10 transition-colors ${
                      isActive ? 'text-black' : 'text-black/40'
                    }`}
                    fill={isActive && tab.id === 'discover' ? 'currentColor' : 'none'}
                  />
                </div>
                <span
                  className={`text-[7px] font-black tracking-[0.1em] transition-colors ${
                    isActive ? 'text-black' : 'text-black/40'
                  }`}
                >
                  {tab.label}
                </span>
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-1 h-1 w-1 rounded-full bg-black/60"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
