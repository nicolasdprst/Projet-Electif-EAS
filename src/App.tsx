import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BottomNav from './components/BottomNav';
import ResourcesScreen from './screens/ResourcesScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import ProfileScreen from './screens/ProfileScreen';

type Tab = 'discover' | 'resources' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('discover');

  const renderScreen = () => {
    switch (activeTab) {
      case 'discover':
        return <DiscoverScreen />;
      case 'resources':
        return <ResourcesScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <DiscoverScreen />;
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black font-sans selection:bg-primary/30">
      <div className="relative h-full w-full max-w-md overflow-hidden bg-background shadow-2xl md:h-[844px] md:w-[390px] md:rounded-[48px] md:border-[8px] md:border-surface md:outline md:outline-2 md:outline-white/10">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-[60] h-12 bg-gradient-to-b from-background/40 to-transparent" />

        <main className="h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full w-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none"
        >
          <BottomNav activeTab={activeTab as any} onTabChange={setActiveTab as any} />
        </motion.div>
        
        <div className="absolute bottom-1.5 left-1/2 hidden h-1 w-32 -translate-x-1/2 rounded-full md:block bg-white/20" />
      </div>
    </div>
  );
}


