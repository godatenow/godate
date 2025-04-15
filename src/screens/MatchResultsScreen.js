
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


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


// MatchResultsScreen.js
import EmotionCard from '../components/EmotionCard';
const MatchResultsScreen = () => {
  const route = useRoute();
  const { matchedUser, matchScore, sharedValues } = route.params || {};
  return (

      <View style={rtlStyles} style={{ alignItems: 'center', marginTop: 20 }}>
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

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>   {matchedUser?.name || ''}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.score} accessibilityLabel=t("תוכן נגיש")> : {matchScore || 0}%</Text accessibilityLabel=t("תוכן נגיש")>
      {sharedValues && sharedValues.length > 0 && (
        <View style={rtlStyles} style={styles.section}>
          <Text style={styles.sectionTitle} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
          {sharedValues.map((value, index) => (
            <Text key={index} style={styles.valueItem} accessibilityLabel=t("תוכן נגיש")> {value}</Text accessibilityLabel=t("תוכן נגיש")>
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
      )}
      <View style={rtlStyles} style={styles.section}>
        <Text style={styles.sectionTitle} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
        <EmotionCard user={matchedUser} score={matchScore} />
      
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
  container: { padding: 24, backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  score: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, color: '#E91E63', textAlign: 'center', marginBottom: 20 },
  section: { marginTop: 20 },
  sectionTitle: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: '600', marginBottom: 10 },
  valueItem: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 6 },
});
export default MatchResultsScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
