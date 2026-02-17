"use client";
import { useState, useEffect, useRef } from "react";
import { Music, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer({ isOpen }: { isOpen: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Otomatis putar musik saat undangan dibuka
  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/assets/audio/baralek.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={togglePlay}
            // Posisi di kanan atas agar tidak bertabrakan dengan Navbar di bawah
            className="fixed top-6 right-6 z-[10000] w-10 h-10 bg-merah-minang/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white shadow-xl"
          >
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {isPlaying ? <Music size={18} /> : <Pause size={18} />}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}