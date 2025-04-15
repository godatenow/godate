const valuesList = ['', '', '', '', '', ''];
const stylesList = ['', '', ''];
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', marginVertical: 8, textAlign: 'right' },
  options: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14
  },
  selected: {
    backgroundColor: '#ffe4ec',
    borderColor: '#ff4f88'
  },
  resultCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6
  },
  resultName: {
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16
  },
  resultText: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
    marginTop: 4
  }
});

export default AdvancedSearchScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
