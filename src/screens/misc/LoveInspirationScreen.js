import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import * as apiService from '@services/apiService';
import { db } from './firebase/firebase';
const initialInspiration = [
  { id: 'i1', text: '          .', likes: 0 },
  { id: 'i2', text: '    ,    .', likes: 0 },
  { id: 'i3', text: '   ,   .', likes: 0 }
];
      setInspirations(initialInspiration);
    } else {
      setInspirations(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
  };
  const handleLike = async (item) => {
    const itemRef = doc(db, 'loveInspirations', item.id);
    await updateDoc(itemRef, { likes: increment(1) });
    fetchInspirations();
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

    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={inspirations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{item.text}</Text accessibilityLabel=t("תוכן נגיש")>
            <TouchableOpacity onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> handleLike(item)}>
              <Text style={styles.like} accessibilityLabel=t("תוכן נגיש")>: {item.likes} </Text accessibilityLabel=t("תוכן נגיש")>
            </TouchableOpacity>
          
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
    fontSize: 22, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  text: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 8, textAlign: 'right' },
  like: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#e91e63', textAlign: 'left', fontWeight: '600' }
});

export default LoveInspirationScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
