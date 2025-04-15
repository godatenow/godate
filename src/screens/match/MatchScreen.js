
import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import React, { useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import dummyProfiles from '../../../data/dummyProfiles';

const MatchScreen = () => {
  const [profiles, setProfiles] = useState(dummyProfiles);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}, {item.age}</Text>
      <Text style={styles.location}>{item.location} - {item.job}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
      data={profiles}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 15,
    color: '#333',
  },
});

export default MatchScreen;
