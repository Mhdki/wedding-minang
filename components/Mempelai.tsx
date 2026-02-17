"use client";

import { motion } from "framer-motion";

export default function Mempelai() {
  return (
    <section className="w-full py-10 px-6 flex flex-col items-center gap-12 relative z-10">
      
      {/* JUDUL SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="text-emas/60 text-[10px] tracking-[0.4em] uppercase mb-2">The Couple</p>
        <h2 className="font-judul text-5xl text-emas drop-shadow-md">Mempelai</h2>
      </motion.div>

      {/* --- MEMPELAI PRIA (GROOM) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col items-center text-center w-full"
      >
        {/* BINGKAI FOTO MEWAH */}
        <div className="relative mb-8 group">
          {/* Efek Glow di belakang foto */}
          <div className="absolute inset-0 bg-emas/20 blur-xl rounded-full transform group-hover:scale-110 transition-transform duration-700" />
          
          {/* Bingkai Luar */}
          <div className="relative w-48 h-64 border-[1px] border-emas/40 rounded-t-full rounded-b-[100px] p-2 rotate-[-3deg]">
            {/* Bingkai Dalam */}
            <div className="w-full h-full border-[1px] border-emas rounded-t-full rounded-b-[100px] overflow-hidden relative rotate-[3deg] bg-black">
              
              {/* FOTO PRIA (pria.png) */}
              <img 
                src="/assets/img/pria.png" 
                alt="Mempelai Pria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
              
            </div>
          </div>
        </div>

        {/* NAMA PRIA */}
        <h3 className="font-tegas text-3xl text-emas mb-2">Fua Abizar</h3>
        <p className="text-sm text-white/80 font-isi italic mb-4">Putra Pertama dari Bpk. Fua & Ibu Fua</p>
        
        {/* Link Instagram */}
        <a href="#" className="px-6 py-2 border border-emas/30 rounded-full text-[10px] text-emas hover:bg-emas hover:text-black transition-colors">
          @instagram_fua
        </a>
      </motion.div>

      {/* --- DIVIDER (DAN) --- */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="font-judul text-6xl text-emas/40"
      >
        &
      </motion.div>

      {/* --- MEMPELAI WANITA (BRIDE) --- */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col items-center text-center w-full"
      >
        {/* BINGKAI FOTO */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-merah-minang/30 blur-xl rounded-full transform group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative w-48 h-64 border-[1px] border-emas/40 rounded-t-full rounded-b-[100px] p-2 rotate-[3deg]">
            <div className="w-full h-full border-[1px] border-emas rounded-t-full rounded-b-[100px] overflow-hidden relative rotate-[-3deg] bg-black">
              
              {/* FOTO WANITA (wanita.png) */}
              <img 
                src="/assets/img/wanita.png" 
                alt="Mempelai Wanita"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />

            </div>
          </div>
        </div>

        {/* NAMA WANITA */}
        <h3 className="font-tegas text-3xl text-emas mb-2">Dinda Merliana</h3>
        <p className="text-sm text-white/80 font-isi italic mb-4">Putri Kedua dari Bpk. Dinda & Ibu Dinda</p>

        <a href="#" className="px-6 py-2 border border-emas/30 rounded-full text-[10px] text-emas hover:bg-emas hover:text-black transition-colors">
          @instagram_dinda
        </a>
      </motion.div>

    </section>
  );
}