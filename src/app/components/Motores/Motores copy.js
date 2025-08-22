
export const Motores = () => {
  return (
    // MOTORES
    <section id="motores" className="section-bg-light">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-md-6">
                    <h2>Motores para Puertas de Garaje y Portones Industriales</h2>
                    <p>
                        Contamos con equipos especializados para la automatización de portones
                        industriales y puertas de garaje. Según el tipo, tamaño y uso de su puerta,
                        le recomendamos el motor más adecuado para garantizar rendimiento y
                        durabilidad.
                    </p>
                    <ul>
                        <li><strong>Residencial:</strong> Diseñados para hogares, brindan seguridad, 
                            confort y facilidad en el uso diario.</li>
                        <li><strong>Industrial:</strong> Ideales para zonas de alto tráfico como 
                            conjuntos, ciudadelas o industrias, ofreciendo potencia y máxima resistencia.</li>
                    </ul>
                    <h5 className="mt-4">Marcas que ofrecemos:</h5>
                    <ul>
                        <li><strong>Impervious:</strong> Opciones para uso residencial e industrial.</li>
                        <li><strong>Garen:</strong> Amplia gama de soluciones para viviendas y empresas.</li>
                        <li><strong>Roger:</strong> Motores de alto desempeño para todo tipo de portón.</li>
                        <li><strong>Came:</strong> Reconocida por su durabilidad tanto en hogares como en industrias.</li>
                        <li><strong>Elsamec:</strong> Sistemas confiables con versiones para uso residencial e intensivo.</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <div id="carouselMotores" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner rounded shadow-sm">
                            <div className="carousel-item active">
                                <img src="/images/roger.webp"
                                    className="d-block w-100" alt="Motor Corredizo ROGER" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/pivo-60.webp"
                                    className="d-block w-100" alt="Motor Pivotante Garen" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/81550-1.jpg"
                                    className="d-block w-100" alt="Motor Batiente Liftmaster" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/uniko1.jpg"
                                    className="d-block w-100" alt="Motor de Cadena Uniko 1" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMotores"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselMotores"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
