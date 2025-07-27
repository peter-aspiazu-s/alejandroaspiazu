
export const TrabajosRealizados = () => {

    const youtubeVideos = [
        { id: 'PBKHMGmJw3w', alt: 'Video de Trabajo 1' }, // Reemplaza VIDEO_ID_X con el ID real del video de YouTube
        { id: '8ZZj9q-sygE', alt: 'Video de Trabajo 2' },
        { id: 'RdVgQJUOTMk', alt: 'Video de Trabajo 3' },
        { id: 'k1jFldlCrPE', alt: 'Video de Trabajo 4' },
        { id: '0iWOa8E2-FM', alt: 'Video de Trabajo 5' },
        { id: 'si0b1bofGvU', alt: 'Video de Trabajo 6' },
        { id: 'noYIpno35M0', alt: 'Video de Trabajo 7' },
        { id: 'NfKu9EjgQd0', alt: 'Video de Trabajo 8' },
        // Añade más videos según necesites
    ];

    return (
        // TRABAJOS REALIZADOS
        <section id="galeria" className="section-bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Trabajos Realizados</h2>
                    <p className="lead">Algunos de nuestros proyectos en hogares, industrias y ciudadelas.</p>
                </div>
                <div className="row g-3">
                    {youtubeVideos.map((video, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            {/* Contenedor responsivo para el video */}
                            <div className="video-responsive rounded shadow-sm">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                                    title={video.alt}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
