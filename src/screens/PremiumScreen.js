
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { theme } from '../theme/theme';
import { createCheckoutSession } from '../services/stripeService';

const PremiumScreen = () => {
  const handleUpgrade = async () => {
    try {
      const url = await createCheckoutSession(); // דמו לקישור Stripe
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('שגיאה', 'לא ניתן לפתוח את הקישור.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('שגיאה', 'משהו השתבש.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>שדרגו לפרימיום</Text>
      <Text style={styles.subtitle}>גישה לתכונות מתקדמות, התאמות בלעדיות וסטטיסטיקות פרופיל</Text>
      <TouchableOpacity style={styles.button} onPress={handleUpgrade}>
        <Text style={styles.buttonText}>שדרגו עכשיו</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontFamily: theme.fonts.bold,
    marginBottom: 12,
    textAlign: theme.textAlign,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#666',
    textAlign: theme.textAlign,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#ff5a5f',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: theme.fonts.bold,
  },
});

export default PremiumScreen;
