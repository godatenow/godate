
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import LazyImage from '../components/LazyImage';

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Image as RNImage, View } from 'react-native';

//     
const calculateTextSimilarity = (text1, text2) => {
  let commonWords = text1.split(' ').filter(word => text2.includes(word));
  let similarity = commonWords.length / Math.max(text1.split(' ').length, text2.split(' ').length);
  return similarity;
};

const CompatibilityQuizScreen = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('  ');
  const [similarityScore, setSimilarityScore] = useState(null);

  const handleCalculateSimilarity = () => {
    const score = calculateTextSimilarity(userAnswer, questionAnswer);
    setSimilarityScore(score);
  };

  return (

      <View style={rtlStyles} style={{ alignItems: 'center', marginTop: 20 }}>
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
      <Text style={styles.header} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text accessibilityLabel=t("תוכן נגיש")>{t(t("   ?"))}</Text accessibilityLabel=t("תוכן נגיש")>
      <TextInput
        style={styles.input}
        value={userAnswer}
        onChangeText={setUserAnswer}
        placeholder=t("     ")
      />
      <Button title=" t(" onPress={handleCalculateSimilarity} / accessibilityLabel=")תוכן נגיש">
      {similarityScore !== null && (
        <Text style={styles.result} accessibilityLabel=t("תוכן נגיש")>   : {similarityScore * 100}%</Text accessibilityLabel=t("תוכן נגיש")>
      )}
    
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
  },
});

export default CompatibilityQuizScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
