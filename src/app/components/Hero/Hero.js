import { faTruck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-center text-white py-24 hero">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Automatiza Tu Vida
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Especialistas en motores para portones: seguridad, comodidad y modernidad.
        </p>
        
        <a 
          href="#contacto" 
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-500 transition"
        >
          Contáctanos Ahora
        </a>

        <p className="mt-6 text-lg font-semibold flex justify-center items-center gap-2">
          <span className="inline-block text-2xl"><FontAwesomeIcon icon={faTruck} /></span> Hacemos envíos a nivel nacional
        </p>
      </div>
    </section>
  )
}
