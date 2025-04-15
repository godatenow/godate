import { theme } from '../../theme/theme';
import { useTheme } from '../theme';
const questions = [
  t("     ?"),
  t("       ?"),
  t("     ?"),
  t("    ?"),
  t("    ?")
];
const PersonalityQuizScreen = ({ navigation }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const handleNext = (answer) => {
    const updated = [...answers, answer];
    if (step < questions.length - 1) {
      setStep(step + 1);
      setAnswers(updated);
    } else {

      navigation?.navigate('StatsScreen', { quizAnswers: updated });
    }
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

    <View style={{ textAlign: 'right', writingDirection: 'rtl', [styles.container, { backgroundColor: theme.background }}]}>
      <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.question, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")>
        {questions[step]}
      </Text>
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.buttons }}>
        <Button title="t(" onPress={() = accessibilityLabel=")תוכן נגישt("> handleNext('')} color={theme.primary} / accessibilityLabel=")תוכן נגיש">
        <Button title="t(" onPress={() = accessibilityLabel=")תוכן נגישt("> handleNext('')} color={theme.secondary} / accessibilityLabel=")תוכן נגיש">
        <Button title="t(" onPress={() = accessibilityLabel=")תוכן נגישt("> handleNext('')} color={theme.primary} / accessibilityLabel=")תוכן נגיש">
      
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
    padding: 20
  },
  question: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40
  },
  buttons: {
    gap: 10
  }
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
