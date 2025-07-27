
export const Motores = () => {
  return (
    // MOTORES
    <section id="motores" className="section-bg-light">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-md-6">
                    <h2>Soluciones a Medida para tu Portón Corredizo</h2>
                    <p>Ofrecemos motores con cremallera (ideal) y con cadena (alternativa viable si cremallera no es
                        factible), ambos robustos y efectivos.</p>
                    <ul>
                        <li><strong>Residencial:</strong> Para hogares, comodidad y seguridad diaria.</li>
                        <li><strong>Industrial:</strong> Alto tráfico (ciudadelas/industrias), rendimiento superior.
                        </li>
                    </ul>
                    <h5 className="mt-4">Marcas que confiamos:</h5>
                    <ul>
                        <li><strong>Garen:</strong> Ideal para uso residencial.</li>
                        <li><strong>Roger y Came:</strong> Para uso intensivo en ciudadelas e industrias.</li>
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
                                <img src="/images/came.webp"
                                    className="d-block w-100" alt="Motor Corredizo CAME" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/garen.webp"
                                    className="d-block w-100" alt="Motor Corredizo Garen NIID" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/garen2.webp"
                                    className="d-block w-100" alt="Motor Corredizo Garen KDZ" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/garen3.webp"
                                    className="d-block w-100" alt="Motor Corredizo Garen Gran KDZ" />
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
