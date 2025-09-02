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
    title: "Motor Ditec PWR para Portones Batientes | Deneb Tecnología",
    description: "Descubre la gama de motores Ditec PWR para portones batientes. Con modelos para diferentes tamaños y pesos, estos motores electromecánicos ofrecen soluciones de automatización confiables y eficientes. Conoce las características técnicas de cada modelo.",
};

export default function MotorDitecPwr() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Ditec PWR"
                categoria="Motor batiente"
                descripcion="Ditec, una marca líder en la automatización de portones, presenta su amplia gama de productos PWR. Esta línea de motores se compone de cinco modelos, cada uno con distintas capacidades para mover portones batientes de diferentes tamaños."
                marca="ditec"
                imagen="/images/ditec-batiente.webp"
                enlacePrecios="/motores-para-puertas/motores-batientes"
                tipoMotor="Batientes"
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor Dítec PWR25H - 2.5m"
                detalles={[
                    "Automatismo Electromecánico: Irreversible para hojas batientes de hasta 2.5 metros de ancho",
                    "Control de Carrera: Stop Mecánico",
                    "Capacidad Máxima: 400kg x 1.5m/ 200 kg x 2.5m",
                    "Suministro Eléctrico: 24Vcc",
                    "Energía Máxima : 5A",
                    "Potencia Adsorbida: 55W nom. /120W max.",
                    "Empuje: 2000N",
                    "Tiempo de Apertura: 10÷60 s / 90°",
                    "Recorrido de Trabajo Máximo: 350 mm",
                    "Automatismo de apertura máxima: 110°",
                    "Intermitencia: 30 ciclos consecutivos a 20°C",
                    "Ciclos de Trabajo: frecuente hasta 150.000 ciclos",
                    "Sistema de desbloqueo para apertura manual por medio de llave",
                    "Temperatura de funcionamiento: -20°C / +55°C (-35°C / +55°C con NIO activado)",
                    "Grado de Protección: IP44",
                    "Peso (kg): 7.8",
                    "Panel de Control: LCU30H o LCU40H",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor Dítec PWR35H - 3.5m"
                detalles={[
                    "Automatismo Electromecánico: Irreversible para hojas batientes de hasta 3.5 metros de ancho",
                    "Características Técnicas del Motor Dítec PWR35H - 3.5m",
                    "Capacidad Máxima: 600kg x 1.75m/ 250 kg x 3.5m",
                    "Suministro Eléctrico: 24Vcc",
                    "Energía Máxima : 5.5A",
                    "Potencia Adsorbida: 65W nom. /132W max.",
                    "Empuje:3000N",
                    "Tiempo de Apertura: 14÷80 s / 90°",
                    "Recorrido de Trabajo Máximo: 450 mm",
                    "Automatismo de apertura máxima: 110°",
                    "Intermitencia: 30 ciclos consecutivos a 20°C",
                    "Ciclos de Trabajo: frecuente hasta 300.000 ciclos",
                    "Sistema de desbloqueo para apertura manual por medio de llave",
                    "Temperatura de funcionamiento: -20°C / +55°C (-35°C / +55°C con NIO activado)",
                    "Grado de Protección: IP44",
                    "Peso (kg): 9",
                    "Panel de Control: LCU30H o LCU40H",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas de los Motores Dítec PWR50H / PWR50HV / PWR50HR - 5m"
                detalles={[
                    "Automatismo Electromecánico: Irreversible para hojas batientes de hasta 5 metros de ancho",
                    "Control de Carrera: stop mecánico",
                    "Capacidad Máxima: 800kg x 1.75m/ 280 kg x 5m",
                    "Suministro Eléctrico: 24Vcc",
                    "Energía Máxima : 12A",
                    "Potencia Adsorbida: 65W nom. /288W max.",
                    "Empuje:6000N",
                    "Tiempo de Apertura: 14÷80 s / 90°",
                    "Recorrido de Trabajo Máximo: 500 mm",
                    "Automatismo de apertura máxima: 120°",
                    "Intermitencia: 30 ciclos consecutivos a 20°C",
                    "Ciclos de Trabajo: frecuente hasta 450.000 ciclos",
                    "Sistema de desbloqueo para apertura manual por medio de llave",
                    "Temperatura de funcionamiento: -20°C / +55°C (-35°C / +55°C con NIO activado)",
                    "Grado de Protección: IP44",
                    "Peso (kg): 10.5",
                    "Panel de Control: LCU40H",
                ]}
                pdfUrl="/pdf/4.-Ditec-PWR-Data-sheet_ES.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Como Instalar los Motores de Brazos?"} descripcionInstalacion={"En este video puedes ver cómo se instalan estos equipos, recuerda que la instalación es similar, pero la configuración dependerá de la marca que tengas."} urlInstalacion={"https://www.youtube.com/watch?v=N2QwRxKBLxg"} titleVideoInstalacion={"Instalación de motor para puerta batiente"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
