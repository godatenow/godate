
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import { db } from './firebase/firebase';
import { useUser } from './context/UserContext';
const statuses = [
  '/', '/', '/ ', '/ ', '/ ', '/  '
];
  };
  const handleSelect = async (status) => {
    const ref = doc(db, 'dailyStatus', user.uid + '_' + todayKey);
    await setDoc(ref, {
      uid: user.uid,
      date: todayKey,
      status
    });
    setSelected(status);
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
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("    ?"))}</Text accessibilityLabel=t("תוכן נגיש")>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={statuses}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> handleSelect(item)}>
            <Text style={[
              styles.option,
              selected === item && styles.selected
            ]}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      {selected ? (
        <Text style={styles.current} accessibilityLabel=t("תוכן נגיש")> : {selected}</Text accessibilityLabel=t("תוכן נגיש")>
      ) : null}
    
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
    fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  option: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 16,
    paddingVertical: 10, paddingHorizontal: 16,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, textAlign: 'center', marginBottom: 10
  },
  selected: {
    backgroundColor: '#ffe6f0',
    borderColor: '#e91e63',
    fontWeight: 'bold'
  },
  current: {
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginTop: 16,
    color: '#555'
  }
});

export default DailyStatusScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
