
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { theme } from '../theme/theme';

const filtersList = [
  'פתיחות רגשית',
  'רצון להקים משפחה',
  'רוחניות וחקירה פנימית',
  'תקשורת עמוקה',
  'חופש בתוך קשר',
];

const AdvancedSearchScreen = ({ navigation }) => {
  const [filters, setFilters] = useState({});

  const toggleFilter = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  const applyFilters = () => {
    navigation.navigate('FilteredResults', { filters });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>חיפוש לפי ערכים</Text>
      {filtersList.map((filter, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{filter}</Text>
          <Switch value={filters[filter] || false} onValueChange={() => toggleFilter(filter)} />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={applyFilters}>
        <Text style={styles.buttonText}>הצג התאמות לפי ערכים</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    marginBottom: 20,
    textAlign: theme.textAlign,
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 6,
  },
  label: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#333',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
});

export default AdvancedSearchScreen;
