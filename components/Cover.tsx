"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cover({ onOpen }: { onOpen: () => void }) {
  // --- KONFIGURASI FOTO SLIDESHOW ---
  // Masukkan nama file foto prewed kamu di sini (simpan di public/assets/img/)
  const heroImages = [
    "/assets/img/pr1.png",   // Foto 1
    "/assets/img/pr2.png",    // Foto 2 (Siapkan file ini)
    "/assets/img/pr3.png",    // Foto 3 (Siapkan file ini)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Logika Ganti Foto Otomatis (Setiap 5 Detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-bg-kertas">
      
      {/* 1. BACKGROUND LAYER: Slideshow Foto */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0, filter: "brightness(0)" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-black" // Base color black biar transisi mulus
      >
        {/* SLIDESHOW ENGINE */}
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt="Wedding Couple"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }} // Efek Zoom-in pelan (Ken Burns)
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // Durasi tukar foto
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            // onError untuk handle kalau foto belum ada, balik ke bg default
            onError={(e) => {
              e.currentTarget.src = "/assets/img/bg-cover.png";
            }}
          />
        </AnimatePresence>

        {/* --- OVERLAY WAJIB BIAR TEKS KELIATAAN --- */}
        {/* Overlay Merah Nyala Premium */}
        <div className="absolute inset-0 bg-gradient-radial from-merah-minang/40 via-black/70 to-black/90 mix-blend-multiply z-10" />
        
        {/* Efek Grain/Texture Kertas */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')] z-20" />
      </motion.div>

      {/* 2. BUNGA ORNAMEN: Menyapu keluar layar (Atas & Bawah) */}
      <motion.img 
        src="/assets/img/flower-top.png"
        initial={{ y: -180, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        exit={{ y: -500, opacity: 0, x: "-50%", transition: { duration: 1, ease: "circIn" } }}
        transition={{ duration: 2, ease: "circOut" }}
        className="absolute top-[-40px] left-1/2 w-[170%] max-w-none z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] filter brightness-90"
      />

      <motion.img 
        src="/assets/img/flower-bottom.png"
        initial={{ y: 180, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        exit={{ y: 500, opacity: 0, x: "-50%", transition: { duration: 1, ease: "circIn" } }}
        transition={{ duration: 2, ease: "circOut" }}
        className="absolute bottom-[-40px] left-1/2 w-[170%] max-w-none z-10 drop-shadow-[0_-30px_60px_rgba(0,0,0,0.9)] filter brightness-90"
      />

      {/* 3. KONTEN TEKS: Efek Mengecil & Menghilang (Focus Point) */}
      <motion.div 
        exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)", transition: { duration: 0.8 } }}
        className="relative z-20 px-8 py-12 flex flex-col items-center backdrop-blur-[3px] rounded-3xl border border-white/10 bg-black/[0.2] shadow-2xl"
      >
        
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 0.8, letterSpacing: "0.5em" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-[10px] uppercase text-white mb-6 font-light drop-shadow-md"
        >
          The Wedding Invitation
        </motion.span>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-8 relative"
        >
          <span className="font-tegas text-8xl text-emas tracking-tighter drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
            F<span className="text-4xl text-white/60 mx-[-10px] font-light relative -top-6 italic">/</span>D
          </span>
        </motion.div>

        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "120px", opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-emas to-transparent mb-10"
        />

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="mb-14"
        >
          <h1 className="font-judul text-7xl text-emas leading-none mb-2 drop-shadow-2xl">
            Fua & Dinda
          </h1>
          <p className="text-[10px] tracking-[0.6em] uppercase text-white/70 font-light text-shadow-sm">
            Padang, West Sumatra
          </p>
        </motion.div>

        {/* Tombol dengan Feedback Visual */}
        <motion.button 
          onClick={onOpen}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="group relative px-14 py-4 rounded-full border border-emas/40 bg-black/40 overflow-hidden transition-all hover:border-emas/80 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
          <span className="relative z-10 text-emas font-bold uppercase tracking-[0.3em] text-[11px] group-hover:text-white transition-colors duration-300">
            Buka Undangan
          </span>
        </motion.button>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
      `}</style>
    </section>
  );
}