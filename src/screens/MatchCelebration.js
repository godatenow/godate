
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import { Image as RNImage } from 'react-native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const MatchCelebration = () => {
  return (
    <View style={rtlStyles} style={styles.container}>
      <LazyImage
        source={require('../../assets/logo/GoDate_Logo_compressed.webp')}
        style={{
          width: 160,
          height: 160,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 20
        }}
      />

      <LottieView
        source={require('./assets/animations/confetti.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" !t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.subtitle} accessibilityLabel=t("תוכן נגיש")>{t(t("        "))}</Text accessibilityLabel=t("תוכן נגיש")>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  animation: {
    width: width * 0.9,
    height: 300,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#d6336c',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default MatchCelebration;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
