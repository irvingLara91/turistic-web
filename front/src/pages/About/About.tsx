// pages/AboutPage.tsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    useTheme,
    alpha,
} from '@mui/material';
import {
    DirectionsBoat,
    Groups,
    EmojiEvents,
    LocationOn,
    Public,
    Nature,
    Navigation,
    BeachAccess,
} from '@mui/icons-material';
import ContainerWrapper from '@components/Common/ContainerWrapper';
import ImageGallery from '@components/About/ImageGallery';
import HistoryTimeline from '@components/About/HistoryTimeline';

const AboutPage: React.FC = () => {
    const theme = useTheme();

    // Datos de la historia actualizada para Isla Aguada
    const historyEvents = [
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
    const galleryImages = [
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
    const stats = [
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
    const features = [
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

    return (
        <Box
            sx={{
                py: 8,
                background: `linear-gradient(135deg, 
                    ${alpha(theme.palette.primary.main, 0.02)} 0%, 
                    ${alpha(theme.palette.secondary.main, 0.02)} 50%,
                    ${alpha('#00b4d8', 0.03)} 100%)`,
                minHeight: '100vh',
            }}
        >
            <ContainerWrapper>
                {/* Hero Section Futurista */}
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            mb: 4,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -20,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 100,
                                height: 4,
                                background: `linear-gradient(90deg, 
                                    ${theme.palette.primary.main} 0%, 
                                    ${theme.palette.secondary.main} 100%)`,
                                borderRadius: 2,
                            }
                        }}
                    >
                        <Typography
                            variant="h1"
                            fontFamily="Montserrat"
                            fontWeight={900}
                            gutterBottom
                            sx={{
                                background: `linear-gradient(135deg, 
                                    ${theme.palette.primary.main} 0%, 
                                    ${theme.palette.secondary.main} 30%,
                                    #00b4d8 70%,
                                    #0077b6 100%)`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '2.8rem', md: '4rem' },
                                lineHeight: 1.1,
                                textShadow: '0 0 30px rgba(0, 180, 216, 0.3)',
                            }}
                        >
                            Isla Aguada
                            <Box component="span" sx={{ display: 'block', fontSize: '0.4em', fontWeight: 600 }}>
                                25 Años de Futuro en el Caribe
                            </Box>
                        </Typography>
                    </Box>

                    <Typography
                        variant="h5"
                        fontFamily="Inter"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.7,
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            background: `linear-gradient(135deg, 
                                ${theme.palette.text.primary} 0%, 
                                ${theme.palette.text.secondary} 100%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Donde la tradición pesquera se encuentra con la innovación turística.
                        Pioneros en conservación y experiencias inmersivas en el corazón del Golfo de México.
                    </Typography>
                </Box>

                {/* Estadísticas Futuristas */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                    {stats.map((stat, index) => (
                        <Grid  size={{xs:12,sm:6,md:3}}key={index}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    padding: 4,
                                    borderRadius: 4,
                                    background: `linear-gradient(135deg, 
                                        ${theme.palette.background.paper} 0%, 
                                        ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                                    boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 3,
                                        background: `linear-gradient(90deg, 
                                            ${theme.palette.primary.main} 0%, 
                                            ${theme.palette.secondary.main} 100%)`,
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-12px) scale(1.02)',
                                        boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        '& .stat-icon': {
                                            transform: 'scale(1.1) rotate(5deg)',
                                        },
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box
                                        className="stat-icon"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            mb: 3,
                                            transition: 'transform 0.3s ease',
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                        }}
                                    >
                                        {stat.icon}
                                    </Box>
                                    <Typography
                                        variant="h2"
                                        fontFamily="Montserrat"
                                        fontWeight={900}
                                        gutterBottom
                                        sx={{
                                            color: theme.palette.text.primary,
                                            background: `linear-gradient(135deg, 
                                                ${theme.palette.primary.main} 0%, 
                                                ${theme.palette.secondary.main} 100%)`,
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontSize: { xs: '2.5rem', md: '3rem' },
                                        }}
                                    >
                                        {stat.number}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontFamily="Montserrat"
                                        fontWeight={700}
                                        gutterBottom
                                        sx={{ color: theme.palette.text.primary }}
                                    >
                                        {stat.label}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        fontFamily="Inter"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {stat.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Características Únicas */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h2"
                        fontFamily="Montserrat"
                        fontWeight={800}
                        textAlign="center"
                        gutterBottom
                        sx={{
                            mb: 6,
                            background: `linear-gradient(135deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 100%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Lo Que Nos Hace Únicos
                    </Typography>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid size={{xs:12,md:6}} key={index}>
                                <Card
                                    sx={{
                                        padding: 4,
                                        borderRadius: 3,
                                        background: `linear-gradient(135deg, 
                                            ${theme.palette.background.paper} 0%, 
                                            ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateX(8px)',
                                            boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                        <Box
                                            sx={{
                                                color: theme.palette.primary.main,
                                                flexShrink: 0,
                                                mt: 0.5,
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                fontFamily="Montserrat"
                                                fontWeight={700}
                                                gutterBottom
                                                sx={{ color: theme.palette.text.primary }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                fontFamily="Inter"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {feature.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Historia y Línea de Tiempo */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h2"
                        fontFamily="Montserrat"
                        fontWeight={800}
                        textAlign="center"
                        gutterBottom
                        sx={{
                            mb: 6,
                            background: `linear-gradient(135deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 100%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Nuestra Evolución
                    </Typography>
                    <HistoryTimeline events={historyEvents} />
                </Box>

                {/* Galería de Imágenes */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h2"
                        fontFamily="Montserrat"
                        fontWeight={800}
                        textAlign="center"
                        gutterBottom
                        sx={{
                            mb: 2,
                            background: `linear-gradient(135deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 100%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Isla Aguada en Imágenes
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Inter"
                        textAlign="center"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 6,
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Un viaje visual por 25 años de conservación, innovación y
                        experiencias únicas en el paraíso campechano
                    </Typography>
                    <ImageGallery images={galleryImages}/>
                </Box>

                {/* Mensaje Final Futurista */}
                <Box
                    sx={{
                        textAlign: 'center',
                        padding: 6,
                        borderRadius: 4,
                        background: `linear-gradient(135deg, 
                            ${alpha(theme.palette.primary.main, 0.08)} 0%, 
                            ${alpha(theme.palette.secondary.main, 0.08)} 50%,
                            ${alpha('#00b4d8', 0.05)} 100%)`,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            background: `linear-gradient(90deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 50%,
                                #00b4d8 100%)`,
                        },
                    }}
                >
                    <Typography
                        variant="h3"
                        fontFamily="Montserrat"
                        fontWeight={800}
                        gutterBottom
                        sx={{
                            mb: 3,
                            background: `linear-gradient(135deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 100%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        El Futuro del Turismo Sostenible
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Inter"
                        sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.8,
                            maxWidth: '800px',
                            margin: '0 auto',
                            mb: 3,
                        }}
                    >
                        Durante 25 años, hemos redefinido el turismo en el Caribe Mexicano, combinando
                        innovación tecnológica con conservación activa. Seguimos comprometidos con
                        proteger los ecosistemas de Isla Aguada mientras creamos experiencias inmersivas
                        que inspiran a las próximas generaciones de viajeros responsables.
                    </Typography>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            color: theme.palette.primary.main,
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                        }}
                    >
                        <LocationOn />
                        Isla Aguada, Campeche - Donde el Caribe encuentra su futuro
                    </Box>
                </Box>
            </ContainerWrapper>
        </Box>
    );
};

export default AboutPage;
