"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// --- IMPORT SEMUA KOMPONEN ---
import Cover from "@/components/Cover";
import Mempelai from "@/components/Mempelai";
import Countdown from "@/components/Countdown";
import Acara from "@/components/Acara";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Closing from "@/components/Closing"; 
import CornerOrnaments from "@/components/CornerOrnaments";
import Navbar from "@/components/Navbar";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-gray-200 flex justify-center items-center overflow-x-hidden">
      
      {/* BINGKAI HP - overflow-hidden agar Navbar tidak lari keluar bingkai */}
      <div className="w-full max-w-[480px] h-[100dvh] bg-bg-kertas shadow-2xl relative overflow-hidden">
        
        <AnimatePresence>
          {isOpen && (
            <div className="relative w-full h-full">
              {/* --- NAVBAR: Sekarang Fixed/Absolute di atas semua konten --- */}
              <Navbar />

              {/* --- AREA SCROLL: Hanya bagian ini yang bisa digeser --- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar relative"
              >
                {/* Background Songket Statis */}
                <div className="fixed inset-0 z-0 bg-[url('/assets/img/bg-cover.png')] bg-cover bg-center opacity-[0.12] grayscale" />
                <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black" />

                {/* Konten Kontainer */}
                <div className="relative z-10 w-full flex flex-col items-center">
                  
                  {/* --- BAGIAN 1: SALAM PEMBUKA (ID: top) --- */}
                  {/* --- BAGIAN 1: SALAM PEMBUKA --- */}
<section id="top" className="relative w-full px-8 py-20 min-h-[100dvh] flex flex-col items-center justify-center">
  <CornerOrnaments /> 
  
  <motion.div className="text-center w-full flex flex-col items-center z-10">
    {/* Merah Minang sebagai aksen Label */}
    <span className="font-isi font-black text-[10px] tracking-[0.6em] uppercase text-emas mb-8">
      The Wedding Invitation
    </span>

    <div className="text-emas text-3xl mb-10 font-judul italic opacity-90 drop-shadow-md">
      بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
    </div>

    {/* Judul Utama (Serif) tetap Merah Minang untuk kesan Bold */}
    <h2 className="text-emas font-judul text-6xl mb-4 drop-shadow-lg tracking-tight">
      Assalamualaikum
    </h2>
    
    {/* Subtitle menggunakan Putih/Muted agar kontras */}
    <p className="font-isi font-bold text-[11px] tracking-[0.4em] uppercase text-white/40 mb-14 italic">
      Warahmatullahi Wabarakatuh
    </p>

    <div className="relative max-w-[320px] mx-auto text-[13px] font-isi text-white/80 leading-relaxed italic px-8 py-10 border border-white/5 bg-white/[0.02] rounded-3xl shadow-inner backdrop-blur-[2px]">
      <span className="text-emas font-bold not-italic mr-1">"</span>
      Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan dalam ikatan pernikahan.
      <span className="text-emas font-bold not-italic ml-1">"</span>
    </div>
  </motion.div>
</section>

                  {/* Section-section lainnya */}
                  <section id="mempelai" className="relative w-full py-16"><CornerOrnaments /><Mempelai /></section>
                  <section id="acara" className="relative w-full py-16"><CornerOrnaments /><Acara /><div className="mt-10 px-8"><Countdown /></div></section>
                  <section id="story" className="relative w-full py-16"><CornerOrnaments /><Story /></section>
                  <section id="gallery" className="relative w-full py-16"><CornerOrnaments /><Gallery /></section>
                  <section id="rsvp" className="relative w-full py-16 bg-black/10"><CornerOrnaments /><RSVP /></section>
                  {/* --- KOMPONEN MUSIK --- */}
                  <MusicPlayer isOpen={isOpen} />
                  <Closing />

                  {/* Footer - pb-32 agar tidak tertutup Navbar */}
                  <div className="mt-10 text-[9px] text-white/20 uppercase tracking-[0.5em] pb-32">
                    Fua & Dinda Wedding 2026
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- COVER PAGE --- */}
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.div
              key="cover-layer"
              exit={{ y: "-100%", opacity: 0, transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] } }}
              className="absolute inset-0 z-50 w-full h-full overflow-hidden"
            >
              <Cover onOpen={() => setIsOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}