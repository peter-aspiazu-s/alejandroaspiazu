"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const router = useRouter() // Inicializa el hook useRouter

  const handleMenu = () => {
    setIsOpen(!isOpen)
    setDropdownOpen(false)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
    setDropdownOpen(false)
  }

  const handleSearchToggle = () => {
    setShowSearch(!showSearch)
    setSearchTerm("")
  }

  // Nueva función para manejar el evento de tecla
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push(`/motores-para-puertas/buscar/${searchTerm.trim()}`)
      setShowSearch(false) // Cierra el campo de búsqueda después de la redirección
      setSearchTerm("") // Limpia el término de búsqueda
    }
  }

  return (
    <nav className="bg-navbar-dark text-white relative z-50">
      <div className="container mx-auto px-2 md:px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold flex-shrink-0"
          onClick={handleCloseMenu}
        >
          Deneb Tecnologia
        </Link>

        {/* Sección derecha en desktop */}
        <div className="hidden lg:flex items-center lg:space-x-6">
          <ul className="flex items-center space-x-6">
            {/* Dropdown Motores */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center px-3 py-2 hover:text-accent transition"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-label="Menú de motores"
              >
                Motores
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul
                  className="mt-2 rounded-md shadow-lg py-2 z-20 bg-white text-gray-800 lg:absolute lg:w-56"
                >
                  <li>
                    <Link href="/motores-para-puertas/motores-corredizos" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Motores para Puertas Correderas
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores-para-puertas/motores-basculantes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Motores para Puertas Basculantes
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores-para-puertas/motores-batientes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Motores para Puertas Batientes
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores-para-puertas/motores-enrollables" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Motores para Puertas Enrollables
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Beneficios */}
            <li>
              <a href="#beneficios" className="px-3 py-2 hover:text-accent transition" onClick={handleCloseMenu}>
                Beneficios
              </a>
            </li>
            {/* Trabajos Realizados */}
            <li>
              <a href="#trabajos-realizados" className="block px-3 py-2 hover:text-accent transition" onClick={handleCloseMenu}>
                Trabajos Realizados
              </a>
            </li>
            {/* Contacto */}
            <li>
              <a
                href="#contacto"
                className="px-4 py-2 rounded bg-[#ffc107] text-black font-medium hover:bg-accent/80 transition"
                onClick={handleCloseMenu}
              >
                Contáctanos
              </a>
            </li>
          </ul>

          {/* Buscador */}
          <div className="flex items-center ml-4">
            <button
              onClick={handleSearchToggle}
              className="p-2 hover:text-accent transition"
              aria-label="Abrir buscador"
            >
              {showSearch ? (
                // Icono X (cuando está abierto el input)
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                  <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                </svg>
              ) : (
                // Icono lupa (cuando está cerrado el input)
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                  <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                </svg>
              )}
            </button>
            {showSearch && (
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // Maneja la tecla "Enter"
                placeholder="Buscar..."
                className="ml-2 px-3 py-1 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
            )}
          </div>
        </div>

        {/* Botón menú mobile */}
        <button
          onClick={handleMenu}
          className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none h-10 w-10"
          aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full lg:hidden bg-navbar-dark`}>
        <ul className="flex flex-col px-4 py-3 space-y-2">
          {/* Buscador móvil */}
          <li>
            <div className="flex items-center gap-2 px-3 py-2">
              <button
                onClick={handleSearchToggle}
                className="hover:text-accent transition"
              >
                {showSearch ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                  </svg>
                )}
              </button>
              Buscar
            </div>
            {showSearch && (
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // Maneja la tecla "Enter"
                placeholder="Buscar..."
                className="mt-2 w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
            )}
          </li>

          {/* Dropdown Motores */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full px-3 py-2 hover:text-accent transition"
            >
              Motores
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="my-2 rounded-md shadow-lg py-2 z-20 w-full bg-white text-gray-800">
                <li>
                  <Link href="/motores-para-puertas/motores-corredizos" className="block px-4 py-2 hover:bg-gray-100" onClick={handleMenu}>
                    Motores para Puertas Correderas
                  </Link>
                </li>
                <li>
                  <Link href="/motores-para-puertas/motores-basculantes" className="block px-4 py-2 hover:bg-gray-100" onClick={handleMenu}>
                    Motores para Puertas Basculantes
                  </Link>
                </li>
                <li>
                  <Link href="/motores-para-puertas/motores-batientes" className="block px-4 py-2 hover:bg-gray-100" onClick={handleMenu}>
                    Motores para Puertas Batientes
                  </Link>
                </li>
                <li>
                  <Link href="/motores-para-puertas/motores-enrollables" className="block px-4 py-2 hover:bg-gray-100" onClick={handleMenu}>
                    Motores para Puertas Enrollables
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Beneficios */}
          <li>
            <a href="#beneficios" className="block px-3 py-2 hover:text-accent transition" onClick={handleCloseMenu}>
              Beneficios
            </a>
          </li>
          {/* Trabajos Realizados */}
          <li>
            <a href="#trabajos-realizados" className="block px-3 py-2 hover:text-accent transition" onClick={handleCloseMenu}>
              Trabajos Realizados
            </a>
          </li>
          {/* Contacto */}
          <li>
            <a
              href="#contacto"
              className="px-4 py-2 rounded bg-[#ffc107] text-black font-medium hover:bg-accent/80 transition"
              onClick={handleCloseMenu}
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
