import LazyCachedImage from '../components/LazyCachedImage';
import FadeInView from '../components/FadeInView';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';

const EmptyState = ({ message = 'לא נמצאו תוצאות.', imageSource }) => {
  return (
    <FadeInView>
      <View style={styles.container}>
        {imageSource && <LazyCachedImage source={imageSource} style={styles.image} />}
        <Text style={styles.message} accessibilityLabel="הודעת מצב ריק">{message}</Text>
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing.md,
  },
  message: {
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.textLight,
    textAlign: 'center',
  },
});

export default EmptyState;
