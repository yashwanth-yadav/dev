import { createTheme, PaletteColorOptions, PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    alpha600: PaletteColorOptions;
    mainBackground: PaletteColorOptions;
    alpha500: PaletteColorOptions;
    alpha400: PaletteColorOptions;
    alpha300: PaletteColorOptions;
    alpha200: PaletteColorOptions;
    alpha100: PaletteColorOptions;
    betaHigh: PaletteColorOptions;
    betaMedium: PaletteColorOptions;
    betaLow: PaletteColorOptions;
    beta400: PaletteColorOptions;
    beta200: PaletteColorOptions;
    beta100: PaletteColorOptions;
    gammaWhite: PaletteColorOptions;
    gammaColor1: PaletteColorOptions;
    gammaColor2: PaletteColorOptions;
    gammaColor3: PaletteColorOptions;
    gammaAccent1: PaletteColorOptions;
    gammaAccent2: PaletteColorOptions;
    gammaAccent3: PaletteColorOptions;
    boxShadow: PaletteColorOptions;
  }

  interface Palette {
    mainBackground: PaletteColor;
    alpha600: PaletteColor;
    alpha500: PaletteColor;
    alpha400: PaletteColor;
    alpha300: PaletteColor;
    alpha200: PaletteColor;
    alpha100: PaletteColor;
    betaHigh: PaletteColor;
    betaMedium: PaletteColor;
    betaLow: PaletteColor;
    beta400: PaletteColor;
    beta200: PaletteColor;
    beta100: PaletteColor;
    gammaWhite: PaletteColor;
    gammaColor1: PaletteColor;
    gammaColor2: PaletteColor;
    gammaColor3: PaletteColor;
    gammaAccent1: PaletteColor;
    gammaAccent2: PaletteColor;
    gammaAccent3: PaletteColor;
    boxShadow: PaletteColor;
  }

  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    alpha600: true;
    alpha500: true;
    mainBackground: true;
    alpha400: true;
    alpha300: true;
    alpha200: true;
    alpha100: true;
    betaHigh: true;
    betaMedium: true;
    betaLow: true;
    beta400: true;
    beta200: true;
    beta100: true;
    gammaWhite: true;
    gammaColor1: true;
    gammaColor2: true;
    gammaColor3: true;
    gammaAccent1: true;
    gammaAccent2: true;
  }
  interface ButtonClasses {
    textText1: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    alpha600: true;
    mainBackground: true;

    alpha500: true;
    alpha400: true;
    alpha300: true;
    alpha200: true;
    alpha100: true;
    betaHigh: true;
    betaMedium: true;
    betaLow: true;
    beta400: true;
    beta200: true;
    beta100: true;
    gammaWhite: true;
    gammaColor1: true;
    gammaColor2: true;
    gammaColor3: true;
    gammaAccent1: true;
    gammaAccent2: true;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    alpha600: {
      main: '#0B6D62'
    },
    mainBackground: {
      main: '#F7F7F7'
    },
    alpha500: {
      main: '#1B877A'
    },
    alpha400: {
      main: '#30A193'
    },
    alpha300: {
      main: '#4ABAAD'
    },
    alpha200: {
      main: '#77EDDF'
    },
    alpha100: {
      main: '#B2FFF6'
    },
    betaHigh: {
      main: '#373C38'
    },
    betaMedium: {
      main: '#656E66'
    },
    betaLow: {
      main: '#94A196'
    },
    beta400: {
      main: '#D6D6D6'
    },
    beta200: {
      main: '#E9EBE9'
    },
    beta100: {
      main: '#F7F7F7'
    },
    gammaWhite: {
      main: '#FFFFFF'
    },
    gammaColor1: {
      main: '#E8FFFC'
    },
    gammaColor2: {
      main: '#E7FCE0'
    },
    gammaColor3: {
      main: '#F5FFF7'
    },
    gammaAccent1: {
      main: '#ED8F02'
    },
    gammaAccent2: {
      main: '#FF725E'
    },
    gammaAccent3: {
      main: '#EFFFFD'
    },
    boxShadow: {
      main: '#7d7d7d'
    },
    background: {
      default: '#EFFFFD',
      paper: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)'

      // paperColor: '#EFFFFD'
    }
  },

  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: '600',
      textTransform: 'none'
    },
    h2: {
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: '500',
      textTransform: 'none'
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
      textTransform: 'none'
    },
    subtitle2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      textTransform: 'none'
    },
    body1: {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '600',
      textTransform: 'none'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '500',
      textTransform: 'none'
    },
    caption1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '700',
      textTransform: 'none'
    },
    caption2: {
      fontFamily: 'Montserrat',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '500',
      textTransform: 'none'
    }
  },
  shadows: [
    'none',
    '0px -2px 8px rgba(125, 125, 125, 0.12)',
    '0px 2px 8px rgba(125, 125, 125, 0.12)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1057,
      lg: 1428,
      xl: 1880
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        defaultProps: {
          background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'white'
        }
      }
    }
  }
});

export type textVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'inherit'
  | 'caption1'
  | 'caption2'
  | undefined;

export type color =
  | 'alpha600'
  | 'alpha500'
  | 'alpha400'
  | 'alpha300'
  | 'alpha200'
  | 'alpha100'
  | 'betaHigh'
  | 'betaMedium'
  | 'betaLow'
  | 'beta400'
  | 'beta200'
  | 'beta100'
  | 'gammaWhite'
  | 'gammaColor1'
  | 'gammaColor2'
  | 'gammaColor3'
  | 'gammaAccent1'
  | 'gammaAccent2'
  | undefined;

export type textColor =
  | 'alpha600.main'
  | 'alpha500.main'
  | 'alpha400.main'
  | 'alpha300.main'
  | 'alpha200.main'
  | 'alpha100.main'
  | 'betaHigh..main'
  | 'betaMedium..main'
  | 'betaLow.main'
  | 'beta400.main'
  | 'beta200.main'
  | 'beta100.main'
  | 'gammaWhite.main'
  | 'gammaColor1.main'
  | 'gammaColor2.main'
  | 'gammaColor3.main'
  | 'gammaAccent1.main'
  | 'gammaAccent2.main'
  | undefined;

export type iconType =
  | 'save'
  | 'dashboard'
  | 'work'
  | 'test'
  | 'settings'
  | 'news'
  | 'help'
  | 'contact'
  | 'done'
  | 'notifications'
  | 'search'
  | 'message'
  | 'bus'
  | 'car'
  | 'train'
  | 'bike'
  | 'more'
  | 'filter'
  | 'back'
  | 'location1'
  | 'location'
  | 'tick'
  | 'current'
  | 'swap'
  | 'rupee'
  | 'close'
  | 'upload'
  | 'jobs'
  | 'circle'
  | 'hoveredBus'
  | 'hoveredCar'
  | 'line'
  | 'selectedBus'
  | 'selectedCar'
  | 'from'
  | 'to'
  | 'logo';

export type imageTypes =
  | 'bmw'
  | 'hp'
  | 'instagram'
  | 'myntra'
  | 'ola'
  | 'rapido'
  | 'twitter'
  | 'uber'
  | 'wipro'
  | 'avatar'
  | 'work'
  | 'jobs'
  | 'jobsIllustration'
  | 'hitech'
  | 'logo1'
  | 'logo2'
  | 'stay'
  | 'aqi'
  | 'mapView';

export default theme;
