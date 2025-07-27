"use client";

import { useState } from 'react';

export const Contactos = () => {

    // 1. Estado para los campos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
    });

    // 2. Estado para el mensaje de respuesta (éxito o error)
    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // Para mostrar el mensaje con estilo de éxito o error

    // NUEVO ESTADO: Para controlar si el formulario se está enviando
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 3. Manejador de cambios para actualizar el estado cuando el usuario escribe
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value, // Actualiza la propiedad correcta (nombre, correo, mensaje)
        }));
    };

    // 4. Manejador del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto de recargar la página

        // Deshabilita el botón al inicio del envío
        setIsSubmitting(true);

        setResponseMessage('Enviando...'); // Muestra un mensaje de carga
        setIsSuccess(false); // Resetea el estado del mensaje

        try {
            const response = await fetch('/api/contacto', { // La URL de tu API Route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Envía los datos del formulario como JSON
            });

            const data = await response.json(); // Parsea la respuesta del servidor

            if (response.ok) { // Si la respuesta HTTP es 2xx (éxito)
                setResponseMessage(data.message || 'Mensaje enviado exitosamente.');
                setIsSuccess(true);
                setFormData({ nombre: '', correo: '', mensaje: '' }); // Limpia el formulario
            } else { // Si la respuesta HTTP es un error (ej. 400, 500)
                setResponseMessage(data.message || 'Error al enviar el mensaje. Inténtalo de nuevo.');
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setResponseMessage('Error de conexión. Por favor, intente más tarde.');
            setIsSuccess(false);
        } finally {
            // Habilita el botón de nuevo, sin importar el resultado
            setIsSubmitting(false);
        }
    };

    return (
        // CONTACTO
        <section id="contacto" className="section-bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>¿Listo para un Acceso Más Inteligente?</h2>
                    <p className="lead">Contáctanos y recibe asesoría personalizada</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <h5>Información de Contacto</h5>
                        <p><i className="bi bi-telephone-fill"></i> <strong>Tel:</strong><a href="tel:+593992867230"> +593 99 286 7230</a></p>
                        <p><i className="bi bi-envelope-fill"></i> <strong>Email:</strong> aspiazu.alex@gmail.com</p>
                        <p><i className="bi bi-geo-alt-fill"></i> <strong>Dirección:</strong> Guayaquil, Ecuador</p>
                        <div className="mt-3">
                            <a href="https://wa.link/pkvimu" className="me-3"><i className="bi bi-whatsapp" style={{ fontSize: "1.5rem;" }}></i></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="nombre" 
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="correo"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea 
                                    className="form-control" 
                                    id="mensaje" 
                                    rows="4"
                                    name="mensaje" 
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required></textarea>
                            </div>
                            <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                            </button>

                            {/* Mensaje de respuesta */}
                            {responseMessage && (
                                <div className={`alert mt-3 ${isSuccess ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {responseMessage}
                                </div>
                            )}

                            <div className="text-center mt-4">
                                <p>¿Prefieres contacto directo?</p>
                                <a href="tel:+593992867230" className="btn btn-outline-dark me-2">
                                    <i className="bi bi-telephone-fill"></i> Llamar
                                </a>
                                <a href="https://wa.link/pkvimu" target="_blank" className="btn btn-success">
                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                </a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
