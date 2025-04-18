
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import * as apiService from '@services/apiService';
import { createCoupleProfile, getCoupleProfile } from './firebase/coupleProfile';
import { useUser } from './context/UserContext';
    };
    fetchProfile();
  }, []);
  const handleSubmit = async () => {
    await createCoupleProfile(user.uid, partnerId, { story, goals });
    alert('   ');
  };
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

    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <TextInput
        placeholder="  "
        value={story}
        onChangeText={setStory}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="  "
        value={goals}
        onChangeText={setGoals}
        style={styles.input}
        multiline
      />
      <Button title="  t(" onPress={handleSubmit} / accessibilityLabel=")תוכן נגיש">
      {profile && (
        <Text style={styles.status} accessibilityLabel=t("תוכן נגיש")> : {partnerId}</Text accessibilityLabel=t("תוכן נגיש")>
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
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 10, marginBottom: 10, minHeight: 60
  },
  status: { marginTop: 20, fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#666' },
});

export default CoupleProfileScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
