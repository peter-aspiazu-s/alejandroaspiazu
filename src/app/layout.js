import { Inter } from "next/font/google";
import Script from 'next/script';

// app/layout.js o tu componente de layout principal
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// El resto de tu código de layout...
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
        {/* El nuevo script para la conversión de clic */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-821596414/zLl1CLi7jrYBEP6h4ocD',
                'event_callback': callback
              });
              return false;
            }
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
