
import EmptyState from '../../components/EmptyState';
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


// screens/SmartMatchesScreen.js
import { getPersonalizedMatches } from '../services/personalizedRecommender';
const SmartMatchesScreen = ({ currentUser, allUsers }) => {
  const matches = getPersonalizedMatches(currentUser, allUsers);
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
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(")  ")}</Text>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.card }}>
            <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.name }}>{item.name}</Text>
            <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.score }}> : {item.matchScore}%</Text>
          
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
  );
};
const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2
  },
  name: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, fontWeight: '600' },
  score: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#777' }
});
export default SmartMatchesScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
