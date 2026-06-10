/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Heart, Share2, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FeedItem } from '../types';

interface FeedCardProps {
  item: FeedItem;
  key?: string;
}

export default function FeedCard({ item }: FeedCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // intersection observer pr voir si la carte est active a lecran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.6, // la carte est active si elle prend o moins 60% de lecran
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // gestion play/pause et son auto selon si la carte est active
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        // on tente de lancer la video ac du son
        videoRef.current.muted = false;
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Autoplay unmuted blocked, playing muted:', err);
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch((e) => console.log('Muted autoplay failed:', e));
            }
          });
      } else {
        // on met en pause et mute des qon scroll ailleur
        videoRef.current.pause();
        videoRef.current.muted = true;
        setIsPlaying(false);
      }
    }
  }, [isActive]);

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
        setIsPlaying(false);
      } else {
        // lance le son direct sur le click
        videoRef.current.muted = false;
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Play failed:', err);
          });
      }
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (scrollRef.current && item.images) {
      const container = scrollRef.current;
      const width = container.offsetWidth;
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'prev' 
        ? currentScroll - width 
        : currentScroll + width;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: item.title,
      text: item.content,
      url: item.videoUrl || item.images?.[0] || window.location.href,
    };
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Lien copié dans le presse-papier !');
      }
    } catch (err) {
      console.log('Erreur de partage:', err);
    }
  };

  const subjectColors = {
    maths: 'bg-math',
    physics: 'bg-physics',
    chemistry: 'bg-chemistry',
  };

  return (
    <div ref={cardRef} className="relative h-full w-full snap-start overflow-hidden bg-black">
      {/* tag de la matiere (maths, phys, etc) */}
      <div className="absolute left-6 top-12 z-20 pointer-events-none">
        <div className={`rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-xl ${subjectColors[item.subject]}`}>
          {item.subject === 'maths' ? 'Maths' : 
           item.subject === 'physics' ? 'Physique' : 'Chimie'}
        </div>
      </div>

      {/* les petits points du caroussel */}
      {item.type === 'carousel' && item.images && (
        <div className="absolute right-6 top-24 z-20 flex gap-1.5">
          {item.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary w-4' : 'bg-white/30'}`} 
            />
          ))}
        </div>
      )}

      {/* anim de gro coeur kan on like */}
      <AnimatePresence>
        {showHeartOverlay && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
          >
            <Heart size={100} fill="#FFB800" className="text-primary drop-shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* bouton prec/suiv pr le caroussel sur pc */}
      {item.type === 'carousel' && item.images && (
        <>
          {activeIndex > 0 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                scrollCarousel('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all active:scale-90 shadow-lg cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {activeIndex < item.images.length - 1 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                scrollCarousel('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all active:scale-90 shadow-lg cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </>
      )}

      {/* icon pause o milieu pr la video */}
      <AnimatePresence>
        {!isPlaying && item.type === 'video' && (
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

      {/* actions a droite (like, partage...) */}
      <div className="absolute right-4 bottom-32 z-30 flex flex-col items-center gap-6 pointer-events-auto">
        <button onClick={(e) => { e.stopPropagation(); handleLike(); }} className="flex flex-col items-center gap-1 cursor-pointer">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 transition-all ${isLiked ? 'text-primary scale-110' : 'text-white'}`}>
            <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
          </div>
          <span className="text-[10px] font-bold text-white shadow-sm">{item.likes + (isLiked ? 1 : 0)}</span>
        </button>
        <button onClick={(e) => { e.stopPropagation(); handleShare(); }} className="flex flex-col items-center gap-1 text-white cursor-pointer">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 active:scale-90 transition-transform">
            <Share2 size={24} />
          </div>
          <span className="text-[10px] font-bold shadow-sm">Partager</span>
        </button>
      </div>

      {/* texte en bas ac le titre et desc */}
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

      {/* zone cliquable ac le media (video/caroussel/autre) */}
      <div 
        className="absolute inset-0 z-0 bg-black cursor-pointer"
        onClick={item.type === 'video' ? togglePlay : undefined}
        onDoubleClick={handleLike}
      >
        {item.type === 'video' && item.videoUrl ? (
          <video
            ref={videoRef}
            key={item.videoUrl}
            className="h-full w-full object-contain"
            loop
            playsInline
            preload="auto"
          >
            <source src={item.videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        ) : item.type === 'carousel' && item.images ? (
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="h-full w-full flex overflow-x-auto snap-x snap-mandatory scroll-hide relative z-10"
            onClick={(e) => e.stopPropagation()} 
          >
            {item.images.map((img, i) => (
              <div 
                key={i} 
                className="h-full w-full flex-shrink-0 snap-center"
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
              >
                <img 
                  src={img} 
                  alt={`${item.title} - ${i + 1}`} 
                  className="h-full w-full object-contain pointer-events-none select-none"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
             {item.type === 'formula' && <span className="text-6xl opacity-20">∫ dx</span>}
             {item.type === 'funfact' && <span className="text-6xl opacity-20">💡</span>}
             {item.type === 'method' && <span className="text-6xl opacity-20">📝</span>}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-20" />
      </div>
    </div>
  );
}
