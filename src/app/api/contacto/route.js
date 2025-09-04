// src/app/api/contacto/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // Importa Nodemailer

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, correo, telefono, mensaje } = body;

    // 1. Validación básica de datos
    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { message: 'Nombre, correo y mensaje son obligatorios.' },
        { status: 400 }
      );
    }

    // 2. Configuración del transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de Gmail
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación
      },
    });

    // 3. Opciones del correo electrónico a enviar
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'paspiazusabando@gmail.com', // Receptor
      subject: `Nuevo mensaje de contacto de: ${nombre}`,
      html: `
        <h2>Mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        ${
          telefono
            ? `<p><strong>Teléfono:</strong> ${telefono}</p>`
            : ''
        }
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    // 4. Envío del correo electrónico
    await transporter.sendMail(mailOptions);

    // 5. Respuesta de éxito
    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al procesar el formulario o enviar el correo:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor al enviar el mensaje.' },
      { status: 500 }
    );
  }
}
