
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import { useWindowDimensions, Platform , I18nManager , Image, View } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;



//    ,    -RTL      
if (I18nManager.isRTL !== true) {
  I18nManager.forceRTL(true);
}

const profile = { gender: 'other' }; // 
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8F0'
  },
  message: {
    padding: 12,
    backgroundColor: '#FFEEF2',
    borderRadius: 16,
    maxWidth: '80%'
  },
  text: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#333'
  },
  subText: {
    marginTop: 20,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center'
  }
});

export default ChatScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
