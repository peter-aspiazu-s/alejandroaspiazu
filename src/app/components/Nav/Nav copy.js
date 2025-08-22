import Link from "next/link"

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">Deneb Tecnologia</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            
            {/* Dropdown Motores */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="motoresDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Motores
              </a>
              <ul className="dropdown-menu" aria-labelledby="motoresDropdown">
                <li><Link className="dropdown-item" href="/motores/correderas">Motores para Puertas Correderas</Link></li>
                <li><Link className="dropdown-item" href="/motores/basculantes">Motores para Puertas Basculantes</Link></li>
                <li><Link className="dropdown-item" href="/motores/batientes">Motores para Puertas Batientes</Link></li>
                <li><Link className="dropdown-item" href="/motores/enrollables">Motores para Puertas Enrollables</Link></li>
              </ul>
            </li>

            {/* Beneficios */}
            <li className="nav-item">
              <a className="nav-link" href="#beneficios">Beneficios</a>
            </li>

            {/* Contacto */}
            <li className="nav-item">
              <a className="btn btn-accent" href="#contacto">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
