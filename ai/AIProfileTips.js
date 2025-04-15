const AIProfileTips = () => {
  const tips = [
    '         .',
    '           3   .',
    '    "  "   .',
    '       , : t("        ").',
  ];
  return (
    <View style={styles.container}>
      <Text style={theme.textVariants.subheader} accessibilityLabel=t("תוכן נגיש")>{t(t(" מנגנון חכם  "))}</Text accessibilityLabel=t("תוכן נגיש")>
      {tips.map((tip, index) => (
        <Text key={index} style={styles.tipItem} accessibilityLabel=t("תוכן נגיש")> {tip}</Text accessibilityLabel=t("תוכן נגיש")>
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

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
