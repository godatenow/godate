// screens/VerifyProfileScreen.js
import { theme } from '../../theme/theme';
import { verifyProfileAI } from '../services/aiProfileVerifier';
const VerifyProfileScreen = ({ imageUploaded, bio }) => {
  const { score, passed, tips, message } = verifyProfileAI({ imageUploaded, bio });
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

    <View>{t(t("\n      "))}<LogoHeader />\n       style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(") ")}</Text>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', { textAlign: 'right',  direction: 'rtl',  fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16 }}}>{message}</Text>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', { textAlign: 'right',  fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, marginVertical: 8 }}}> : {score}/100</Text>
      {!passed && tips.map((tip, i) => (
        <Text accessibilityLabel=" " key={i} style={{ textAlign: 'right', writingDirection: 'rtl', styles.tip }}> {tip}</Text>
      ))}
    
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
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  tip: { color: '#777', fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, marginVertical: 4 }
});
export default VerifyProfileScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
