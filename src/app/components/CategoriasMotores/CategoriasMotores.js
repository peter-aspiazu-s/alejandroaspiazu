import Image from "next/image"
import Link from "next/link";

const categories = [
  {
    src: "/images/motor-corredera.webp",
    alt: "Motor Puertas Correderas",
    title: "Motores Puertas Correderas",
    description: "Ideales para portones que se deslizan lateralmente, robustos y confiables.",
    href: "/motores-para-puertas/motores-corredizos",
  },
  {
    src: "/images/motor-basculante.webp",
    alt: "Motor Puertas Basculantes",
    title: "Motores Puertas Basculantes",
    description: "Perfectos para garajes residenciales, brindan confort y seguridad al máximo nivel.",
    href: "/motores-para-puertas/motores-basculantes",
  },
  {
    src: "/images/puertas-batientes.webp",
    alt: "Motor Puertas Batientes",
    title: "Motores Puertas Batientes",
    description: "Solución para portones que abren hacia adentro o hacia afuera, elegantes y modernos.",
    href: "/motores-para-puertas/motores-batientes",
  },
  {
    src: "/images/motorenrollable_800x.webp",
    alt: "Motores Puertas Enrollables", 
    title: "Motores Puertas Enrollables",
    description: "Ideales para locales comerciales e industrias, resistentes y seguros.",
    href: "/motores-para-puertas/motores-enrollables",
  },
];

export const CategoriasMotores = () => {
  return (
    <section className="bg-gray-50 py-16" id="categorias">
      <div className="container mx-auto px-4">
        {/* Texto introductorio */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Diferentes Tipos de Motores para Portones Eléctricos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            No todos los portones funcionan igual y cada sistema de motor cumple un rol específico.
            Preparamos esta guía rápida para que conozcas las alternativas disponibles y puedas elegir
            la opción que mejor se ajuste a tus necesidades.
          </p>
        </div>

        {/* Segundo bloque */}
        <div className="mb-12 max-w-4xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            ¿Qué Motor se Adapta Mejor a tu Puerta?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Si te preguntas cuál es el motor ideal para automatizar tu portón, lo primero es identificar
            qué tipo de puerta tienes. Cada modelo requiere un mecanismo distinto y un kit de automatización
            adecuado. Entre los más comunes se encuentran los portones corredizos, las puertas levadizas
            (basculantes), las puertas enrollables típicas de locales comerciales y los sistemas batientes.
            Conociendo esto podrás elegir la mejor solución sin complicaciones.
          </p>
        </div>

        {/* Categorías */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          Categorías de Motores para Puertas
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-72 md:w-80 h-[450px] md:h-[450px] m-auto">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={300}
                  height={250}
                  className="rounded-lg object-contain"
                  // Se ha optimizado la propiedad sizes para que coincida con los anchos fijos del contenedor.
                  sizes="(max-width: 768px) 256px, 288px"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  {category.title}
                </h5>
                <p className="text-gray-600 mb-4 flex-1">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition text-center"
                >
                  Consultar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};