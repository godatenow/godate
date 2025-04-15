
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AppCard from '../components/ui/AppCard';

const stories = [
  {
    id: '1',
    title: 'דני ונועה',
    text: 'הכרנו דרך GoDate אחרי שהתייאשנו מאפליקציות אחרות. השאלון באמת חיבר בינינו רגשית!',
  },
  {
    id: '2',
    title: 'אור ואיילת',
    text: 'המסלול LovePath עזר לי להבין מה אני רוצה באמת – ואז הגיע החיבור עם איילת. תודה!',
  },
];

const SuccessStoriesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>סיפורי הצלחה</Text>
      {stories.map((s) => (
        <AppCard key={s.id} title={s.title}>
          <Text style={styles.text}>{s.text}</Text>
        </AppCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
    textAlign: 'right',
    color: '#009688',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Heebo',
    fontSize: 16,
    textAlign: 'right',
    color: '#444',
  },
});

export default SuccessStoriesScreen;
