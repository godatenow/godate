
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../services/firebase';
import { theme } from '../theme/theme';
import { getDatingStyleInsight } from '../ai/getDatingStyleInsight';

const LovePathSummaryScreen = ({ navigation }) => {
  const [dayCount, setDayCount] = useState(0);
  const [style, setStyle] = useState('');
  const [insight, setInsight] = useState('');
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const db = getFirestore(app);
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const lovePath = data.lovePath || {};
        const answers = data.depthAnswers || {};
        const text = Object.values(answers).join(' ');
        setDayCount(lovePath.day || 0);
        setStyle(getDatingStyleInsight(text));
        setInsight(text.length > 80 ? text.slice(0, 100) + '...' : text);
        setRecommendation(generateRecommendation(getDatingStyleInsight(text)));
      }
    };

    fetchData();
  }, []);

  const generateRecommendation = (style) => {
    switch (style) {
      case 'רומנטי/ת עמוק/ה':
        return 'חפש/י פרטנר שמדבר רגשות ויודע להכיל פתיחות רגשית.';
      case 'רציונלי/ת מחפש/ת ביטחון':
        return 'שימי דגש על אנשים עם יציבות ותקשורת ברורה.';
      case 'הרפתקני/ת זורם/ת':
        return 'התחילי קשרים דרך חוויות משותפות קלילות וכיפיות.';
      case 'מחובר/ת לרוח ולאנרגיה':
        return 'בדקי חיבור רגשי דרך תחומי עניין רוחניים וערכיים.';
      case 'ספקן/ית שמתקשה להיפתח':
        return 'תני לעצמך זמן – קשר טוב נבנה בסבלנות ובהדרגתיות.';
      default:
        return 'המשיכי לבטא את עצמך – החיבור הנכון ירגיש טבעי.';
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>סיכום המסלול שלך</Text>
      <Text style={styles.info}>השלמת {dayCount} ימים מתוך 14</Text>
      <Text style={styles.label}>סגנון דייטינג מוערך:</Text>
      <Text style={styles.value}>{style}</Text>
      <Text style={styles.label}>תובנה מתוך המסלול:</Text>
      <Text style={styles.value}>{insight}</Text>
      <Text style={styles.label}>המלצה זוגית מותאמת:</Text>
      <Text style={styles.value}>{recommendation}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MatchEmotion')}>
        <Text style={styles.buttonText}>אני מוכן/ה לצאת לדרך זוגית</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    marginBottom: 16,
    textAlign: theme.textAlign,
  },
  info: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    marginBottom: 16,
    color: '#444',
    textAlign: theme.textAlign,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    marginTop: 12,
    color: '#666',
    textAlign: theme.textAlign,
  },
  value: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#222',
    marginBottom: 12,
    textAlign: theme.textAlign,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ff5a5f',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
});

export default LovePathSummaryScreen;
