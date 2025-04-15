
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AppCard from '../components/ui/AppCard';

const PremiumJoinScreen = () => {
  const handleSubscribe = () => {
    // קישור ל-Firebase Function שיוצרת Checkout עם Stripe
    Linking.openURL('https://your-cloud-function-url.com/createCheckoutSession');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>שדרג לפרימיום</Text>
      <AppCard title="מה מקבלים?">
        <Text style={styles.text}>• התאמות חכמות יותר</Text>
        <Text style={styles.text}>• פתיחים מ-מנגנון חכם ללא הגבלה</Text>
        <Text style={styles.text}>• גישה לסטוריז פרטיים</Text>
        <Text style={styles.text}>• תמיכה אישית ומנטור</Text>
      </AppCard>
      <TouchableOpacity style={styles.button} onPress={handleSubscribe} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText}>הצטרף עכשיו</Text>
      </TouchableOpacity>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    color: '#ff5a7e',
    textAlign: 'right',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Heebo',
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    marginVertical: 2,
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 16,
    borderRadius: 16,
    marginTop: 24,
  },
  buttonText: {
    fontFamily: 'Heebo-Bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default PremiumJoinScreen;
