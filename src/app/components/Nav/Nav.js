"use client"
import { useState } from "react"
import Link from "next/link"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
    setDropdownOpen(false)
  }
  
  const handleCloseMenu = () => {
    setIsOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav className="bg-navbar-dark text-white relative z-50">
      <div className="container mx-auto px-2 md:px-4 flex flex-nowrap items-center justify-between h-16">
        {/* Logo con flex-shrink-0 */}
        <Link 
          href="/" 
          className="text-lg font-bold flex-shrink-0"
          onClick={handleCloseMenu}
        >
          Deneb Tecnologia
        </Link>
        {/* Botón mobile */}
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
        {/* Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
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
                  className={`
                    mt-2 rounded-md shadow-lg py-2 z-20
                    bg-white text-gray-800
                    lg:absolute lg:w-56
                  `}
                >
                  <li>
                    <Link href="/motores-para-puertas/motores-corredizos" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      Motores para Puertas Correderas
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores-para-puertas/motores-basculantes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      Motores para Puertas Basculantes
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores-para-puertas/motores-batientes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      Motores para Puertas Batientes
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores-para-puertas/motores-enrollables" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      Motores para Puertas Enrollables
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Beneficios */}
            <li>
              <a href="#beneficios" className="px-3 py-2 hover:text-accent transition"
              onClick={handleCloseMenu}
              >
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
      </div>
      {/* Menú móvil */}
      <div
        className={`${isOpen ? "block" : "hidden"} 
          absolute top-16 left-0 w-full lg:hidden bg-navbar-dark`}
      >
        {/* Agregamos el padding */}
        <ul className="flex flex-col px-4 py-3 space-y-2">
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
              <ul
                className={`
                  my-2 rounded-md shadow-lg py-2 z-20 w-full
                  bg-white text-gray-800
                `}
              >
                <li>
                  <Link href="/motores-para-puertas/motores-corredizos" className="block px-4 py-2 hover:bg-gray-100" onClick={handleMenu}
                  >
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
              className="px-4 py-2 rounded bg-[#ffc107] text-black font-medium hover:bg-accent/80 transition" onClick={handleCloseMenu}
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}