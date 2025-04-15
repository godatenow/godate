
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function UserDashboardScreen() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProfile({
        name: '',
        age: 30,
        city: ' ',
        stats: { matches: 12, messages: 42 }
      });
    }, 500);
  }, []);

  if (!profile) return <Text accessibilityLabel=t("תוכן נגיש")>{t(t(" ..."))}</Text accessibilityLabel=t("תוכן נגיש")>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")> {profile.name}!</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>: {profile.age}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>: {profile.city}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>: {profile.stats.matches}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>: {profile.stats.messages}</Text accessibilityLabel=t("תוכן נגיש")>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22, fontWeight: 'bold' },
  text: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginTop: 10 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
