"use client";

import { motion } from "framer-motion";

export default function Acara() {
  const dataAcara = [
    {
      id: 1,
      judul: "Akad Nikah",
      tanggal: "Sabtu, 20 Februari 2026",
      jam: "08:00 WIB - Selesai",
      tempat: "Masjid Raya Sumatera Barat",
      alamat: "Jl. Khatib Sulaiman, Padang Utara, Kota Padang",
      mapUrl: "https://goo.gl/maps/placeholder", // Ganti dengan link map asli nanti
    },
    {
      id: 2,
      judul: "Resepsi Pernikahan",
      tanggal: "Minggu, 21 Februari 2026",
      jam: "10:00 WIB - Selesai",
      tempat: "Hotel Pangeran Beach",
      alamat: "Jl. Ir. H. Juanda No.79, Padang",
      mapUrl: "https://goo.gl/maps/placeholder", // Ganti dengan link map asli nanti
    },
  ];

  return (
    <section className="w-full py-10 px-6 flex flex-col items-center gap-10 relative z-10">
      
      {/* JUDUL SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-4"
      >
        <p className="text-emas/60 text-[10px] tracking-[0.4em] uppercase mb-2">Save The Date</p>
        <h2 className="font-judul text-5xl text-emas drop-shadow-md">Rangkaian Acara</h2>
      </motion.div>

      {/* LOOPING KARTU ACARA */}
      <div className="flex flex-col gap-8 w-full">
        {dataAcara.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Background Kaca Gelap */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-emas/30 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl group-hover:border-emas/60 transition-all duration-500" />
            
            {/* Dekorasi Sudut */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emas/50 rounded-tr-[3rem]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emas/50 rounded-bl-[3rem]" />

            {/* Konten Kartu */}
            <div className="relative p-8 flex flex-col items-center text-center gap-3">
              
              {/* Judul Acara */}
              <h3 className="font-tegas text-2xl text-emas tracking-widest uppercase border-b border-emas/20 pb-4 mb-2 w-full">
                {item.judul}
              </h3>

              {/* Tanggal & Jam */}
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-center justify-center gap-2 text-white/90 font-bold text-sm">
                  <span>📅</span> {item.tanggal}
                </div>
                <div className="flex items-center justify-center gap-2 text-white/70 text-xs font-isi">
                  <span>⏰</span> {item.jam}
                </div>
              </div>

              {/* Lokasi */}
              <div className="flex flex-col items-center gap-1">
                <p className="font-tegas text-md text-white">{item.tempat}</p>
                <p className="font-isi text-xs text-white/50 max-w-[200px] leading-relaxed">
                  {item.alamat}
                </p>
              </div>

              {/* Tombol Map */}
              <a 
                href={item.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-emas/10 border border-emas/40 rounded-full text-[10px] text-emas uppercase tracking-widest hover:bg-emas hover:text-black transition-all flex items-center gap-2 group-hover:scale-105"
              >
                📍 Lihat Lokasi
              </a>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}