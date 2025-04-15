// screens/auth2fa.js
import { theme } from '../../theme/theme';
import { generateVerificationCode, sendCodeToUser, verifyCode } from '../services/twoFactorAuth';
const Auth2FA = ({ email, onVerified }) => {
  const [code, setCode] = useState('');
  const [realCode, setRealCode] = useState('');
  useEffect(() => {
    const generated = generateVerificationCode();
    setRealCode(generated);
    sendCodeToUser(email, generated);
  }, [email]);
  const handleVerify = () => {
    if (verifyCode(code, realCode)) {
      Alert.alert('', '  !');
      onVerified();
    } else {
      Alert.alert('', '  .  .');
    }
  };
  return (
    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
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

      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.label }}>     :</Text>
      <TextInput
        style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }}
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        maxLength={6}
      />
      <Button title=" " accessibilityRole="button" accessibilityLabel=" " onPress={handleVerify} />
    
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
  container: { padding: 20 },
  label: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 12, backgroundColor: '#fff'
  }
});
export default Auth2FA;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
