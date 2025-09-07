"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const images = [
  { src: "/images/roger.webp", alt: "Motor Corredizo ROGER" },
  { src: "/images/pivo-60.webp", alt: "Motor Batiente Garen" },
  { src: "/images/81550-1.webp", alt: "Motor Basculante Liftmaster" },
  { src: "/images/uniko-1m.webp", alt: "Motor de Cadena Uniko 1" },
]

export const Motores = () => {
  return (
    <section id="motores" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Motores para Puertas de Garaje y Portones Industriales
          </h2>
          <p className="mb-4 text-gray-700">
            Contamos con equipos especializados para la automatización de portones
            industriales y puertas de garaje. Según el tipo, tamaño y uso de su puerta,
            le recomendamos el motor más adecuado para garantizar rendimiento y
            durabilidad.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Residencial:</strong> Diseñados para hogares, brindan seguridad,
              confort y facilidad en el uso diario.
            </li>
            <li>
              <strong>Industrial:</strong> Ideales para zonas de alto tráfico como
              conjuntos, ciudadelas o industrias, ofreciendo potencia y máxima resistencia.
            </li>
          </ul>

          <h3 className="mt-6 font-semibold">Marcas que ofrecemos:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Impervious:</strong> Opciones para uso residencial e industrial.</li>
            <li><strong>Garen:</strong> Amplia gama de soluciones para viviendas y empresas.</li>
            <li><strong>Roger:</strong> Motores de alto desempeño para todo tipo de portón.</li>
            <li><strong>Came:</strong> Reconocida por su durabilidad tanto en hogares como en industrias.</li>
            <li><strong>Elsamec:</strong> Sistemas confiables con versiones para uso residencial e intensivo.</li>
          </ul>
        </div>

        {/* Carrusel con Swiper */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="rounded-lg shadow-lg h-80 md:h-96"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] m-auto">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={400}
                    className="rounded-lg"
                    priority={idx === 0} // optimiza la primera
                    // La propiedad sizes se ha actualizado para ser más precisa.
                    // Ahora coincide con las clases de Tailwind del contenedor.
                    sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 380px"
                  />
                </div>
              </SwiperSlide>
            ))}   
          </Swiper>
        </div>

      </div>
    </section>
  )
}
