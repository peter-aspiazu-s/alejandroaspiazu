import { faTruck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Hero = ({titulo, subtitulo, imagen}) => {
  return (
    <section 
      className="bg-gradient-to-r from-blue-800 to-blue-600 text-center text-white py-24 hero"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 63, 125, 0.7), rgba(0, 86, 179, 0.7)), url(${imagen})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center"
      }}  
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {titulo}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {subtitulo}
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
