
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, I18nManager } from 'react-native'
import { Image as RNImage, View } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

I18nManager.forceRTL(true);

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('', '     ');
    } catch (error) {
      Alert.alert('', error.message);
    }
  };

  return (

      <View style={rtlStyles} style={{ alignItems: 'center', marginTop: 20 }}>
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

        <LazyImage
          source={require('../assets/logo/icon.png')}
          style={{ width: 120, height: 40, resizeMode: 'contain' }}
        />
      
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

    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <TextInput
        style={styles.input}
        placeholder=" "
        onChangeText={setEmail}
        value={email}
        keyboardType=t("email-address")
        textAlign=t("right")
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
    
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
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16
  },
  button: { backgroundColor: '#d6336c', padding: 14, borderRadius: 8 },
  buttonText: { color: 'white', fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, textAlign: 'center' }
});

export default ResetPasswordScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
