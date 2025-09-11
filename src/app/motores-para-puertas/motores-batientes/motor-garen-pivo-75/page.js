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
    title: "Motor Garen PIVO 0.75 para Portones Batientes | Deneb Tecnología",
    description: "Conoce el motor de brazos Garen PIVO 0.75, ideal para portones batientes de hasta 2 metros. Diseñado para uso frecuente (25 ciclos/hora) y con capacidad para hasta 200 controles remotos.",
    openGraph: {
    title: "Motor Garen PIVO 0.75 para Portones Batientes | Deneb Tecnología",
    description: "Conoce el motor de brazos Garen PIVO 0.75, ideal para portones batientes de hasta 2 metros. Diseñado para uso frecuente (25 ciclos/hora) y con capacidad para hasta 200 controles remotos.",
    images: ["/images/pivo-60.webp"],
  },
};

export default function MotorGarenPivo75() {
    return (
        <>
            <MotorDetalle
                titulo="Motor de Brazos Garen PIVO 0.75"
                categoria="Motor batiente"
                descripcion="Este sistema de dos motores con brazos es perfecto para automatizar puertas batientes con hojas de hasta 2 metros de ancho. Diseñado para un uso frecuente, puede ser utilizado hasta 25 veces por hora. Cada motor tiene una potencia de 1/3 HP. El elegante diseño de los brazos, en color plateado, complementa la estética de la puerta. Además, cuenta con una tarjeta de control que gestiona ambos motores y soporta hasta 200 controles remotos de la marca Garen."
                marca="garen"
                imagen="/images/pivo-60.webp"
                enlacePrecios="/motores-para-puertas/motores-batientes"
                tipoMotor="Batientes"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Pivo 0.75"
                detalles={[
                    "Fuerza 1/3 HP",
                    "Soporta hojas con ancho máximo de 2 metros",
                    "Soporta hasta 200 Controles Remotos",
                    "Pertenece a la Marca Brasileña Garen",
                    "Funciona 25 ciclos/hora",
                    "Trabaja a 110V",
                ]}
                pdfUrl="/pdf/manual-motor-pivo-garen.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo funciona el Motor Pivo 0.75?"} descripcionInstalacion={"En este video puedes ver como funciona el motor de brazos"} urlInstalacion={"https://www.youtube.com/watch?v=liQsu40Zq3I"} titleVideoInstalacion={"Motor pivotante Garen"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
