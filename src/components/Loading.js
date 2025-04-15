import FadeInView from '../components/FadeInView';
const Loading = () => {
  return (<FadeInView>

    <View style={styles.container}>
      <ActivityIndicator size=t("large") color={theme.colors.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
});
export default Loading;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
