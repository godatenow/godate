
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message || 'אין נתונים להצגה'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  text: {
    fontSize: 16,
    fontFamily: 'Heebo',
    color: '#666',
    textAlign: 'center'
  },
});

export default EmptyState;
