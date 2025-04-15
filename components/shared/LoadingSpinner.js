import FadeInView from "./FadeInView";
import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

export default function LoadingSpinner({ size = t("large"), color = t("#ff4081"), label }) {
  return (<FadeInView>

    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {label && <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{label}</Text accessibilityLabel=t("תוכן נגיש")>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  label: { marginTop: 8, fontSize: 14, color: '#444' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
