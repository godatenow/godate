// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ברוכים הבאים לאפליקציית GoDate בעברית</Text>
      <Text style={styles.sectionTitle}>מה תמצאו כאן?</Text>
      <Text style={styles.text}>
        אפליקציה זו נועדה לעזור לכם להכיר אנשים חדשים, לבנות קשרים אמיתיים, ולשמור על חוויית משתמש נעימה ורגשית.
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>אודות</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.buttonText}>צור קשר</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#fff',
    minHeight: '100%'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  sectionTitle: { 
    fontSize: 20, 
    marginBottom: 8 
  },
  text: { 
    fontSize: 16, 
    lineHeight: 24,
    marginBottom: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
