import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { t } from 'i18n'; // אם אתה משתמש ב-i18n
import theme from '../theme'; // מסלול לדוגמה

const AIProfileTips = () => {
  const tips = [
    'בחר תמונת פרופיל שמייצגת אותך בצורה אותנטית.',
    'כתיבת 3 משפטים על עצמך תעזור לאחרים להבין מי אתה באמת.',
    'אל תפחד להשתמש בביטוי "אני מחפש/ת קשר אמיתי".',
    'ככל שתהיה מדויק יותר – כך המנגנון החכם ידע להתאים לך טוב יותר.',
  ];

  return (
    <View style={styles.container}>
      <Text style={theme.textVariants.subheader} accessibilityLabel={t("תוכן נגיש")}>
        {t("מנגנון חכם להצעות לשיפור הפרופיל")}
      </Text>
      {tips.map((tip, index) => (
        <Text key={index} style={styles.tipItem} accessibilityLabel={t("תוכן נגיש")}>
          {tip}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: '#fff',
    borderRadius: theme.borderRadius.md,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  tipItem: {
    ...theme.textVariants.body,
    marginTop: theme.spacing.sm,
    lineHeight: 22,
  },
});

export default AIProfileTips;
