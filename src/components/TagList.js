
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

const TagList = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <Text key={index} style={styles.tag}>
          {tag}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#e0f0ff',
    color: '#0077cc',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    fontFamily: theme.fonts.regular,
    marginRight: 8,
    marginBottom: 8,
  },
});

export default TagList;
