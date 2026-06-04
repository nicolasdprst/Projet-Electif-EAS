/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowHeartOverlay(true);
      setTimeout(() => setShowHeartOverlay(false), 800);
    }
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
    maths: 'bg-math',
    physics: 'bg-physics',
    chemistry: 'bg-chemistry',
  };

  return (
    <div className="relative h-full w-full snap-start overflow-hidden bg-black">
      {/* Click area to pause/play */}
      <div 
        className="absolute inset-0 z-10" 
        onClick={togglePlay}
        onDoubleClick={handleLike}
      />

      {/* Subject Tag */}
      <div className="absolute left-6 top-24 z-20 pointer-events-none">
        <div className={`rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-xl ${subjectColors[item.subject]}`}>
          {item.subject === 'maths' ? 'Maths' : 
           item.subject === 'physics' ? 'Physique' : 'Chimie'}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent px-6 pb-28 pt-20 pointer-events-none">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="max-w-[85%]"
        >
          
          <h2 className="mb-1 text-lg font-bold leading-tight text-white uppercase tracking-tighter">{item.title}</h2>
          <p className="text-xs leading-normal text-white/70 line-clamp-3">{item.content}</p>
        </motion.div>
      </div>

      {/* Sidebar Actions */}
      <div className="absolute bottom-32 right-4 z-20 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); handleLike(); }}
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md transition-all active:scale-90 ${isLiked ? 'text-primary' : 'text-white'}`}
          >
            <Heart size={28} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <span className="text-[10px] font-bold text-white shadow-sm">{item.likes + (isLiked ? 1 : 0)}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button 
            onClick={(e) => { e.stopPropagation(); }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white active:scale-90"
          >
            <Share2 size={28} />
          </button>
          <span className="text-[10px] font-bold text-white shadow-sm">Partager</span>
        </div>
      </div>

      {/* Double Tap Heart Overlay */}
      <AnimatePresence>
        {showHeartOverlay && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
          >
            <Heart size={100} fill="#FFB800" stroke="#FFB800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play/Pause Overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="rounded-full bg-black/20 p-6 backdrop-blur-sm">
              <Pause size={48} className="text-white opacity-80" fill="currentColor" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Media */}
      <div className="absolute inset-0 -z-10 bg-black">
        {item.type === 'video' && item.videoUrl ? (
          <video
            ref={videoRef}
            src={item.videoUrl}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
             {item.type === 'formula' && <span className="text-6xl opacity-20">∫ dx</span>}
             {item.type === 'funfact' && <span className="text-6xl opacity-20">💡</span>}
             {item.type === 'method' && <span className="text-6xl opacity-20">📝</span>}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>
    </div>
  );
}
