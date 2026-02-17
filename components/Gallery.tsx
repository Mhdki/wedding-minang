"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const photos = [
    { src: "/assets/img/pr1.png", type: "tall" },
    { src: "/assets/img/pr2.png", type: "short" },
    { src: "/assets/img/pr3.png", type: "short" },
    { src: "/assets/img/pr4.png", type: "wide" }, 
    { src: "/assets/img/pr5.png", type: "tall" },    
    { src: "/assets/img/pr6.png", type: "wide" },   
  ];

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center relative z-10">
      
      {/* JUDUL SECTION - Warna diganti Merah Minang */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <p className="text-emas/60 text-[10px] tracking-[0.4em] uppercase mb-2 font-isi font-bold">Our Moments</p>
        <h2 className="font-judul text-5xl text-emas drop-shadow-md">Galeri Foto</h2>
      </motion.div>

      {/* MASONRY GRID LAYOUT */}
      <div className="columns-2 gap-4 w-full space-y-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="break-inside-avoid relative group overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            {/* Layer Gelap Tipis (Tetap ada sedikit agar teks/ikon kontras) */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            
            {/* Bingkai Merah saat Hover */}
            <div className="absolute inset-0 border border-merah-minang/0 group-hover:border-merah-minang/50 transition-all duration-500 z-20 rounded-xl" />

            <img 
              src={photo.src} 
              alt={`Gallery ${index}`}
              // EFEK GRAYSCALE DIHAPUS
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
              loading="lazy"
            />
            
            {/* Ikon Love */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <span className="text-merah-minang text-xl">♥</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tombol Lihat Video */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12"
      >
       
      </motion.div>

    </section>
  );
}