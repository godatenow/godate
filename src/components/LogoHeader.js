// components/LogoHeader.js
const LogoHeader = () => (
  <View style={styles.container}>
    <LazyImage source={require('../assets/logo.png')} style={styles.logo} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  logo: {
    width: 160,
    height: 50,
    resizeMode: 'contain'
  }
});
export default LogoHeader;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
