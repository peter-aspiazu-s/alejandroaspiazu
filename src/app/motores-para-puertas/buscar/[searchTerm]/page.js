import { VariedadMotores } from "@/app/components/VariedadMotores/VariedadMotores";
import { Metadata } from 'next';

// Base de datos de motores, idealmente esto vendría de una API o CMS en una aplicación real.
const motores = [
    {
        titulo: "Motor AccessMatic PITBULL400 400kg",
        imagen: "/images/accessmatic-pitbull-400.webp",
        alt: "Motor AccessMatic PITBULL400 400kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-accessmatic-pitbull-400kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["accessmatic", "access", "matic"],
    },
    {
        titulo: "Motor Elite Slide400 400kg",
        imagen: "/images/elite-slide400.webp",
        alt: "Motor Elite Slide400 400kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-elite-slide-400kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["elite"],
    },
    {
        titulo: "Motor Roger H30 600kg",
        imagen: "/images/roger.webp",
        alt: "Motor Roger H30 600kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-roger-h30-600kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["roger"],
    },
    {
        titulo: "Motor Roger BM30 400kg",
        imagen: "/images/bm30.webp",
        alt: "Motor Roger BM30 400kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-roger-bm30-400kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["roger"],
    },
    {
        titulo: "Motor Roger BH30 600kg",
        imagen: "/images/roger.webp",
        alt: "Motor Roger BH30 600kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-roger-bh30-600kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["roger"],
    },
    {
        titulo: "Motor Niid Garen 400kg",
        imagen: "/images/niidgaren.webp",
        alt: "Motor Niid Garen 400kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-garen-niid-400kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["garen", "niid"],
    },
    {
        titulo: "Motor KDZ Garen 500kg",
        imagen: "/images/kdzgaren.webp",
        alt: "Motor KDZ Garen 500kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-garen-kdz-500kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["garen", "kdz"],
    },
    {
        titulo: "Motor Dítec ION (400kg – 600kg)",
        imagen: "/images/ditec.webp",
        alt: "Motor Dítec ION",
        enlace: "/motores-para-puertas/motores-corredizos/motor-ditec-ion",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["ditec", "ion"],
    },
    {
        titulo: "Motor Dítec Neos (300kg – 1000kg)",
        imagen: "/images/ditecneos.webp",
        alt: "Motor Dítec Neos",
        enlace: "/motores-para-puertas/motores-corredizos/motor-ditec-neos",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["ditec", "neos"],
    },
    {
        titulo: "Motor Gran KDZ Garen 1000kg",
        imagen: "/images/grandkdz.webp",
        alt: "Motor Gran KDZ Garen 1000kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-garen-grand-kdz-1000kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["garen", "kdz"],
    },
    {
        titulo: "Motor Gran KDZtsi Garen 1200kg",
        imagen: "/images/grandkdz.webp",
        alt: "Motor Gran KDZtsi Garen 1200kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-garen-grand-kdztsi-1200kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["garen", "kdztsi"],
    },
    {
        titulo: "Motor BFT Icaro Smart AC A 2000kg",
        imagen: "/images/icaro-smart-ac-a-2000.webp",
        alt: "Motor Icaro Smart AC A 2000kg",
        enlace: "/motores-para-puertas/motores-corredizos/motor-bft-icaro-smart-ac-a-2000kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["bft", "icaro", "smart"],
    },
    {
        titulo: "Motor Roger BG30 (1600kg – 2200kg)",
        imagen: "/images/roger.webp",
        alt: "Motor Roger BG30",
        enlace: "/motores-para-puertas/motores-corredizos/motor-roger-bg30-2200kg",
        tipo: ["corredizo", "corrediza", "corredera", "deslizante"],
        marca: ["roger", "bg30"],
    },
    {
        titulo: "Motor Liftmaster 1/2 hp",
        imagen: "/images/81550-1.webp",
        alt: "Motor Basculante Liftmaster de 1/2 hp",
        enlace: "/motores-para-puertas/motores-basculantes/motor-liftmaster-1-2-hp",
        tipo: ["basculante", "basculantes"],
        marca: ["liftmaster"],
    },
    {
        titulo: "Motor Craftsman",
        imagen: "/images/craftsman1.webp",
        alt: "Motor Basculante Craftsman",
        enlace: "/motores-para-puertas/motores-basculantes/motor-craftsman-1-2-hp",
        tipo: ["basculante", "basculantes"],
        marca: ["craftsman"],
    },
    {
      titulo: "Pivo – Garen 0.75",
      imagen: "/images/pivo-60.webp",
      alt: "Pivo – Garen 0.75",
      enlace: "/motores-para-puertas/motores-batientes/motor-garen-pivo-75",
      tipo: ["batiente", "batientes"],
      marca: ["garen", "pivo"],
    },
    {
      titulo: "Roger Serie BE20 - 200",
      imagen: "/images/roger-batiente.webp",
      alt: "Roger Serie BE20 - 200",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-serie-be20-200",
      tipo: ["batiente", "batientes"],
      marca: ["roger"],
    },  
    {
      titulo: "Motores Dítec PWR",
      imagen: "/images/ditec-batiente.webp",
      alt: "Motores Dítec PWR",
      enlace: "/motores-para-puertas/motores-batientes/motor-ditec-pwr",
      tipo: ["batiente", "batientes"],
      marca: ["ditec", "pwr"],
    },
    {
      titulo: "Roger Serie BE20 - 400",
      imagen: "/images/roger-batiente.webp",
      alt: "Roger Serie BE20 - 200",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-serie-be20-400",
      tipo: ["batiente", "batientes"],
      marca: ["roger"],
    },
    {
      titulo: "Pivo – Garen 1.10",
      imagen: "/images/pivo-60.webp",
      alt: "Pivo – Garen 1.10",
      enlace: "/motores-para-puertas/motores-batientes/motor-garen-pivo-110",
      tipo: ["batiente", "batientes"],
      marca: ["garen", "pivo"],
    },
    {
      titulo: "Roger SMARTY",
      imagen: "/images/roger-smarty.webp",
      alt: "Roger SMARTY",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-smarty",
      tipo: ["batiente", "batientes"],
      marca: ["roger", "smarty"],
    },
    {
      titulo: "Roger Serie BE20 - 500",
      imagen: "/images/roger-batiente.webp",
      alt: "Roger Serie BE20 - 200",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-serie-be20-500",
      tipo: ["batiente", "batientes"],
      marca: ["roger"],
    },
    {
      titulo: "Motores Elsamec",
      imagen: "/images/uniko-1m.webp",
      alt: "Motores Elsamec",
      enlace: "/motores-para-puertas/motores-enrollables/motor-elsamec-uniko",
      tipo: ["enrollable", "enrollables"],
      marca: ["elsamec"],
    },
];

