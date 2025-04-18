
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import {  Platform } from 'react-native';

const isWeb = Platform.OS === 'web';


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function ProfileScreen() {
  const depthAnswers = {
  'מה אתה מחפש בזוגיות?': 'שותפות עמוקה, כנות ויציבות רגשית.',
  'מה למדת על עצמך בקשרים קודמים?': 'שאני צריך להביע רגשות בצורה ברורה יותר.',
};

  return (
    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.header} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
    
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
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background
  },
  header: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.font.size.xl,
    fontFamily: theme.font.bold,
    marginBottom: theme.spacing.md
  }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
