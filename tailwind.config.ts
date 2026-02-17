import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'emas': '#D4AF37',
        'merah-minang': '#800000',
        'bg-kertas': '#1a1a1a', // Warna dasar gelap mewah
      },
      fontFamily: {
        // SERIF: Untuk Nama Mempelai & Judul Section
        judul: ['var(--font-playfair)', 'serif'], 
        
        // SANS-SERIF MODERN: Untuk teks isi & label
        isi: ['var(--font-montserrat)', 'sans-serif'],
        
        // TEGAS: Saya arahkan ke Montserrat agar bisa kamu buat Bold/Black
        tegas: ['var(--font-montserrat)', 'sans-serif'], 
      },
      // Memudahkan penggunaan tracking (jarak antar huruf) untuk look modern
      letterSpacing: {
        'super-wide': '.5em',
      }
    },
  },
  plugins: [],
};
export default config;