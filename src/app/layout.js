import { Inter } from "next/font/google";

// app/layout.js o tu componente de layout principal
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// El resto de tu código de layout...
import "./globals.css";

import { Nav } from "./components/Nav/Nav";
import { Whatsapp } from "./components/Whatsapp/Whatsapp";
import { Footer } from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deneb Tecnología | Motores para Portones Automáticos",
    description: "Automatiza tu portón con nuestros motores para puertas batientes, corredizas, abatibles y enrollables. Ofrecemos soluciones de calidad y seguridad para tu hogar y negocio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
