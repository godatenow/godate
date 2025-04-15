
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React, { useReducer } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const initialState = {
  name: '',
  age: '',
  city: '',
  bio: '',
  job: '',
  hobby: ''
};

function reducer(state, action) {
  return { ...state, [action.field]: action.value };
}

export default function EditProfileScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ field, value });
  };

  const handleSave = () => {

  };

  return (
    <View style={rtlStyles} style={styles.container}>
      {Object.keys(initialState).map((field) => (
        <TextInput
          key={field}
          placeholder={field}
          value={state[field]}
          onChangeText={(text) => handleChange(field, text)}
          style={styles.input}
        />
      ))}
      <Button title="t(" onPress={handleSave} / accessibilityLabel=")תוכן נגיש">
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10, padding: 10 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
