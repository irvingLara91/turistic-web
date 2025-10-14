import React from 'react';
import { Typography } from '@mui/material';

interface TypographyCustomProps {
    // Tipo de texto
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
    // Fuente personalizada
    font?: 'montserrat' | 'inter' | 'roboto' | 'inherit';
    // Peso de fuente
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    // Estilo
    italic?: boolean;
    // Transformación de texto
    transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    // Contenido
    children: React.ReactNode;
    // Estilos personalizados
    sx?: any;
    // Props adicionales para Typography
    align?: 'left' | 'center' | 'right' | 'justify';
    color?: string;
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    className?: string;
    id?: string;
}

const TypographyCustom: React.FC<TypographyCustomProps> = ({
                                                               variant = 'body1' as any,
                                                               font = 'inherit',
                                                               weight,
                                                               italic = false,
                                                               transform = 'none',
                                                               children,
                                                               sx = {},
                                                               align,
                                                               color,
                                                               gutterBottom,
                                                               noWrap,
                                                               paragraph,
                                                               className,
                                                               id,
                                                           }) => {
    // Mapeo de fuentes
    const fontFamily = {
        montserrat: '"Montserrat", sans-serif',
        inter: '"Inter", sans-serif',
        roboto: '"Roboto", sans-serif',
        inherit: 'inherit'
    }[font];

    return (
        <Typography
            variant={variant}
            align={align}
            color={color}
            gutterBottom={gutterBottom}
            noWrap={noWrap}
            paragraph={paragraph}
            className={className}
            id={id}
            sx={{
                fontFamily,
                fontWeight: weight,
                fontStyle: italic ? 'italic' : 'normal',
                textTransform: transform,
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
};

export default TypographyCustom;
