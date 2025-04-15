
import { theme } from '../../theme/theme';
import { Text, StyleSheet } from 'react-native'
import { Image as RNImage, View } from 'react-native';

//   
const HelperExplanation = () => (
  <Text style={styles.helperText} accessibilityLabel=t("תוכן נגיש")>
          ,  מנגנון חכם   .
  </Text>
);

const styles = StyleSheet.create({
  helperText: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center'
  }
});


import { reflectEmotion, generateMentorResponse } from './ai/emotionReflection';
import { generateMentorResponse } from './ai/loveMentorAI';
import theme from '../theme';
import LoveMentorAI from '../ai/LoveMentorAI';
import ThemedButton from '../components/ThemedButton';
const LoveMentorScreen = () => {
  const [day, setDay] = useState(1); //    1
  const handleNext = () => {
    setDay((prevDay) =>{t(t(" (prevDay "))}< 14 ? prevDay + 1 : 1));
  };
  const message = LoveMentorAI(day);
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
      <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.header }} accessibilityLabel=t("תוכן נגיש")>    {day}</Text accessibilityLabel=t("תוכן נגיש")>
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.messageBox }}>
        <Text style={{ textAlign: 'right', writingDirection: 'rtl', styles.messageText }} accessibilityLabel=t("תוכן נגיש")>{message}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <ThemedButton title="  " onPress={handleNext} />
    
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
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    justifyContent: 'center',
  },
  messageBox: {
    ...theme.card,
    marginVertical: theme.spacing.lg,
  },
  messageText: {
    ...theme.textVariants.body,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
  },
});
export default LoveMentorScreen;
//   
const [reflection, setReflection] = useState("");

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
