
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

    setInput('');
  };
  const generateCoachReply = (text) => {
}
    if (text.includes('') || text.includes('')) {
}
      return '   ,       .      .';
    } else if (text.includes(' ')) {
}
      return '    . , ,     .';
    } else if (text.includes('   ')) {
}
      return '         ,  .';
    }
    return ' .      ,  .';
  };
  const renderItem = ({ item }) => (
    <View style={rtlStyles} style={[styles.message, item.sender === 'coach' ? styles.coach : styles.user]}>
      <Text style={styles.text}>{item.text}</Text>
    
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
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <TextInput
        placeholder="    ..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title=" " onPress={handleSend} / accessibilityLabel="">
    
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
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  user: {
    backgroundColor: '#e0f7fa',
    alignSelf: 'flex-end',
  },
  coach: {
    backgroundColor: '#ffe0e0',
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 15,
  },
});

export default LoveCoachScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
