
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

const StatsScreen = () => {
  const stats = {
    views: 123,
    matches: 15,
    messagesSent: 42,
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
      <View style={rtlStyles} style={styles.statBox}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.views}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={rtlStyles} style={styles.statBox}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(":t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.matches}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={rtlStyles} style={styles.statBox}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.messagesSent}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  label: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#444',
  },
  value: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E91E63',
  },
});
export default StatsScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
