// components/SwiperCarousel.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

// Importa los estilos del carrusel
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "/images/roger.webp", alt: "Motor Corredizo ROGER" },
  { src: "/images/pivo-60.webp", alt: "Motor Batiente Garen" },
  { src: "/images/81550-1.webp", alt: "Motor Basculante Liftmaster" },
  { src: "/images/uniko1.webp", alt: "Motor de Cadena Uniko 1" },
];

const SwiperCarousel = () => {
  return (
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
              fill
              className="rounded-lg"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;