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
  weight: ["400", "700", "900"], // 900 itu 'Black', paling tebal
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}