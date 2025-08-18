import { Geist, Geist_Mono } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';

import "./globals.css";

import { Nav } from "./components/Nav/Nav";
import { Whatsapp } from "./components/Whatsapp/Whatsapp";
import { Footer } from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Puertas Automaticas",
  description: "Automatiza tu portón con motores eléctricos residenciales e industriales. Instalamos y distribuimos marcas como Garen, Roger, Came y más. Soluciones seguras, rápidas y confiables con envíos a nivel nacional en todo el Ecuador.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Whatsapp />
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload" // Carga el script cuando la página ha terminado de cargar.
        />
      </body>
    </html>
  );
}
