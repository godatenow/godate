
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 12 },
  bubble: {
    maxWidth: '80%',
    marginVertical: 4,
    padding: 10,
    borderRadius: 12
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#e1f5fe'
  },
  mentor: {
    alignSelf: 'flex-start',
    backgroundColor: '#fce4ec'
  },
  text: { fontSize: 16 },
  inputRow: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 8,
    height: 40
  }
});

export default ChatWithMentor;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
