export const TrabajosRealizados = () => {
  const youtubeVideos = [
    { id: "PBKHMGmJw3w", alt: "Video de Trabajo 1" },
    { id: "8ZZj9q-sygE", alt: "Video de Trabajo 2" },
    { id: "RdVgQJUOTMk", alt: "Video de Trabajo 3" },
    { id: "k1jFldlCrPE", alt: "Video de Trabajo 4" },
    { id: "0iWOa8E2-FM", alt: "Video de Trabajo 5" },
    { id: "si0b1bofGvU", alt: "Video de Trabajo 6" },
    { id: "noYIpno35M0", alt: "Video de Trabajo 7" },
    { id: "NfKu9EjgQd0", alt: "Video de Trabajo 8" },
  ];

  return (
    <section id="galeria" className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trabajos Realizados
          </h2>
          <p className="text-lg text-gray-600">
            Algunos de nuestros proyectos en hogares, industrias y ciudadelas.
          </p>
        </div>

        {/* Grid de videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {youtubeVideos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              {/* Contenedor responsivo con aspect ratio */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                  title={video.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
