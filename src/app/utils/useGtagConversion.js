"use client";

import { useEffect, useState } from 'react';

// Este hook se encarga de la lógica de seguimiento de conversiones de Google Ads.
// Se puede importar en cualquier componente que necesite reportar un evento.
export const useGtagConversion = () => {
  const [isGtagReady, setIsGtagReady] = useState(false);

  useEffect(() => {
    // Comprueba si la función gtag ya está disponible en el objeto window.
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      setIsGtagReady(true);
    }
  }, []);

  // Esta es la función principal que llamarás desde tus componentes.
  // Toma la URL de destino y la etiqueta de conversión específica para el evento.
  const reportConversion = (url, conversionLabel) => {
    if (!isGtagReady) {
      console.error('El script de Google Ads no está listo. Redirigiendo sin seguimiento.');
      if (typeof url !== 'undefined') {
        window.open(url, '_blank');
      }
      return false;
    }

    try {
      var callback = function () {
        if (typeof url !== 'undefined') {
          window.open(url, '_blank');
        }
      };
      // Se reporta el evento de conversión.
      window.gtag('event', 'conversion', {
        'send_to': `AW-821596414/${conversionLabel}`,
        'event_callback': callback
      });
      return false;
    } catch (e) {
      console.error('Error al reportar la conversión:', e);
      if (typeof url !== 'undefined') {
        window.open(url, '_blank');
      }
      return false;
    }
  };

  return { reportConversion };
};
