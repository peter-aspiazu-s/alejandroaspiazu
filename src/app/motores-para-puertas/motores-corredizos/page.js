import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { Hero } from "@/app/components/Hero/Hero";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { TipoMotor } from "@/app/components/MotoresCorredizos/TipoMotor";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { VariedadMotores } from "@/app/components/VariedadMotores/VariedadMotores";
import { Youtube } from "@/app/components/Youtube/Youtube";


export const metadata = {
  title: "Motores para Puertas Correderas | Deneb Tecnología",
  description: "Descubre nuestra selección de motores eléctricos para puertas corredizas. Eficiencia, seguridad y la mejor calidad para tu hogar o industria.",
  openGraph: {
    title: "Motores para Puertas Correderas | Deneb Tecnología",
    description: "Descubre nuestra selección de motores eléctricos para puertas corredizas. Eficiencia, seguridad y la mejor calidad para tu hogar o industria.",
    images: ["/images/porton-corredizo-automatico.jpg"],
  },
};

const imagesResidencialCorredizos = [
  { src: "/images/kdz500kg.webp", alt: "Motor Corredizo KDZ 500KG GAREN" },
  { src: "/images/roger600kgresidencial.webp", alt: "Motor Corredizo Roger 600kg" },
  { src: "/images/ditec400kgresidencial.webp", alt: "Motor Corredizo Ditec 400kg" },
]

const imagesIndustrialCorredizos = [
  { src: "/images/grandkdz1000kgindustrial.webp", alt: "Motor Corredizo Grand KDZ 1000kg" },
  { src: "/images/motorroger600kgintensivo.webp", alt: "Motor de Cadena Uniko 1" },
]


const motores = [
    {
      titulo: "Motor Roger H30 600kg",
      imagen: "/images/roger.webp",
      alt: "Motor Roger H30 600kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-roger-h30-600kg"
    },
    {
      titulo: "Motor Roger BM30 400kg",
      imagen: "/images/bm30.webp",
      alt: "Motor Roger BM30 400kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-roger-bm30-400kg"
    },  
    {
      titulo: "Motor Roger BH30 600kg",
      imagen: "/images/roger.webp",
      alt: "Motor Roger BH30 600kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-roger-bh30-600kg"
    },
    {
      titulo: "Motor Niid Garen 400kg",
      imagen: "/images/niidgaren.webp",
      alt: "Motor Niid Garen 400kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-garen-niid-400kg"
    },
    {
      titulo: "Motor KDZ Garen 500kg",
      imagen: "/images/kdzgaren.webp",
      alt: "Motor KDZ Garen 500kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-garen-kdz-500kg"
    },
    {
      titulo: "Motor Dítec ION (400kg – 600kg)",
      imagen: "/images/ditec.webp",
      alt: "Motor Dítec ION",
      enlace: "/motores-para-puertas/motores-corredizos/motor-ditec-ion"
    },
    {
      titulo: "Motor Dítec Neos (300kg – 1000kg)",
      imagen: "/images/ditecneos.webp",
      alt: "Motor Dítec Neos",
      enlace: "/motores-para-puertas/motores-corredizos/motor-ditec-neos"
    },
    {
      titulo: "Motor Gran KDZ Garen 1000kg",
      imagen: "/images/grandkdz.webp",
      alt: "Motor Gran KDZ Garen 1000kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-garen-grand-kdz-1000kg"
    },
    {
      titulo: "Motor Gran KDZtsi Garen 1200kg",
      imagen: "/images/grandkdz.webp",
      alt: "Motor Gran KDZtsi Garen 1200kg",
      enlace: "/motores-para-puertas/motores-corredizos/motor-garen-grand-kdztsi-1200kg"
    },
    {
      titulo: "Motor Roger BG30 (1600kg – 2200kg)",
      imagen: "/images/roger.webp",
      alt: "Motor Roger BG30",
      enlace: "/motores-para-puertas/motores-corredizos/motor-roger-bg30-2200kg"
    },
  ]

export default function MotoresCorredizos() {
  return (
    <>
      <Hero titulo={"Motores para Portones Corredizos"} subtitulo={"Solución de automatización para portones corredizos. Estos sistemas se adaptan a diversos tamaños y pesos, y se distinguen por operar mediante un mecanismo de cremallera."} imagen={"/images/porton-corredizo-automatico.jpg"} />
      <TipoMotor titulo={"¿Qué motor para portón corredizo es el ideal?"} descripcion={"Para determinar la mejor opción, es crucial considerar el peso, el tamaño y la intensidad de uso de la puerta. Estos factores nos permiten ofrecer la solución más adecuada a cada cliente. A continuación, mostramos los precios de nuestros motores más vendidos, organizados por sus capacidades."} 
      tituloResidencial={"Motores Corredizos para Hogar – Residencial"}
      descripcionResidencial={"Estos motores son ideales para portones con un uso moderado o intermitente, como en residencias o en comunidades cerradas. Son una opción confiable y eficiente para puertas que no requieren ciclos de apertura y cierre constantes."}

      imagesResidencial={imagesResidencialCorredizos}
      imagesIndustrial={imagesIndustrialCorredizos}

      tituloIndustrial={"Motores Corredizos Industriales"}
      descripcionInsdustial={"Estos equipos están capacitados para tener un uso súper intensivo y trabajar con portones pesados, podemos utilizarlos en ciudadelas, fábricas y más."}
      />
      <CallToAction />
      <VariedadMotores motores={motores} tituloMotores={"Las mejores reseñas de motores para portones corredizos"} descripcionMotores={"Hemos preparado una ficha técnica detallada para cada motor, donde podrás conocer todas sus especificaciones y características, facilitando tu decisión de compra."} />
      <CallToAction />
      <Beneficios />
      <InstalacionMotor tituloInstalacion={"¿Cómo Instalar un motor para portones corredizos?"} descripcionInstalacion={"En este video puedes ver cómo se instalan estos equipos, recuerda que la instalación es similar, pero la configuración dependerá de la marca que tengas."} urlInstalacion={"https://www.youtube.com/watch?v=RuCEL3W5ouY"} titleVideoInstalacion={"Instalación de motor para portón corredizo"} />
      <TrabajosRealizados />
      <Contactos />
      <Youtube />
      <Marcas />
    </>
  );
}
