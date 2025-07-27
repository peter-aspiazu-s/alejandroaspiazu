// src/app/api/contacto/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // Importa Nodemailer

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, correo, mensaje } = body;

    // 1. Validación básica de datos
    if (!nombre || !correo || !mensaje) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    // 2. Configuración del transportador de Nodemailer
    // Usamos Gmail como servicio. Asegúrate de que las variables de entorno estén configuradas.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de Gmail (ej. tu_correo@gmail.com)
        pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación de Gmail (no tu contraseña normal)
      },
    });

    // 3. Opciones del correo electrónico a enviar
    const mailOptions = {
      from: process.env.EMAIL_USER, // El remitente (generalmente tu propio correo de Gmail)
      to: 'aspiazu.alex@gmail.com', // El correo al que deseas recibir los mensajes
      subject: `Nuevo mensaje de contacto de: ${nombre}`,
      html: `
        <h2>Mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    // 4. Envío del correo electrónico
    await transporter.sendMail(mailOptions);

    // 5. Respuesta de éxito
    return NextResponse.json({ message: 'Mensaje enviado exitosamente!' }, { status: 200 });

  } catch (error) {
    console.error('Error al procesar el formulario o enviar el correo:', error);
    // Puedes diferenciar errores aquí (ej. si falla la validación vs. si falla el envío de correo)
    return NextResponse.json({ message: 'Error interno del servidor al enviar el mensaje.' }, { status: 500 });
  }
}