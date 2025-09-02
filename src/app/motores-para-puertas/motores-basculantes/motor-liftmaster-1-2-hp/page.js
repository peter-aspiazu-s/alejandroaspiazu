import { Beneficios } from "@/app/components/Beneficios/Beneficios";
import { CallToAction } from "@/app/components/CallToAction/CallToAction";
import { Contactos } from "@/app/components/Contactos/Contactos";
import { DetallesTecnicosMotor } from "@/app/components/DetallesTecnicosMotor/DetallesTecnicosMotor";
import { InstalacionMotor } from "@/app/components/InstalacionMotor/InstalacionMotor";
import { Marcas } from "@/app/components/Marcas/Marcas";
import { MotorDetalle } from "@/app/components/MotorDetalle/MotorDetalle";
import { TrabajosRealizados } from "@/app/components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "@/app/components/Youtube/Youtube";


export default function MotorLiftmaster1y2hp() {
    return (
        <>
            <MotorDetalle
                titulo="Motor Liftmaster 1210E - 1/2HP"
                categoria="Motor basculante"
                descripcion="Descubre las características de un motor para puertas de garaje potente y confiable. Este artículo se centra en analizar en detalle sus especificaciones técnicas y los beneficios que ofrece a los usuarios."
                marca="Liftmaster"
                imagen="/images/81550-1.webp"
                enlacePrecios="/motores-para-puertas/motores-basculantes"
                tipoMotor="Basculantes"
            />
            <DetallesTecnicosMotor
                titulo="Características Técnicas del Motor Liftmaster 1210E"
                detalles={[
                    "Potencia nominal: 1/2 HP",
                    "Velocidad de apertura y cierre: 7 pulgadas por segundo",
                    "Color del motor: gris oscuro",
                    "Accesorios incluidos: control remoto de tres botones, unidad de potencia, riel de acero sólido, sistema de seguridad infrarrojo, sistema de luz de cortesía, manual de usuario y accesorios de montaje",
                    "Accesorios recomendados: batería de respaldo, llave de desconexión manual, sensor de contacto de borde y control de entrada sin llave",
                    "Otras características: sistema de frenado electrónico, sensor de detección de obstáculos, tecnología de transmisión de cadena, caja de engranajes de aluminio fundido a presión y sistema de protección contra sobrecalentamiento.",
                ]}
                pdfUrl="/pdf/Detalle-Tecnicos-Motor-Liftmaster-1210E.pdf"
            />
            <CallToAction />
            <InstalacionMotor tituloInstalacion={"¿Cómo instalar un motor para puerta de garaje basculante?"} descripcionInstalacion={"Comprender el proceso de instalación te permite verificar si el trabajo de un técnico fue bien hecho. Además, si te animas, puedes considerar instalar el motor por tu cuenta y ahorrar el costo de la mano de obra. Es vital recordar que no todos los motores de cadena son iguales; aunque el proceso sea similar, siempre es mejor buscar un tutorial específico para el modelo que adquiriste."} urlInstalacion={"https://www.youtube.com/watch?v=pyJkVShx5jQ"} titleVideoInstalacion={"Instalación de motor para puerta levadiza o basculante"} />
            <CallToAction />
            <Beneficios />
            <TrabajosRealizados />
            <Contactos />
            <Youtube />
            <Marcas />
        </>
    );
}
