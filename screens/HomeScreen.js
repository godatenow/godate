
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { useWindowDimensions, Platform } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;


import FadeInView from "./FadeInView";
import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button, View, Text, StyleSheet, I18nManager } from 'react-native';
import i18n from '../locales/i18n';

const Screen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timeout = setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <FadeInView>) => clearTimeout(timeout    </FadeInView>
  );
}, []);

  if (loading) return <LoadingSpinner />;

  return (
    <FadeInView>
    <View style={rtlStyles} accessible={{true}} accessibilityLabel="אזור תצוגה" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text accessible={{true}} accessibilityLabel="טקסט" style={{ ...styles.title }}>{{ i18n.t('home_title') }}</Text>
    
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

export default Screen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Heebo',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    color: '#333'
  }
});
