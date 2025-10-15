import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    useMediaQuery,
    useTheme,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    alpha,
    Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    DirectionsBoat,
    Menu,
    Phone,
    Email,
    LocationOn,
    WhatsApp
} from '@mui/icons-material';
import {contactInfo, navItems} from "@utils/constants.tsx";

const Logo = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    textDecoration: 'none',
    cursor: 'pointer'
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    fontSize: '0.9rem',
    position: 'relative',
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.contrastText, 0.1),
        transform: 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
}));

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Barra superior de contacto */}
            <Box sx={{
                backgroundColor: '#4FC3F7', // Cyan más suave
                color: 'white',
                py: 1,
                display: { xs: 'none', md: 'block' }
            }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.875rem'
                    }}>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Phone sx={{ fontSize: 16 }} />
                                <span>{contactInfo.phone}</span>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Email sx={{ fontSize: 16 }} />
                                <span>{contactInfo.email}</span>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                size="small"
                                sx={{
                                    color: 'white',
                                    backgroundColor: alpha('#fff', 0.1),
                                    '&:hover': { backgroundColor: alpha('#fff', 0.2) }
                                }}
                            >
                                <WhatsApp sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Header principal */}
            <AppBar
                position="static"
                sx={{
                    background: `linear-gradient(135deg, #81D4FA 0%, #4FC3F7 50%, #29B6F6 100%)`, // Gradiente cyan suave
                    boxShadow: '0 4px 20px rgba(79, 195, 247, 0.3)',
                    borderRadius: 0,
                    backdropFilter: 'blur(10px)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{
                        justifyContent: 'space-between',
                        py: { xs: 1, md: 0 },
                        minHeight: { xs: 70, md: 80 }
                    }}>
                        {/* Logo */}
                        <Box component={"a"}
                             href={"/"}
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}>
                            <Box
                                sx={{
                                    width: { xs: 45, md: 55 },
                                    height: { xs: 45, md: 55 },
                                    background: `linear-gradient(45deg, #FF9800, #FFB74D)`, // Naranja coral para contraste
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)'
                                }}
                            >
                                <DirectionsBoat sx={{
                                    fontSize: { xs: 28, md: 32 },
                                    transform: 'rotate(-15deg)'
                                }} />
                            </Box>

                            <Box>
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 800,
                                        fontSize: { xs: '1.3rem', md: '1.6rem' },
                                        display: 'block',
                                        lineHeight: 1,
                                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    Paseos en lancha
                                </Box>
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#FFF9C4', // Amarillo claro suave
                                        fontWeight: 600,
                                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                                        display: 'block',
                                        lineHeight: 1,
                                        letterSpacing: 1
                                    }}
                                >
                                    DON PASITA
                                </Box>
                            </Box>
                        </Box>

                        {/* Navegación desktop */}
                        {!isMobile && (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                {navItems.map((item) => (
                                    <NavButton
                                        key={item.label}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </NavButton>
                                ))}
                                <Button
                                    variant="contained"
                                    sx={{
                                        ml: 2,
                                        px: 3,
                                        borderRadius: 3,
                                        fontWeight: 700,
                                        textTransform: 'none',
                                        background: `linear-gradient(45deg, #FF9800, #FFB74D)`,
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)',
                                            background: `linear-gradient(45deg, #F57C00, #FF9800)`,
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                    startIcon={<Phone />}
                                >
                                    Reservar
                                </Button>
                            </Box>
                        )}

                        {/* Menú móvil */}
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                onClick={() => setMobileMenuOpen(true)}
                                sx={{
                                    background: `linear-gradient(45deg, #FF9800, #FFB74D)`,
                                    '&:hover': {
                                        transform: 'translateY(0px)',
                                        boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)',
                                        background: `linear-gradient(45deg, #F57C00, #FF9800)`,
                                    }
                                }}
                            >
                                <Menu sx={{
                                    color:'#fff'
                                }} />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer móvil */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        background: `linear-gradient(135deg, #81D4FA 0%, #4FC3F7 50%, #29B6F6 100%)`,
                        color: 'white',
                        borderBottomRightRadius: 0,
                        borderTopRightRadius: 0,
                        width: 280
                    }
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Logo sx={{ mb: 3, justifyContent: 'center' }}>
                        <DirectionsBoat sx={{
                            fontSize: 32,
                            color: '#FFB74D'
                        }} />
                        <Box>
                            <Box component="span" sx={{
                                color: 'white',
                                fontWeight: 800,
                                fontSize: '1.3rem'
                            }}>
                                Paseos en lancha
                            </Box>
                            <Box component="span" sx={{
                                color: '#FFF9C4',
                                fontWeight: 600,
                                fontSize: '1rem',
                                display: 'block'
                            }}>
                                DON PASITA
                            </Box>
                        </Box>
                    </Logo>

                    <List>
                        {navItems.map((item) => (
                            <ListItem
                                key={item.label}
                                component="a"
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                sx={{
                                    color: 'white',
                                    borderBottom: `1px solid ${alpha('#fff', 0.1)}`,
                                    '&:hover': {
                                        backgroundColor: alpha('#fff', 0.1)
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontWeight: 600
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            borderRadius: 2,
                            fontWeight: 700,
                            py: 1.5,
                            background: `linear-gradient(45deg, #FF9800, #FFB74D)`,
                            color: 'white',
                            '&:hover': {
                                background: `linear-gradient(45deg, #F57C00, #FF9800)`,
                            }
                        }}
                        startIcon={<Phone />}
                    >
                        Llamar para Reservar
                    </Button>

                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}>
                            <LocationOn sx={{ fontSize: 16, color: '#FFF9C4' }} />
                            <span style={{ fontSize: '0.8rem' }}>Puerto Marina, Costa Azul</span>
                        </Box>
                        <Box sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
                            Abierto 7 días a la semana
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
