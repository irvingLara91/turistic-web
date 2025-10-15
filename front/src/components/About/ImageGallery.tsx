// components/About/ImageGallery.tsx
import React, { useState } from 'react';
import {
    Box,
    Dialog,
    IconButton,
    alpha,
} from '@mui/material';
import {
    Close,
    NavigateBefore,
    NavigateNext,
} from '@mui/icons-material';

interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
    year?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
    initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images}) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openImage = (index: number) => {
        setSelectedImage(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            {/* Grid de Imágenes */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)'
                    },
                    gap: 3,
                    mt: 4,
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        onClick={() => openImage(index)}
                        sx={{
                            position: 'relative',
                            borderRadius: 3,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                                '& .image-overlay': {
                                    opacity: 1,
                                },
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={image.src}
                            alt={image.alt}
                            sx={{
                                width: '100%',
                                height: 250,
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <Box
                            className="image-overlay"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(to bottom, ${alpha('#000', 0)} 0%, ${alpha('#000', 0.7)} 100%)`,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: 3,
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            }}
                        >
                            {image.caption && (
                                <Box
                                    sx={{
                                        color: 'white',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    {image.caption}
                                </Box>
                            )}
                            {image.year && (
                                <Box
                                    sx={{
                                        color: alpha('#fff', 0.8),
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    {image.year}
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Modal de Imagen Ampliada */}
            <Dialog
                open={selectedImage !== null}
                onClose={closeImage}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'hidden',
                    },
                }}
            >
                {selectedImage !== null && (
                    <Box sx={{ position: 'relative' }}>
                        {/* Imagen Principal */}
                        <Box
                            component="img"
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '80vh',
                                objectFit: 'contain',
                                borderRadius: 2,
                            }}
                        />

                        {/* Controles */}
                        <IconButton
                            onClick={closeImage}
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                backgroundColor: alpha('#000', 0.6),
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: alpha('#000', 0.8),
                                },
                            }}
                        >
                            <Close />
                        </IconButton>

                        {images.length > 1 && (
                            <>
                                <IconButton
                                    onClick={prevImage}
                                    sx={{
                                        position: 'absolute',
                                        left: 16,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: alpha('#000', 0.6),
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: alpha('#000', 0.8),
                                        },
                                    }}
                                >
                                    <NavigateBefore />
                                </IconButton>
                                <IconButton
                                    onClick={nextImage}
                                    sx={{
                                        position: 'absolute',
                                        right: 16,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: alpha('#000', 0.6),
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: alpha('#000', 0.8),
                                        },
                                    }}
                                >
                                    <NavigateNext />
                                </IconButton>
                            </>
                        )}

                        {/* Información de la Imagen */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: `linear-gradient(to top, ${alpha('#000', 0.8)} 0%, transparent 100%)`,
                                color: 'white',
                                padding: 4,
                                pt: 6,
                            }}
                        >
                            {images[selectedImage].caption && (
                                <Box
                                    sx={{
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    {images[selectedImage].caption}
                                </Box>
                            )}
                            {images[selectedImage].year && (
                                <Box
                                    sx={{
                                        fontSize: '1rem',
                                        opacity: 0.9,
                                    }}
                                >
                                    {images[selectedImage].year}
                                </Box>
                            )}
                        </Box>

                        {/* Contador */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                backgroundColor: alpha('#000', 0.6),
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: 2,
                                fontSize: '0.9rem',
                                fontWeight: 500,
                            }}
                        >
                            {selectedImage + 1} / {images.length}
                        </Box>
                    </Box>
                )}
            </Dialog>
        </>
    );
};

export default ImageGallery;
