import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Youtube = () => {
  return (
    // YOUTUBE
    <section className="bg-white text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3">
          Conoce más en nuestro canal de YouTube
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Mira demostraciones, instalaciones reales y tutoriales de nuestros productos.
        </p>
        <a
          href="https://www.youtube.com/@TheAlexaspiazu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" /> Visita nuestro canal
        </a>
      </div>
    </section>
  );
};
