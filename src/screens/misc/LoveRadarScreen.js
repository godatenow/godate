
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import FadeInView from '../components/FadeInView';
import { db } from './firebase/firebase';
import { useUser } from './context/UserContext';
    });
    const q = query(collection(db, 'dailyStatus'), where('date', '==', todayKey));
    const snap = await getDocs(q);
    const sameStatusUIDs = snap.docs
      .map((doc) => doc.data())
      .filter((d) => d.status === myStatus && d.uid !== user.uid)
      .map((d) => d.uid);
    if (sameStatusUIDs.length > 0) {
      const usersSnap = await getDocs(collection(db, 'users'));
      const filtered = usersSnap.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((u) => sameStatusUIDs.includes(u.uid));
      setMatches(filtered);
    }
  };
  return (<FadeInView>


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
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("Love Radar     "))}</Text accessibilityLabel=t("תוכן נגיש")>
      {myStatus ? (
        <Text style={styles.status} accessibilityLabel=t("תוכן נגיש")> : {myStatus}</Text accessibilityLabel=t("תוכן נגיש")>
      ) : (
        <Text style={styles.status} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
      )}
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={rtlStyles} style={styles.card}>
            <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{item.name}</Text accessibilityLabel=t("תוכן נגיש")>
            <Text style={styles.bio} accessibilityLabel=t("תוכן נגיש")>{item.bio}</Text accessibilityLabel=t("תוכן נגיש")>
          
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
        ListEmptyComponent={<Text style={styles.empty} accessibilityLabel=t("תוכן נגיש")>{t(t("     ."))}</Text accessibilityLabel=t("תוכן נגיש")>}
        contentContainerStyle={{ paddingBottom: 20 }}
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
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  status: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#555', marginBottom: 12, textAlign: 'center' },
  card: {
    borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
    padding: 12, marginBottom: 10, backgroundColor: '#fefefe'
  },
  name: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  bio: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#555' },
  empty: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888', marginTop: 40, textAlign: 'center' }
});

export default LoveRadarScreen;

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
