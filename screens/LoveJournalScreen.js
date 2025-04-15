import Toast from '../components/Toast';

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AppCard from '../components/ui/AppCard';

const LoveJournalScreen = () => {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    Alert.alert("נשמר!", "הרשומה נשמרה ביומן האהבה.");
    setEntry('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>יומן האהבה שלי</Text>
      <AppCard>
        <Text style={styles.label}>איך הרגשתי היום לגבי זוגיות?</Text>
        <TextInput
          value={entry}
          onChangeText={setEntry}
          placeholder="כתוב כאן מחשבות, רגשות, תובנות..."
          multiline
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave} accessibilityLabel="כפתור פעולה" accessible={true}>
          <Text style={styles.buttonText}>שמור לרשומה</Text>
        </TouchableOpacity>
      </AppCard>
      <Toast message='נא להשלים את הפרופיל לפני שימוש בפיצ׳ר זה' visible={toastVisible} onHide={() => setToastVisible(false)} />

  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    color: '#ff5a7e',
    textAlign: 'right',
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Heebo',
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    textAlign: 'right',
  },
  input: {
    height: 120,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontFamily: 'Heebo',
    textAlign: 'right',
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
  },
  buttonText: {
    fontFamily: 'Heebo-Bold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoveJournalScreen;
