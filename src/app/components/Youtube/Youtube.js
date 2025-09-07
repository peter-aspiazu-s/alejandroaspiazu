// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

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
          {/* <FontAwesomeIcon icon={faYoutube} size="lg" />  */}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-8 h-8 fill-current">
              <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/>
            </svg>
          Visita nuestro canal
        </a>
      </div>
    </section>
  );
};
