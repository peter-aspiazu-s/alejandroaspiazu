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
    title: "Motor Corredizo BFT Icaro Smart AC A2000 | 2000 kg | Deneb Tecnología",
    description: "Descubre el motor BFT Icaro Smart AC A2000, una solución robusta y de alta tecnología para portones industriales y residenciales de hasta 2000 kg. Con tecnología D-Track, garantiza máxima seguridad y un rendimiento óptimo. Instala la mejor automatización para tus accesos con BFT, líder en el mercado.",
    openGraph: {
        title: "Motor Corredizo BFT Icaro Smart AC A2000 | 2000 kg | Deneb Tecnología",
        description: "Descubre el motor BFT Icaro Smart AC A2000, una solución robusta y de alta tecnología para portones industriales y residenciales de hasta 2000 kg. Con tecnología D-Track, garantiza máxima seguridad y un rendimiento óptimo. Instala la mejor automatización para tus accesos con BFT, líder en el mercado.",
        images: ["/images/icaro-smart-ac-a-2000.webp"],
    },
};

export default function MotorBftIcaroSmartACA2000kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Corredizo BFT Icaro Smart AC A2000"
                categoria="Motor corredizo"
                descripcion="El motor corredizo Icaro Smart AC A2000 de BFT es una solución de alto rendimiento diseñada para la automatización de portones industriales y residenciales de gran tamaño y peso. Con una impresionante capacidad de hasta 2000 kg, este motor es ideal para áreas de alto tráfico que requieren una operación confiable y segura. 
                
La tecnología D-Track, exclusiva de BFT, es el cerebro detrás de su funcionamiento, ajustando la fuerza del motor de manera inteligente para garantizar un movimiento suave, preciso y sin riesgo de aplastamiento. Es la elección perfecta para quienes buscan durabilidad, velocidad y la máxima seguridad en la automatización de accesos pesados."
                marca="BFT"
                imagen="/images/icaro-smart-ac-a-2000.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Características y Especificaciones Técnicas del Icaro Smart AC A2000"
                detalles={[
                    "Bloqueo: Mecánico",
                    "Interconectividad:	Sí",
                    "Peso máximo de la cancela:	2000 kg",
                    "Desbloqueo: Mediante palanca con llave personalizada",
                    "Voltaje del motor: 230 V",
                    "Velocidad de la persiana: 9 m/min",
                    "Reacción al impacto: Fricción mecánica + codificador",
                    "Central de mando: LEO B CBB L02",
                    "Tipo de final de carrera: Electromecánico",
                    "Frecuencia de uso: muy intensivo",
                    "Alimentación de la tarjeta: 230 V",
                    "Módulo piñón: 4",
                    "Grado de protección: IP24",
                    "Desaceleración: Sí",
                    "Condiciones ambientales: -20 ÷ 55 °C",
                    "Potencia de entrada: 750 W",
                ]}
                pdfUrl="/pdf/bft-icaro-smart-ac-a-2000.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo Instalar un motor para portones corredizos?"} descripcionInstalacion={"En este video puedes ver cómo se instalan estos equipos, recuerda que la instalación es similar, pero la configuración dependerá de la marca que tengas."} urlInstalacion={"https://www.youtube.com/watch?v=RuCEL3W5ouY"} titleVideoInstalacion={"Instalación de motor para portón corredizo"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
