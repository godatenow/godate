
import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import dummyProfiles from '../../data/dummyProfiles';

const recommended = dummyProfiles.slice(0, 5);

const RecommendationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}, {item.age}</Text>
      <Text style={styles.location}>{item.location} - {item.job}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>המלצות עבורך</Text>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={recommended}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 15,
    color: '#333',
    marginTop: 8,
  },
});

export default RecommendationScreen;
