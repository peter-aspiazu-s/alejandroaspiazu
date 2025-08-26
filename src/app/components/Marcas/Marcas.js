import Image from "next/image";

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
          <div className="relative mx-auto h-16 w-32 lg:h-20 lg:w-36 bg-gray-100">
            <Image
              src="/images/Logo-Liftmaster.webp"
              alt="LiftMaster"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className="relative mx-auto h-16 w-32 lg:h-20 lg:w-36 bg-gray-100">
            <Image
              src="/images/Logo-Ditec.webp"
              alt="Ditec" 
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className="relative mx-auto h-16 w-32 lg:h-20 lg:w-36 bg-gray-100">
            <Image
              src="/images/Logo-Roger.webp"
              alt="Roger"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className="relative mx-auto h-16 w-32 lg:h-20 lg:w-36 bg-gray-100">
            <Image
              src="/images/Logo-Elsamec.webp"
              alt="Elsamec"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className="relative mx-auto h-16 w-32 lg:h-20 lg:w-36 bg-gray-100">
            <Image
              src="/images/Garen-Logo.webp"
              alt="Garen"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className="relative mx-auto h-16 w-32 lg:h-20 lg:w-36 bg-gray-100">
            <Image
              src="/images/craftsman.webp"
              alt="Craftsman"
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
