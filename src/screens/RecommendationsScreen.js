
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import FadeInView from '../components/FadeInView';

import { Text, StyleSheet } from 'react-native'
import { Image as RNImage, View } from 'react-native';

//   
const HelperExplanation = () => (
  <Text style={styles.helperText} accessibilityLabel=t("תוכן נגיש")>
          ,  מנגנון חכם   .
  </Text>
);

const styles = StyleSheet.create({
}
  helperText: {
}
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center'
  }
});


import { typography } from '../theme';
        return { ...u, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, [users, currentUser]);
  const renderItem = ({ item }) => (
    <View style={rtlStyles} style={styles.card}>
      <Text style={typography.heading} accessibilityLabel=t("תוכן נגיש")>{item.name}, {item.age}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={typography.body} accessibilityLabel=t("תוכן נגיש")>: {item.city}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={typography.body} accessibilityLabel=t("תוכן נגיש")> : {item.score}</Text accessibilityLabel=t("תוכן נגיש")>
    
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
  return (<View style={rtlStyles}>
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>);<FadeInView>


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

    <View style={rtlStyles} style={styles.container}>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={typography.body} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">}
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
  );
}
const styles = StyleSheet.create({
}
  container: {
    padding: 16,
  },
  card: {
    padding: 12,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default RecommendationsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
