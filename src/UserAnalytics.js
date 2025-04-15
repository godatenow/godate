import * as apiService from '@services/apiService';

try {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Network error:', error);
  //       
}

import React, { useEffect, useState } from 'react';
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) return;
import React from 'react';
const stats = [
  { id: 1, icon: 'eye', label: '  ', value: 43 },
  { id: 2, icon: 'heart', label: ' ', value: 12 },
  { id: 3, icon: 'chatbubble', label: ' ', value: 5 },
  { id: 4, icon: 'pulse', label: ' ', value: '87%' },
];
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const fetchStats = async () => {
      const auth = getAuth();
      const db = getFirestore();
      const currentUser = auth.currentUser;
      if (!currentUser) return;
      const ref = doc(db, 'users', currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setStats(data.stats || {});
      }
    };
    fetchStats();
  }, []);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  card: {
    ...cardStyle,
    width: '48%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 4,
    color: colors.text,
  },
});

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
