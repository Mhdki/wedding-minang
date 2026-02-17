"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  // Target: 20 Februari 2026 (Sesuaikan kalau mau)
  const targetDate = new Date("2026-02-20T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) clearInterval(interval);
      else {
        setTimeLeft({
          hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
          jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          detik: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center mx-1 sm:mx-2">
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border border-emas/30 bg-black/40 backdrop-blur-md rounded-lg mb-1 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
        <span className="font-tegas text-xl sm:text-2xl text-emas tabular-nums">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[9px] uppercase tracking-widest text-white/60">{label}</span>
    </div>
  );

  return (
    <section className="w-full py-10 flex flex-col items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-6"
      >
        <p className="text-emas/60 text-[10px] tracking-[0.3em] uppercase mb-2">Menuju Hari Bahagia</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap justify-center"
      >
        <TimeBox label="Hari" value={timeLeft.hari} />
        <TimeBox label="Jam" value={timeLeft.jam} />
        <TimeBox label="Menit" value={timeLeft.menit} />
        <TimeBox label="Detik" value={timeLeft.detik} />
      </motion.div>
      
      {/* Tombol Ingatkan Saya */}
      <motion.a
        href="https://calendar.google.com/calendar"
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 px-6 py-2 bg-emas text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg flex items-center gap-2"
      >
        <span>📅</span> Ingatkan Saya
      </motion.a>
    </section>
  );
}