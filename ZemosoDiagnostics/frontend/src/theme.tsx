import { createTheme, PaletteColorOptions, PaletteColor } from '@mui/material';
import './index.css';
declare module '@mui/material/styles' {
  interface PaletteOptions {
    interactiveBlue50: PaletteColorOptions;
    interactiveBlue100: PaletteColorOptions;
    interactiveBlue300: PaletteColorOptions;
    interactiveBlue500: PaletteColorOptions;
    interactiveBlue800: PaletteColorOptions;
    structuralPurple50: PaletteColorOptions;
    structuralPurple100: PaletteColorOptions;
    structuralPurple500: PaletteColorOptions;
    structuralPurple800: PaletteColorOptions;
    gammaHigh: PaletteColorOptions;
    gammaMedium: PaletteColorOptions;
    gammaLow: PaletteColorOptions;
    gammaButtonText: PaletteColorOptions;
    gammaWhite: PaletteColorOptions;
    grey50: PaletteColorOptions;
    grey100: PaletteColorOptions;
    grey200: PaletteColorOptions;
    grey300: PaletteColorOptions;
    grey500: PaletteColorOptions;
    grey700: PaletteColorOptions;
    red500: PaletteColorOptions;
    greenSuccess: PaletteColorOptions;
    red200: PaletteColorOptions;
    black30:PaletteColorOptions;
  }

  interface Palette {
    interactiveBlue100: PaletteColor;
    interactiveBlue50: PaletteColor;
    interactiveBlue300: PaletteColor;
    interactiveBlue500: PaletteColor;
    interactiveBlue800: PaletteColor;
    structuralPurple50: PaletteColor;
    structuralPurple100: PaletteColor;
    structuralPurple500: PaletteColor;
    structuralPurple800: PaletteColor;
    gammaHigh: PaletteColor;
    gammaMedium: PaletteColor;
    gammaLow: PaletteColor;
    gammaButtonText: PaletteColor;
    gammaWhite: PaletteColor;
    grey50: PaletteColor;
    grey100: PaletteColor;
    grey200: PaletteColor;
    grey300: PaletteColor;
    grey500: PaletteColor;
    grey700: PaletteColor;
    red500: PaletteColor;
    greenSuccess: PaletteColor;
    red200: PaletteColor;
    black30:PaletteColor;
  }

  interface TypographyVariants {
    body: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    title: React.CSSProperties;
    gammaRegular: React.CSSProperties;
    body3: React.CSSProperties;
    overline2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    title?: React.CSSProperties;
    gammaRegular?: React.CSSProperties;
    body3?: React.CSSProperties;
    overline2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    caption1: true;
    caption2: true;
    title: true;
    gammaRegular: true;
    overline2: true;
    body3: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsSizeOverrides {
    large: true;
    extraLarge: true;
  }

  interface ChipClasses {
    sizeLarge: true;
    sizeExtraLarge: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    interactiveBlue100: true;
    interactiveBlue50: true;
    interactiveBlue300: true;
    interactiveBlue500: true;
    interactiveBlue800: true;
    structuralPurple50: true;
    structuralPurple100: true;
    structuralPurple500: true;
    structuralPurple800: true;
    gammaHigh: true;
    gammaMedium: true;
    gammaLow: true;
    gammaButtonText: true;
    gammaWhite: true;
    grey50: true;
    grey100: true;
    grey200: true;
    grey300: true;
    grey500: true;
    grey700: true;
    red500: true;
    greenSuccess: true;
    red200: true;
    black30:true;
  }
  interface ButtonClasses {
    textText1: string;
  }
}

let theme = createTheme({
  spacing: 4,
  palette: {
    interactiveBlue50: {
      main: '#F2F5FF'
    },
    interactiveBlue100: {
      main: '#C6CEF7'
    },
    interactiveBlue300: {
      main: '#9191F2'
    },
    interactiveBlue500: {
      main: '#6B4DE0'
    },
    interactiveBlue800: {
      main: '#4D1C8C'
    },
    structuralPurple50: {
      main: '#F9F5FA'
    },
    structuralPurple100: {
      main: '#EBDAF2'
    },
    structuralPurple500: {
      main: '#C898D9'
    },
    structuralPurple800: {
      main: '#9E62B2'
    },
    gammaHigh: {
      main: '#2D2A38'
    },
    gammaMedium: {
      main: '#5A5766'
    },
    gammaLow: {
      main: '#757380'
    },
    gammaButtonText: {
      main: '#FAFAFC'
    },
    gammaWhite: {
      main: '#FFFFFF'
    },
    grey50: {
      main: '#F8F8FA'
    },
    grey100: {
      main: '#E9E8ED'
    },
    grey200: {
      main: '#D4D2D9'
    },
    grey300: {
      main: '#9F9DA6'
    },
    grey500: {
      main: '#6D6C73'
    },
    grey700: {
      main: '#3C3B40'
    },
    red500: {
      main: '#DA4D4D'
    },
    red200: {
      main: '#FC5C5C'
    },
    greenSuccess: {
      main: '#4D8066'
    },
    black30:{
      main:'#12121d'
    }
  },

  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    title: {
      fontFamily: 'Inter',
      fontSize: '48px',
      lineHeight: '52px',
      fontWeight: '500',
      textTransform: 'none'
    },
    h1: {
      fontFamily: 'Inter',
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: '700',
      textTransform: 'none'
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '24px',
      lineHeight: '38px',
      fontWeight: '400',
      textTransform: 'none'
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: '600',
      textTransform: 'none',
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: '800',
      textTransform: 'none'
    },
    body: {
      fontFamily: 'Inter',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400',
      textTransform: 'none'
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '600',
      textTransform: 'none'
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: '600',
      textTransform: 'none'
    },
    caption: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '400',
      textTransform: 'none'
    },
    caption1: {
      fontFamily: 'Inter',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '600',
      textTransform: 'none'
    },
    caption2: {
      fontFamily: 'Inter',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
      textTransform: 'none'
    },
    button: {
      fontFamily: 'Inter',
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: '700',
      textTransform: 'none'
    },
    overline: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
      textTransform: 'none'
    },

    gammaRegular: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400'
    },
    overline2: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '500',
      textTransform: 'none'
    },
    body3: {
      fontFamily: 'Inter',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '600',
      textTransform: 'none'
    }
  }
});

const shadows = theme.shadows;
shadows[1] = '0px 0px 26px rgba(233, 232, 237, 0.5)';
shadows[2] = '0px -4px 6px rgba(0, 0, 0, 0.06)';
shadows[3] = '0px 0px 12px rgba(233, 232, 237, 0.53)';

theme = createTheme({ ...theme, shadows });
export const EXTRA_COLORS= {
  PRIMARY_GREY: '#F6F5F7',
  BETA_PURPLE: '#9E62B3'
};

export default theme;
