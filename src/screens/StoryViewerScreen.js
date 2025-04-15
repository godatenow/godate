
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { theme } from '../theme/theme';

const stories = [
  {
    id: 1,
    user: 'נועה',
    image: 'https://source.unsplash.com/random/600x800?nature',
    caption: 'ברגעים הקטנים – אני מרגישה חופש.',
  },
  {
    id: 2,
    user: 'דן',
    image: 'https://source.unsplash.com/random/600x800?love',
    caption: 'מרגיש בשל לדבר אמת.',
  },
];

const StoryViewerScreen = () => {
  return (
    <View style={styles.container}>
      {stories.map((story, index) => (
        <View key={index} style={styles.story}>
          <Image source={{ uri: story.image }} style={styles.image} />
          <Text style={styles.caption}>{story.caption}</Text>
          <Text style={styles.user}>– {story.user}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  story: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fafafa',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
    resizeMode: 'cover',
  },
  caption: {
    fontSize: 16,
    padding: 12,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
  },
  user: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 12,
    paddingBottom: 12,
    fontFamily: theme.fonts.bold,
    textAlign: theme.textAlign,
  },
});

export default StoryViewerScreen;
