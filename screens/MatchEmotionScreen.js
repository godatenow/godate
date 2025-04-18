import Toast from '../components/Toast';

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import AppCard from '../components/ui/AppCard';

const sampleMatches = [
  {
    id: '1',
    name: 'נועה',
    matchPercent: 92,
    emotionScore: 'גבוהה',
    image: 'https://placekitten.com/300/300',
    message: 'שניכם מחפשים עומק רגשי וכנות.',
  },
  {
    id: '2',
    name: 'דניאל',
    matchPercent: 88,
    emotionScore: 'בינונית-גבוהה',
    image: 'https://placekitten.com/301/300',
    message: 'יש חיבור טוב – במיוחד בצורת התקשורת.',
  },
];

const MatchEmotionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>התאמות רגשיות</Text>
      {sampleMatches.map(match => (
        <AppCard key={match.id} title={match.name}>
          <Image source={{ uri: match.image }} style={styles.image}  accessibilityLabel="תמונה" accessible={true}/>
          <Text style={styles.text}>אחוז התאמה: {match.matchPercent}%</Text>
          <Text style={styles.text}>חיבור רגשי: {match.emotionScore}</Text>
          <Text style={styles.message}>{match.message}</Text>
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
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'right',
    color: '#2196f3',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Heebo',
    color: '#333',
    textAlign: 'right',
    marginVertical: 4,
  },
  message: {
    fontSize: 15,
    fontFamily: 'Heebo',
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'right',
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginVertical: 8,
  },
});

export default MatchEmotionScreen;
