"use client";

import { useState } from "react";
import { useGtagConversion } from '../../utils/useGtagConversion';

export const Contactos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Usamos el hook para obtener la función `reportConversion`.
  const { reportConversion } = useGtagConversion();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("Enviando...");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message || "Mensaje enviado exitosamente.");
        setIsSuccess(true);
        setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" });
      } else {
        setResponseMessage(data.message || "Error al enviar el mensaje.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setResponseMessage("Error de conexión. Intente más tarde.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para manejar el clic en los enlaces de llamada.
  const handleCallClick = (e) => {
    e.preventDefault();
    const telUrl = 'tel:+593960067820';
    // Etiqueta de conversión específica para las llamadas.
    const conversionLabel = 'qvaJCKz68JwbEP6h4ocD'; 
    reportConversion(telUrl, conversionLabel);
  };

  // Función para manejar el clic en los enlaces de WhatsApp.
  const handleWhatsappClick = (e) => {
    e.preventDefault();
    const whatsappUrl = 'https://wa.link/4ajisn';
    // Etiqueta de conversión específica para el WhatsApp del Contactos.
    const conversionLabel = 'zLl1CLi7jrYBEP6h4ocD'; 
    reportConversion(whatsappUrl, conversionLabel);
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">¿Listo para un Acceso Más Inteligente?</h2>
          <p className="text-lg text-gray-600">Contáctanos y recibe asesoría personalizada</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Información de Contacto</h5>
            <p className="mb-2">
              📞 <strong>Tel:</strong>{" "}
              {/* Enlace de llamada 1 actualizado */}
              <a href="#" className="text-blue-600 hover:underline" onClick={handleCallClick}>
                +593 96 006 7820
              </a>
            </p>
            <p className="mb-2">
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:paspiazusabando@gmail.com" className="text-blue-600 hover:underline">
                paspiazusabando@gmail.com
              </a>
            </p>
            <p className="mb-2">📍 <strong>Dirección:</strong> Guayaquil, Ecuador</p>
            <div className="mt-4 flex gap-4">
              {/* Enlace de WhatsApp 1 actualizado */}
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 text-2xl"
                aria-label="Abrir chat de WhatsApp"
                onClick={handleWhatsappClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-10 h-10 fill-current">
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61579852883215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-2xl"
                aria-label="Visitar página de Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-10 h-10 fill-current">
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@denebtecnologia?_t=ZM-8zQZUeM5cHO&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="Visitar página de TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-10 h-10 fill-current">
                  <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="correo" className="block font-medium mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block font-medium mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
              </button>

              {/* Mensaje de respuesta */}
              {responseMessage && (
                <div
                  className={`mt-3 p-3 rounded-lg text-center ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                >
                  {responseMessage}
                </div>
              )}

              <div className="text-center mt-6">
                <p className="mb-3 text-gray-600">¿Prefieres contacto directo?</p>
                <div className="flex justify-center gap-4">
                  {/* Enlace de llamada 2 actualizado */}
                  <a
                    href="#"
                    className="px-5 py-2 border-2 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition flex items-center gap-2"
                    onClick={handleCallClick}
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-7 h-7 fill-current">
                      <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                    </svg>Llamar
                  </a>
                  {/* Enlace de WhatsApp 2 actualizado */}
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2"
                    onClick={handleWhatsappClick}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-7 h-7 fill-current">
                      <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
