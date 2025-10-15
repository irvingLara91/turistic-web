import React from 'react';
import ContainerWrapper from '@components/Common/ContainerWrapper.tsx';
import TypographyCustom from '@components/Common/TypographyCustom';

const FooterDerechos: React.FC = () => {
    return (
        <ContainerWrapper
            backgroundColor="background.paper"
            sxBox={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                py: 2,
                textAlign: 'center',
            }}
        >
            <TypographyCustom
                variant="body2"
                font="roboto"
                weight={400}
                align="center"
                sx={{
                    alignSelf: 'stretch',
                    flex: 1,
                    lineHeight: 1.2,
                    color: 'black',
                    fontFamily: '"Hind", sans-serif',
                }}
            >
                © {new Date().getFullYear()} Copyright. Todos los derechos reservados.
            </TypographyCustom>
        </ContainerWrapper>
    );
};

export default FooterDerechos;
