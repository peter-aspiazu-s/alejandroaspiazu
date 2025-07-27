import Link from "next/link"

export const Nav = () => {
  return (
    // NAV 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand fw-bold" href="/">Alejandro Aspiazu</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#motores">Motores</a></li>
                    <li className="nav-item"><a className="nav-link" href="#beneficios">Beneficios</a></li>
                    <li className="nav-item"><a className="btn btn-accent" href="#contacto">Contáctanos</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
