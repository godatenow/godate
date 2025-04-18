
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GroupChatScreen() {
  return (
    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{t(t("'   "))}</Text accessibilityLabel=t("תוכן נגיש")>
    
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
