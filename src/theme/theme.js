
import { I18nManager } from 'react-native';

const isRTL = I18nManager.isRTL;

export const theme = {
  fonts: {
    regular: 'Heebo-Regular',
    bold: 'Heebo-Bold',
  },
  direction: isRTL ? 'rtl' : 'ltr',
  textAlign: isRTL ? 'right' : 'left',
};
