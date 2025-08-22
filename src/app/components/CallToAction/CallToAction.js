import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-10">
      <div className="container mx-auto px-4">
        <h4 className="text-2xl font-semibold mb-6">
          ¿Interesado en automatizar tu portón?
        </h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Botón de llamada */}
          <a
            href="tel:+593960067820"
            className="inline-flex items-center px-6 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faPhone} size="lg" />
            Llámanos Ahora
          </a>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.link/4ajisn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
