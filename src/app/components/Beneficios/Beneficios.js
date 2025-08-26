"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const images = [
  { src: "/images/banner-home.webp", alt: "Beneficio 1" },
  { src: "/images/liftmaster_hero.webp", alt: "Beneficio 2" },
  { src: "/images/porton-corredizo-moderno.webp", alt: "Beneficio 3" },
  { src: "/images/pivotante.webp", alt: "Beneficio 4" },
]

export const Beneficios = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Carrusel de imágenes */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="rounded-lg shadow-lg"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] m-auto">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="fill"
                    className="rounded-lg"
                    priority={idx === 0} // optimiza la primera
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Texto de beneficios */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Beneficios Reales de Automatizar tu Portón
          </h2>
          <p className="text-gray-600 mb-6">
            La automatización de portones no es solo un detalle moderno o estético, 
            es una mejora práctica que impacta directamente en tu día a día. 
            Estas son algunas de las ventajas más importantes:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Ahorro de tiempo:</strong> Olvídate de bajarte del auto para abrir o cerrar tu puerta. 
              Con un clic entras y sales sin interrupciones.
            </li>
            <li>
              <strong>Seguridad reforzada:</strong> Los ladrones suelen aprovechar cuando alguien se detiene a abrir su portón. 
              Con un sistema automático, permaneces dentro de tu vehículo y reduces ese riesgo.
            </li>
            <li>
              <strong>Más privacidad:</strong> Ya no necesitas manipular la puerta manualmente ni exponerte frente a vecinos o transeúntes. 
              Tu acceso se mantiene discreto.
            </li>
            <li>
              <strong>Accesibilidad para todos:</strong> En hogares con personas mayores, con movilidad reducida 
              o con portones pesados, este tipo de equipos es una verdadera ayuda al evitar esfuerzos innecesarios.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
