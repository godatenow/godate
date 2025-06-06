import FadeInView from "./FadeInView";
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function ThemedButton({ title, onPress }) {
  return (
    <FadeInView>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.85 : 1 }
        ]}
      >
        <Text style={styles.text} accessibilityLabel="כפתור פעולה">{title}</Text>
      </Pressable>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.md,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginVertical: theme.spacing.sm,
  },
  text: {
    color: '#FFF',
    fontSize: theme.font.size.md,
    fontFamily: theme.font.bold,
    textAlign: 'center',
  },
});
