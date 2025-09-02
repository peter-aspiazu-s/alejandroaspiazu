import Image from "next/image"
import Link from "next/link"

export const MotorDetalle = ({
  titulo,
  categoria,
  descripcion,
  marca,
  imagen,
  enlacePrecios,
  tipoMotor
}) => {
  return (
    <section className="bg-white py-16" id="motor-detalle">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Imagen del motor */}
        <div className="relative w-full h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden shadow">
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texto */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{titulo}</h1>
          <p className="text-sm text-gray-500 italic mb-4">
            {categoria}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {descripcion}
          </p>

          <p className="text-md text-gray-600 mb-6">
            <strong>Marca:</strong> {marca}
          </p>

          <Link
            href={enlacePrecios}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded transition"
          >
            Conoce todos nuestros Motores {tipoMotor}
          </Link>
        </div>
      </div>
    </section>
  )
}
