// components/About/HistoryTimeline.tsx
import React, { useState } from 'react';
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Card,
    CardContent,
    alpha,
    Collapse,
} from '@mui/material';
import {
    LocationOn,
    CalendarToday,
    ExpandMore,
    ChevronRight
} from '@mui/icons-material';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    image?: string;
    location?: string;
    highlights?: string[];
}

interface HistoryTimelineProps {
    events: TimelineEvent[];
}

const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ events }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

    const handleExpand = (index: number) => {
        setExpandedEvent(expandedEvent === index ? null : index);
    };

    if (isMobile) {
        return (
            <Box sx={{ my: 4 }}>
                {/* Línea vertical móvil mejorada */}
                <Box
                    sx={{
                        position: 'relative',
                        paddingLeft: 3,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 15,
                            top: 0,
                            bottom: 0,
                            width: 3,
                            background: `linear-gradient(180deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 100%)`,
                            borderRadius: 2,
                        }
                    }}
                >
                    {events.map((event, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                mb: 3,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: -27,
                                    top: 24,
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                    border: `3px solid ${theme.palette.background.paper}`,
                                    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
                                    zIndex: 2,
                                }
                            }}
                        >
                            {/* Tarjeta principal móvil */}
                            <Card
                                onClick={() => handleExpand(index)}
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                    background: `linear-gradient(135deg, 
                                        ${theme.palette.background.paper} 0%, 
                                        ${alpha(theme.palette.primary.light, 0.05)} 100%)`,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    overflow: 'visible',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        right: -8,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: 0,
                                        height: 0,
                                        borderLeft: `8px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                        borderTop: '8px solid transparent',
                                        borderBottom: '8px solid transparent',
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                                    {/* Header con año y flecha */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            mb: 2,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.main,
                                                    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`,
                                                }}
                                            />
                                            <Typography
                                                variant="h6"
                                                fontFamily="Montserrat"
                                                fontWeight={700}
                                                color="primary"
                                                sx={{
                                                    fontSize: '1.1rem',
                                                }}
                                            >
                                                {event.year}
                                            </Typography>
                                        </Box>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                transform: expandedEvent === index ? 'rotate(90deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                                color: theme.palette.primary.main,
                                            }}
                                        >
                                            <ChevronRight />
                                        </IconButton>
                                    </Box>

                                    {/* Título */}
                                    <Typography
                                        variant="h6"
                                        fontFamily="Montserrat"
                                        fontWeight={600}
                                        sx={{
                                            color: theme.palette.text.primary,
                                            fontSize: '1rem',
                                            mb: 1,
                                        }}
                                    >
                                        {event.title}
                                    </Typography>

                                    {/* Ubicación */}
                                    {event.location && (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                mb: 2,
                                            }}
                                        >
                                            <LocationOn
                                                sx={{
                                                    color: theme.palette.secondary.main,
                                                    fontSize: '1rem',
                                                }}
                                            />
                                            <Typography
                                                variant="body2"
                                                fontFamily="Inter"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                {event.location}
                                            </Typography>
                                        </Box>
                                    )}

                                    {/* Contenido expandible */}
                                    <Collapse in={expandedEvent === index}>
                                        <Box sx={{ mt: 2 }}>
                                            {/* Descripción */}
                                            <Typography
                                                variant="body2"
                                                fontFamily="Inter"
                                                lineHeight={1.6}
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    mb: 2,
                                                    fontSize: '0.9rem',
                                                }}
                                            >
                                                {event.description}
                                            </Typography>

                                            {/* Imagen */}
                                            {event.image && (
                                                <Box
                                                    sx={{
                                                        mb: 2,
                                                        borderRadius: 2,
                                                        overflow: 'hidden',
                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                    }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={event.image}
                                                        alt={event.title}
                                                        sx={{
                                                            width: '100%',
                                                            height: 160,
                                                            objectFit: 'cover',
                                                            display: 'block',
                                                        }}
                                                    />
                                                </Box>
                                            )}

                                            {/* Highlights */}
                                            {event.highlights && event.highlights.length > 0 && (
                                                <Box sx={{ mt: 2 }}>
                                                    <Typography
                                                        variant="body2"
                                                        fontFamily="Montserrat"
                                                        fontWeight={600}
                                                        sx={{ mb: 1, color: theme.palette.primary.main }}
                                                    >
                                                        Logros destacados:
                                                    </Typography>
                                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                        {event.highlights.map((highlight, highlightIndex) => (
                                                            <Box component="li" key={highlightIndex}>
                                                                <Typography
                                                                    variant="body2"
                                                                    fontFamily="Inter"
                                                                    sx={{
                                                                        color: theme.palette.text.secondary,
                                                                        fontSize: '0.8rem',
                                                                        lineHeight: 1.5,
                                                                    }}
                                                                >
                                                                    {highlight}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>
                                    </Collapse>

                                    {/* Indicador de expandir */}
                                    {expandedEvent !== index && (
                                        <Typography
                                            variant="caption"
                                            fontFamily="Inter"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                fontSize: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                mt: 1,
                                            }}
                                        >
                                            Toca para ver más
                                            <ExpandMore sx={{ fontSize: '1rem' }} />
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    }

    // Versión desktop (original mejorada)
    return (
        <Box sx={{ position: 'relative', my: 8 }}>
            {/* Línea central con gradiente */}
            <Box
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: `linear-gradient(180deg, 
                        ${theme.palette.primary.main} 0%, 
                        ${theme.palette.secondary.main} 100%)`,
                    transform: 'translateX(-50%)',
                    borderRadius: 2,
                    boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                }}
            />

            {events.map((event, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        mb: 8,
                        gap: 4,
                    }}
                >
                    {/* Punto animado en la línea */}
                    <Box
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                            border: `4px solid ${theme.palette.background.paper}`,
                            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.3)}`,
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateX(-50%) scale(1.2)',
                                boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.4)}`,
                            },
                        }}
                    />

                    {/* Contenido */}
                    <Box
                        sx={{
                            flex: 1,
                            maxWidth: '45%',
                            textAlign: index % 2 === 0 ? 'right' : 'left',
                        }}
                    >
                        <Card
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                padding: 4,
                                borderRadius: 3,
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                background: `linear-gradient(135deg, 
                                    ${theme.palette.background.paper} 0%, 
                                    ${alpha(theme.palette.primary.light, 0.05)} 100%)`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                                {/* Año */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 2,
                                        justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                    }}
                                >
                                    <CalendarToday
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontSize: '1.5rem',
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        fontFamily="Montserrat"
                                        fontWeight={800}
                                        color="primary"
                                    >
                                        {event.year}
                                    </Typography>
                                </Box>

                                {/* Título */}
                                <Typography
                                    variant="h5"
                                    fontFamily="Montserrat"
                                    fontWeight={700}
                                    gutterBottom
                                    sx={{ color: theme.palette.text.primary }}
                                >
                                    {event.title}
                                </Typography>

                                {/* Descripción */}
                                <Typography
                                    variant="body1"
                                    fontFamily="Inter"
                                    lineHeight={1.7}
                                    sx={{ color: theme.palette.text.secondary, mb: 2 }}
                                >
                                    {event.description}
                                </Typography>

                                {/* Ubicación */}
                                {event.location && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mt: 2,
                                        }}
                                    >
                                        <LocationOn
                                            sx={{
                                                color: theme.palette.secondary.main,
                                                fontSize: '1.2rem',
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            fontFamily="Inter"
                                            sx={{ color: theme.palette.text.secondary }}
                                        >
                                            {event.location}
                                        </Typography>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Imagen */}
                    {event.image && (
                        <Box
                            sx={{
                                flex: 1,
                                maxWidth: '45%',
                            }}
                        >
                            <Box
                                component="img"
                                src={event.image}
                                alt={event.title}
                                sx={{
                                    width: '100%',
                                    height: 280,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default HistoryTimeline;
