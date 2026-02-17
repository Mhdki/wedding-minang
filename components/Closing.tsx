"use client";
import { motion } from "framer-motion";
import CornerOrnaments from "./CornerOrnaments";

export default function Closing() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden">
      {/* Ornaments di keempat sudut yang bergoyang */}
      <CornerOrnaments />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        {/* Label Atas: Montserrat Black (Sangat Bold) */}
        <p className="font-isi font-black text-[11px] tracking-[0.6em] uppercase text-emas/50 mb-12">
          Our Deepest Gratitude
        </p>

        {/* Teks Arab: Playfair Display */}
        <div className="font-judul text-3xl text-emas mb-10 italic">
          جَزَاكُمُ اللهُ خَيْرًا
        </div>

        {/* Pesan Utama: Montserrat Bold */}
        <div className="max-w-[320px] mb-16">
          <p className="font-isi font-bold text-sm text-white/70 leading-relaxed italic">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai."
          </p>
        </div>

        {/* Ucapan Terima Kasih: Playfair Display Besar */}
        <h2 className="font-judul text-6xl text-emas mb-16 drop-shadow-md">
          Terima Kasih
        </h2>

        {/* Penutup: Perpaduan Modern Bold & Serif Italic */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-isi font-black text-[10px] tracking-[0.4em] uppercase text-white/30">
            Kami yang Berbahagia,
          </p>
          <h3 className="font-judul text-4xl text-emas italic">
            Fua & Dinda
          </h3>
          <p className="font-isi font-black text-[9px] tracking-[0.2em] uppercase text-emas/40 mt-4">
            Beserta Keluarga Besar
          </p>
        </div>
      </motion.div>

      {/* Garis Dekorasi Halus di Bawah */}
      <div className="absolute bottom-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-emas/40 to-transparent"></div>
    </section>
  );
}