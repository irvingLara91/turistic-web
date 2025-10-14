import {FC, JSX, useState} from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Container,
    Chip,
    useTheme,
    useMediaQuery,
    Button,
    alpha,
    Slide,
    Fade,
    Zoom,
    Divider
} from '@mui/material';
import {
    DirectionsBoat,
    AccessTime,
    People,
    MonetizationOn,
    Security,
    Landscape,
    Speed,
    FamilyRestroom,
    Groups,
    Info
} from '@mui/icons-material';

// Interfaces TypeScript
interface BoatTourShowcaseProps {
    title?: string;
    subtitle?: string;
    featuredTours?: TourType[];
}

interface TourInfo {
    name: string;
    description: string;
    price: number;
    duration: string;
    capacity: string;
    icon: JSX.Element;
    image: string;
    gallery: string[];
    features: string[];
    highlights: string[];
    recommendedFor: string[];
    rating: number;
    reviews: number;
    captain: string;
    captainAvatar: string;
    season: string[];
    difficulty: 'Fácil' | 'Moderado' | 'Extremo';
    included: string[];
}

type TourType = 'scenic' | 'adventure' | 'romantic' | 'luxury' | 'group';

// Datos enriquecidos de los tours
const TOUR_TYPES: Record<TourType, TourInfo> = {
    scenic: {
        name: "Paseo Escénico Premium",
        description: "Sumérgete en un viaje visual por los paisajes costeros más espectaculares. Disfruta de vistas panorámicas y momentos de completa tranquilidad.",
        price: 65,
        duration: "2-3 horas",
        capacity: "6 personas",
        icon: <Landscape />,
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1368&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1368&q=80",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ],
        features: ["Vistas 360°", "Guía fotográfico", "Paradas estratégicas", "Comentarios culturales"],
        highlights: ["Acantilados majestuosos", "Cuevas marinas secretas", "Fauna costera", "Atardeceres únicos"],
        recommendedFor: ["Fotógrafos", "Parejas", "Amantes de la naturaleza", "Familias"],
        rating: 4.8,
        reviews: 124,
        captain: "Carlos Martínez",
        captainAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        season: ["Todo el año"],
        difficulty: "Fácil",
        included: ["Bebidas", "Snacks", "Chalecos salvavidas", "Guía turístico"]
    },
    adventure: {
        name: "Expedición Extrema",
        description: "Adrenalina pura en aguas abiertas. Experimenta la velocidad y la emoción con maniobras espectaculares diseñadas para los más aventureros.",
        price: 95,
        duration: "1.5-2 horas",
        capacity: "8 personas",
        icon: <Speed />,
        image: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1368&q=80"
        ],
        features: ["Turbo aceleración", "Maniobras 3D", "Música high-energy", "GoPro incluida"],
        highlights: ["Zonas de olas gigantes", "Saltos espectaculares", "Competencias acuáticas", "Fotos en acción"],
        recommendedFor: ["Aventureros", "Grupos de amigos", "Deportistas", "Celebraciones"],
        rating: 4.9,
        reviews: 89,
        captain: "Alex Rivera",
        captainAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        season: ["Primavera", "Verano"],
        difficulty: "Extremo",
        included: ["Equipo de seguridad", "GoPro", "Bebidas energéticas", "Fotos digitales"]
    },
    romantic: {
        name: "Cena al Atardecer",
        description: "Romance sobre el agua. Una experiencia íntima con cena gourmet, champagne y la puesta de sol más espectacular como telón de fondo.",
        price: 150,
        duration: "2.5 horas",
        capacity: "2 personas",
        icon: <Security />,
        image: "https://images.unsplash.com-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1511994477560-6beb2e9d7d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
        ],
        features: ["Cena gourmet", "Champagne premium", "Decoración floral", "Fotógrafo profesional"],
        highlights: ["Puesta de sol privada", "Menú degustación", "Música personalizada", "Sorpresa romántica"],
        recommendedFor: ["Parejas", "Aniversarios", "Propuestas", "Luna de miel"],
        rating: 5.0,
        reviews: 67,
        captain: "María González",
        captainAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        season: ["Todo el año"],
        difficulty: "Fácil",
        included: ["Cena completa", "Champagne", "Fotos profesionales", "Decoración especial"]
    },
    luxury: {
        name: "Experiencia Yate Premium",
        description: "Lujo y exclusividad en su máxima expresión. Servicio personalizado, gastronomía excepcional y comodidades de cinco estrellas.",
        price: 300,
        duration: "4-5 horas",
        capacity: "6 personas",
        icon: <Security />,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ],
        features: ["Yate de lujo", "Chef privado", "Jacuzzi", "Sistema de sonido premium"],
        highlights: ["Ruta exclusiva VIP", "Gastronomía gourmet", "Zona de descanso premium", "Servicio mayordomo"],
        recommendedFor: ["Ejecutivos", "Celebridades", "Eventos corporativos", "Ocasiones especiales"],
        rating: 4.9,
        reviews: 45,
        captain: "James Wilson",
        captainAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        season: ["Todo el año"],
        difficulty: "Fácil",
        included: ["Gourmet catering", "Bar abierto", "Toallas de lujo", "Transporte hotel"]
    },
    group: {
        name: "Fiesta en el Mar",
        description: "Celebración grupal con música, baile y diversión asegurada. Perfecto para despedidas, team building y eventos especiales.",
        price: 55,
        duration: "3-4 horas",
        capacity: "15 personas",
        icon: <Groups />,
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511994477560-6beb2e9d7d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
        ],
        features: ["DJ en vivo", "Bar completo", "Zona de baile", "Actividades grupales"],
        highlights: ["Fiesta acuática", "Concurso de baile", "Barra libre", "Fotos grupales"],
        recommendedFor: ["Despedidas", "Team building", "Cumpleaños adultos", "Fiestas universitarias"],
        rating: 4.6,
        reviews: 203,
        captain: "David López",
        captainAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        season: ["Primavera", "Verano"],
        difficulty: "Moderado",
        included: ["Barra libre", "DJ", "Comida buffet", "Seguridad privada"]
    }
};

