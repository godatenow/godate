
//     hooks    
import { theme } from '../../theme/theme';
import { Image as RNImage } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react-native';

// screens/LovePathQuiz.js
const LovePathQuiz = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const next = () => {
    if (step < 3) setStep(step + 1);
    else navigation.navigate('LovePathJourney');
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

      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}> {step}  3</Text>
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.question }}>{t(")    ?")}</Text>
      <Button title="t(" accessibilityRole=")buttont(" accessibilityLabel=") " onPress={next} />
    
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
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  question: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 20 }
});
export default LovePathQuiz;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
