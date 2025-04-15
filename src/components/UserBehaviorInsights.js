import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserBehaviorInsights({ insights }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("    "))}</Text accessibilityLabel=t("תוכן נגיש")>
      {insights.map((i, idx) => (
        <Text key={idx} style={styles.insight} accessibilityLabel=t("תוכן נגיש")> {i}</Text accessibilityLabel=t("תוכן נגיש")>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  insight: { fontSize: 14, marginBottom: 4, color: '#444' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
