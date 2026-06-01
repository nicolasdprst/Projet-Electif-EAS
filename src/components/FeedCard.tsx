import { useState, useRef } from 'react';
import { Heart, Share2, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FeedItem } from '../types';

interface FeedCardProps {
  item: FeedItem;
  key?: string;
}

export default function FeedCard({ item }: FeedCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const subjectColors = {
    maths: 'bg-primary',
    physics: 'bg-blue-500',
    chemistry: 'bg-emerald-500',
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-[#E9E4D1] shadow-sm flex flex-col">
      
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary/5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">
            {item.author[0]}
          </div>
          <span className="text-[10px] font-black text-black/60 uppercase tracking-widest">
            {item.author}
          </span>
        </div>

        <div className={`rounded-lg px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white ${subjectColors[item.subject]}`}>
          {item.subject === 'maths' ? 'Maths' : 
           item.subject === 'physics' ? 'Physique' : 'Chimie'}
        </div>
      </div>

      <div className="relative h-48 w-full overflow-hidden bg-black flex items-center justify-center">
        {item.type === 'video' && item.videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={item.videoUrl}
              className="h-full w-full object-cover cursor-pointer"
              loop
              muted
              playsInline
              onClick={togglePlay}
            />
            
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="play"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="rounded-full bg-black/40 p-4 backdrop-blur-sm text-white"
                  >
                    <Play size={20} fill="currentColor" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="pause"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="rounded-full bg-black/40 p-4 backdrop-blur-sm text-white opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <Pause size={20} fill="currentColor" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            {item.type === 'formula' && <span className="text-5xl font-serif text-white/20 select-none">∫ dx</span>}
            {item.type === 'funfact' && <span className="text-5xl text-white/25 select-none">💡</span>}
            {item.type === 'method' && <span className="text-5xl text-white/20 select-none">📝</span>}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="mb-2 text-sm font-black uppercase text-black tracking-tight leading-tight">
          {item.title}
        </h3>
        
        <p className="text-[10px] font-bold text-black/50 uppercase leading-relaxed mb-4">
          {item.content}
        </p>

        <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 active:scale-95 transition-all text-[10px] font-black uppercase tracking-wider ${
                isLiked ? 'text-primary' : 'text-black/40'
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
              <span>{item.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button
              className="flex items-center gap-1.5 text-black/40 hover:text-black transition-all text-[10px] font-black uppercase tracking-wider"
            >
              <Share2 size={16} />
              <span>Partager</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
