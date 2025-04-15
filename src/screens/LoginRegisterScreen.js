
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginRegisterScreenUpdated({ navigation }) {
  return (
    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("  -GoDate"))}</Text accessibilityLabel=t("תוכן נגיש")>
      <TouchableOpacity style={styles.button} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> navigation.navigate('Login')}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")></Text accessibilityLabel=t("תוכן נגיש")>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> navigation.navigate('Register')}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")></Text accessibilityLabel=t("תוכן נגיש")>
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
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  button: { backgroundColor: '#ff5b77', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginVertical: 10 },
  registerButton: { backgroundColor: '#ff8fa3' },
  buttonText: { color: '#fff', fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
