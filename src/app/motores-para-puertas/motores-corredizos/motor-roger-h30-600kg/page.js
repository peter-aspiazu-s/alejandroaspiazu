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
  title: "Motor Roger H30 600kg para Portones Corredizos | Deneb Tecnología",
  description: "Descubre el potente motor Roger Sliding Gates Serie H30, ideal para portones corredizos de hasta 600kg. Con tarjeta de control inteligente y diseñado para uso intensivo.",
};

export default function MotorRogerH30600kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Roger Sliding Gates serie H30"
                categoria="Motor corredizo"
                descripcion="Este potente motor electromecánico de la marca italiana Roger automatiza portones corredizos de hasta 600 kg. Cuenta con una tarjeta de control H70 inteligente que permite su operación mediante controles remotos, eliminando la necesidad de contacto manual. Funciona con un voltaje de 115V AC y su diseño robusto permite un uso intensivo. Además, incluye una base de fijación y tornillos para una instalación completa. Su rueda está diseñada para ser compatible con cualquier cremallera que tenga las dimensiones adecuadas."
                marca="Roger"
                imagen="/images/motorroger600kgintensivo.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger - Sliding Gates Serie H30"
                detalles={[
                    "Soporta peso máximo de 600 kg",
                    "Suministro de línea de energía es de 115V AC",
                    "Fuente de alimentación del motor es de 115V AC",
                    "Potencia nominal es de 240W",
                    "Frecuencia de uso es de 50%",
                    "Empuje 300 N",
                    "Temperatura de funcionamiento -20 + 55 °C",
                    "Nivel de Protección IP43",
                    "Tipo de Reductor Irreversible",
                    "Velocidad de maniobra 9.5m/min (0.16m/s)",
                    "Protección térmica del motor 150 °C",
                    "Condensador incorporado 12.5 µF",
                    "Límite de Cambio es Magnético",
                    "Codificador Óptico"
                ]}
                pdfUrl="/pdf/1.-H30-6415.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo Programar e Instalar el Motor Sliding Gates Serie H30?"} descripcionInstalacion={"La instalación de este equipo es un proceso simple. Primero, debe construir una base de soporte en el suelo para el motor, que puede situarse en la parte superior o inferior del portón. A continuación, ajuste las cremalleras a la medida del ancho de la puerta y asegúrese de que engranen correctamente con la rueda del motor. Finalmente, fije el motor en su posición."} urlInstalacion={"https://www.youtube.com/watch?v=BqWeF9CEbJM"} titleVideoInstalacion={"Programación Motor Roger Technology H30 6415"} />  
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
