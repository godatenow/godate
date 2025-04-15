
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import FadeInView from "./FadeInView";
import React from 'react';
import { View, Text, StyleSheet, I18nManager } from 'react-native';
import i18n from '../locales/i18n';

const CTAEmotion = () => {
  return (
    <FadeInView>
    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.title} accessibilityLabel="רגש לפעולה">
        רגש לפעולה
      </Text>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
      </FadeInView>
  );
};

export default CTAEmotion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Heebo',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    color: '#333',
  },
});
