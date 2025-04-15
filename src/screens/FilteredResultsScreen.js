
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '../theme/theme';

const dummyProfiles = [
  { id: '1', name: 'הילה', tags: ['פתיחות רגשית', 'תקשורת עמוקה'] },
  { id: '2', name: 'גיא', tags: ['חופש בתוך קשר', 'רוחניות וחקירה פנימית'] },
  { id: '3', name: 'שיר', tags: ['רצון להקים משפחה', 'פתיחות רגשית'] },
];

const FilteredResultsScreen = ({ route }) => {
  const filters = route.params?.filters || {};

  const filtered = dummyProfiles.filter(profile =>
    Object.keys(filters).every(
      (key) => !filters[key] || profile.tags.includes(key)
    )
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>תוצאות לפי הערכים שבחרת</Text>
      {filtered.length === 0 ? (
        <Text style={styles.empty}>לא נמצאו התאמות לערכים שנבחרו</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.tags}>ערכים: {item.tags.join(', ')}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    marginBottom: 16,
    textAlign: theme.textAlign,
  },
  empty: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#888',
    textAlign: theme.textAlign,
  },
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    marginBottom: 4,
    textAlign: theme.textAlign,
  },
  tags: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: '#444',
    textAlign: theme.textAlign,
  },
});

export default FilteredResultsScreen;
