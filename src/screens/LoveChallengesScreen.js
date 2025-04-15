
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoveChallengesScreen = () => {
  return (
    <View style={rtlStyles} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }} accessibilityLabel=t("תוכן נגיש")>{t(t("LoveChallengesScreen"))}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={{ fontSize: 16, color: '#888', textAlign: 'center' }} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
    
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

export default LoveChallengesScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
