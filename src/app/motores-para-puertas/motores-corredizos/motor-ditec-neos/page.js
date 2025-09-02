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
  title: "Motor Ditec Neos para Puertas Corredizas | Deneb Tecnología",
  description: "Encuentra el motor Ditec Neos para portones corredizos de 300kg, 400kg, 600kg y 1000kg. Un equipo robusto y fiable, ideal para uso intensivo. Ofrecemos instalación y soporte en Ecuador.",
};

export default function MotorDitecNeos600kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Dítec Neos, Neos+"
                categoria="Motor corredizo"
                descripcion="Dítec, una de las marcas de motores líderes a nivel mundial, presenta cuatro versiones de su popular motor Neos. Estos equipos, reconocidos por su potencia y durabilidad, están diseñados específicamente para portones corredizos. Cada versión está optimizada para manejar puertas con distintos rangos de peso."
                marca="Ditec"
                imagen="/images/ditecneos.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Dítec Neos 300 kg"
                detalles={[
                    "Su Alimentación es de 230 V -50/60Hz",
                    "Consumo 1,2A",
                    "Fusible F1,6A",
                    "Empuje 300 N",
                    "La velocidad es de 0,1÷0,25 m/s",
                    "Carrera máxima 12 metros (el ancho de las puertas tiene que medir máximo 12 metros)",
                    "Peso máximo de la puerta de 300 kg",
                    "Uso intenso",
                    "Intermitencia S2 = 30 min – S3 = 50%",
                    "Temperatura Ambiente -20° C +55° C",
                    "Grado de protección IP24",
                    "Cuadro Eléctrico CS12E",
                ]}
                pdfUrl="/pdf/6.-Neos_ES-detalles.pdf"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Dítec Neos 400 kg"
                detalles={[
                    "Su Alimentación es de 230 V -50/60Hz",
                    "Consumo 1,2A",
                    "Fusible F2A",
                    "Empuje 400 N",
                    "La velocidad es de 0,1÷0,25 m/s",
                    "Carrera máxima 12 metros (el ancho de las puertas tiene que medir máximo 20 metros)",
                    "Peso máximo de la puerta de 400 kg",
                    "Uso intenso",
                    "Intermitencia S2 = 30 min – S3 = 50%",
                    "Temperatura Ambiente -20° C +55° C",
                    "Grado de protección IP24",
                    "Cuadro Eléctrico CS12E",
                ]}
                pdfUrl="/pdf/6.-Neos_ES-detalles.pdf"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Dítec Neos 600 kg"
                detalles={[
                    "Su Alimentación es de 230 V -50/60Hz",
                    "Consumo 1,5A",
                    "Fusible F2A",
                    "Empuje 600 N",
                    "La velocidad es de 0,1÷0,25 m/s",
                    "Carrera máxima 20 metros (el ancho de las puertas tiene que medir máximo 20 metros)",
                    "Peso máximo de la puerta de 600 kg",
                    "Uso intenso",
                    "Intermitencia S2 = 30 min – S3 = 50%",
                    "Temperatura Ambiente -20° C +55° C",
                    "Grado de protección IP24",
                    "Cuadro Eléctrico CS12E",
                ]}
                pdfUrl="/pdf/6.-Neos_ES-detalles.pdf"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Dítec Neos 1000 kg"
                detalles={[
                    "Su Alimentación es de 230 V -50/60Hz",
                    "Consumo 2A",
                    "Fusible F2,5A",
                    "Empuje 1000 N",
                    "La velocidad es de 0,1÷0,19 m/s",
                    "Carrera máxima 20 metros (el ancho de las puertas tiene que medir máximo 20 metros)",
                    "Peso máximo de la puerta de 1000 kg",
                    "Uso intenso",
                    "Intermitencia S2 = 30 min – S3 = 50%",
                    "Temperatura Ambiente -20° C +55° C",
                    "Grado de protección IP24",
                    "Cuadro Eléctrico CS12M",
                ]}
                pdfUrl="/pdf/6.-Neos_ES-detalles.pdf"
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
