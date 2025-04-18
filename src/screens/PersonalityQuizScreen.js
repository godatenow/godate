
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React from 'react';
import { useState } from 'react';
const questions = [
  '     ?',
  '     ?',
  '    ?',
];
const PersonalityQuizScreen = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {

    }
  };
  return (

      <View style={rtlStyles} style={{ alignItems: 'center', marginTop: 20 }}>
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

        <LazyImage
          source={require('../assets/logo/icon.png')}
          style={{ width: 120, height: 40, resizeMode: 'contain' }}
        />
      
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

    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.question} accessibilityLabel=t("תוכן נגיש")>{questions[current]}</Text accessibilityLabel=t("תוכן נגיש")>
      <TouchableOpacity style={styles.option} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> handleAnswer(' 1')}>
        <Text accessibilityLabel=t("תוכן נגיש")>{t(" 1t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> handleAnswer(' 2')}>
        <Text accessibilityLabel=t("תוכן נגיש")>{t(" 2t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> handleAnswer(' 3')}>
        <Text accessibilityLabel=t("תוכן נגיש")>{t(" 3t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
    
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
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#E0E0E0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
});
export default PersonalityQuizScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
