import type { Metadata } from "next"; // Tambahkan import Metadata
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Font Serif (Klasik)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Font Sans-Serif Modern (Sangat Bold)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

// STANDAR METADATA: SEO & ICON
export const metadata: Metadata = {
  title: "The Wedding of Fua & Dinda",
  description: "Undangan Pernikahan Digital Fua & Dinda - 2026",
  icons: {
    icon: "/icon.png", // Next.js akan mencari ini di folder public atau app
    apple: "/icon.png", // Untuk icon saat tamu simpan di home screen HP
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}