"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Ejemplo: podrías separar imágenes para residencial e industrial

export const TipoMotor = ({titulo, descripcion, tituloResidencial, descripcionResidencial, tituloIndustrial, descripcionInsdustial, imagesResidencial, imagesIndustrial}) => {
  return (
    <section id="motores-corredizos" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {titulo}
          </h2>
          <p className="text-gray-700">
            {descripcion}
          </p>
        </div>

        {/* Bloque Residencial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {tituloResidencial}
            </h3>
            <p className="text-gray-700">
              {descripcionResidencial}
            </p>
          </div>

          {/* Slider */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="rounded-lg shadow-lg h-80 md:h-96"
            >
              {imagesResidencial.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-80 md:h-96">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain rounded-lg"
                      priority={idx === 0}
                      // Se ha optimizado la propiedad sizes para que coincida con el diseño de la grilla
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Bloque Industrial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Slider primero en desktop */}
          <div className="order-2 md:order-1 w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="rounded-lg shadow-lg h-80 md:h-96"
            >
              {imagesIndustrial.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-80 md:h-96">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain rounded-lg"
                      priority={idx === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4">
              {tituloIndustrial}
            </h3>
            <p className="text-gray-700">
              {descripcionInsdustial}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
