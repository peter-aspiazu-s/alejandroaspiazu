"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Whatsapp = () => {
  const handleWhatsappClick = (e) => {
    e.preventDefault(); // Evita que el enlace se abra de forma normal

    // Aquí llamamos a la función de Google Ads y le pasamos la URL.
    // La función se encarga de registrar la conversión y luego redirigir.
    gtag_report_conversion('https://wa.link/4ajisn');
  };

  return (
    // Contenedor del botón flotante con clases de Tailwind
    <div className="fixed bottom-5 right-5 z-50">
      <a
        // Ya no usamos la URL directa aquí.
        href="#"
        rel="noopener noreferrer"
        className="bg-green-700 text-white text-xl p-3 rounded-full flex items-center shadow-lg transition-colors hover:bg-green-800"
        aria-label="Abrir chat de WhatsApp"
        // Llamamos a la nueva función en el evento onClick
        onClick={handleWhatsappClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> WhatsApp
      </a>
    </div>
  );
};
