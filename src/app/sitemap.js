// Nota: Este archivo debe estar en el directorio `app/sitemap.js` y generará automáticamente el sitemap.xml.

// Define la URL base de tu sitio.
const BASE_URL = 'https://denebtecnologia.vercel.app';

// Simulación de datos de productos.
// En tu aplicación real, esta información se obtendría de una base de datos o API.
const motoresCorredizos = [
    { slug: 'motor-accessmatic-pitbull-400kg' },
    { slug: 'motor-elite-slide-400kg' },
    { slug: 'motor-roger-h30-600kg' },
    { slug: 'motor-roger-bm30-400kg' },
    { slug: 'motor-roger-bh30-600kg' },
    { slug: 'motor-garen-niid-400kg' },
    { slug: 'motor-garen-kdz-500kg' },
    { slug: 'motor-ditec-ion' },
    { slug: 'motor-ditec-neos' },
    { slug: 'motor-garen-grand-kdz-1000kg' },
    { slug: 'motor-garen-grand-kdztsi-1200kg' },
    { slug: 'motor-bft-icaro-smart-ac-a-2000kg' },
    { slug: 'motor-roger-bg30-2200kg' },
];

const motoresBasculantes = [
    { slug: 'motor-liftmaster-1-2-hp' },
    { slug: 'motor-craftsman-1-2-hp' },
];

const motoresBatientes = [
    { slug: 'motor-garen-pivo-75' },
    { slug: 'motor-roger-serie-be20-200' },
    { slug: 'motor-ditec-pwr' },
    { slug: 'motor-roger-serie-be20-400' },
    { slug: 'motor-garen-pivo-110' },
    { slug: 'motor-roger-smarty' },
    { slug: 'motor-roger-serie-be20-500' },
    { slug: 'motor-elsamec-uniko' },
];

const motoresEnrollables = [
    { slug: 'motor-elsamec-uniko' },
];

export default function sitemap() {
    const lastModified = new Date();

    // Rutas estáticas de tu sitio.
    const staticRoutes = [
        {
            url: `${BASE_URL}/`,
            lastModified,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/motores-para-puertas/motores-corredizos`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/motores-para-puertas/motores-basculantes`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/motores-para-puertas/motores-batientes`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/motores-para-puertas/motores-enrollables`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Crea las URLs para los productos de cada categoría, uniendo la ruta base, la categoría y el slug del producto.
    const corredizosRoutes = motoresCorredizos.map(motor => ({
        url: `${BASE_URL}/motores-para-puertas/motores-corredizos/${motor.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const basculantesRoutes = motoresBasculantes.map(motor => ({
        url: `${BASE_URL}/motores-para-puertas/motores-basculantes/${motor.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const batientesRoutes = motoresBatientes.map(motor => ({
        url: `${BASE_URL}/motores-para-puertas/motores-batientes/${motor.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const enrollablesRoutes = motoresEnrollables.map(motor => ({
        url: `${BASE_URL}/motores-para-puertas/motores-enrollables/${motor.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Combina todas las rutas en un solo arreglo.
    return [
        ...staticRoutes,
        ...corredizosRoutes,
        ...basculantesRoutes,
        ...batientesRoutes,
        ...enrollablesRoutes,
    ];
}
