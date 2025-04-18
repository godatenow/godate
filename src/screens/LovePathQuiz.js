//     hooks    
import { theme } from '../../theme/theme';
import { Image as RNImage } from 'react-native';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LazyImage } from '../components/LazyImage';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';

// screens/LovePathQuiz.js
const LovePathQuiz = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const next = () => {
    if (step < 3) setStep(step + 1);
    else navigation.navigate('LovePathJourney');
  };

  return (
    <View style={styles.container}>
      <LazyImage
        source={require('../../assets/logo/GoDate_Logo_compressed.webp')}
        style={styles.logo}
      />

      <Text style={styles.stepCounter}>
        {step} / 3
      </Text>

      <Text style={styles.question}>
        {t('lovePath.quiz.question' + step)}
      </Text>

      <Button 
        title={t('common.next')}
        onPress={next}
        style={styles.button}
      />
    
      {!loading && (
        <View style={styles.callToAction}>
          <Text style={styles.callToActionText}>
            {t('lovePath.quiz.callToAction')}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...theme.layout.container,
    writingDirection: theme.direction,
    backgroundColor: theme.colors.background
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: theme.spacing.lg
  },
  stepCounter: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    textAlign: theme.textAlign,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm
  },
  question: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.typography.body1.fontSize,
    textAlign: theme.textAlign,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg
  },
  button: {
    backgroundColor: theme.colors.button.background,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md
  },
  callToAction: {
    ...theme.layout.centered,
    marginTop: theme.spacing.xl
  },
  callToActionText: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    color: theme.colors.primary,
    textAlign: theme.textAlign
  }
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
