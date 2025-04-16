import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function ContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) {
      Alert.alert('שגיאה', 'אנא מלא את כל השדות');
      return;
    }
    Alert.alert('נשלח!', 'תודה שפנית אלינו. נחזור אליך בהקדם.');
    setName('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>צור קשר</Text>
      <TextInput
        placeholder="שם מלא"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#666"
      />
      <TextInput
        placeholder="הודעה"
        value={message}
        onChangeText={setMessage}
        style={[styles.input, styles.messageInput]}
        multiline
        placeholderTextColor="#666"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>שלח</Text>
      </TouchableOpacity>

      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navButtonText}>דף הבית</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.navButtonText}>אודות</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    backgroundColor: '#fff',
    flex: 1
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    textAlign: 'right',
    fontSize: 16,
    backgroundColor: '#f8f8f8'
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top'
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40
  },
  navButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center'
  },
  navButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
