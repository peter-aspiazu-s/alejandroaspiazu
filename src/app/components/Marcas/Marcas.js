export const Marcas = () => {
  return (
    // MARCAS
    <section className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Marcas que Usamos</h2>
        <p className="text-lg text-gray-600 mb-10">
          Trabajamos con las mejores marcas en automatización de puertas
        </p>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <img
            src="/images/Logo-Liftmaster.webp"
            alt="LiftMaster"
            className="max-h-24 mx-auto object-contain"
          />
          <img
            src="/images/Logo-Ditec.webp"
            alt="Ditec"
            className="max-h-24 mx-auto object-contain"
          />
          <img
            src="/images/Logo-Roger.webp"
            alt="Roger"
            className="max-h-24 mx-auto object-contain"
          />
          <img
            src="/images/Logo-Elsamec.webp"
            alt="Elsamec"
            className="max-h-24 mx-auto object-contain"
          />
          <img
            src="/images/Garen-Logo.webp"
            alt="Garen"
            className="max-h-24 mx-auto object-contain"
          />
          <img
            src="/images/craftsman.webp"
            alt="Craftsman"
            className="max-h-24 mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
