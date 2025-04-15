import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function UserCard({ user, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> onPress?.(user)}>
      <LazyImage source={{ uri: user.avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{user.name}</Text accessibilityLabel=t("תוכן נגיש")>
        <Text style={styles.age} accessibilityLabel=t("תוכן נגיש")>{user.age} | {user.city}</Text accessibilityLabel=t("תוכן נגיש")>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', margin: 8, padding: 12, borderRadius: 10, elevation: 3 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  age: { fontSize: 14, color: '#555' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
