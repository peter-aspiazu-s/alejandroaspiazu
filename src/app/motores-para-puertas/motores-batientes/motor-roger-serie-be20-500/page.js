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
    title: "Motor Roger Serie BE20-500 para Portones Batientes | Deneb Tecnología",
    description: "Conoce el motor Roger Serie BE20-500 para portones batientes de hasta 3.5 metros. Diseñado para uso superintensivo con 1,000 ciclos diarios, este equipo inteligente de la marca Roger Brushless ofrece alta fiabilidad y rendimiento.",
};

export default function MotorRogerSerieBe20500() {
    return (
        <>
            <MotorDetalle
                titulo="Roger Serie BE20 – 500"
                categoria="Motor batiente"
                descripcion="Este motor de brazo de la marca italiana Roger Brushless está diseñado para puertas batientes de una o dos hojas, con un ancho máximo de 3.5 metros por hoja. Su sistema inteligente permite abrir y cerrar el portón con controles remotos. Funciona con una alimentación de línea de 230V AC o 115V AC y una alimentación del motor de 24V-36V.

El motor es ideal para uso superintensivo, ya que puede soportar hasta 1.000 ciclos diarios. Además, su protección contra el polvo y el agua lo hace más duradero. Roger Brushless, una de las empresas líderes en el mercado, es conocida por la calidad y fiabilidad de sus motores."
                marca="roger"
                imagen="/images/roger-batiente.webp"
                enlacePrecios="/motores-para-puertas/motores-batientes"
                tipoMotor="Batientes"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger BR20 - 500"
                detalles={[
                    "Fuente de alimentación 230V AC – 115V AC 50/60Hz +-10%",
                    "Fuente de alimentación del motor sin escobillas 24V – 36V",
                    "Potencia del motor 240W",
                    "Frecuencia de uso super intensivo",
                    "Temperatura de funcionamiento -20 +55oC",
                    "Nivel de protección IP43",
                    "Tiempo de apertura a 90° es de 27 a 42 segundos",
                    "Velocidad de maniobra: 1 -1,66 cm/s",
                    "Empuje máximo 100 – 2800 N",
                    "Carrera 520 mm",
                    "Codificador Digital incorporado",
                    "Interruptor de límite mecánico ajustable en apertura y cierre",
                    "Ciclos por día (apertura/cierre 24h sin parada) 1.000",
                ]}
                pdfUrl="/pdf/2.-BR20500_EN.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"Como Configurar el Motor Roger Serie BE20 - 500"} descripcionInstalacion={"Te sorprenderás lo fácil que es programar estos motores, mediante su tarjeta empezáremos a darle diferentes funciones para que esto empiece a funcionar."} urlInstalacion={"https://www.youtube.com/watch?v=TgiQQTPkGAA"} titleVideoInstalacion={"Programación Motor Roger Abatibles"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
