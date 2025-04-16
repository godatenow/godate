// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={[styles.container, { direction: 'rtl' }]}>
      <Text style={styles.title}>אודות</Text>
      <Text style={styles.text}>
        אנחנו צוות מקצועי המשלב טכנולוגיה, פסיכולוגיה ושפה עברית – כדי ליצור את חוויית ההיכרות המתקדמת ביותר.
      </Text>
    
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>חזרה לדף הבית</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.buttonText}>צור קשר</Text>
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
    marginBottom: 12,
    textAlign: 'right'
  },
  text: { 
    fontSize: 16,
    textAlign: 'right',
    lineHeight: 24
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 40
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4081',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40
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
