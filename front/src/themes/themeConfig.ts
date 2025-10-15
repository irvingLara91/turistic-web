import { createTheme } from '@mui/material/styles';

const themeConfig = createTheme({
    // ===== PALETA DE COLORES =====
    palette: {
        primary: {
            main: '#FFB74D',
            light: '#FFD54F',
            dark: '#FF8F00',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#2196F3',
            light: '#64B5F6',
            dark: '#1976D2',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#d32f2f',
            light: '#ef5350',
            dark: '#c62828',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ed6c02',
            light: '#ff9800',
            dark: '#e65100',
            contrastText: '#ffffff',
        },
        info: {
            main: '#0288d1',
            light: '#03a9f4',
            dark: '#01579b',
            contrastText: '#ffffff',
        },
        success: {
            main: '#2e7d32',
            light: '#4caf50',
            dark: '#1b5e20',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f4f4f4', // ← Color actualizado aquí
            paper: '#ffffff',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#9e9e9e',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#f4f4f4', // ← También agregado aquí por consistencia
        },
    },

    // ===== TIPOGRAFÍA =====
    typography: {
        fontFamily: '"Montserrat", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',

        // Encabezados con Montserrat
        h1: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.3,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.3,
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.4,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.4,
            letterSpacing: '0em',
        },
        h6: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: '1.125rem',
            lineHeight: 1.4,
            letterSpacing: '0.0075em',
        },

        // Texto corporal con Inter
        body1: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },

        // Botones con Roboto
        button: {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'none',
        },

        // Subtítulos con Inter
        subtitle1: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },

        // Texto pequeño con Roboto
        caption: {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
        }
    },

    // ===== ESPACIADO Y FORMAS =====
    spacing: 8,
    shape: {
        borderRadius: 8,
    },


    // ===== COMPONENTES PERSONALIZADOS =====
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '8px 16px',
                    textTransform: 'none' as const,
                    fontWeight: 500,
                    '&.italic': {
                        fontStyle: 'italic',
                    },
                },
                contained: {
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                    '&:hover': {
                        boxShadow: '0 2px 6px rgba(0,0,0,0.16)',
                    },
                },
                outlined: {
                    borderWidth: '1.5px',
                    '&:hover': {
                        borderWidth: '1.5px',
                    },
                },
            },
            defaultProps: {
                disableElevation: true,
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    '&.italic .MuiInputBase-input': {
                        fontStyle: 'italic',
                    },
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.italic': {
                        fontStyle: 'italic',
                    },
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    backgroundImage: 'none',
                },
                elevation1: {
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                },
                elevation2: {
                    boxShadow: '0 2px 6px rgba(0,0,0,0.16)',
                },
                elevation3: {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                },
            },
        },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 12,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                },
            },
        },

        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    marginTop: 4,
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    fontWeight: 500,
                },
            },
        },

        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none' as const,
                    fontWeight: 500,
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.italic': {
                        fontStyle: 'italic',
                    },
                },
            },
        },

        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    '&.italic': {
                        fontStyle: 'italic',
                    },
                },
            },
        },
    },


});

export default themeConfig;
