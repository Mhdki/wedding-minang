"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Mencoba dua alternatif path, gunakan yang tidak merah di editor kamu:
import { db } from "@/app/lib/firebase";
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  DocumentData 
} from "firebase/firestore";

// Definisi tipe data yang lebih ketat untuk menghilangkan error merah
interface Wish {
  id: string;
  name: string;
  status: string;
  message: string;
  createdAt: any;
}

export default function RSVP() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Menambahkan pengecekan agar tidak error saat build
    if (!db) return;

    const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedWishes = snapshot.docs.map((doc) => {
        const data = doc.data() as DocumentData;
        return {
          id: doc.id,
          name: data.name || "",
          status: data.status || "Hadir",
          message: data.message || "",
          createdAt: data.createdAt,
        } as Wish;
      });
      setWishes(loadedWishes);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return alert("Isi nama dan ucapan dulu ya!");

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "wishes"), {
        name: name,
        status: status,
        message: message,
        createdAt: serverTimestamp(),
      });

      setName("");
      setMessage("");
      alert("Alhamdulillah! Ucapanmu berhasil terkirim.");
      
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Yah, gagal kirim. Pastikan database Firestore sudah diaktifkan!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <p className="text-emas/60 text-[10px] tracking-[0.4em] uppercase mb-2">RSVP & Wishes</p>
        <h2 className="font-judul text-5xl text-emas drop-shadow-md">Buku Tamu</h2>
      </motion.div>

      <div className="w-full max-w-md bg-white/[0.03] border border-emas/30 backdrop-blur-md rounded-2xl p-6 shadow-2xl mb-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-1">
            <label className="text-emas text-xs uppercase tracking-widest ml-1">Nama</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
              disabled={isSubmitting}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emas/50 transition-colors text-sm disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-emas text-xs uppercase tracking-widest ml-1">Konfirmasi</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              disabled={isSubmitting}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emas/50 transition-colors text-sm appearance-none"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Berhalangan</option>
              <option value="Masih Ragu">Masih Ragu</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-emas text-xs uppercase tracking-widest ml-1">Ucapan & Doa</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan doa terbaik untuk kami..."
              rows={4}
              disabled={isSubmitting}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emas/50 transition-colors text-sm resize-none disabled:opacity-50"
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full bg-emas text-black font-tegas uppercase tracking-widest py-3 rounded-lg hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </form>
      </div>

      <div className="w-full max-w-md flex flex-col gap-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
        {wishes.length === 0 ? (
          <p className="text-center text-white/40 text-xs italic">Belum ada ucapan. Jadilah yang pertama!</p>
        ) : (
          <AnimatePresence>
            {wishes.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2 relative group hover:border-emas/30 transition-colors"
              >
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <h4 className="font-bold text-emas text-sm">{item.name}</h4>
                  <span className={`text-[10px] px-2 py-1 rounded-full border ${
                    item.status === "Hadir" ? "bg-green-900/30 border-green-500/30 text-green-400" : 
                    item.status === "Tidak Hadir" ? "bg-red-900/30 border-red-500/30 text-red-400" :
                    "bg-yellow-900/30 border-yellow-500/30 text-yellow-400"
                  }`}>
                    {item.status}
                  </span>
                </div>
                
                <p className="text-white/80 text-xs font-isi leading-relaxed">
                  "{item.message}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

    </section>
  );
}