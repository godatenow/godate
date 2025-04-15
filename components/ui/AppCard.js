
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppCard = ({ title, children }) => (
  <View style={styles.card}>
    {title && <Text style={styles.title}>{title}</Text>}
    <View>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontFamily: 'Heebo-Bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
    textAlign: 'right'
  },
});

export default AppCard;
