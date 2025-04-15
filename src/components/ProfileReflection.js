import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Info } from 'lucide-react-native';

export default function ProfileReflection({ feedback, onExpand }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Info size={18} color=t("#555") />
        <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      </View>
      <Text style={styles.feedback} accessibilityLabel=t("תוכן נגיש")>{feedback}</Text accessibilityLabel=t("תוכן נגיש")>
      {onExpand && <TouchableOpacity onPress={onExpand} accessibilityLabel=t("תוכן נגיש")><Text style={styles.link} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגישt("></TouchableOpacity accessibilityLabel=")תוכן נגיש">}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f1f1f1', borderRadius: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  title: { marginLeft: 6, fontSize: 16, fontWeight: 'bold' },
  feedback: { fontSize: 14, color: '#333' },
  link: { marginTop: 6, color: '#007aff', fontSize: 14 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
