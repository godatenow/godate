import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeartHandshake } from 'lucide-react-native';

export default function MutualInterestFeedback({ shared }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeartHandshake size={18} color=t("#ff5b77") />
        <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("  :"))}</Text accessibilityLabel=t("תוכן נגיש")>
      </View>
      {shared.map((item, index) => (
        <Text key={index} style={styles.item} accessibilityLabel=t("תוכן נגיש")> {item}</Text accessibilityLabel=t("תוכן נגיש")>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff0f5', padding: 16, borderRadius: 10, marginVertical: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  title: { fontSize: 16, fontWeight: 'bold', marginLeft: 6 },
  item: { fontSize: 14, marginBottom: 4, color: '#333' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
