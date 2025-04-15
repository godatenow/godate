import { theme } from '../../theme/theme';
import React from 'react';
import { useState } from 'react';
// screens/SubmitSuccessStory.js
const SubmitSuccessStory = () => {
  const [names, setNames] = useState('');
  const [story, setStory] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = () => {
    if (names && story && date) {
      Alert.alert('!', '     .');
      setNames('');
      setStory('');
      setDate('');
    } else {
      Alert.alert('', '    .');
    }
  };
  return (
    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <LazyImage
        source={require('../../assets/logo/GoDate_Logo_compressed.webp')}
        style={{
          width: 160,
          height: 160,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 20
        }}
      />

      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>     </Text>
      <TextInput
        style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }}
        placeholder=" (:  )"
        value={names}
        onChangeText={setNames}
      />
      <TextInput
        style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }}
        placeholder=" "
        value={story}
        onChangeText={setStory}
        multiline
      />
      <TextInput
        style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }}
        placeholder="  (: 05/2023)"
        value={date}
        onChangeText={setDate}
      />
      <Button title=" " accessibilityRole="button" accessibilityLabel=" " onPress={handleSubmit} />
    
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
};
const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff'
  }
});
export default SubmitSuccessStory;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
