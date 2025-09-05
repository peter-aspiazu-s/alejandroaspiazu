"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Whatsapp = () => {

  const handleWhatsappClick = () => {
    // Aquí se llama a la función de Google Ads para registrar la conversión
    // Asegúrate de reemplazar 'AW-821596414' y 'CONTACTO' con los valores que te da Google Ads
    // En este caso, ya sabes que tu ID es AW-821596414
    gtag('event', 'conversion', {'send_to': 'AW-821596414/jG3dCO_p0e4YEN_4vYwD'});
  };

  return (
    // Contenedor del botón flotante con clases de Tailwind
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.link/4ajisn"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-700 text-white text-xl p-3 rounded-full flex items-center shadow-lg transition-colors hover:bg-green-800"
        aria-label="Abrir chat de WhatsApp"
        onClick={handleWhatsappClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> WhatsApp
      </a>
    </div>
  );
};
