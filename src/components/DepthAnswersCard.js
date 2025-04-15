
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

const DepthAnswersCard = ({ answers = {} }) => {
  if (!answers || Object.keys(answers).length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>תשובות עומק</Text>
      {Object.entries(answers).map(([question, answer], index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.question}>{question}</Text>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdf4f8',
    padding: 16,
    borderRadius: 16,
    marginVertical: 12,
  },
  header: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    marginBottom: 12,
    textAlign: theme.textAlign,
  },
  item: {
    marginBottom: 12,
  },
  question: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: '#444',
    marginBottom: 4,
    textAlign: theme.textAlign,
  },
  answer: {
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    color: '#222',
    textAlign: theme.textAlign,
  },
});

export default DepthAnswersCard;
