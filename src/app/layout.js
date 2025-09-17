import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

import { Nav } from "./components/Nav/Nav";
import { Whatsapp } from "./components/Whatsapp/Whatsapp";
import { Footer } from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Deneb Tecnología | Motores para Portones Automáticos",
  description: "Automatiza tu portón con nuestros motores para puertas batientes, corredizas, abatibles y enrollables. Ofrecemos soluciones de calidad y seguridad para tu hogar y negocio.",
  openGraph: {
    title: "Deneb Tecnología | Motores para Portones Automáticos",
    description: "Automatiza tu portón con nuestros motores para puertas batientes, corredizas, abatibles y enrollables. Ofrecemos soluciones de calidad y seguridad para tu hogar y negocio.",
    images: ["/images/banner-home.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Aquí agregamos el script de Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-821596414"
          strategy="afterInteractive"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-821596414');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
