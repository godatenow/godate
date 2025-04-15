import FadeInView from '../components/FadeInView';
const EmptyState = React.memo(function EmptyState({ message = t("           "), icon = t("information-circle-outline") }) {
  return (<FadeInView>

    <View style={styles.container}>
      <Ionicons name={icon} size={48} color=t("#ccc") style={{ marginBottom: 16 }} />
      <Text style={typography.body} accessibilityLabel=t("תוכן נגיש")>{message}</Text accessibilityLabel=t("תוכן נגיש")>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default EmptyState;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
