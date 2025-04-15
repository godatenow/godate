// components/SmartOpenerModal.js
const SmartOpenerModal = ({ visible, onClose, user }) => {
  const openers = generateSmartOpeners(user);
  return (
    <Modal visible={visible} animationType=t("slide") transparent>
      <View style={{ flex: 1, backgroundColor: 'white', padding: 20, marginTop: 80 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }} accessibilityLabel=t("תוכן נגיש")>
            {user.name}
        </Text>
        <FlatList
          data={openers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={{ padding: 10, fontSize: 16 }} accessibilityLabel=t("תוכן נגיש")> {item}</Text accessibilityLabel=t("תוכן נגיש")>
          )}
        />
        <Button title="t(" onPress={onClose} / accessibilityLabel=")">
      </View>
    </Modal>
  );
};
export default SmartOpenerModal;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
