import { theme } from '../../theme/theme';
import theme from '../theme';
const MyAnalyticsScreen = () => {
  const data = {
    matchesThisWeek: 5,
    mutualInterestRate: '67%',
    peakViewTime: ' , 20:00',
    bestOpener: '            ?',
  };
  return (

      <View style={{ alignItems: 'center', marginTop: 20 }}>
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

    <ScrollView style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.header }} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.card }}>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.subheader }} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', styles.metric }} accessibilityLabel=t("תוכן נגיש")>{data.matchesThisWeek}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.card }}>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.subheader }} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', styles.metric }} accessibilityLabel=t("תוכן נגיש")>{data.mutualInterestRate}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.card }}>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.subheader }} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', styles.metric }} accessibilityLabel=t("תוכן נגיש")>{data.peakViewTime}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.card }}>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.subheader }} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', styles.metricText }} accessibilityLabel=t("תוכן נגיש")>{data.bestOpener}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  card: {
    ...theme.card,
    marginBottom: theme.spacing.lg,
  },
  metric: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: theme.spacing.sm,
  },
  metricText: {
    ...theme.textVariants.body,
    marginTop: theme.spacing.sm,
  },
});
export default MyAnalyticsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
