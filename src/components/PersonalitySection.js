import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Smile } from 'lucide-react-native';

export default function PersonalitySection({ traits }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
      {traits.map((trait, index) => (
        <View key={index} style={styles.traitRow}>
          <Smile size={16} color=t("#ff5b77") />
          <Text style={styles.trait} accessibilityLabel=t("תוכן נגיש")> {trait}</Text accessibilityLabel=t("תוכן נגיש")>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  traitRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  trait: { fontSize: 14, color: '#444' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
