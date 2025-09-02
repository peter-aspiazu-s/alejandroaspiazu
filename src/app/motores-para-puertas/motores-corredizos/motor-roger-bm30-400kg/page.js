import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorRogerbm30600kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Roger Serie BM30"
                categoria="Motor corredizo"
                descripcion="Este motor de origen italiano es una solución robusta y elegante para automatizar portones de hasta 400 kg. Su cuerpo de aluminio aloja una pantalla digital de 4 cuadrantes y un panel de control fácil de configurar con microcontrolador DSP. La gestión del motor se simplifica gracias a una conexión de un solo cable de 3 hilos. Incluye un potente receptor de radio de 2 canales con capacidad para almacenar hasta 500 controles y un interruptor de límite mecánico o magnético. El equipo cuenta con imanes de neodimio y funciona con un sistema de potencia sinusoidal trifásica de 24V, garantizando un rendimiento superintensivo con bajo consumo de energía. Su durabilidad está asegurada por engranajes y rodamientos de alta calidad (aluminio, acero, bronce) que permiten un funcionamiento silencioso y preciso. Además, incorpora una palanca de liberación para desbloquear el sistema en caso de fallos eléctricos o pérdida de controles."
                marca="Roger"
                imagen="/images/bm30.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BM30"
                detalles={[
                    "Mueve puertas con peso máximo de 400kg",
                    "Fuente de alimentación en línea es de 230V AC – 115V AC 50/60Hz +-10%",
                    "Fuente de alimentación del motor sin escobillas es de 24V",
                    "Potencia Nominal 125W",
                    "Frecuencia de uso super Intensivo",
                    "Temperatura de Funcionamiento: -20 +55°C",
                    "Grado de Protección es de IP43",
                    "Velocidad de funcionamiento 0.44m/sec",
                    "El empuje es de 20 – 350 N",
                    "Codificador Nativo Digital",
                    "Micro interruptor",
                    "Unidad de control a bordo B70/1DC",
                    "500 Ciclos de apertura y cierre diaria"
                ]}
                pdfUrl="/pdf/2.-Brochure-BM30_ENG_2017.pdf"
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
