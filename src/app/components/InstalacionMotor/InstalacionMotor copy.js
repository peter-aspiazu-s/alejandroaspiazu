export const InstalacionMotor = ({tituloInstalacion, descripcionInstalacion, urlInstalacion, titleVideoInstalacion}) => {

    const embedUrl = urlInstalacion.includes("watch?v=") 
    ? urlInstalacion.replace("watch?v=", "embed/") 
    : urlInstalacion;

  return (
    <section className="bg-white py-16" id="instalacion-motor">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Texto */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {tituloInstalacion}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {descripcionInstalacion}
        </p>

        {/* Video de YouTube */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={embedUrl}
            title={titleVideoInstalacion}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
