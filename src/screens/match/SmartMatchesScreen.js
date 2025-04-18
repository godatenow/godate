
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import { Text, StyleSheet } from 'react-native'
import { Image as RNImage, View } from 'react-native';

//   
const HelperExplanation = () => (
  <Text style={styles.helperText} accessibilityLabel=t("תוכן נגיש")>
          ,  מנגנון חכם   .
  </Text>
);

const styles = StyleSheet.create({
  helperText: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center'
  }
});


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Image as RNImage, View } from 'react-native';
import { calculateMatchScore } from '../../services/MatchingEngine';
import { calculateEmotionalMatch } from '../../services/DeepMatchAI';

const currentUser = {
  values: ['', '', ''],
  interests: ['', '', ''],
  communication: '',
  readinessScore: 8,
  emotionalDepth: '',
  freeTextEmotions: ['', ''],
  freeText: '    ',
};

const potentialMatches = [
  {
    id: 'u1',
    name: '',
    values: ['', ''],
    interests: ['', ''],
    communication: '',
    readinessScore: 7,
    emotionalDepth: '',
    freeTextEmotions: ['', ''],
    freeText: '   '
  },
  {
    id: 'u2',
    name: '',
    values: ['', ''],
    interests: ['', ''],
    communication: '',
    readinessScore: 5,
    emotionalDepth: '',
    freeTextEmotions: ['', ''],
    freeText: '  '
  }
];

const SmartMatchesScreen = () => {
  const [matches, setMatches] = useState([]);

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    const enriched = potentialMatches.map((user) => ({
      ...user,
      score: calculateMatchScore(currentUser, user),
      deepScore: calculateEmotionalMatch(currentUser, user)
    }));
    setMatches(enriched.sort((a, b) => b.score - a.score));
  }, []);

  const renderItem = ({ item }) => (
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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
  )}
 style={styles.card}>
      <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{item.name}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.score} accessibilityLabel=t("תוכן נגיש")>: {item.score}%</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.deep} accessibilityLabel=t("תוכן נגיש")> : {item.deepScore}%</Text accessibilityLabel=t("תוכן נגיש")>
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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

      <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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
  )}
 style={{ alignItems: 'center', marginTop: 20 }}>
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
      
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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

    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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
  )}
 style={styles.container}>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: '#fff0f6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10
  },
  name: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold' },
  score: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#333' },
  deep: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#888', marginTop: 4 }
});

export default SmartMatchesScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
