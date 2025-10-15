// Datos de la historia actualizada para Isla Aguada
import {BeachAccess, DirectionsBoat, EmojiEvents, Groups, Nature, Navigation, Public} from "@mui/icons-material";
import capitan from '../assets/capitan.jpeg';
export type HeroImage = {
    url: string;
    title: string;
    subtitle: string;
};

/***Header constantes***/
export const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Acerca de', href: '/acerca' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' }
];
export const contactInfo = {
    phone: '+1 234 567 8900',
    email: 'info@aventuramarina.com'
};

/***Fin Header constantes***/

/***About constantes***/
    // Datos de la historia actualizada para Isla Aguada
export const historyEvents = [
        {
            year: "1999",
            title: "Nacimiento del Turismo en Isla Aguada",
            description: "Fui el pionero del turismo en esta joya de Campeche, transformando la pesca tradicional en experiencias turísticas únicas. Comenzamos con una sola lancha, mostrando los manglares y la barrera de coral más importante del Golfo de México.",
            location: "Isla Aguada, Campeche",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
            highlights: [
                "Primer servicio turístico organizado en la isla",
                "Integración de pescadores locales como guías",
                "Rutas por la Laguna de Términos"
            ]
        },
        {
            year: "2005",
            title: "Expansión y Reconocimiento Regional",
            description: "Nuestra flota creció a 5 lanchas especializadas, incorporando tecnología de navegación y seguridad. Fuimos reconocidos por el Gobierno de Campeche como 'Empresa Turística Sostenible' por nuestro modelo de turismo comunitario.",
            location: "Laguna de Términos, Campeche",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=60",
            highlights: [
                "Certificación en turismo sostenible",
                "Alianzas con cooperativas pesqueras",
                "Rutas ecoturísticas establecidas"
            ]
        },
        {
            year: "2012",
            title: "Liderazgo en Ecoturismo",
            description: "Implementamos el primer programa de avistamiento responsable de delfines en la región. Nuestras rutas fueron incluidas en la Guía Oficial de Turismo de Campeche y recibimos el premio 'Turismo Verde' por nuestra conservación de manglares.",
            location: "Santuario del Manatí, Campeche",
            image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&auto=format&fit=crop&q=60",
            highlights: [
                "Programa de conservación de delfines",
                "Guías certificados en ecoturismo",
                "Premio Nacional de Turismo Sostenible"
            ]
        },
        {
            year: "2020",
            title: "Modernización y Sustentabilidad",
            description: "Incorporamos lanchas eléctricas silenciosas para minimizar el impacto ambiental. Desarrollamos la app 'Isla Aguada Tours' con realidad aumentada para mostrar la biodiversidad. Certificación EarthCheck por nuestras prácticas sostenibles.",
            location: "Reserva de la Biosfera, Campeche",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60",
            highlights: [
                "Primera flota eléctrica en el Golfo de México",
                "Tecnología AR en experiencias turísticas",
                "Certificación internacional EarthCheck"
            ]
        },
        {
            year: "2024",
            title: "25 Años de Legado y Futuro",
            description: "Celebramos un cuarto de siglo innovando en turismo responsable. Hemos transportado más de 75,000 visitantes, generado empleo para 50 familias y protegido 200 hectáreas de manglar. Lanzamos el programa 'Guardianes del Caribe Mexicano'.",
            location: "Isla Aguada & Caribe Mexicano",
            image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&auto=format&fit=crop&q=60",
            highlights: [
                "75,000+ experiencias creadas",
                "50 familias beneficiadas directamente",
                "200 hectáreas de manglar protegidas"
            ]
        }
    ];

// Galería de imágenes actualizada con fotos reales de Isla Aguada
export const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
        alt: "Atardecer en Isla Aguada",
        caption: "Atardeceres únicos en el Golfo de México",
        year: "2024"
    },
    {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop&q=60",
        alt: "Lancha turística en manglares",
        caption: "Navegación por los manglares de Campeche",
        year: "2024"
    },
    {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
        alt: "Delfines en Isla Aguada",
        caption: "Avistamiento responsable de delfines",
        year: "2023"
    },
    {
        src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format&fit=crop&q=60",
        alt: "Manglares de Campeche",
        caption: "Ecosistema de manglar protegido",
        year: "2023"
    },
    {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
        alt: "Aguas cristalinas Isla Aguada",
        caption: "Aguas cristalinas del Caribe Mexicano",
        year: "2024"
    },
    {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60",
        alt: "Naturaleza Isla Aguada",
        caption: "Biodiversidad única de la región",
        year: "2024"
    }
];

