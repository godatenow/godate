
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import { useTheme } from '../theme';
const Onboarding1 = ({ navigation }) => {
  const theme = useTheme();
  return (
    <View style={rtlStyles} style={[styles.container, { backgroundColor: theme.background }]}>
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

      <LazyImage source={require('../../assets/login_design_image.png')} style={styles.image} />
      <Text style={[styles.title, { color: theme.text }]} accessibilityLabel=t("תוכן נגיש")>{t(t("    "))}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={[styles.subtitle, { color: theme.text }]} accessibilityLabel=t("תוכן נגיש")>
         GoDate    
      </Text>
      <Button title="t(" color={theme.primary} onPress={() = accessibilityLabel=")תוכן נגישt("> navigation?.navigate('Onboarding2')} / accessibilityLabel=")תוכן נגיש">
    
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
    padding: 20
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 30
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  }
});
export default Onboarding1;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
