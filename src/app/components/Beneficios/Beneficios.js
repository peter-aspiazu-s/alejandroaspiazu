
export const Beneficios = () => {
  return (
    // BENEFICIOS
    <section id="beneficios" className="section-bg-white">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-md-6">
                    <div id="carouselBeneficios" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner rounded shadow-sm">
                            <div className="carousel-item active">
                                <img src="/images/su-mejor-alternativa-para-la-automatizacion-de-puertas-en-vigo.jpg"
                                    className="d-block w-100" alt="Beneficio 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/baner-motores-de-garaje.webp"
                                    className="d-block w-100" alt="Beneficio 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/c3dbdb9126cf875e9afe6190dff2524911395ef2.jpg"
                                    className="d-block w-100" alt="Beneficio 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBeneficios"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselBeneficios"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>
                <div className="col-md-6">
                    <h2>Beneficios Reales de Automatizar tu Portón</h2>
                    <p>Automatizar no es solo estética, es comodidad y seguridad real:</p>
                    <ul>
                        <li><strong>Tiempo:</strong> Abre/cierra con un clic.</li>
                        <li><strong>Seguridad:</strong> Reduce riesgo de atracos.</li>
                        <li><strong>Privacidad:</strong> No te expones al bajarte.</li>
                        <li><strong>Accesibilidad:</strong> Perfecto para personas con movilidad reducida.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
