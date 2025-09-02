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
  title: "Motor Roger Serie BG30 para Portones Corredizos de Gran Peso | Deneb Tecnología",
  description: "Conoce el motor Roger Serie BG30 para portones corredizos de 1000kg a 2200kg. Tecnología italiana Brushless, uso superintensivo e inteligente para la automatización de accesos en Ecuador.",
};

export default function MotorRogerbg302200kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Roger Serie BG30"
                categoria="Motor corredizo"
                descripcion="Este motor de la marca italiana Roger Brushless es un equipo robusto, potente e inteligente, diseñado para automatizar portones corredizos de gran peso. Con cinco versiones disponibles (1000 kg, 1400 kg, 1600 kg, 1800 kg y 2200 kg), ofrece un rendimiento de uso superintensivo. Su avanzada inteligencia te permite abrir el portón con un solo botón, sin necesidad de bajar de tu vehículo.

Incluye baterías de emergencia de 12V DC que se activan en caso de fallos eléctricos, y una pantalla digital intuitiva de 4 cuadrantes con 6 botones para una configuración precisa. El equipo puede memorizar hasta 500 controles remotos, compatibles con códigos fijos y Rolling Code, y cuenta con fines de carrera (magnéticos o metálicos) en todas sus versiones para un funcionamiento seguro y preciso.

"
                marca="Roger"
                imagen="/images/roger.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BG30 - 1000kg"
                detalles={[
                    "Tipo de motor Irreversible",
                    "Peso máx. cancela 1000 kg",
                    "Alimentación línea 230V AC – 115V AC 50/60Hz +-10%",
                    "Alimentación motor Brushless 36V",
                    "Potencia máxima 590W",
                    "Frecuencia de uso Intensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP43",
                    "Velocidad de maniobra máxima 0,33 m/sec",
                    "Empuje máxima 800 N",
                    "Codificador Codificador nativo digital",
                    "Tipo de controlador de codificador Digital SENSORED",
                    "Tipo de fin de carrera Mecánico de micro-contacto para BG30/1003/HS Magnético para BG30/1004/HS",
                    "Central de mando instalada a bordo B70/1DCHP",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 800",
                    "Desbloqueo Palanca excéntrica con cilindro de llave",
                    "Módulo de cremallera 4",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BG30 - 1400kg"
                detalles={[
                    "Tipo de motor Irreversible",
                    "Peso máx. cancela 1400 kg",
                    "Alimentación línea 230V AC – 115V AC 50/60Hz +-10%",
                    "Alimentación motor Brushless 36V",
                    "Potencia máxima 540W",
                    "Frecuencia de uso Intensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP43",
                    "Velocidad de maniobra máxima 0,28 m/sec",
                    "Empuje máxima 600 N",
                    "Codificador Codificador nativo digital",
                    "Tipo de controlador de codificador Digital SENSORED",
                    "Tipo de fin de carrera Mecánico",
                    "Central de mando instalada a bordo B70/1DCHP",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 800",
                    "Desbloqueo Palanca excéntrica con cilindro de llave",
                    "Módulo de cremallera 4",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BG30 - 1600kg"
                detalles={[
                    "Tipo de motor Irreversible",
                    "Peso máx. cancela 1600 kg",
                    "Alimentación línea 230V AC – 115V AC 50/60Hz +-10%",
                    "Alimentación motor Brushless 36V",
                    "Potencia máxima 390W",
                    "Frecuencia de uso Intensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP43",
                    "Velocidad de maniobra máxima 0,20 m/sec",
                    "Empuje máxima 1200 N",
                    "Codificador Codificador nativo digital",
                    "Tipo de controlador de codificador Digital SENSORED",
                    "Tipo de fin de carrera Mecánico de micro-contacto para BG30/1603 Magnético para BG30/1604",
                    "Central de mando instalada a bordo B70/1DCHP",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1000",
                    "Desbloqueo Palanca excéntrica con cilindro de llave",
                    "Módulo de cremallera 4",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BG30 - 1800kg"
                detalles={[
                    "Tipo de motor Irreversible",
                    "Peso máx. cancela 1800 kg",
                    "Alimentación línea 230V AC – 115V AC 50/60Hz +-10%",
                    "Alimentación motor Brushless 36V",
                    "Potencia máxima 650W",
                    "Frecuencia de uso Intensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP43",
                    "Velocidad de maniobra máxima 0,30 m/sec",
                    "Empuje máxima 1250 N",
                    "Codificador Codificador nativo digital",
                    "Tipo de controlador de codificador Digital SENSORED",
                    "Tipo de fin de carrera Mecánico",
                    "Central de mando instalada a bordo B70/1DCHP",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 800",
                    "Desbloqueo Palanca excéntrica con cilindro de llave",
                    "Módulo de cremallera 4",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Roger Serie BG30 - 2200kg"
                detalles={[
                    "Tipo de motor Irreversible",
                    "Peso máx. cancela 2200 kg",
                    "Alimentación línea 230V AC – 115V AC 50/60Hz +-10%",
                    "Alimentación motor Brushless 36V",
                    "Potencia máxima 470W",
                    "Frecuencia de uso Intensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP43",
                    "Velocidad de maniobra máxima 0,16 m/sec",
                    "Empuje máxima 1700 N",
                    "Codificador Codificador nativo digital",
                    "Tipo de controlador de codificador Digital SENSORED",
                    "Tipo de fin de carrera Mecánico de micro-contacto para BG30/2203 Magnético para BG30/2204",
                    "Central de mando instalada a bordo B70/1DCHP",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1000",
                    "Desbloqueo Palanca excéntrica con cilindro de llave",
                    "Módulo de cremallera 4",
                ]}
                pdfUrl="/pdf/4.-Brochure-BG30-SPA_2017.pdf"
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