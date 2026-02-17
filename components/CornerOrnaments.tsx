"use client";
import { motion } from "framer-motion";

export default function CornerOrnaments() {
  // Animasi Tumbuh + Goyang
  const ornamentVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    sway: {
      rotate: [-1, 1, -1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    // z-[9999] supaya menang lawan gradasi hitam background
    // Kita hapus 'overflow-hidden' agar gambar tidak terpotong pinggirannya
    <div className="absolute inset-0 pointer-events-none z-[9999]">
      
      {/* Kiri Atas */}
      <motion.img 
        src="/assets/img/bunga-kiri-atas.png" 
        alt="tl" 
        initial="hidden"
        whileInView="visible"
        animate="sway"
        variants={ornamentVariants}
        style={{ originX: 0, originY: 0 }}
        className="absolute top-0 left-0 w-[220px] h-auto"
      />

      {/* Kanan Atas - KITA PASTIKAN TOP-0 RIGHT-0 */}
      <motion.img 
        src="/assets/img/bunga-kanan-atas.png" 
        alt="tr" 
        initial="hidden"
        whileInView="visible"
        animate="sway"
        variants={ornamentVariants}
        style={{ originX: 1, originY: 0 }}
        className="absolute top-0 right-0 w-[220px] h-auto" 
      />

      {/* Kiri Bawah */}
      <motion.img 
        src="/assets/img/bunga-kiri-bawah.png" 
        alt="bl" 
        initial="hidden"
        whileInView="visible"
        animate="sway"
        variants={ornamentVariants}
        style={{ originX: 0, originY: 1 }}
        className="absolute bottom-0 left-0 w-[220px] h-auto"
      />

      {/* Kanan Bawah */}
      <motion.img 
        src="/assets/img/bunga-kanan-bawah.png" 
        alt="br" 
        initial="hidden"
        whileInView="visible"
        animate="sway"
        variants={ornamentVariants}
        style={{ originX: 1, originY: 1 }}
        className="absolute bottom-0 right-0 w-[220px] h-auto"
      />
    </div>
  );
}