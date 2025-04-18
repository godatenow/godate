
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppCard from '../components/ui/AppCard';

const stories = [
  {
    id: '1',
    user: 'רותם',
    image: 'https://placekitten.com/300/200',
    text: 'היום היה לי דייט מדהים! מרגישה מלאת תקווה.',
    time: 'לפני שעה',
  },
  {
    id: '2',
    user: 'יובל',
    image: 'https://placekitten.com/301/200',
    text: 'התחלתי לכתוב לעצמי מה אני מחפש באמת.',
    time: 'לפני שעתיים',
  },
];

const StoryViewer = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>סטוריז מהקהילה</Text>
      {stories.map((story) => (
        <AppCard key={story.id} title={story.user}>
          <Image source={{ uri: story.image }} style={styles.image}  accessibilityLabel="תמונה" accessible={true}/>
          <Text style={styles.text}>{story.text}</Text>
          <Text style={styles.time}>{story.time}</Text>
        </AppCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 22,
    color: '#3f51b5',
    marginBottom: 12,
    textAlign: 'right',
  },
  text: {
    fontFamily: 'Heebo',
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    marginVertical: 8,
  },
  time: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Heebo',
    textAlign: 'right',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginTop: 8,
  },
});

export default StoryViewer;
