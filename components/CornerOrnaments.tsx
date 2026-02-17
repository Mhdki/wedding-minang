"use client";
import { motion, Variants } from "framer-motion"; // Tambahkan import Variants

// Definisikan tipe Variants agar TypeScript tidak rewel
const ornamentVariants: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 1.5, 
      ease: "easeOut" // Sekarang TS tahu ini tipe Easing yang sah
    } 
  },
  sway: { 
    rotate: [-2, 2, -2], 
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } 
  },
};

export default function CornerOrnaments() {
  return (
    <>
      {/* Bunga Kiri Atas */}
      <motion.img
        src="/assets/img/bunga-sudut.png" // Sesuaikan path file lo
        initial="hidden"
        whileInView="visible"
        animate="sway"
        variants={ornamentVariants}
        style={{ originX: 0, originY: 0 }}
        className="absolute top-0 left-0 w-[220px] h-auto z-20 pointer-events-none"
      />
      
      {/* Bunga Kanan Atas (Dibalik) */}
      <motion.img
        src="/assets/img/bunga-sudut.png"
        initial="hidden"
        whileInView="visible"
        animate="sway"
        variants={ornamentVariants}
        style={{ originX: 1, originY: 0 }}
        className="absolute top-0 right-0 w-[220px] h-auto z-20 scale-x-[-1] pointer-events-none"
      />

      {/* Tambahkan bunga bawah jika perlu dengan logika yang sama */}
    </>
  );
}