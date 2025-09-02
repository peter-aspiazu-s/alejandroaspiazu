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


const imagesResidencialBatientes = [
  { src: "/images/pivo-60.webp", alt: "Motor Batiente Garen" },
  { src: "/images/roger-batiente.webp", alt: "Motor Batiente Roger" },
  { src: "/images/ditec-batiente.webp", alt: "Motor Batiente Ditec" },
]

const imagesIndustrialBatientes = [
  { src: "/images/roger-batiente.webp", alt: "Motor Batiente Roger" },
  { src: "/images/roger-smarty.webp", alt: "Motor Batiente Roger" },
  { src: "/images/pivo-60.webp", alt: "Motor Batiente Garen" },
]


const motores = [
    {
      titulo: "Pivo – Garen 0.75",
      imagen: "/images/pivo-60.webp",
      alt: "Pivo – Garen 0.75",
      enlace: "/motores-para-puertas/motores-batientes/motor-garen-pivo-75"
    },
    {
      titulo: "Roger Serie BE20 - 200",
      imagen: "/images/roger-batiente.webp",
      alt: "Roger Serie BE20 - 200",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-serie-be20-200"
    },  
    {
      titulo: "Motores Dítec PWR",
      imagen: "/images/ditec-batiente.webp",
      alt: "Motores Dítec PWR",
      enlace: "/motores-para-puertas/motores-batientes/motor-ditec-pwr"
    },
    {
      titulo: "Roger Serie BE20 - 400",
      imagen: "/images/roger-batiente.webp",
      alt: "Roger Serie BE20 - 200",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-serie-be20-400"
    },
    {
      titulo: "Pivo – Garen 1.10",
      imagen: "/images/pivo-60.webp",
      alt: "Pivo – Garen 1.10",
      enlace: "/motores-para-puertas/motores-batientes/motor-garen-pivo-110"
    },
    {
      titulo: "Roger SMARTY",
      imagen: "/images/roger-smarty.webp",
      alt: "Roger SMARTY",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-smarty"
    },
    {
      titulo: "Roger Serie BE20 - 500",
      imagen: "/images/roger-batiente.webp",
      alt: "Roger Serie BE20 - 200",
      enlace: "/motores-para-puertas/motores-batientes/motor-roger-serie-be20-500"
    }
  ]

export default function MotoresBatientes() {
  return (
    <>
      <Hero titulo={"Motores para Puertas Batientes"} subtitulo={"Estos equipos se distinguen por su elegante sistema de dos brazos mecánicos, ideales para la automatización de puertas abatibles. La potencia del motor se selecciona según el ancho y la frecuencia de uso de las hojas del portón, garantizando un rendimiento óptimo."} imagen={"/images/puerta-batiente1.webp"} />
      <TipoMotor titulo={"¿Qué Motor de Brazos te Recomendamos?"} descripcion={"Para elegir el motor adecuado, es esencial que consideres la usabilidad y la frecuencia de uso del portón, ya que un uso excesivo requiere un equipo más robusto. El tamaño y el peso son datos cruciales para seleccionar un motor con la capacidad necesaria. Además, debes considerar la cantidad de controles remotos que se utilizarán, especialmente en comunidades, para asegurar que el equipo soporte la cantidad deseada. Con esta información, podrás tomar una decisión informada y evitarás adquirir un motor que no se ajuste a tus necesidades."} 
      tituloResidencial={"Motores Batientes para Hogar – Residencial"}
      descripcionResidencial={"Estos sistemas son ideales para portones que tienen un uso moderado o intermitente, perfectos para residencias o comunidades pequeñas. Se trata de una solución confiable y eficiente para puertas que no requieren ciclos de apertura y cierre constantes a lo largo del día."}

      imagesResidencial={imagesResidencialBatientes}
      imagesIndustrial={imagesIndustrialBatientes}

      tituloIndustrial={"Motores Batientes Industriales"}
      descripcionInsdustial={"Estos equipos están diseñados para un uso intensivo y para mover portones de gran peso con facilidad. Son una solución robusta y confiable, apta para entornos de alto tráfico como ciudadelas, fábricas y empresas que necesiten un rendimiento continuo."}
      />
      <CallToAction />
      <VariedadMotores motores={motores} tituloMotores={"Las mejores reseñas de motores para puertas batientes"} descripcionMotores={"Hemos preparado una ficha técnica detallada para cada motor, donde podrás conocer todas sus especificaciones y características, facilitando tu decisión de compra."} />
      <CallToAction />
      <Beneficios />
      <InstalacionMotor tituloInstalacion={"¿Como Instalar los Motores de Brazos?"} descripcionInstalacion={"En este video puedes ver cómo se instalan estos equipos, recuerda que la instalación es similar, pero la configuración dependerá de la marca que tengas."} urlInstalacion={"https://www.youtube.com/watch?v=N2QwRxKBLxg"} titleVideoInstalacion={"Instalación de motor para puerta batiente"} />
      <TrabajosRealizados />
      <Contactos />
      <Youtube />
      <Marcas />
    </>
  );
}
