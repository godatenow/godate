
import { useWindowDimensions, Platform } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AppCard from '../components/ui/AppCard';

const ProfileScreen = () => {
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    // Placeholder לאימות מנגנון חכם (חיוך/מחווה)
    Alert.alert("אימות הצליח", "הפנים אומתו בהצלחה באמצעות מנגנון חכם.");
    setVerified(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>הפרופיל שלי</Text>
      <AppCard>
        <Image
          source={{ uri: 'https://placekitten.com/200/200' }}
          style={styles.image}
        / accessibilityLabel="תמונה" accessible={true}>
        <Text style={styles.name}>זכי</Text>
        <Text style={styles.status}>סטטוס: פנוי לקשר רציני</Text>
        <Text style={styles.match}>אחוז התאמה ממוצע: 89%</Text>
        <TouchableOpacity style={styles.button} onPress={handleVerify} accessibilityLabel="כפתור פעולה" accessible={true}>
          <Text style={styles.buttonText}>
            {verified ? 'מאומת' : 'אמת פרופיל באמצעות סלפי'}
          </Text>
        </TouchableOpacity>
      </AppCard>
    
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
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    textAlign: 'right',
    color: '#4caf50',
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 12,
  },
  name: {
    fontFamily: 'Heebo-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
  status: {
    fontFamily: 'Heebo',
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 8,
  },
  match: {
    fontFamily: 'Heebo',
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#ff9800',
    padding: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  buttonText: {
    fontFamily: 'Heebo-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
});

export default ProfileScreen;
