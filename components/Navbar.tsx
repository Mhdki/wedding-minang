"use client";
import { motion } from "framer-motion";
import { Home, Heart, Calendar, Image, MessageSquare } from "lucide-react";

export default function Navbar() {
  const menu = [
    { name: "Home", target: "#top", icon: <Home size={16} /> },
    { name: "Couple", target: "#mempelai", icon: <Heart size={16} /> },
    { name: "Event", target: "#acara", icon: <Calendar size={16} /> },
    { name: "Gallery", target: "#gallery", icon: <Image size={16} /> },
    { name: "RSVP", target: "#rsvp", icon: <MessageSquare size={16} /> },
  ];

  return (
    <motion.nav 
      initial={{ y: 100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      className="fixed bottom-8 left-1/2 z-[9999] w-fit"
    >
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-8">
        {menu.map((item) => (
          <a 
            key={item.name}
            href={item.target}
            className="text-white/40 hover:text-merah-minang transition-all hover:scale-125 group relative"
          >
            {item.icon}
            {/* Tooltip kecil yang sangat minimalis */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-merah-minang text-[7px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-isi font-black">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}