const BoatTourReservation: FC<BoatTourShowcaseProps> = ({
                                                                  title = "Experiencias Únicas en Lancha",
                                                                  subtitle = "Descubre aventuras memorables en el agua diseñadas para todos los gustos",
                                                                  featuredTours = ['scenic', 'adventure', 'romantic', 'luxury', 'group']
                                                              }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const TourCard = ({ tourKey }: { tourKey: TourType }) => {
        const tour = TOUR_TYPES[tourKey];
        const [imageIndex, setImageIndex] = useState(0);

        return (
            <Zoom in={true} style={{ transitionDelay: '200ms' }}>
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        borderRadius: 4,
                        overflow: 'visible',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`
                        }
                    }}
                >
                    {/* Header con imagen interactiva */}
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={tour?.gallery[imageIndex]}
                            alt={tour.name}
                            sx={{
                                transition: 'transform 0.8s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        />

                        {/* Overlay de imágenes */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: 12,
                            right: 12,
                            display: 'flex',
                            gap: 0.5
                        }}>
                            {tour?.gallery.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        backgroundColor: index === imageIndex ? 'white' : alpha('#fff', 0.5),
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onClick={() => setImageIndex(index)}
                                />
                            ))}
                        </Box>



                        {/* Name flotante */}
                        <Box sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            bgcolor: alpha('#000', 0.8),
                            color: 'white',
                            borderRadius: 2,
                            px: 1.5,
                            py: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5
                        }}>
                            <Typography variant="caption" fontWeight="bold">
                                {tour?.name}
                            </Typography>
                        </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 2.5, position: 'relative' }}>


                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ pr: 5, fontSize: '1.1rem' }}>
                            {tour.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, fontSize: '0.875rem' }}>
                            {tour.description}
                        </Typography>

                        {/* Información rápida */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTime sx={{ fontSize: 16, color: 'primary.main' }} />
                                <Typography variant="caption" fontWeight="medium">
                                    {tour.duration}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <People sx={{ fontSize: 16, color: 'primary.main' }} />
                                <Typography variant="caption" fontWeight="medium">
                                    {tour.capacity}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>

                                {/*poner aqui no que se necesite*/}

                            </Box>
                        </Box>

                        {/* Características con chips modernos */}


                        {/*<Divider sx={{ my: 1.5 }} />*/}

                        {/* Información incluida */}

                    </CardContent>

                    {/* Botón de más información */}
                    <Box sx={{ p: 2, pt: 0 }}>
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            size={isMobile ? "medium" : "large" as any}
                            startIcon={<Info />}
                            sx={{
                                py: 1,
                                fontSize: {xs: '1rem', md: '1rem'},
                                backgroundColor: theme.palette.secondary.main,
                                color: 'white',
                                fontWeight: 700,
                                borderRadius: 2,
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                '&:hover': {
                                    backgroundColor: theme.palette.secondary.dark,
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                                    '& .MuiSvgIcon-root': {
                                        transform: 'translateX(4px)',
                                    },
                                },
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            Más Información
                        </Button>
                    </Box>
                </Card>
            </Zoom>
        );
    };

    return (
        <Box sx={{
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.light, 0.05)} 100%)`,
            minHeight: '100vh',
            py: 6
        }}>
            <Container maxWidth="xl">
                {/* Header */}
                <Box textAlign="center" mb={6}>
                    <Fade in={true} timeout={1000}>
                        <Box>
                            <Box sx={{
                                width: 70,
                                height: 70,
                                borderRadius: '50%',
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 3
                            }}>
                                <DirectionsBoat sx={{ fontSize: 35, color: 'primary.main' }} />
                            </Box>
                            <Typography
                                variant="h3"
                                gutterBottom
                                fontWeight="bold"
                                sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    fontSize: { xs: '2.2rem', md: '3rem', lg: '3.5rem' }
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                maxWidth="800px"
                                mx="auto"
                                sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}
                            >
                                {subtitle}
                            </Typography>
                        </Box>
                    </Fade>
                </Box>

                {/* Grid de tours en 2 columnas */}
                <Grid container spacing={3}>
                    {featuredTours.map((tourKey, index) => (
                        <Grid size={{xs:12,sm:6,md:4}}  key={index}>
                            <TourCard tourKey={tourKey as any} />
                        </Grid>
                    ))}
                </Grid>

                {/* Call to action final */}
                <Fade in={true} timeout={1500}>
                    <Box textAlign="center" mt={6}>
                        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                            ¿Listo para tu aventura?
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Contáctanos y diseña la experiencia perfecta para ti
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<DirectionsBoat />}
                            sx={{
                                px: 5,
                                py: 1.5,
                                borderRadius: 3,
                                fontSize: '1rem',
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.3)}`
                            }}
                        >
                            Consultar Disponibilidad
                        </Button>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};

export default BoatTourReservation;
