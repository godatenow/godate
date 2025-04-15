import FadeInView from '../components/FadeInView';
// components/LoadingSpinner.js
const LoadingSpinner = ({ size = t("large") }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color=t("#3b82f6") />
  </View>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default LoadingSpinner;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
