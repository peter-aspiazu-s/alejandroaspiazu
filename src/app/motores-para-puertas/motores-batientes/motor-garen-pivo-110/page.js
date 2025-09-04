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
    title: "Motor Garen PIVO 110 para Portones Batientes | Deneb Tecnología",
    description: "Descubre el motor de brazos Garen PIVO 110, ideal para puertas de garaje batientes de hasta 3 metros. Con 1/2 HP de fuerza y diseñado para uso superintensivo, ofrece fiabilidad y comodidad.",
    openGraph: {
    title: "Motor Garen PIVO 110 para Portones Batientes | Deneb Tecnología",
    description: "Descubre el motor de brazos Garen PIVO 110, ideal para puertas de garaje batientes de hasta 3 metros. Con 1/2 HP de fuerza y diseñado para uso superintensivo, ofrece fiabilidad y comodidad.",
    images: ["/images/pivo-60.webp"],
  },
};

export default function MotorGarenPivo110() {
    return (
        <>
            <MotorDetalle
                titulo="Motor de Brazos Garen PIVO 110"
                categoria="Motor batiente"
                descripcion="Este sistema incluye dos motores con sus respectivos brazos, diseñados para puertas batientes o de dos hojas. El panel de control envía la señal para que el equipo funcione, permitiendo que abras la puerta con un control remoto, sin tener que salir de tu auto. Cada hoja de la puerta puede tener un ancho máximo de 3 metros.

Considerado un equipo de uso superintensivo, puede ser utilizado hasta 35 veces por hora. El motor trabaja a 110V y tiene una fuerza de 1/2 HP. Puede soportar hasta 200 controles remotos de la marca Garen, que funcionan a una distancia de 100 metros si no hay obstáculos."
                marca="garen"
                imagen="/images/pivo-60.webp"
                enlacePrecios="/motores-para-puertas/motores-batientes"
                tipoMotor="Batientes"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Pivo 1.10"
                detalles={[
                    "Fuerza 1/2 HP",
                    "Soporta hojas con ancho máximo de 3 metros",
                    "Soporta hasta 200 Controles Remotos",
                    "Pertenece a la Marca Brasileña Garen",
                    "Funciona 35 ciclos/hora",
                    "Trabaja a 110V",
                ]}
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo funciona el Motor Pivo 1.10?"} descripcionInstalacion={"En este video puedes ver como funciona el motor de brazos"} urlInstalacion={"https://www.youtube.com/watch?v=liQsu40Zq3I"} titleVideoInstalacion={"Motor pivotante Garen"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
