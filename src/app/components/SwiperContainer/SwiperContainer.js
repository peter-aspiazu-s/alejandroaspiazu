"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { useEffect, useState } from "react";

// Importamos los estilos de Swiper solo una vez, aquí.
// Esto evita que se dupliquen las solicitudes de CSS y bloqueen la renderización.
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

export const SwiperContainer = ({ children, className, loop = true }) => {


    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Definimos las URLs de los estilos de Swiper que queremos cargar
        const cssUrls = [
            "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css", // Usamos una CDN para asegurar la carga.
            // Puedes volver a usar rutas locales si lo prefieres, pero esta es una práctica común.
            // "/css/swiper.css",
            // "/css/swiper-bundle.min.css",
            // "/css/swiper-bundle.css",
            // "/css/navigation.css",
            // "/css/pagination.css",
        ];

        const loadStyle = (url) => {
            return new Promise((resolve) => {
                // Verificamos si el estilo ya ha sido cargado
                if (document.querySelector(`link[href="${url}"]`)) {
                    resolve();
                    return;
                }
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = url;
                link.onload = resolve;
                link.onerror = resolve; // Resolvemos incluso en caso de error para evitar un estado de carga infinito
                document.head.appendChild(link);
            });
        };

        const loadAllStyles = async () => {
            await Promise.all(cssUrls.map(loadStyle));
            setIsLoaded(true);
        };

        loadAllStyles();

        return () => {
            cssUrls.forEach(url => {
                const link = document.querySelector(`link[href="${url}"]`);
                if (link) {
                    link.remove();
                }
            });
        };
    }, []); // El array vacío asegura que esto solo se ejecute una vez

    // Solo renderizamos el Swiper cuando los estilos están listos
    if (!isLoaded) {
        return <div className="swiper-loading p-4 text-center">Cargando imágenes...</div>;
    }

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={loop}
            className={className}
        >
            {children}
        </Swiper>
    )
}

export { SwiperSlide }