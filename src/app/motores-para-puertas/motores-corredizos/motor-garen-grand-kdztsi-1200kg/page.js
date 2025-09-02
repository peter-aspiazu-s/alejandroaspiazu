import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorGarenGrandKdzTsi1000kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Garen Gran KDZ TSI 1000KG"
                categoria="Motor corredizo"
                descripcion="Este equipo representa una versión mejorada del modelo Gran Kdz, diseñada para manejar portones de hasta 1200 kg. Ideal para condominios y entornos industriales, su capacidad de ciclos continuos garantiza un uso superintensivo. Destaca por su impresionante velocidad, recorriendo 3 metros en tan solo 6 segundos. Con una potencia de 1/2 HP, el motor es compatible con voltajes de 110V y 220V AC."
                marca="Garen"
                imagen="/images/grandkdz.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Gran KDZ TSI"
                detalles={[
                    "Fuerza 1/2 HP",
                    "Arrastra puertas de peso máximo de 1200 kg",
                    "Soporta hasta 200 Controles Remotos",
                    "Tiempo de apertura (Recorre tres metros en 6 segundos)",
                    "Soporta cremalleras Pesadas",
                    "Pertenece a la Marca Brasileña Garen",
                    "Funciona ciclos continuos",
                    "Funciona a 110/220 voltios AC.",
                ]}
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo hacer la Instalación del Motor Grand KDZ?"} descripcionInstalacion={"Antes de instalar el motor, es crucial medir el ancho de la puerta para determinar la cantidad de cremallera necesaria. A continuación, prepare una base para el motor, ya sea de metal o cemento, lo suficientemente elevada para proteger el equipo de la humedad. Una vez que el motor esté en su lugar, mida y fije las cremalleras a la puerta, asegurándose de que engranen perfectamente con la rueda del motor. Por último, localice una toma de corriente de 220V cerca para una conexión limpia y discreta, y así el equipo estará listo para ser configurado."} urlInstalacion={"https://www.youtube.com/watch?v=9uFOTN4zMB0"} titleVideoInstalacion={"Instalacion de motor Niid Garen"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
