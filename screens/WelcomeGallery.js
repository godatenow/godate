
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const images = [
  require('../assets/images/GoDate_Ad_LovePath.png'),
  // ניתן להוסיף כאן עוד תמונות שיווק בעתיד
];

const WelcomeGallery = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ברוכים הבאים ל-GoDate</Text>
      {images.map((img, index) => (
        <Image key={index} source={img} style={styles.image} resizeMode="contain" / accessibilityLabel="תמונה" accessible={true}>
      ))}
      <Text style={styles.footer}>אהבה אמיתית מתחילה מבפנים.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#ff5a7e',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 360,
    marginBottom: 24,
    borderRadius: 16,
  },
  footer: {
    fontFamily: 'Heebo',
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginTop: 12,
  },
});

export default WelcomeGallery;
