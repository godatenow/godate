import FadeInView from "./FadeInView";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message }) {
  return (
    <FadeInView>
      <View accessibilityLabel="בועת שיחה" style={styles.bubble}>
        <Text style={styles.text} accessibilityLabel="תוכן ההודעה">{message}</Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
