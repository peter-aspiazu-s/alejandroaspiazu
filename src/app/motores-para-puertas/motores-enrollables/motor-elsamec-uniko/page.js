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
    title: "Motores para Puertas Enrollables Elsamec UNIKO y GULLIVER | Deneb Tecnología",
    description: "Descubre los motores enrollables Elsamec de origen italiano, con modelos como el UNIKO y GULLIVER, diseñados para adaptarse a puertas de cualquier tamaño. ¡Automatiza tu puerta con la mejor tecnología!",
    openGraph: {
    title: "Motores para Puertas Enrollables Elsamec UNIKO y GULLIVER | Deneb Tecnología",
    description: "Descubre los motores enrollables Elsamec de origen italiano, con modelos como el UNIKO y GULLIVER, diseñados para adaptarse a puertas de cualquier tamaño. ¡Automatiza tu puerta con la mejor tecnología!",
    images: ["/images/uniko-1m.webp"],
  },
};

export default function MotorElsamecUnikoGulliver() {
    return (
        <>
            <MotorDetalle
                titulo="Motores Enrollables Elsamec"
                categoria="Motor enrollable"
                descripcion="Estos sistemas de origen italiano están diseñados para adaptarse a puertas enrollables de cualquier tamaño, desde pequeñas hasta grandes. La elección del motor correcto dependerá de las dimensiones de su puerta, y aquí podrá explorar los diferentes modelos y sus capacidades."
                marca="elsamec"
                imagen="/images/uniko-1m.webp"
                enlacePrecios="/motores-para-puertas/motores-enrollables"
                tipoMotor="Enrollables"
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor UNIKO 1M"
                detalles={[
                    "Eje: 42º – 48º – 60º",
                    "Dimensiones de Poleas o Coronas 20 cm / 22 cm",
                    "Consumo 450W",
                    "Amperio 2A",
                    "230V",
                    "Frecuencia Hz 50",
                    "RPM 9",
                    "Torque 177 Nm",
                    "Capacidad 180 Kg / 170 Kg",
                ]}
                pdfUrl="/pdf/manual-motor-uniko1m-elsamec.pdf"
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor UNIKO 2M"
                detalles={[
                    "Eje: 42º – 48º – 60º",
                    "Dimensiones de Poleas o Coronas 20 cm / 22 cm",
                    "Consumo 700W",
                    "Amperio 3A",
                    "230V",
                    "Frecuencia Hz 50",
                    "RPM 9",
                    "Torque 196 Nm",
                    "Capacidad 200 Kg / 183 Kg",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor ES76/2P-2M"
                detalles={[
                    "Eje: 7.6 cm",
                    "Dimensiones de Poleas o Coronas 240 cm",
                    "Consumo 1000W",
                    "Amperio 4,4A",
                    "230V",
                    "Frecuencia Hz 50",
                    "RPM 7,4",
                    "Torque 285 Nm",
                    "Capacidad 242 Kg",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor GULLIVER"
                detalles={[
                    "Eje: 101.6 cm",
                    "Dimensiones de Poleas o Coronas 280 cm",
                    "Consumo 1400W",
                    "Amperio 6A",
                    "230V",
                    "Frecuencia Hz 50",
                    "RPM 5,4",
                    "Torque 450 Nm",
                    "Capacidad 400 Kg",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Accesorios"
                detalles={[
                    "Electrófeno",
                    "Manija de liberación del freno",
                    "Adaptador de tubo Uniko Ø48",
                    "Adaptador de tubo Uniko Ø42",
                    "Kit adaptador de brida Uniko de Ø200 mm a Ø220 mm",
                    "Kit adaptador de brida Uniko de Ø206",
                ]}
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Como Instalar los Motores de Enrollables?"} descripcionInstalacion={"En este video puedes ver cómo se instalan estos equipos, recuerda que la instalación es similar, pero la configuración dependerá de la marca que tengas."} urlInstalacion={"https://www.youtube.com/watch?v=H6RquQl6WY8"} titleVideoInstalacion={"Instalación de motor para puerta enrollable"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
