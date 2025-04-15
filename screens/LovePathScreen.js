
import { useWindowDimensions, Platform , View, Text, ScrollView, StyleSheet } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;


import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import LoadingState from '../components/ui/LoadingState';
import AppCard from '../components/ui/AppCard';

const LovePathScreen = ({ userId }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, 'lovePathProgress', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProgress(docSnap.data());
        } else {
          setProgress({ day: 1 });
        }
      } catch (error) {
        console.error("שגיאה בטעינת LovePath:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [userId]);

  if (loading) return <LoadingState />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>נתיב לאהבה - יום {progress.day}</Text>
      <AppCard title="הנחיית היום">
        <Text style={styles.text}>היום נתמקד בהבנת הצרכים הרגשיים שלך.</Text>
      </AppCard>
      <AppCard title="טיפ ממנטור האהבה">
        <Text style={styles.text}>
          קשר טוב מתחיל מהכנות שלך עם עצמך. שאל את עצמך: מה אני באמת רוצה להרגיש בזוגיות?
        </Text>
      </AppCard>
      <AppCard title="משימת היום">
        <Text style={styles.text}>
          כתוב ביומן מהי תחושת האהבה עבורך. תן לה מילים, צבעים או דימויים.
        </Text>
      </AppCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 16,
    color: '#ff5a7e',
  },
  text: {
    fontFamily: 'Heebo',
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
  },
});

export default LovePathScreen;
