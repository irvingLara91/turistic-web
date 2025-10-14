import React from 'react';
import {Box, Container} from '@mui/material';

interface ContainerWrapperProps {
    children: React.ReactNode;
    backgroundColor?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    sxBox?: object; // Usamos object en lugar de SxProps

}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
                                                               children,
                                                               backgroundColor,
                                                               maxWidth = 'lg',
                                                               sxBox={}
}) => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: backgroundColor || 'transparent',
            }}
        >
            <Container
                maxWidth={maxWidth as any}
                sx={{
                    px: {xs: 2, sm: 3, md: 4}, // Padding horizontal responsivo
                }}
            >
                <Box sx={sxBox}>
                    {children}
                </Box>


            </Container>
        </Box>
    );
};

export default ContainerWrapper;
