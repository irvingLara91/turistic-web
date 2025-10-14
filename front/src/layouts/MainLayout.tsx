import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '@components/Common/Header.tsx';
import Footer from '@components/Common/Footer/Footer.tsx';

const MainLayout: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100vw',
                maxWidth: '100%',
                overflowX: 'hidden',
            }}
        >
            <Header/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: '100%',
                   // py: { xs: 2, sm: 3, md: 4 },
                    //px: { xs: 2, sm: 3, md: 4 },
                    // Ocupa todo el ancho disponible
                    boxSizing: 'border-box'
                }}
            >
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    );
};

export default MainLayout;
