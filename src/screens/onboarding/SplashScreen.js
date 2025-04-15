import { theme } from '../../theme/theme';
import { useTheme } from '../theme';
const SplashScreen = ({ navigation }) => {
  const theme = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.navigate('Onboarding1');
    }, 2500);
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
) => clearTimeout(timer);
  }, []);
  return (
    <View style={{ textAlign: 'right', writingDirection: 'rtl', [styles.container, { backgroundColor: theme.background }}]}>
      <LazyImage source={require('../../assets/logo.png')} style={{ textAlign: 'right', writingDirection: 'rtl', styles.logo }} />
      <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.title, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")>{t(t("  -GoDate"))}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={{ textAlign: 'right', writingDirection: 'rtl', [styles.subtitle, { color: theme.text }}]} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
    
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
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24,
    fontWeight: '700'
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginTop: 10
  }
});
export default SplashScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
