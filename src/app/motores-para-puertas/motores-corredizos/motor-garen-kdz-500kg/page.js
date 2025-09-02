import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorGarenKdz500kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Garen KDZ 500KG"
                categoria="Motor corredizo"
                descripcion="Este motor es una solución exclusiva para puertas corredizas, diseñado para uso semi-industrial con una capacidad para mover portones de hasta 700 kg, aunque su rendimiento óptimo se logra con un peso de hasta 500 kg. Su robustez le permite operar hasta 30 veces por hora, haciéndolo ideal para entornos de uso intensivo como ciudadelas, estacionamientos y fábricas. El equipo funciona con cremalleras que se atornillan o sueldan a la puerta y ofrece una velocidad nominal de 20.9 m/min, logrando un tiempo de apertura de tan solo 9 segundos. Por lo general, se incluye con 2 controles remotos, pero su capacidad se extiende hasta 200, adaptándose a las necesidades de cada lugar."
                marca="Garen"
                imagen="/images/kdzgaren.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor KDZ"
                detalles={[
                    "Fuerza 1/4 HP",
                    "Arrastra puertas de peso máximo de 500 kg",
                    "Soporta hasta 200 Controles Remotos",
                    "Tiempo de apertura (Recorre tres metros en 9 segundos)",
                    "Soporta cremalleras livianas",
                    "Pertenece a la Marca Brasileña Garen",
                    "Funciona 30 ciclos/hora",
                    "Velocidad Nominal 20.9 m/min",
                    "Funciona a 110V",
                ]}
                pdfUrl="/pdf/manual-folheto-kdz-niid-espanhol-c07723-s-.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo hacer la Instalación del Motor KDZ?"} descripcionInstalacion={"Antes de instalar el motor, es crucial medir el ancho de la puerta para determinar la cantidad de cremallera necesaria. A continuación, prepare una base para el motor, ya sea de metal o cemento, lo suficientemente elevada para proteger el equipo de la humedad. Una vez que el motor esté en su lugar, mida y fije las cremalleras a la puerta, asegurándose de que engranen perfectamente con la rueda del motor. Por último, localice una toma de corriente de 110V cercana para una conexión limpia y discreta, y así el equipo estará listo para ser configurado."} urlInstalacion={"https://www.youtube.com/watch?v=9uFOTN4zMB0"} titleVideoInstalacion={"Instalación de motor kdz garen para portón corredizo"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
