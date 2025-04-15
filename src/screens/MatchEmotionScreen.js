
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../theme/theme';

const MatchEmotionScreen = ({ route }) => {
  const matchUser = route.params?.user || { name: 'משתמש/ת', image: null };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>יש התאמה!</Text>
      <Image
        source={matchUser.image ? { uri: matchUser.image } : require('../assets/default-avatar.png')}
        style={styles.image}
      />
      <Text style={styles.name}>{matchUser.name}</Text>
      <Text style={styles.message}>
        משהו בחיבור ביניכם מרגיש מיוחד. אולי זה הרגישות, אולי הערכים, אולי הרגע הנכון.
      </Text>
      <Text style={styles.cta}>שלחו הודעה וגלו מה יכול להיבנות כאן.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.bold,
    color: '#e91e63',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    marginBottom: 8,
    color: '#222',
  },
  message: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#444',
    textAlign: 'center',
    marginBottom: 12,
  },
  cta: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: '#0077cc',
    textAlign: 'center',
  },
});

export default MatchEmotionScreen;
