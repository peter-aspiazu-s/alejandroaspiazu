"use client";
import { useState } from "react";
import Image from "next/image";

// Componente para la fachada de video de YouTube
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
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

export const TrabajosRealizados = () => {
  const youtubeVideos = [
    { id: "PBKHMGmJw3w", alt: "Video de Trabajo 1" },
    { id: "9S2x4xQc2Ks", alt: "Video de Trabajo 2" },
    { id: "RdVgQJUOTMk", alt: "Video de Trabajo 3" },
    { id: "3HEBYHPLeA0", alt: "Video de Trabajo 4" },
    { id: "0iWOa8E2-FM", alt: "Video de Trabajo 5" },
    { id: "LZ0b8bguUqo", alt: "Video de Trabajo 6" },
    { id: "txWiLBabu3U", alt: "Video de Trabajo 7" },
    { id: "zcAhITh_2Ds", alt: "Video de Trabajo 8" },
  ];

  return (
    <section id="galeria" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trabajos Realizados
          </h2>
          <p className="text-lg text-gray-600">
            Algunos de nuestros proyectos en hogares, industrias y ciudadelas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <YoutubeVideoFacade id={video.id} alt={video.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};