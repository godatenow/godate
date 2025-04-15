
import { theme } from '../../theme/theme';
import * as SecureStore from 'expo-secure-store';
import { TouchableOpacity, Text } from 'react-native'
import { Image as RNImage, View } from 'react-native';

//     
const PrivacyLink = ({ navigation }) => (
  <TouchableOpacity accessibilityHint="הקש לפעולה" accessible={true} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> navigation.navigate('PrivacyPolicyScreen')}>
    <Text style={{ textAlign: 'center', fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 12, color: '#888', marginTop: 20 }} accessibilityLabel=t("תוכן נגיש")>
              
    </Text>
  </TouchableOpacity>
);


    try {
      await signInWithEmailAndPassword
    .then(async (userCredential) => {
      await SecureStore.setItemAsync('accessToken', userCredential.user.stsTokenManager.accessToken);
    })(auth, email, password);
    } catch (error) {
      ToastAndroid.show(t(" : ") + error.message);
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

    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(") -GoDate")}</Text>
      <Animated.View style={{ textAlign: 'right', writingDirection: 'rtl', [styles.form, {
        transform: [{ translateY: slideAnim }}],
        opacity: fadeAnim
      }]}>
        <TextInput accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }} placeholder=")" />
        <TextInput accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }} placeholder=")" secureTextEntry />
      </Animated.View>
    
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8F0'
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24, marginBottom: 20, color: '#333'
  },
  form: {
    width: '80%'
  },
  input: {
    backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 12,
    padding: 12, marginVertical: 8
  }
});

export default LoginScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