// Estadísticas actualizadas
export const stats = [
    {
        icon: <DirectionsBoat sx={{ fontSize: '3rem' }} />,
        number: "25+",
        label: "Años de Innovación",
        description: "Pioneros en turismo sostenible desde 1999"
    },
    {
        icon: <Groups sx={{ fontSize: '3rem' }} />,
        number: "75K+",
        label: "Experiencias Únicas",
        description: "Visitantes que descubrieron Isla Aguada"
    },
    {
        icon: <Nature sx={{ fontSize: '3rem' }} />,
        number: "200+",
        label: "Hectáreas Protegidas",
        description: "Manglares conservados activamente"
    },
    {
        icon: <Navigation sx={{ fontSize: '3rem' }} />,
        number: "15",
        label: "Rutas Futuristas",
        description: "Experiencias con tecnología AR"
    }
];

// Características únicas de Isla Aguada
export const features = [
    {
        icon: <Public sx={{ fontSize: '2.5rem' }} />,
        title: "Biodiversidad Única",
        description: "Hogar del delfín nariz de botella, manatíes y más de 200 especies de aves migratorias en la Reserva de la Biosfera."
    },
    {
        icon: <Nature sx={{ fontSize: '2.5rem' }} />,
        title: "Turismo Sostenible",
        description: "Primera empresa en Campeche con certificación EarthCheck y lanchas eléctricas de cero emisiones."
    },
    {
        icon: <BeachAccess sx={{ fontSize: '2.5rem' }} />,
        title: "Playas Vírgines",
        description: "Acceso exclusivo a playas prístinas y sistemas de manglar entre los mejor conservados de México."
    },
    {
        icon: <EmojiEvents sx={{ fontSize: '2.5rem' }} />,
        title: "Premios Nacionales",
        description: "Reconocidos por SEMARNAT y SECTUR por nuestro modelo de turismo comunitario y conservación."
    }
];

// Datos de Don Pasita
export const donPasitaInfo = {
    name: "Don Pasita",
    title: "Fundador y Guía Maestro",
    image: capitan,
    description: "Pionero del turismo sostenible en Isla Aguada con más de 25 años de experiencia navegando las aguas del Caribe Mexicano.",
    story: `"Soy Don Pasita, hijo de pescadores y amante del mar desde que tengo memoria. En 1999, cuando nadie veía el potencial turístico de nuestra isla, yo soñaba con mostrar al mundo esta maravilla natural. Comencé con una sola lancha prestada, llevando a los primeros visitantes a conocer nuestros manglares y delfines.\n\nHoy, después de 25 años, hemos creado un modelo de turismo que respeta la naturaleza y beneficia a nuestra comunidad. Cada tour que realizamos lleva un pedacito de mi corazón y mi compromiso con la conservación de este paraíso que llamamos hogar."`,
    characteristics: [
        "Conocedor de cada rincón de Isla Aguada",
        "Guía certificado en ecoturismo",
        "Pionero en avistamiento responsable",
        "Guardian de las tradiciones locales"
    ],
    yearsExperience: 25,
    toursGuided: 5000,
    favoriteQuote: "El mar no es solo nuestro trabajo, es nuestra vida y nuestro legado para las futuras generaciones."
};

/***Fin About constantes***/

/*** Home ***/
    // Datos reales de Isla Aguada
export const heroImages: HeroImage[] = [
        {
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'Descubre la Magia de Isla Aguada',
            subtitle: 'Paseos en lancha por la Laguna de Términos, avistamiento de delfines y playas vírgenes en el paraíso de Campeche.'
        },
        {
            url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'Playas de Arena Blanca',
            subtitle: 'Disfruta de kilómetros de playas vírgenes con arena blanca y aguas turquesas en el corazón del Golfo de México.'
        },
        {
            url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'Aguas Cristalinas',
            subtitle: 'Sumérgete en las aguas cristalinas que rodean Isla Aguada, perfectas para nadar y disfrutar del mar Caribe.'
        },
        {
            url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'Atardeceres Inolvidables',
            subtitle: 'Vive atardeceres espectaculares que pintan el cielo de naranja y rosa sobre las tranquilas aguas de la laguna.'
        },
        {
            url: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'Paraíso Natural',
            subtitle: 'Explora uno de los últimos paraísos naturales del sureste mexicano, donde la naturaleza se mantiene en estado puro.'
        }
    ];



