
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import LazyImage from '../components/LazyImage';

import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image, StyleSheet, I18nManager } from 'react-native';

I18nManager.forceRTL(true);

const slides = [
  {
    key: 'intro1',
    title: '   ',
    image: require('../assets/images/intro1.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 'intro2',
    title: '    ',
    image: require('../assets/images/intro2.png'),
    backgroundColor: '#ffffff',
  }
];

const OnboardingScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={rtlStyles} style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <LazyImage source={item.image} style={styles.image} resizeMode=t("contain") />
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{item.title}</Text accessibilityLabel=t("תוכן נגיש")>
    
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

  const onDone = () => {
    navigation.replace('Login'); //     
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton
      onSkip={onDone}
    />
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 32,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Heebo-Bold',
    writingDirection: 'rtl',
  },
});

export default OnboardingScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
