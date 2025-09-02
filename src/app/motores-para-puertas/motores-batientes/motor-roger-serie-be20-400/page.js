import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorRogerSerieBe20400() {
    return (
        <>
            <MotorDetalle
                titulo="Roger Serie BE20 – 400"
                categoria="Motor batiente"
                descripcion="Este motor de brazo inteligente de la marca italiana Roger Brushless es un equipo digital, robusto y elegante. Permite automatizar puertas batientes de una o dos hojas, abriéndolas o cerrándolas desde la comodidad de tu auto con un control remoto. Con una potencia de 200W y una fuerza de empuje de 100 a 2800 N, puede manejar hojas con un ancho de hasta 4 metros.

Diseñado para uso superintensivo (hasta 1000 ciclos diarios), su velocidad de apertura es de 17 a 26 segundos. Funciona con una alimentación de 230V AC o 115V AC y una alimentación del motor de 36V. Cuenta con una protección IP43, lo que lo hace resistente al polvo y al agua. Sin embargo, para prolongar su vida útil, se recomienda cubrirlo y evitar su exposición directa."
                marca="roger"
                imagen="/images/roger-batiente.webp"
                enlacePrecios="/motores-para-puertas/motores-batientes"
                tipoMotor="Batientes"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BE20 - 400"
                detalles={[
                    "Longitud máxima de la hoja 4 metros de largo cada hoja",
                    "Alimentación línea 230V AC – 115V AC 50/60Hz +-10%",
                    "Alimentación motor Brushless 36V",
                    "Potencia nominal 200W",
                    "Frecuencia de uso superintensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP43",
                    "Carrera máxima 550 mm totales",
                    "Tiempo de apertura a 90° 17 – 26 s",
                    "Empuje 100 – 2800 N",
                    "Codificador Codificador nativo digital",
                    "Tipo de final de carrera 2 retenes mecánicos regulables para apertura y cierre",
                    "Central de mando EDGE1/BOX (A partir de la versión P3.20)",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1.000",
                ]}
                pdfUrl="/pdf/1.-BE20_ES.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"Como Configurar el Motor Roger Serie BE20 - 400"} descripcionInstalacion={"Te sorprenderás lo fácil que es programar estos motores, mediante su tarjeta empezáremos a darle diferentes funciones para que esto empiece a funcionar."} urlInstalacion={"https://www.youtube.com/watch?v=TgiQQTPkGAA"} titleVideoInstalacion={"Programación Motor Roger Abatibles"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
