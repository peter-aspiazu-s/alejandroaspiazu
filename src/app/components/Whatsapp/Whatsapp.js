"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Whatsapp = () => {
  return (
    // Contenedor del botón flotante con clases de Tailwind
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.link/4ajisn"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-700 text-white text-xl p-3 rounded-full flex items-center shadow-lg transition-colors hover:bg-green-800"
        aria-label="Abrir chat de WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> WhatsApp
      </a>
    </div>
  );
};
