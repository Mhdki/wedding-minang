"use client";

import { motion } from "framer-motion";

export default function Story() {
  const stories = [
    {
      year: "2018",
      title: "Awal Pertemuan",
      desc: "Pertama kali bertemu di acara kampus. Tidak ada yang spesial, hanya sekadar tahu nama dan saling sapa.",
      icon: "👋",
    },
    {
      year: "2020",
      title: "Mulai Dekat",
      desc: "Pandemi membawa kami lebih dekat lewat percakapan daring yang tak kenal waktu. Kami menemukan banyak kesamaan.",
      icon: "💌",
    },
    {
      year: "2023",
      title: "Komitmen",
      desc: "Setelah melewati banyak hal bersama, kami memutuskan untuk berkomitmen menjalani hubungan yang lebih serius.",
      icon: "💍",
    },
    {
      year: "2026",
      title: "Menuju Halal",
      desc: "Atas restu orang tua dan kehendak Allah SWT, kami memantapkan hati untuk mengikat janji suci pernikahan.",
      icon: "❤️",
    },
  ];

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center relative z-10">
      
      {/* JUDUL SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <p className="text-emas/60 text-[10px] tracking-[0.4em] uppercase mb-2">The Journey</p>
        <h2 className="font-judul text-5xl text-emas drop-shadow-md">Kisah Kami</h2>
      </motion.div>

      {/* TIMELINE CONTAINER */}
      <div className="relative w-full max-w-md flex flex-col items-center">
        
        {/* GARIS TENGAH (The Thread of Fate) */}
        <div className="absolute top-0 bottom-0 left-[19px] sm:left-1/2 w-[2px] bg-gradient-to-b from-transparent via-emas/50 to-transparent sm:-translate-x-1/2" />

        {/* LOOPING STORY */}
        {stories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative w-full flex items-start mb-12 sm:mb-20 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* TITIK PUSAT (Timeline Dot) */}
            <div className="absolute left-0 sm:left-1/2 w-10 h-10 flex items-center justify-center bg-black border border-emas rounded-full z-10 sm:-translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <span className="text-lg">{item.icon}</span>
            </div>

            {/* KONTEN */}
            <div className={`pl-16 sm:pl-0 sm:w-1/2 ${
              index % 2 === 0 ? "sm:pr-12 text-left sm:text-right" : "sm:pl-12 text-left"
            }`}>
              <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl backdrop-blur-sm hover:border-emas/30 transition-colors duration-500">
                <span className="text-emas font-tegas text-xl block mb-2">{item.year}</span>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-isi leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

          </motion.div>
        ))}

        {/* ENDING DOT */}
        <div className="w-3 h-3 bg-emas rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,1)]" />

      </div>

    </section>
  );
}