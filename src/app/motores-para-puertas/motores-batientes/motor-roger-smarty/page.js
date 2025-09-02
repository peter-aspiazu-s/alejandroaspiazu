import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorRogerSmarty() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Roger SMARTY"
                categoria="Motor batiente"
                descripcion="Los motores Roger son conocidos por su durabilidad y eficacia, capaces de automatizar todo tipo de portones. En esta ocasión, te presentamos la línea SMARTY, diseñada específicamente para puertas batientes de una o dos hojas. El motor SMARTY se divide en cinco versiones, cada una más potente que la anterior. Aunque todos realizan el mismo trabajo, su diferencia radica en la fuerza y en la capacidad de mover puertas de mayor o menor tamaño."
                marca="roger"
                imagen="/images/roger-smarty.webp"
                enlacePrecios="/motores-para-puertas/motores-batientes"
                tipoMotor="Batientes"
            />
            <DetallesTecnicosMotor
                titulo="Descripción del Motor Roger SMARTY 5"
                detalles={[
                    "Reductor Irreversible",
                    "Longitud máxima de la hoja 5 metros máx. de largo cada hoja",
                    "Alimentación línea 230V CA 115V CA 50/60Hz +-10%",
                    "Alimentación motor Brushless 36 V",
                    "Potencia nominal 200 W",
                    "Frecuencia de uso Superintensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP44",
                    "Carrera máxima 370 mm totales",
                    "Tiempo de apertura a 90° 25 – 40 s",
                    "Velocidad de maniobra 1,6 – 1 cm/s",
                    "Empuje 600 – 7000 N",
                    "Codificador nativo digital",
                    "Tipo de final de carrera 2 Topes mecánicos regulables para apertura y cierre",
                    "Centralita EDGE1/BOX",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1.000",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Descripción del Motor Roger SMARTY 5R5"
                detalles={[
                    "Reductor Irreversible",
                    "Longitud máxima de la hoja 5 metros máx. de largo cada hoja",
                    "Alimentación línea 230V CA 115V CA 50/60Hz +-10%",
                    "Alimentación motor Brushless 36 V",
                    "Potencia nominal 200 W",
                    "Frecuencia de uso Superintensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP44",
                    "Carrera máxima 370 mm totales",
                    "Tiempo de apertura a 90° 25 – 40 s",
                    "Velocidad de maniobra 1,8 – 1,2 cm/s",
                    "Empuje 600 – 6500 N",
                    "Codificador nativo digital EMA",
                    "Tipo de final de carrera 2 Topes mecánicos regulables para apertura y cierre",
                    "Centralita EDGE1/BOX (A partir de la versión P3.20)",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1.000",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Descripción del Motor Roger SMARTY 7"
                detalles={[
                    "Reductor Irreversible",
                    "Longitud máxima de la hoja 7 metros máx. de largo cada hoja",
                    "Alimentación línea 230V CA 115V CA 50/60Hz +-10%",
                    "Alimentación motor Brushless 36 V",
                    "Potencia nominal 200 W",
                    "Frecuencia de uso Superintensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP44",
                    "Carrera máxima 370 mm totales",
                    "Tiempo de apertura a 90° 25 – 40 s",
                    "Velocidad de maniobra 1,6 – 1 cm/s",
                    "Empuje 600 – 7000 N",
                    "Codificador nativo digital EMA",
                    "Tipo de final de carrera 2 Topes mecánicos regulables para apertura y cierre",
                    "Centralita EDGE1/BOX",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1.000",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Descripción del Motor Roger SMARTY 7R"
                detalles={[
                    "Reductor Irreversible",
                    "Longitud máxima de la hoja 7 metros máx. de largo cada hoja",
                    "Alimentación línea 230V CA 115V CA 50/60Hz +-10%",
                    "Alimentación motor Brushless 36 V",
                    "Potencia nominal 200 W",
                    "Frecuencia de uso Superintensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP44",
                    "Carrera máxima 370 mm totales",
                    "Tiempo de apertura a 90° 35 – 50 s",
                    "Velocidad de maniobra 1,6 – 1 cm/s",
                    "Empuje 600 – 6500 N",
                    "Codificador nativo digital EMA",
                    "Tipo de final de carrera 2 Topes mecánicos regulables para apertura y cierre",
                    "Centralita EDGE1/BOX",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1.000",
                ]}
            />
            <DetallesTecnicosMotor
                titulo="Descripción del Motor Roger SMARTY 4HS"
                detalles={[
                    "Reductor Irreversible",
                    "Longitud máxima de la hoja 7 metros máx. de largo cada hoja",
                    "Alimentación línea 230V CA 115V CA 50/60Hz +-10%",
                    "Alimentación motor Brushless 36 V",
                    "Potencia nominal 200 W",
                    "Frecuencia de uso Superintensivo",
                    "Temperatura de funcionamiento -20 +55°C",
                    "Grado de protección IP44",
                    "Carrera máxima 370 mm totales",
                    "Tiempo de apertura a 90° 15 – 25 s",
                    "Velocidad de maniobra 1,6 – 1 cm/s",
                    "Empuje 600 – 4500 N",
                    "Codificador nativo digital EMA",
                    "Tipo de final de carrera 2 Topes mecánicos regulables para apertura y cierre",
                    "Centralita EDGE1/BOX (A partir de la versión P3.05)",
                    "Ciclos de maniobra al día (apertura y cierre – 24 h sin parar) 1.000",
                ]}
                pdfUrl="/pdf/3.-SMARTY_ESP_2018.pdf"
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
