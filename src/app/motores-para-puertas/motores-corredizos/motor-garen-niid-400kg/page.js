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
  title: "Motor Garen Niid 400kg para Portones Corredizos | Deneb Tecnología",
  description: "Descubre el motor Garen Niid 400kg, ideal para portones corredizos residenciales. Rápido y fiable, con 7 ciclos/hora y apertura de 3m en 6s. Conoce sus características y beneficios.",
};

export default function MotorGarenNiid400kg() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Garen Niid 400KG"
                categoria="Motor corredizo"
                descripcion="Este motor es una solución eficiente para automatizar portones corredizos. Trabaja a 110V y puede mover puertas de hasta 600 kg, aunque se recomienda un peso máximo de 400 kg para un rendimiento óptimo. Su uso es ideal para portones residenciales, con una frecuencia de hasta 7 aperturas por hora. Destaca por su velocidad de apertura, de 7 a 14 segundos, y es compatible con hasta 200 controles remotos. Fabricado en Brasil por la reconocida empresa Garen, el equipo incluye una base y una cubierta protectora contra el sol y el polvo. Su configuración es sencilla gracias a los botones superiores protegidos y a la llave de configuración que también sirve para desbloquear el sistema manualmente en caso de fallos de energía o pérdida de controles."
                marca="Garen"
                imagen="/images/niidgaren.webp"
                enlacePrecios="/motores-para-puertas/motores-corredizos"
                tipoMotor="Corredizos"
            />
            <DetallesTecnicosMotor
                titulo="Detalles Técnicos del Motor Niid"
                detalles={[
                    "Residencial",
                    "Mueve puertas que pesen hasta 400 kg",
                    "Trabaja a 110/220 voltios AC",
                    "7 Ciclos por hora",
                    "Recorre 3 metros en 6 segundos de apertura"
                ]}
                pdfUrl="/pdf/MANUAL-CORREDIZO-NIID.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo hacer la Instalación del Motor Niid?"} descripcionInstalacion={"Antes de instalar el motor, es crucial medir el ancho de la puerta para determinar la cantidad de cremallera necesaria. A continuación, prepare una base para el motor, ya sea de metal o cemento, lo suficientemente elevada para proteger el equipo de la humedad. Una vez que el motor esté en su lugar, mida y fije las cremalleras a la puerta, asegurándose de que engranen perfectamente con la rueda del motor. Por último, localice una toma de corriente de 110V cercana para una conexión limpia y discreta, y así el equipo estará listo para ser configurado."} urlInstalacion={"https://www.youtube.com/watch?v=9uFOTN4zMB0"} titleVideoInstalacion={"Instalación de motor niid garen para portón corredizo"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
