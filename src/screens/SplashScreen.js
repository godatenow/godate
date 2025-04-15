import { theme } from '../../theme/theme';
import { getGenderBasedMessage } from '../utils/genderUtils';
const profile = { gender: 'male' }; //  -   -DB
const SplashScreen = () => (
  <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
    <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(")GoDate")}</Text>
    <ActivityIndicator size=t("large") color=t("#ff6f61") style={{ textAlign: 'right', writingDirection: 'rtl', { direction: 'rtl',  marginTop: 20 }}} />
    <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.message }}>
      {getGenderBasedMessage(profile.gender, {
        male: '    ',
        female: '   ',
        other: '   '
      })}
    </Text>
  
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
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
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8F0'
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 32, fontWeight: 'bold', color: '#FF6B81'
  },
  message: {
    marginTop: 20, fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#555', textAlign: 'center'
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
