
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { useWindowDimensions, Platform } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../themes/theme';
import { useNavigation } from '@react-navigation/native';

const LovePathScreen = () => {
}
  const navigation = useNavigation();

  const handleStart = () => {
}
    navigation.navigate('LovePathQuiz');
  };

  return (<View style={rtlStyles}>
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>);
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.description} accessibilityLabel=t("תוכן נגיש")>
            ?
        {'\n'}    14         ,
          ,    .
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStart} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
}
  container: {
}
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.xl,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  description: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.base,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: theme.spacing.lg,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.background,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
  },
});

export default LovePathScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
