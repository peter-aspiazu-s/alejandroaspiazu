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
  { src: "/images/puertaenrollable1.webp", alt: "Puerta enrollable" },
]

const imagesIndustrialBatientes = [
  { src: "/images/reparacion-de-puerta-enrollable.webp", alt: "Reparacion de puerta enrollable" },
]


const motores = [
    {
      titulo: "Motores Elsamec",
      imagen: "/images/uniko-1m.webp",
      alt: "Motores Elsamec",
      enlace: "/motores-para-puertas/motores-enrollables/motor-elsamec-uniko"
    },
  ]

export default function MotoresBatientes() {
  return (
    <>
      <Hero titulo={"Motores para Puertas Enrollables"} subtitulo={"No pierdas más tiempo ni esfuerzo. Si bien una puerta pesada no es un problema para todos, para personas mayores o con movilidad reducida, la automatización es una gran solución. Nuestros motores son exclusivos para puertas enrollables de negocios y tiendas, brindando comodidad y accesibilidad a tu local."} imagen={"/images/banner-home.webp"} />
      <TipoMotor titulo={"¿Qué Motor Enrollable debo elegir?"} descripcion={"Al elegir un motor, es crucial seleccionar el equipo correcto para evitar accidentes y daños. Optar por un motor que no soporta el peso de tu puerta puede causar un daño prematuro del equipo al forzarlo más allá de sus límites. Además, una potencia inadecuada podría dañar la puerta misma, rayándola o incluso partiéndola con el tiempo. Lo más importante es que un equipo incorrecto representa un riesgo de accidentes para los dueños, empleados y clientes, ya que una falla inesperada podría hacer que la puerta caiga. Por lo tanto, elegir el motor adecuado es una cuestión de seguridad, funcionalidad y durabilidad."} 
      tituloResidencial={"¿La puerta enrollable debe de estar en buen estado?"}
      descripcionResidencial={"Para que tu motor funcione correctamente, es vital que la puerta esté en buen estado. Dado que muchas veces no se le da un mantenimiento constante, es crucial que informes a los técnicos o distribuidores sobre las condiciones actuales de tu puerta. Así, ellos podrán asesorarte si el servicio de mantenimiento está incluido con la compra del equipo o si necesitas contratar a un especialista para ese trabajo."}

      imagesResidencial={imagesResidencialBatientes}
      imagesIndustrial={imagesIndustrialBatientes}

      tituloIndustrial={"Motivos de tener una puerta en buen estado"}
      descripcionInsdustial={"Al momento de que el motor trate de alzar la puerta esta no subirá de manera normal, porque esta oxidada, cortada o otros problemas que tienen cuando están en mal estado. Así escojamos el motor ideal este con el tiempo se dañada, simplemente porque la puerta esta en mal estado. Tú, familiares, clientes o el técnico pueden sufrir un accidente, pueden cortarse con esta puerta que esta oxidada y tiene algunas imperfecciones."}
      />
      <CallToAction />
      <VariedadMotores motores={motores} tituloMotores={"Las mejores reseñas de motores para puertas enrrollables"} descripcionMotores={"Hemos preparado una ficha técnica detallada para cada motor, donde podrás conocer todas sus especificaciones y características, facilitando tu decisión de compra."} />
      <CallToAction />
      <Beneficios />
      <InstalacionMotor tituloInstalacion={"¿Como Instalar los Motores de Enrollables?"} descripcionInstalacion={"En este video puedes ver cómo se instalan estos equipos, recuerda que la instalación es similar, pero la configuración dependerá de la marca que tengas."} urlInstalacion={"https://www.youtube.com/watch?v=H6RquQl6WY8"} titleVideoInstalacion={"Instalación de motor para puerta enrollable"} />
      <TrabajosRealizados />
      <Contactos />
      <Youtube />
      <Marcas />
    </>
  );
}
