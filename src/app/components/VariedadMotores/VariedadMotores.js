import Image from "next/image"

export const VariedadMotores = ({motores, tituloMotores, descripcionMotores}) => {
  return (
    <section className="bg-gray-50 py-16" id="reseñas-motores">
      <div className="container mx-auto px-4">
        {/* Texto introductorio */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {tituloMotores}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {descripcionMotores}
          </p>
        </div>

        {/* Grid de motores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {motores.map((motor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={motor.imagen}
                  alt={motor.alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  {motor.titulo}
                </h5>
                <a
                  href={motor.enlace}
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition text-center mt-auto"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
