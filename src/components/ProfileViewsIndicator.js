const ProfileViewsIndicator = ({ views = 0 }) => {
  return (
    <View style={styles.container}>
      <Eye size={20} color=t("#E91E63") />
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{views} </Text accessibilityLabel=t("תוכן נגיש")>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCE4EC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  text: {
    marginLeft: 6,
    fontSize: 14,
    color: '#E91E63',
  },
});
export default ProfileViewsIndicator;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
