import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorDitecIon600kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Ditec ION"
                categoria="Motor corredizo"
                descripcion="Estos motores, aunque no son ofrecidos por la marca Dítec, destacan por su efectividad, durabilidad y fiabilidad. Operan con una alimentación de 110V y 24V para el motor, y están disponibles en versiones que manejan portones de hasta 400 o 600 kg con un ancho máximo de 12 metros.

Son ideales para uso residencial o en comunidades pequeñas, con un movimiento limitado de 5 a 10 casas, y se recomienda un máximo de 800 ciclos diarios para asegurar su vida útil, a pesar de su capacidad para 150.000. El equipo ofrece una velocidad de trabajo de 0.1 a 0.3 m/s, ajustable según el peso del portón. También incluye un sistema de desbloqueo manual para emergencias y un sistema de detección de obstáculos que invierte el movimiento de la puerta para garantizar la seguridad."
                marca="Ditec"
                imagen="/images/ditec.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Dítec ION 400KG"
                detalles={[
                    "Arrastra puertas con un peso máximo de 400 kilogramos",
                    "Tiene codificador virtual de control de carrera",
                    "El ancho máximo de las puertas tiene que ser de 12 metros",
                    "150.000 ciclos diarios",
                    "Su alimentación es de 110V (230 V AC – 50 – 60 Hz)",
                    "La alimentación del motor es de 24V DC",
                    "La entrada de alimentación de 0.45 A",
                    "El poder de arranque es de 600 N",
                    "La Velocidad de apertura y cierre es de 0.1 – 0.3 m/s",
                    "Tiene un sistema de desbloqueo para una apertura manual con llave",
                    "La temperatura de funcionamiento es de -20 ° C / + 55 ° C (-35 ° C / + 55 ° C con NIO habilitado)",
                    "El grado de protección es IP44",
                    "Panel de Control LCU48",
                ]}
                pdfUrl="/pdf/5.-ION_EN-detalles.pdf"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Dítec ION 600KG"
                detalles={[
                    "Arrastra puertas con un peso máximo de 600 kilogramos",
                    "Tiene codificador virtual de control de carrera",
                    "El ancho máximo de las puertas tiene que ser de 12 metros",
                    "150.000 ciclos diarios",
                    "Su alimentación es de 110V (230 V AC – 50 – 60 Hz)",
                    "La alimentación del motor es de 24V DC",
                    "La entrada de alimentación es 0.6 A",
                    "El poder de arranque es de 800 N",
                    "La Velocidad de apertura y cierre es de 0.1 – 0.3 m/s",
                    "Tiene un sistema de desbloqueo para una apertura manual con llave",
                    "La temperatura de funcionamiento es de -20 ° C / + 55 ° C (-35 ° C / + 55 ° C con NIO habilitado)",
                    "El grado de protección es IP44",
                    "Panel de Control LCU48",
                ]}
                pdfUrl="/pdf/5.-ION_EN-detalles.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo instalar y configurar el Motor Dítec ION?"} descripcionInstalacion={"Este video te ofrece un conocimiento profundo y detallado sobre el motor, complementando la información que un manual podría omitir. Podrás aprender la función de cada componente, cómo usar el equipo de manera correcta y los pasos para una configuración precisa."} urlInstalacion={"https://www.youtube.com/watch?v=WRiXbTUdHYc"} titleVideoInstalacion={"Motor Corredizo ION"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
