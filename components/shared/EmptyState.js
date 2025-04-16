import FadeInView from '../components/FadeInView';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LazyCachedImage from '../components/LazyCachedImage';

export default React.memo(function EmptyState({ message = "לא נמצאו תוצאות.", onRetry }) {
  return (
    <FadeInView>
      <View style={styles.container}>
        <LazyCachedImage source={require('../assets/animations/empty.png')} style={styles.image} />
        <Text style={styles.message} accessibilityLabel="הודעה">{message}</Text>
        {onRetry && (
          <TouchableOpacity onPress={onRetry} accessibilityLabel="כפתור נסיון חוזר">
            <Text style={styles.retry}>נסה שוב</Text>
          </TouchableOpacity>
        )}
      </View>
    </FadeInView>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 120, height: 120, marginBottom: 16 },
  message: { fontSize: 16, color: '#888', textAlign: 'center' },
  retry: { marginTop: 10, color: '#007aff', fontSize: 14 },
});
