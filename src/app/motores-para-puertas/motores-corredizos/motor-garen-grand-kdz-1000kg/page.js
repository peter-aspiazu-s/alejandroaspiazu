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
  title: "Motor Garen Grand KDZ 1000kg para Portones Corredizos | Deneb Tecnología",
  description: "Potente motor Garen Grand KDZ para portones corredizos de hasta 1000kg. Ideal para uso superintensivo con 60 ciclos/hora. Ofrecemos instalación, soporte y durabilidad garantizada en Ecuador.",
};

export default function MotorGarenGrandKdz1000kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Garen Grand KDZ 1000kg"
                categoria="Motor corredizo"
                descripcion="Este motor es la solución ideal para automatizar puertas corredizas de hasta 1000 kg. Su diseño está pensado para un uso superintensivo, con capacidad para hasta 60 aperturas por hora, lo que lo hace perfecto para entornos de alto tráfico. Fabricado en Brasil por la reconocida empresa Garen, el equipo se destaca por su durabilidad y eficacia. Ofrece una velocidad de 12.8 m/min, permitiendo abrir 3 metros en tan solo 14 segundos. Incluye una cubierta protectora que resguarda el panel de control, y una llave para la configuración y el desbloqueo manual en caso de cortes de energía. Con este motor, podrás abrir tu puerta de forma segura con un simple control remoto, sin salir de tu vehículo."
                marca="Garen"
                imagen="/images/grandkdz.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Grand KDZ"
                detalles={[
                    "Fuerza 1/2 HP",
                    "Arrastra puertas de peso máximo de 1000 kg",
                    "Soporta hasta 200 Controles Remotos",
                    "Tiempo de apertura (Recorre tres metros en 14 segundos)",
                    "Soporta cremalleras Pesadas",
                    "Pertenece a la Marca Brasileña Garen",
                    "Funciona 60 ciclos/hora",
                    "Velocidad Nominal 12.8 m/min",
                    "Funciona a 220V"
                ]}
                pdfUrl="/pdf/MOTOR-PUERTA-CORREDIZO-GRAND-KDZ.pdf"
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
