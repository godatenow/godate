
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme/theme';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../services/firebase';

const inspirationalQuotes = [
  'את/ה לא לבד בדרך לאהבה. כל צעד קטן מקרב אותך.',
  'אהבה אמיתית מתחילה מבפנים. תן/י לעצמך הזדמנות.',
  'מחר יכול להיות היום שבו הכול משתנה.',
  'פתיחות, כנות ורכות – הם המפתחות לחיבור.',
];

const LovePathDashboard = ({ navigation }) => {
  const [day, setDay] = useState(1);
  React.useEffect(() => {
    const loadDay = async () => {
      const db = getFirestore(app);
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const userDay = data?.lovePath?.day || 1;
          setDay(userDay);
        }
      }
    };
    loadDay();
  }, []);
  const [day, setDay] = useState(1); // לדוגמה: ביום השלישי מתוך 14
  const quote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LovePath – המסלול שלך לאהבה</Text>
      <Text style={styles.status}>השלמת {day} מתוך 14 ימים</Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>{quote}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoveDay')}>
        <Text style={styles.buttonText}>המשך ליום {day + 1}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    textAlign: theme.textAlign,
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    color: '#666',
    marginBottom: 24,
  },
  quoteBox: {
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  quote: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    color: '#333',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: theme.fonts.bold,
  },
});

export default LovePathDashboard;
