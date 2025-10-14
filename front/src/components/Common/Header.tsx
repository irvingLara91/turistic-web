import React from 'react';
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContainerWrapper from './ContainerWrapper';
import TypographyCustom from './TypographyCustom';

const Logo = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar
            position="static"
            sx={{
                width: '100vw',
                left: 0,
                boxShadow: 0,
                right: 0,
                borderRadius: 0,
            }}
        >
            <ContainerWrapper backgroundColor="white">
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    padding: '0 !important',
                    minHeight: { xs: 56, sm: 64, md: 72 }
                }}>
                    {/* Logo y texto a la izquierda */}
                    <Logo>
                        {/* Logo - puede ser imagen o texto */}
                        {/* <Box
                            component="img"
                            src={logoUrl}
                            alt={logoAlt}
                            sx={{
                                width: { xs: 32, sm: 40, md: 48, lg: 56 },
                                height: { xs: 32, sm: 40, md: 48, lg: 56 },
                                borderRadius: 1,
                                objectFit: 'contain',
                            }}
                        />*/}
                        <Box
                            sx={{
                                width: { xs: 32, sm: 40, md: 48, lg: 56 },
                                height: { xs: 32, sm: 40, md: 48, lg: 56 },
                                backgroundColor: 'red',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '1.4rem' }
                            }}
                        >
                            LG
                        </Box>

                        {/* Texto del logo responsivo - un solo componente */}
                        <TypographyCustom
                            variant="h6"
                            font="montserrat"
                            weight={600}
                            sx={{
                                color: 'red',
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1rem',
                                    md: '1.25rem',
                                    lg: '1.5rem',
                                },
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {isMobile ? 'ME' : 'Mi Empresa'}
                        </TypographyCustom>
                    </Logo>

                    {/* Espacio para elementos adicionales a la derecha */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, sm: 2, md: 3 }
                    }}>
                        {/* Aquí puedes agregar botones, menús, etc. */}
                    </Box>
                </Toolbar>
            </ContainerWrapper>
        </AppBar>
    );
};

export default Header;
