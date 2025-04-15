
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
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
      />
      <TextInput
        placeholder="הודעה"
        value={message}
        onChangeText={setMessage}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <Button title="שלח" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12, textAlign: 'right'
  }
});
