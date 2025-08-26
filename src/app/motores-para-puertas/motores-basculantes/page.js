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


const imagesResidencialBasculantes = [
    { src: "/images/81550-1.webp", alt: "Motor Basculante Liftmaster de 1/2 hp" },
    { src: "/images/liftmaster2.webp", alt: "Motor Basculante Liftmaster" },
    { src: "/images/liftmaster3.webp", alt: "Motor Basculante Liftmaster" },
]

const imagesIndustrialBasculantes = [
    { src: "/images/craftsman1.webp", alt: "Motor Basculante Craftsman" },
    { src: "/images/craftsman2.webp", alt: "Motor Basculante Craftsman" },
]

const motores = [
    {
        titulo: "Motor Liftmaster 1/2 hp",
        imagen: "/images/81550-1.webp",
        alt: "Motor Basculante Liftmaster de 1/2 hp",
    },
    {
        titulo: "Motor Craftsman",
        imagen: "/images/craftsman1.webp",
        alt: "Motor Basculante Craftsman",
    }
]

export default function MotoresBasculantes() {
  return (
    <>
      <Hero titulo={"Motores para Puertas Levadizas"} subtitulo={"Un portón automático no solo añade comodidad, sino que también es la carta de presentación de tu hogar. Con nuestros motores para portones basculantes o puertas de garaje levadizas, podrás automatizar el acceso con un mecanismo de cadena y riel, haciendo de tu casa la más moderna y segura del vecindario."} imagen={"/images/banner-puerta-basculante.webp"} />
      <TipoMotor titulo={"¿Solo sirven para Puertas Levadizas?"} descripcion={"Estos mecanismos son altamente versátiles. Además de automatizar puertas de garaje que se elevan, pueden instalarse para operar portones corredizos y batientes, siempre y cuando haya suficiente espacio en el techo para su colocación. Su sistema de rieles se instala en la parte superior, garantizando un funcionamiento óptimo."} 
      tituloResidencial={"Motor liftmaster"}
      descripcionResidencial={"El motor Liftmaster 1210E es la opción ideal para automatizar tu puerta de garaje. Con su potencia, velocidad y funciones de seguridad, ofrece una experiencia de uso confiable y un rendimiento excepcional. Personaliza tu sistema con los accesorios incluidos para adaptarlo a tus necesidades."}

      imagesResidencial={imagesResidencialBasculantes}
      imagesIndustrial={imagesIndustrialBasculantes}

      tituloIndustrial={"Motor Craftsman"}
      descripcionInsdustial={"Este motor es ideal para puertas de garaje residenciales, capaz de mover con facilidad portones pesados. Con su potencia de 1/2 hp (caballos de fuerza), ofrece la fuerza necesaria para operar tu portón sin inconvenientes."}
      />
      <CallToAction />
      <VariedadMotores motores={motores} tituloMotores={"Las mejores reseñas de motores para puertas basculantes"} descripcionMotores={"Hemos preparado una ficha técnica detallada para cada motor, donde podrás conocer todas sus especificaciones y características, facilitando tu decisión de compra."} />
      <CallToAction />
      <Beneficios />
      <InstalacionMotor tituloInstalacion={"¿Cómo instalar un motor para puerta de garaje basculante?"} descripcionInstalacion={"Comprender el proceso de instalación te permite verificar si el trabajo de un técnico fue bien hecho. Además, si te animas, puedes considerar instalar el motor por tu cuenta y ahorrar el costo de la mano de obra. Es vital recordar que no todos los motores de cadena son iguales; aunque el proceso sea similar, siempre es mejor buscar un tutorial específico para el modelo que adquiriste."} urlInstalacion={"https://www.youtube.com/watch?v=pyJkVShx5jQ"} titleVideoInstalacion={"Instalación de motor para puerta levadiza o basculante"} />
      <TrabajosRealizados />
      <Contactos />
      <Youtube />
      <Marcas />
    </>
  );
}
