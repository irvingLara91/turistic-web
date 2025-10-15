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
    Avatar,
    Chip,
} from '@mui/material';
import {
    Groups,
    LocationOn,
    Person,
    Sailing,
} from '@mui/icons-material';
import ContainerWrapper from '@components/Common/ContainerWrapper';
import ImageGallery from '@components/About/ImageGallery';
import HistoryTimeline from '@components/About/HistoryTimeline';
import {donPasitaInfo, features, galleryImages, historyEvents, stats} from "@utils/constants.tsx";

const AboutPage: React.FC = () => {
    const theme = useTheme();



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

                {/* Sección Don Pasita */}
                <Box sx={{ mb: 10 }}>
                    <Card
                        sx={{
                            borderRadius: 4,
                            background: `linear-gradient(135deg, 
                                ${alpha(theme.palette.primary.main, 0.05)} 0%, 
                                ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                            overflow: 'hidden',
                            boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.1)}`,
                        }}
                    >
                        <Grid container>
                            <Grid size={{xs:12,md:4}}>
                                <Box
                                    sx={{
                                        height: '100%',
                                        minHeight: 400,
                                        background: `linear-gradient(135deg, 
                                            ${theme.palette.primary.main} 0%, 
                                            ${theme.palette.secondary.main} 100%)`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 4,
                                        textAlign: 'center',
                                        color: 'white',
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60) center/cover',
                                            opacity: 0.1,
                                        }
                                    }}
                                >
                                    <Avatar
                                        src={donPasitaInfo?.image as string}
                                        sx={{
                                            width: 200,
                                            height: 200,
                                            border: '4px solid white',
                                            mb: 3,
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                        }}
                                    />
                                    <Typography
                                        variant="h3"
                                        fontFamily="Montserrat"
                                        fontWeight={800}
                                        gutterBottom
                                        sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                                    >
                                        {donPasitaInfo.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontFamily="Inter"
                                        sx={{ opacity: 0.9, mb: 2 }}
                                    >
                                        {donPasitaInfo.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <Chip
                                            icon={<Sailing />}
                                            label={`${donPasitaInfo.yearsExperience} años`}
                                            sx={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                                        />
                                        <Chip
                                            icon={<Groups />}
                                            label={`${donPasitaInfo.toursGuided}+ tours`}
                                            sx={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{xs:12,md:8}}>
                                <Box sx={{ padding: 4 }}>
                                    <Typography
                                        variant="h4"
                                        fontFamily="Montserrat"
                                        fontWeight={700}
                                        gutterBottom
                                        sx={{
                                            background: `linear-gradient(135deg, 
                                                ${theme.palette.primary.main} 0%, 
                                                ${theme.palette.secondary.main} 100%)`,
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            mb: 3,
                                        }}
                                    >
                                        El Alma de Isla Aguada
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontFamily="Inter"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.8,
                                            mb: 4,
                                            fontSize: '1.1rem',
                                            whiteSpace: 'pre-line',
                                        }}
                                    >
                                        {donPasitaInfo.story}
                                    </Typography>

                                    <Box sx={{ mb: 4 }}>
                                        <Typography
                                            variant="h6"
                                            fontFamily="Montserrat"
                                            fontWeight={600}
                                            gutterBottom
                                            sx={{ color: theme.palette.text.primary }}
                                        >
                                            Lo que me define:
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {donPasitaInfo.characteristics.map((char, index) => (
                                                <Grid size={{xs:12,sm:6}} key={index}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                        <Person sx={{ color: theme.palette.primary.main, fontSize: '1rem' }} />
                                                        <Typography variant="body2" fontFamily="Inter">
                                                            {char}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>

                                    <Card
                                        sx={{
                                            background: `linear-gradient(135deg, 
                                                ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                                                ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                                            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                            padding: 3,
                                            borderRadius: 3,
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            fontFamily="Inter"
                                            fontStyle="italic"
                                            sx={{
                                                color: theme.palette.text.primary,
                                                textAlign: 'center',
                                                lineHeight: 1.6,
                                                '&::before, &::after': {
                                                    content: '"\\""',
                                                    fontSize: '1.5rem',
                                                    color: theme.palette.primary.main,
                                                }
                                            }}
                                        >
                                            {donPasitaInfo.favoriteQuote}
                                        </Typography>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>

                {/* Estadísticas Futuristas */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                    {stats.map((stat, index) => (
                        <Grid size={{xs:12,sm:6,md:3}} key={index}>
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

                {/* Resto del código permanece igual... */}
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
