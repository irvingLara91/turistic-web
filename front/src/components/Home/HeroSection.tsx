// components/HeroSection/HeroSection.tsx
import React, {useState, useEffect, useRef} from 'react';
import {
    Box,
    Button,
    Grid,
    IconButton,
    Stack,
    useMediaQuery,
    useTheme,
    alpha,
} from '@mui/material';
import {
    ArrowForward,
    PlayArrow,
    NavigateBefore,
    NavigateNext,
} from '@mui/icons-material';
import ContainerWrapper from '@components/Common/ContainerWrapper';
import TypographyCustom from '@components/Common/TypographyCustom';

interface HeroImage {
    url: string;
    title: string;
    subtitle: string;
    location?: string;
    rating?: number;
}

interface HeroSectionProps {
    images: HeroImage[];
}

const HeroSection: React.FC<HeroSectionProps> = ({images}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isPlaying || isHovered) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, images.length, isHovered]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Funciones para el swipe en mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (Math.abs(distance) < minSwipeDistance) return;

        if (distance > 0) {
            // Swipe izquierda - siguiente imagen
            nextImage();
        } else {
            // Swipe derecha - imagen anterior
            prevImage();
        }
    };

    return (
        <Box
            ref={carouselRef}
            sx={{
                position: 'relative',
                height: {xs: '85vh', md: '100vh'},
                overflow: 'hidden',
                touchAction: 'pan-y',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Carrusel de Imágenes */}
            {images.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${image.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transform: `scale(${index === currentImageIndex ? 1 : 1.1})`,
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `
                                linear-gradient(135deg, 
                                    rgba(0, 82, 136, 0.85) 0%, 
                                    rgba(0, 119, 182, 0.7) 25%,
                                    rgba(72, 202, 228, 0.5) 50%,
                                    rgba(173, 232, 244, 0.3) 75%,
                                    transparent 100%
                                ),
                                linear-gradient(45deg,
                                    rgba(255, 203, 5, 0.4) 0%,
                                    rgba(255, 133, 27, 0.3) 15%,
                                    transparent 30%
                                ),
                                radial-gradient(
                                    circle at 20% 80%,
                                    rgba(0, 168, 150, 0.4) 0%,
                                    transparent 50%
                                ),
                                radial-gradient(
                                    circle at 80% 20%,
                                    rgba(255, 184, 28, 0.3) 0%,
                                    transparent 50%
                                )
                            `,
                            backdropFilter: 'blur(0.5px)',
                        },
                    }}
                />
            ))}

            {/* Controles del Carrusel - Ocultos en mobile */}
            <IconButton
                onClick={prevImage}
                sx={{
                    position: 'absolute',
                    left: {xs: 10, md: 20},
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: alpha('#fff', 0.15),
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    border: `1px solid ${alpha('#fff', 0.2)}`,
                    width: {xs: 48, md: 56},
                    height: {xs: 48, md: 56},
                    '&:hover': {
                        backgroundColor: alpha('#fff', 0.25),
                        transform: 'translateY(-50%) scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                    display: {xs: 'none', md: 'flex'}, // Oculto en mobile
                }}
            >
                <NavigateBefore fontSize={isMobile ? "medium" : "large" as any}/>
            </IconButton>

            <IconButton
                onClick={nextImage}
                sx={{
                    position: 'absolute',
                    right: {xs: 10, md: 20},
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: alpha('#fff', 0.15),
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    border: `1px solid ${alpha('#fff', 0.2)}`,
                    width: {xs: 48, md: 56},
                    height: {xs: 48, md: 56},
                    '&:hover': {
                        backgroundColor: alpha('#fff', 0.25),
                        transform: 'translateY(-50%) scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                    display: {xs: 'none', md: 'flex'}, // Oculto en mobile
                }}
            >
                <NavigateNext fontSize={isMobile ? "medium" : "large" as any}/>
            </IconButton>



            {/* Contenido del Hero */}
            <ContainerWrapper sxBox={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                pt: {xs: 8, md: 12}
            }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{xs: 12, md: 8, lg: 10}} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        {/* Título Principal */}
                        <TypographyCustom
                            variant={isMobile ? "h3" : isTablet ? "h2" : "h1"}
                            font="montserrat"
                            weight={800}
                            gutterBottom
                            sx={{
                                color: 'transparent',
                                lineHeight: 1.1,
                                fontSize: {
                                    xs: '2.75rem',
                                    md: '4rem',
                                    lg: '4.5rem'
                                },
                                mb: 3,
                                background: 'linear-gradient(135deg, #ffffff 0%, #ffeaa7 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textAlign: 'center',
                                filter: 'brightness(1.2) contrast(1.1)',
                                textShadow: '0 0 30px rgba(255,255,255,0.5)',
                            }}
                        >
                            {images[currentImageIndex].title}
                        </TypographyCustom>

                        {/* Subtítulo */}
                        <TypographyCustom
                            variant={isMobile ? "h6" : "h5"}
                            font="inter"
                            weight={400}
                            sx={{
                                mb: 5,
                                color: alpha('#fff', 0.95),
                                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                                animation: 'fadeInUp 1s ease-out',
                                fontSize: {
                                    xs: '1.2rem',
                                    md: '1.5rem'
                                },
                                maxWidth: '700px',
                                lineHeight: 1.6,
                            }}
                        >
                            {images[currentImageIndex].subtitle}
                        </TypographyCustom>

                        {/* Botones de Acción */}
                        <Stack
                            direction={{xs: 'column', sm: 'row'} as any}
                            spacing={3}
                            sx={{animation: 'fadeInUp 1.2s ease-out'}}
                        >
                            <Button
                                variant="contained"
                                size={isMobile ? "medium" : "large" as any}
                                endIcon={<ArrowForward sx={{transition: 'transform 0.3s ease'}}/>}
                                sx={{
                                    px: {xs: 4, md: 6},
                                    py: {xs: 1.8, md: 2.2},
                                    fontSize: {xs: '1.1rem', md: '1.2rem'},
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    fontWeight: 700,
                                    borderRadius: 3,
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark,
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                                        '& .MuiSvgIcon-root': {
                                            transform: 'translateX(4px)',
                                        },
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                Reservar Ahora
                            </Button>
                            <Button
                                variant="outlined"
                                size={isMobile ? "medium" : "large" as any}
                                startIcon={<PlayArrow/>}
                                sx={{
                                    px: {xs: 4, md: 6},
                                    py: {xs: 1.8, md: 2.2},
                                    fontSize: {xs: '1.1rem', md: '1.2rem'},
                                    borderColor: 'white',
                                    borderWidth: 2,
                                    color: 'white',
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    backdropFilter: 'blur(10px)',
                                    backgroundColor: alpha('#fff', 0.1),
                                    '&:hover': {
                                        borderColor: theme.palette.secondary.light,
                                        backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 8px 32px rgba(255,255,255,0.15)',
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                Ver Video
                            </Button>
                        </Stack>

                        {/* Información de Estadísticas */}
                        <Box
                            sx={{
                                mt: {xs:0,sm:6},
                                display: 'flex',
                                gap: 5,
                                animation: 'fadeInUp 1.4s ease-out',
                            }}
                        >
                            <Box sx={{textAlign: 'center'}}>
                                <TypographyCustom
                                    variant="h4"
                                    font="montserrat"
                                    weight={700}
                                    sx={{
                                        color: 'white',
                                        fontSize: {xs: '1.75rem', md: '2.25rem'},
                                        textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    50+
                                </TypographyCustom>
                                <TypographyCustom
                                    variant="body2"
                                    font="inter"
                                    weight={500}
                                    sx={{
                                        color: alpha('#fff', 0.9),
                                        fontSize: {xs: '0.9rem', md: '1rem'}
                                    }}
                                >
                                    Destinos Únicos
                                </TypographyCustom>
                            </Box>
                            <Box sx={{textAlign: 'center'}}>
                                <TypographyCustom
                                    variant="h4"
                                    font="montserrat"
                                    weight={700}
                                    sx={{
                                        color: 'white',
                                        fontSize: {xs: '1.75rem', md: '2.25rem'},
                                        textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    5k+
                                </TypographyCustom>
                                <TypographyCustom
                                    variant="body2"
                                    font="inter"
                                    weight={500}
                                    sx={{
                                        color: alpha('#fff', 0.9),
                                        fontSize: {xs: '0.9rem', md: '1rem'}
                                    }}
                                >
                                    Viajeros Felices
                                </TypographyCustom>
                            </Box>
                            <Box sx={{textAlign: 'center'}}>
                                <TypographyCustom
                                    variant="h4"
                                    font="montserrat"
                                    weight={700}
                                    sx={{
                                        color: 'white',
                                        fontSize: {xs: '1.75rem', md: '2.25rem'},
                                        textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    25+
                                </TypographyCustom>
                                <TypographyCustom
                                    variant="body2"
                                    font="inter"
                                    weight={500}
                                    sx={{
                                        color: alpha('#fff', 0.9),
                                        fontSize: {xs: '0.9rem', md: '1rem'}
                                    }}
                                >
                                    Años de Experiencia
                                </TypographyCustom>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ContainerWrapper>

            {/* Indicador de Scroll */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    animation: 'bounce 2s infinite',
                }}
            >
                <Box
                    sx={{
                        width: 2,
                        height: 30,
                        backgroundColor: alpha('#fff', 0.7),
                        borderRadius: 1,
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 0,
                            height: 0,
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: `8px solid ${alpha('#fff', 0.7)}`,
                        }
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
