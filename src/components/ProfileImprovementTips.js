import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Lightbulb } from 'lucide-react-native';

export default function ProfileImprovementTips({ tips }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Lightbulb size={18} color=t("#ffaa00") />
        <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      </View>
      {tips.map((tip, idx) => (
        <Text key={idx} style={styles.tip} accessibilityLabel=t("תוכן נגיש")> {tip}</Text accessibilityLabel=t("תוכן נגיש")>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f9f9f9', padding: 16, borderRadius: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  title: { fontSize: 16, fontWeight: 'bold', marginLeft: 6 },
  tip: { fontSize: 14, color: '#444', marginBottom: 4 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
