import Toast from '../components/Toast';

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import AppCard from '../components/ui/AppCard';

const recommendations = [
  {
    id: '1',
    name: 'שיר',
    reason: 'חולקים ערכים דומים בגידול ילדים וקריירה.',
    image: 'https://placekitten.com/300/201',
  },
  {
    id: '2',
    name: 'עומר',
    reason: 'שניכם עונים על שאלון האישיות בפרופיל רגשי דומה.',
    image: 'https://placekitten.com/301/202',
  },
];

const RecommendationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>המלצות חכמות בשבילך</Text>
      {recommendations.map((rec) => (
        <AppCard key={rec.id} title={rec.name}>
          <Image source={{ uri: rec.image }} style={styles.image} / accessibilityLabel="תמונה" accessible={true}>
          <Text style={styles.reason}>{rec.reason}</Text>
        </AppCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    color: '#673ab7',
    textAlign: 'right',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginBottom: 8,
  },
  reason: {
    fontFamily: 'Heebo',
    fontSize: 16,
    textAlign: 'right',
    color: '#444',
  },
});

export default RecommendationScreen;
