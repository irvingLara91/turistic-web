import {
    Box,
    Button,
    Grid,
    Card,
    CardContent,
    Paper,
    Stack,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    ShoppingCart,
    Security,
    Speed,
    Support,
    ArrowForward,
    Star
} from '@mui/icons-material';
import ContainerWrapper from "@components/Common/ContainerWrapper.tsx";
import TypographyCustom from '@components/Common/TypographyCustom';

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const features = [
        {
            icon: <Speed sx={{fontSize: 40}}/>,
            title: 'Rápido y Eficiente',
            description: 'Nuestra plataforma está optimizada para ofrecerte la mejor experiencia de usuario.'
        },
        {
            icon: <Security sx={{fontSize: 40}}/>,
            title: '100% Seguro',
            description: 'Tus datos están protegidos con los más altos estándares de seguridad.'
        },
        {
            icon: <ShoppingCart sx={{fontSize: 40}}/>,
            title: 'Fácil de Usar',
            description: 'Interfaz intuitiva diseñada para que cualquier persona pueda utilizarla.'
        },
        {
            icon: <Support sx={{fontSize: 40}}/>,
            title: 'Soporte 24/7',
            description: 'Nuestro equipo de soporte está disponible para ayudarte en cualquier momento.'
        }
    ];

    const testimonials = [
        {
            name: 'María González',
            role: 'CEO de TechSolutions',
            comment: 'Increíble servicio. Ha transformado completamente nuestra forma de trabajar.',
            rating: 5
        },
        {
            name: 'Carlos Rodríguez',
            role: 'Diseñador Freelance',
            comment: 'La mejor plataforma que he usado. Intuitiva y poderosa.',
            rating: 5
        },
        {
            name: 'Ana Martínez',
            role: 'Gerente de Marketing',
            comment: 'El soporte al cliente es excepcional. Muy recomendable.',
            rating: 4
        }
    ];

    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>

            {/* Hero Section con fondo blanco */}
            <ContainerWrapper backgroundColor={"background.paper"} sxBox={{py: {xs: 8, md: 12}}}>
                <Grid container spacing={4} alignItems="center">
                    <Grid
                        size={{ xs: 12, md: 6 }}>
                        <TypographyCustom
                            variant={isMobile ? "h3" : "h2"}
                            font="montserrat"
                            weight={isMobile ? 600 : 700}
                            gutterBottom
                            sx={{color: 'text.primary'}}
                        >
                            Bienvenido a Nuestra Plataforma
                        </TypographyCustom>
                        <TypographyCustom
                            variant={isMobile ? "h6" : "h5"}
                            font="inter"
                            weight={400}
                            sx={{mb: 4, color: 'text.secondary'}}
                        >
                            Descubre una nueva forma de gestionar tus proyectos con nuestra solución todo en uno.
                        </TypographyCustom>
                        <Stack direction={{xs: 'column', sm: 'row'} as any} spacing={2}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForward/>}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    backgroundColor: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark'
                                    }
                                }}
                            >
                                Comenzar Ahora
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    '&:hover': {
                                        borderColor: 'primary.dark',
                                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                                    }
                                }}
                            >
                                Ver Demo
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid  size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 300,
                                backgroundColor: 'grey.100',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed grey.300'
                            }}
                        >
                            <TypographyCustom
                                variant="body1"
                                font="roboto"
                                color="text.secondary"
                            >
                                Imagen o Video Destacado
                            </TypographyCustom>
                        </Box>
                    </Grid>
                </Grid>
            </ContainerWrapper>

            {/* Features Section con fondo gris */}
            <ContainerWrapper backgroundColor={"background.default"} sxBox={{py: {xs: 6, md: 8}}}>
                <Box sx={{textAlign: 'center', mb: 6}}>
                    <TypographyCustom
                        variant="h3"
                        font="montserrat"
                        weight={600}
                        align="center"
                        gutterBottom
                        sx={{mb: 2}}
                    >
                        ¿Por Qué Elegirnos?
                    </TypographyCustom>
                    <TypographyCustom
                        variant="h6"
                        font="inter"
                        weight={400}
                        align="center"
                        sx={{mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto'}}
                    >
                        Ofrecemos las mejores herramientas para potenciar tu negocio y mejorar tu productividad.
                    </TypographyCustom>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid  size={{ xs: 12, sm:6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 6
                                    },
                                    p: 2
                                }}
                            >
                                <CardContent>
                                    <Box sx={{color: 'primary.main', mb: 2}}>
                                        {feature.icon}
                                    </Box>
                                    <TypographyCustom
                                        variant="subtitle1"
                                        font="inter"
                                        weight={500}
                                        gutterBottom
                                        sx={{fontWeight: 'bold', display: 'block'}}
                                    >
                                        {feature.title}
                                    </TypographyCustom>
                                    <TypographyCustom
                                        variant="body2"
                                        font="inter"
                                        weight={400}
                                        color="text.secondary"
                                    >
                                        {feature.description}
                                    </TypographyCustom>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </ContainerWrapper>

            {/* Stats Section */}
            <ContainerWrapper backgroundColor="primary.main" sxBox={{py: 6, color: 'white'}}>
                <Grid container spacing={4} textAlign="center">
                    <Grid  size={{ xs: 6, md: 3 }}>
                        <TypographyCustom
                            variant="h3"
                            font="montserrat"
                            weight={700}
                            sx={{color: 'white'}}
                        >
                            10K+
                        </TypographyCustom>
                        <TypographyCustom
                            variant="subtitle1"
                            font="inter"
                            weight={500}
                            sx={{color: 'white'}}
                        >
                            Usuarios Activos
                        </TypographyCustom>
                    </Grid>
                    <Grid   size={{ xs: 6, md: 3 }}>
                        <TypographyCustom
                            variant="h3"
                            font="montserrat"
                            weight={700}
                            sx={{color: 'white'}}
                        >
                            99.9%
                        </TypographyCustom>
                        <TypographyCustom
                            variant="subtitle1"
                            font="inter"
                            weight={500}
                            sx={{color: 'white'}}
                        >
                            Uptime
                        </TypographyCustom>
                    </Grid>
                    <Grid   size={{ xs: 6, md: 3 }}>
                        <TypographyCustom
                            variant="h3"
                            font="montserrat"
                            weight={700}
                            sx={{color: 'white'}}
                        >
                            50+
                        </TypographyCustom>
                        <TypographyCustom
                            variant="subtitle1"
                            font="inter"
                            weight={500}
                            sx={{color: 'white'}}
                        >
                            Países
                        </TypographyCustom>
                    </Grid>
                    <Grid  size={{ xs: 6, md: 3 }} >
                        <TypographyCustom
                            variant="h3"
                            font="montserrat"
                            weight={700}
                            sx={{color: 'white'}}
                        >
                            24/7
                        </TypographyCustom>
                        <TypographyCustom
                            variant="subtitle1"
                            font="inter"
                            weight={500}
                            sx={{color: 'white'}}
                        >
                            Soporte
                        </TypographyCustom>
                    </Grid>
                </Grid>
            </ContainerWrapper>

            {/* Testimonials Section con fondo blanco */}
            <ContainerWrapper backgroundColor={"background.paper"} sxBox={{py: {xs: 6, md: 8}}}>
                <Box sx={{textAlign: 'center', mb: 6}}>
                    <TypographyCustom
                        variant="h3"
                        font="montserrat"
                        weight={600}
                        align="center"
                        gutterBottom
                        sx={{mb: 2}}
                    >
                        Lo Que Dicen Nuestros Clientes
                    </TypographyCustom>
                </Box>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid  size={{ xs: 12, md: 4 }}  key={index}>
                            <Card sx={{height: '100%'}}>
                                <CardContent sx={{p: 3}}>
                                    <Box sx={{display: 'flex', mb: 2}}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} sx={{color: 'gold', fontSize: 20}}/>
                                        ))}
                                    </Box>
                                    <TypographyCustom
                                        variant="body1"
                                        font="inter"
                                        weight={400}
                                        italic
                                        sx={{mb: 2}}
                                    >
                                        "{testimonial.comment}"
                                    </TypographyCustom>
                                    <Box>
                                        <TypographyCustom
                                            variant="subtitle1"
                                            font="inter"
                                            weight={600}
                                            sx={{display: 'block'}}
                                        >
                                            {testimonial.name}
                                        </TypographyCustom>
                                        <TypographyCustom
                                            variant="caption"
                                            font="roboto"
                                            color="text.secondary"
                                        >
                                            {testimonial.role}
                                        </TypographyCustom>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </ContainerWrapper>

            {/* CTA Section con fondo gris claro */}
            <ContainerWrapper backgroundColor={"background.default"} sxBox={{py: {xs: 6, md: 8}}}>
                <Paper
                    sx={{
                        textAlign: 'center',
                        p: {xs: 4, md: 6},
                        backgroundColor: 'white',
                        border: `1px solid ${theme.palette.divider}`
                    }}
                >
                    <TypographyCustom
                        variant="h4"
                        font="montserrat"
                        weight={600}
                        align="center"
                        gutterBottom
                    >
                        ¿Listo para Comenzar?
                    </TypographyCustom>
                    <TypographyCustom
                        variant="h6"
                        font="inter"
                        weight={400}
                        sx={{mb: 4, color: 'text.secondary'}}
                    >
                        Únete a miles de usuarios satisfechos y transforma tu manera de trabajar.
                    </TypographyCustom>
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForward/>}
                        sx={{
                            px: 6,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 'bold'
                        }}
                    >
                        Crear Cuenta Gratis
                    </Button>
                </Paper>
            </ContainerWrapper>

        </Box>
    );
};

export default Home;
