// pages/Home/Home.tsx
import React from 'react';
import { Box } from '@mui/material';
// Components
import HeroSection from '@components/Home/HeroSection.tsx';
import BoatTourReservation from "@components/Home/BoatTourReservation.tsx";
import {heroImages} from "@utils/constants.tsx";

const Home: React.FC = () => {



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
