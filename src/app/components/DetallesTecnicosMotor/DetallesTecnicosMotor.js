export const DetallesTecnicosMotor = ({ titulo, detalles, pdfUrl }) => {
  return (
    <section className="bg-gray-50 py-12" id="detalles-tecnicos">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {titulo}
        </h2>

        {/* Lista de detalles */}
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {detalles.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        {/* Botón de descarga (opcional) */}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Ver Ficha Técnica (PDF)
          </a>
        )}

      </div>
    </section>
  )
}
