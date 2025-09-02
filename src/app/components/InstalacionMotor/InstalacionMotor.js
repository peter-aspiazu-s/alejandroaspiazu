"use client";

import { useState } from "react";
import Image from "next/image";

// Componente para la fachada de video de YouTube
// Reutilizamos el componente para mantener la consistencia
const YoutubeVideoFacade = ({ id, alt }) => {
  const [isClicked, setIsClicked] = useState(false);

  // URL de la miniatura de YouTube (high-quality)
  const thumbnailUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    // Usa la clase 'aspect-[16/9]' de Tailwind nativa
    <div className="relative aspect-[16/9] w-full h-full cursor-pointer">
      {!isClicked ? (
        // Capa de la fachada
        <div
          onClick={() => setIsClicked(true)}
          className="relative w-full h-full"
        >
          <Image
            src={thumbnailUrl}
            alt={alt}
            fill
            className="rounded-lg object-cover"
            sizes="100vw"
          />
          {/* Botón de "Play" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        // Capa del video embebido (solo se carga al hacer clic)
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1&rel=0`}
          title={alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      )}
    </div>
  );
};

export const InstalacionMotor = ({
  tituloInstalacion,
  descripcionInstalacion,
  urlInstalacion,
  titleVideoInstalacion,
}) => {
  // Extraemos el ID del video de la URL de forma robusta.
  // Primero intentamos extraerlo de una URL de tipo 'watch?v=', si no,
  // usamos la lógica original para URLs de tipo 'embed'.
  const videoId = urlInstalacion.includes("watch?v=") 
    ? urlInstalacion.split("v=")[1].split("&")[0] 
    : urlInstalacion.split("/").pop().split("?")[0];

  return (
    <section className="bg-white py-16" id="instalacion-motor">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Texto */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {tituloInstalacion}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {descripcionInstalacion}
        </p>

        {/* Video de YouTube con la fachada */}
        <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
          <YoutubeVideoFacade id={videoId} alt={titleVideoInstalacion} />
        </div>
      </div>
    </section>
  );
};