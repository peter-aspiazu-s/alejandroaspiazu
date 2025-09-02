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
  title: "Motor Roger Serie BH30 para Portones Corredizos de 600kg | Deneb Tecnología",
  description: "Descubre el motor Roger Serie BH30 para portones corredizos de hasta 600kg. Ideal para uso superintensivo, con tecnología inteligente, baterías de respaldo y un diseño robusto de alta gama.",
};

export default function MotorRogerbh30600kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Roger Serie BH30"
                categoria="Motor corredizo"
                descripcion="El motor Roger se destaca como una solución de alta gama para portones corredizos, combinando un diseño resistente y un sistema inteligente. Fabricado con una robusta aleación de aluminio y titanio, este equipo es capaz de automatizar puertas de hasta 600 kg. Incluye un sistema de baterías de respaldo que se activa únicamente durante cortes de energía, asegurando el funcionamiento continuo. Su configuración es sencilla gracias a una pantalla digital de 4 cuadrantes con 6 teclas y un potente receptor de radio de 2 canales que puede almacenar hasta 500 controles remotos. Su diseño compacto y duradero lo hace ideal para uso superintensivo en cualquier ambiente, con un consumo de energía extremadamente bajo. Además, cuenta con una palanca de liberación manual para emergencias."
                marca="Roger"
                imagen="/images/motorroger600kgintensivo.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BH30"
                detalles={[
                    "Mueve puertas con peso máximo de 600kg",
                    "Fuente de alimentación en línea es de 230V AC – 115V AC 50/60Hz +-10%",
                    "Fuente de alimentación del motor sin escobillas es de 24V",
                    "Potencia Nominal 200W",
                    "Frecuencia de uso super Intensivo",
                    "Temperatura de Funcionamiento: -20 +55°C",
                    "Grado de Protección es de IP44",
                    "Velocidad de funcionamiento 0.44m/sec",
                    "El empuje es de 50 – 500 N",
                    "Codificador Nativo Digital",
                    "Micro interruptor",
                    "Unidad de control a bordo B70/1DC",
                    "800 Ciclos de apertura y cierre diaria"
                ]}
                pdfUrl="/pdf/3.-BH30_ENG.pdf"
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
