
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../theme/theme';

const EmptyState = ({ title = 'אין נתונים', subtitle = 'נסה שוב מאוחר יותר', image }) => {
  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 32,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: theme.fonts.bold,
    textAlign: theme.textAlign,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
  },
});

export default EmptyState;
