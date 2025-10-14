// pages/Home/Home.tsx
import React from 'react';
import { Box } from '@mui/material';
import { DirectionsBoat, Security, BeachAccess, EmojiNature } from '@mui/icons-material';

// Components
import HeroSection from '@components/Home/HeroSection.tsx';
import BoatTourReservation from "@components/Home/BoatTourReservation.tsx";


export type HeroImage = {
    url: string;
    title: string;
    subtitle: string;
};

const Home: React.FC = () => {
    // Datos reales de Isla Aguada
    const heroImages: HeroImage[] = [
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




    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            '& @keyframes fadeInUp': {
                from: {
                    opacity: 0,
                    transform: 'translateY(30px)',
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                },
            },
        }}>
            <HeroSection images={heroImages} />
            <BoatTourReservation/>
        </Box>
    );
};

export default Home;
