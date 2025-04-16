import FadeInView from '../components/FadeInView';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';

const Loading = () => (
  <FadeInView>
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  </FadeInView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
});

export default Loading;
