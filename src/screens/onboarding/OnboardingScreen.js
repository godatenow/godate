// screens/OnboardingScreen.js
import { theme } from '../../theme/theme';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const completeOnboarding = async () => {
    await SecureStore.setItemAsync('hasSeenOnboarding', 'true');
    navigation.replace('LoginScreen');
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

    <Button title="t(" onPress={() = accessibilityLabel=")תוכן נגישt("> navigation.goBack()} / accessibilityLabel=")תוכן נגיש">
    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(")  GoDate!")}</Text>
      <Onboarding1 />
      <Onboarding2 />
      <Onboarding3 />
      <Button title="t(" accessibilityRole=")buttont(" accessibilityLabel=") " onPress={completeOnboarding} />
    
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
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }
});
export default OnboardingScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
