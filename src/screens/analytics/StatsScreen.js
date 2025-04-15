import { theme } from '../../theme/theme';
import { useTheme } from '../theme';
const StatsScreen = ({ route }) => {
  const theme = useTheme();
  const answers = route?.params?.quizAnswers || [];
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

    <ScrollView style={{ textAlign: 'right', writingDirection: 'rtl', { backgroundColor: theme.background }}}>
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.title, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
        {answers.map((answer, index) => (
          <View key={index} style={{ textAlign: 'right', writingDirection: 'rtl', [styles.card, { backgroundColor: theme.card }}]}>
            <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.label, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")> {index + 1}</Text accessibilityLabel=t("תוכן נגיש")>
            <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.answer, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")>{answer}</Text accessibilityLabel=t("תוכן נגיש")>
          
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
        ))}
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.summary, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")>
             ,            .
        </Text>
      
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
    padding: 20
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2
  },
  label: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    fontWeight: '600'
  },
  answer: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginTop: 4
  },
  summary: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 24
  }
});
export default StatsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
