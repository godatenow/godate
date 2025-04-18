
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import AppCard from '../components/ui/AppCard';

const ReactToStoryScreen = () => {
  const [response, setResponse] = useState('');

  const handleSend = () => {
    Alert.alert("נשלח!", "התגובה שלך לסטורי נשלחה.");
    setResponse('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>תגובה לסטורי</Text>
      <AppCard>
        <Image
          source={{ uri: 'https://placekitten.com/400/200' }}
          style={styles.storyImage}
         accessibilityLabel="תמונה" accessible={true}/>
        <Text style={styles.label}>מה תרצה להגיב?</Text>
        <TextInput
          value={response}
          onChangeText={setResponse}
          placeholder="כתוב תגובה קצרה..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend} accessibilityLabel="כפתור פעולה" accessible={true}>
          <Text style={styles.buttonText}>שלח תגובה</Text>
        </TouchableOpacity>
      </AppCard>
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
    textAlign: 'right',
    marginVertical: 8,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontFamily: 'Heebo',
    textAlign: 'right',
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
  storyImage: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginBottom: 8,
  },
});

export default ReactToStoryScreen;
