"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

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
              <a href="tel:+593960067820" className="text-blue-600 hover:underline">
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
              {/* WhatsApp */}
              <a
                href="https://wa.link/4ajisn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 text-2xl"
                aria-label="Abrir chat de WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61579852883215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-2xl"
                aria-label="Visitar página de Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@denebtecnologia?_t=ZM-8zQZUeM5cHO&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="Visitar página de TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
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
                  className={`mt-3 p-3 rounded-lg text-center ${
                    isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {responseMessage}
                </div>
              )}

              <div className="text-center mt-6">
                <p className="mb-3 text-gray-600">¿Prefieres contacto directo?</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="tel:+593960067820"
                    className="px-5 py-2 border-2 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faPhone} size="lg" /> Llamar
                  </a>
                  <a
                    href="https://wa.link/4ajisn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" /> WhatsApp
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
