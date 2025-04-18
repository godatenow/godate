
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import {  Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.info} accessibilityLabel=t("תוכן נגיש")>: {user?.name || ' '}</Text accessibilityLabel=t("תוכן נגיש")>
      <TouchableOpacity style={styles.button} onPress={logout} accessibilityLabel="כפתור פעולה" accessible={true}>
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
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  info: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 12 },
  button: { backgroundColor: '#ff5b77', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
