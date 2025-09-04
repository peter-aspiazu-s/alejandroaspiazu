import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export const metadata = {
    title: "Motor Craftsman 1/2 HP para Portones Basculantes | Deneb Tecnología",
    description: "Descubre el motor Craftsman de 1/2 HP para puertas de garaje residenciales. Con transmisión de cadena y cable, es fácil de instalar y programar, ideal para un uso sencillo y efectivo en tu hogar.",
    openGraph: {
    title: "Motor Craftsman 1/2 HP para Portones Basculantes | Deneb Tecnología",
    description: "Descubre el motor Craftsman de 1/2 HP para puertas de garaje residenciales. Con transmisión de cadena y cable, es fácil de instalar y programar, ideal para un uso sencillo y efectivo en tu hogar.",
    images: ["/images/craftsman1.webp"],
  },
};

export default function MotorCraftsman1y2hp() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Craftsman 1/2 HP"
                categoria="Motor basculante"
                descripcion="Efectivo para puertas de garaje residenciales, es capaz de levantar, arrastrar o empujar portones lo suficientemente pesados sin ningún inconveniente, su potencia es de 1/2 hp (caballos de fuerza).

Su instalación y programación es super-fácil, ya que su sistema de rieles le permite ser colocar por cualquier persona con conocimientos en electricidad y soldadura, su configuración no es complicada viene con una Interfax de usuario sencilla. "
                marca="Craftsman"
                imagen="/images/craftsman1.webp"
                enlacePrecios="/motores-para-puertas/motores-basculantes"
                tipoMotor="Basculantes"
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor Craftsman"
                detalles={[
                    "Potencia 1/2 HP",
                    "Transmisión de Cadena y Cable",
                    "Uso Residencial",
                    "Acepta hasta 8 Controles Remotos",
                ]}
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo instalar un motor para puerta de garaje basculante?"} descripcionInstalacion={"Comprender el proceso de instalación te permite verificar si el trabajo de un técnico fue bien hecho. Además, si te animas, puedes considerar instalar el motor por tu cuenta y ahorrar el costo de la mano de obra. Es vital recordar que no todos los motores de cadena son iguales; aunque el proceso sea similar, siempre es mejor buscar un tutorial específico para el modelo que adquiriste."} urlInstalacion={"https://www.youtube.com/watch?v=pyJkVShx5jQ"} titleVideoInstalacion={"Instalación de motor para puerta levadiza o basculante"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
