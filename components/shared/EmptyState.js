import FadeInView from '../components/FadeInView';
import React from 'react';
import { View, Text, StyleSheet, LazyCachedImage, TouchableOpacity } from 'react-native';

export default React.memo(function EmptyState({ message = t("            "), onRetry }) {
  return (<FadeInView>

    <View style={styles.container}>
      <LazyLazyCachedImage source={require('../assets/animations/empty.png')} style={styles.image} />
      <Text style={styles.message} accessibilityLabel=t("תוכן נגיש")>{message}</Text accessibilityLabel=t("תוכן נגיש")>
      {onRetry && (
        <TouchableOpacity onPress={onRetry} accessibilityLabel="כפתור פעולה" accessible={true}>
          <Text style={styles.retry} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 120, height: 120, marginBottom: 16 },
  message: { fontSize: 16, color: '#888', textAlign: 'center' },
  retry: { marginTop: 10, color: '#007aff', fontSize: 14 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
