import { I18nManager } from 'react-native';

const isRTL = I18nManager.isRTL;

export const theme = {
  fonts: {
    regular: 'Heebo-Regular',
    bold: 'Heebo-Bold',
  },
  direction: isRTL ? 'rtl' : 'ltr',
  textAlign: isRTL ? 'right' : 'left',
  colors: {
    primary: '#ff4081',
    secondary: '#3f51b5',
    background: '#ffffff',
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
    button: {
      background: '#ff4081',
      text: '#ffffff',
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      fontWeight: 'bold',
    }
  },
  layout: {
    container: {
      padding: 20,
    },
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
};
