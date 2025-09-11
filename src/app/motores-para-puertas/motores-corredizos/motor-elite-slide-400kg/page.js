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
    title: "Motor Corredizo Elite Slide 400 | Ideal para Portones de 400kg | Deneb Tecnología",
    description: "Potente y confiable motor corredizo Elite Slide 400 para portones de hasta 400kg. Descubre por qué es la mejor opción para la automatización de accesos residenciales, con instalación fácil y soporte técnico en Ecuador.",
    openGraph: {
        title: "Motor Corredizo Elite Slide 400 | Ideal para Portones de 400kg | Deneb Tecnología",
        description: "Potente y confiable motor corredizo Elite Slide 400 para portones de hasta 400kg. Descubre por qué es la mejor opción para la automatización de accesos residenciales, con instalación fácil y soporte técnico en Ecuador.",
        images: ["/images/elite-slide400.webp"],
    },
};

export default function MotorEliteSlide400kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Corredizo Elite Slide 400"
                categoria="Motor corredizo"
                descripcion="El motor corredizo Elite Slide 400 es la solución ideal para la automatización de portones residenciales de hasta 400 kg. Diseñado para el uso diario, este motor de 110V AC ofrece un rendimiento robusto y fiable. Con una impresionante velocidad de 14 metros por minuto, minimiza el tiempo de espera y mejora la fluidez del acceso a tu hogar.

La seguridad es una prioridad: el Elite Slide 400 cuenta con finales de carrera mecánicos y engranajes metálicos de alta calidad que garantizan un funcionamiento preciso y duradero.  Su mecanismo es silencioso y fácil de instalar, lo que lo convierte en la opción perfecta para quienes buscan una solución práctica y segura para su portón. Incluye dos controles remotos y 4 metros de cremallera, todo lo necesario para una instalación estándar. Elige este motor para una inversión segura en comodidad y eficiencia."
                marca="Elite"
                imagen="/images/elite-slide400.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Características y Especificaciones Técnicas del Elite Slide 400"
                detalles={[
                    "Engranajes metálicos",
                    "Motor 100% en cobre",
                    "Máximo peso de puerta: 400 Kg",
                    "Voltaje de entrada: 110V AC",
                    "Ciclos / Hora: 15",
                    "Ciclo de trabajo: 40%",
                    "Temperatura de trabajo: -20°C Hasta +50°C",
                    "Frecuencia: 60Hz",
                    "Velocidad de apertura o cierre: 14 m/min",
                    "Máx. Número de controles: 24",
                    "Finales de carrera mecánicos",
                ]}
                pdfUrl="/pdf/elite-slide-400-manual.pdf"
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