// Genera la metadata de la página dinámicamente
export async function generateMetadata({ params }) {
    const searchTerm = decodeURIComponent(params.searchTerm);
    const title = `Resultados de búsqueda para: "${searchTerm}" | Deneb Tecnología`;
    const description = `Hemos encontrado estos resultados para tu búsqueda: "${searchTerm}". Para más información sobre cualquier motor, puedes contactarnos al 0960067820.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: ["/images/banner-home.webp"],
        },
    };
}

export default function SearchResultsPage({ params }) {
    const searchTerm = decodeURIComponent(params.searchTerm).toLowerCase();

    // Filtra los motores que coincidan con el término de búsqueda en cualquiera de los campos
    const resultadosFiltrados = motores.filter(motor => {
        // Convierte el título a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
        const tituloCoincide = motor.titulo.toLowerCase().includes(searchTerm);

        // Verifica si algún elemento del array de 'tipo' coincide con el término
        const tipoCoincide = motor.tipo?.some(t => t.toLowerCase().includes(searchTerm));

        // Verifica si algún elemento del array de 'marca' coincide con el término
        const marcaCoincide = motor.marca?.some(m => m.toLowerCase().includes(searchTerm));

        // El motor se incluye en los resultados si coincide en el título, tipo O marca
        return tituloCoincide || tipoCoincide || marcaCoincide;
    });

    const tituloPagina = `Resultados para tu búsqueda: "${decodeURIComponent(params.searchTerm)}"`;
    const descripcionPagina = resultadosFiltrados.length > 0
        ? "Aquí están los productos que coinciden con tu búsqueda."
        : `Lo sentimos, no se encontraron resultados para "${decodeURIComponent(params.searchTerm)}". Por favor, verifica el término o contáctanos para ayudarte a encontrar el motor que necesitas. ¡Llama o escríbenos al **0960067820**!`;

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <VariedadMotores
                    motores={resultadosFiltrados}
                    tituloMotores={tituloPagina}
                    descripcionMotores={descripcionPagina}
                />
            </div>
        </div>
    );
}
