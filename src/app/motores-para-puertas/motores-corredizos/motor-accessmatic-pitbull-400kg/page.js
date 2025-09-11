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
    title: "Motor Corredizo AccessMatic Pitbull 400 | Ideal para Portones de 400kg | Deneb Tecnología",
    description: "Potente y confiable motor corredizo AccessMatic Pitbull 400 para portones de hasta 400kg. Descubre por qué es la mejor opción para la automatización de accesos residenciales, con instalación fácil y soporte técnico en Ecuador.",
    openGraph: {
        title: "Motor Corredizo AccessMatic Pitbull 400 | Ideal para Portones de 400kg | Deneb Tecnología",
        description: "Potente y confiable motor corredizo AccessMatic Pitbull 400 para portones de hasta 400kg. Descubre por qué es la mejor opción para la automatización de accesos residenciales, con instalación fácil y soporte técnico en Ecuador.",
        images: ["/images/accessmatic-pitbull-400.webp"],
    },
};

export default function MotorAccessMaticPitbull400kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Corredizo AccessMatic Pitbull 400"
                categoria="Motor corredizo"
                descripcion="El motor corredizo AccessMatic Pitbull 400 es la solución definitiva para la automatización de portones residenciales y de comunidades pequeñas. Reconocido por su durabilidad y operación fiable, este motor mueve puertas de hasta 400 kg de manera eficiente.

Diseñado para la seguridad y comodidad, el Pitbull 400 ofrece una velocidad de 14 metros por minuto y cuenta con un sistema de detección de obstáculos que invierte el movimiento de la puerta para proteger a personas y vehículos. Su mecanismo de desbloqueo manual es ideal para emergencias, asegurando un acceso continuo en cualquier situación. Elige este motor para una inversión inteligente en seguridad y conveniencia."
                marca="AccessMatic"
                imagen="/images/accessmatic-pitbull-400.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Características y Especificaciones Técnicas del Pitbull 400"
                detalles={[
                    "Máximo peso de puerta: 400 Kg",
                    "Voltaje de entrada: 110V AC",
                    "Ciclos / Hora: 15",
                    "Temperatura de trabajo: -20°C Hasta +50°C",
                    "Frecuencia: 60Hz",
                    "Velocidad de apertura o cierre: 14 m/min",
                    "Máx. Número de controles: 24",
                    "Finales de carrera mecánicos",
                    "Access Confort: arranque y parada suave",
                    "Access Code: sistema de seguridad por Rolling code",
                    "Access Pet: permite abrir parcialmente la puerta para mascotas",
                    "Access Safety: cierre automático al cabo de 1 minuto, o al tiempo configurado",
                    "Access Fuss: protector de sobre voltaje",
                    "Access Gear: Engranajes metálicos",
                ]}
                pdfUrl="/pdf/acessmatic-pitbull-400-manual.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"Guía de Programación: ¿Cómo Configurar el Recorrido del Motor Pitbull 400?"} descripcionInstalacion={"Aprende a programar el recorrido de tu motor Pitbull 400 de forma sencilla y segura con este video. Te mostraremos los pasos para configurar los límites de apertura y cierre, asegurando un funcionamiento preciso y la máxima eficiencia."} urlInstalacion={"https://www.youtube.com/watch?v=M1l2EdYHANE"} titleVideoInstalacion={"Cómo programar recorrido en Motor Pitbull 400 AccessMatic"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
