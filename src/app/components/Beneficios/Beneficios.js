
export const Beneficios = () => {
  return (
    // <!-- BENEFICIOS -->
    <section id="beneficios" className="section-bg-white">
        <div className="container">
            <div className="row align-items-center g-5">

            {/* <!-- Carrusel de imágenes --> */}
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

            {/* <!-- Texto de beneficios --> */}
            <div className="col-md-6">
                <h2>Beneficios Reales de Automatizar tu Portón</h2>
                <p>
                La automatización de portones no es solo un detalle moderno o estético, 
                es una mejora práctica que impacta directamente en tu día a día. 
                Estas son algunas de las ventajas más importantes:
                </p>
                <ul>
                <li>
                    <strong>Ahorro de tiempo:</strong> Olvídate de bajarte del auto para abrir o cerrar tu puerta. 
                    Con un clic entras y sales sin interrupciones.
                </li>
                <li>
                    <strong>Seguridad reforzada:</strong> Muchas veces los ladrones aprovechan cuando alguien 
                    se detiene a abrir su portón. Con un sistema automático, permaneces dentro de tu vehículo 
                    y reduces significativamente ese riesgo.
                </li>
                <li>
                    <strong>Más privacidad:</strong> Ya no necesitas manipular la puerta manualmente ni exponerte 
                    frente a vecinos o transeúntes, tu acceso se mantiene discreto.
                </li>
                <li>
                    <strong>Accesibilidad para todos:</strong> En hogares con personas mayores, con movilidad reducida 
                    o con portones pesados, este tipo de equipos es una verdadera ayuda al evitar esfuerzos innecesarios.
                </li>
                </ul>
            </div>
            </div>
        </div>
    </section>

  )
}
