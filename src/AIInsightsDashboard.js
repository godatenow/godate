import * as apiService from '@services/apiService';

try {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Network error: ', error);
  //          
}

import React, { useEffect, useState } from 'react';
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) return;
import React from 'react';
  const [insights, setInsights] = useState(null);
  useEffect(() => {
    const fetchInsights = async () => {
      const cached = await SecureStore.getItemAsync('aiInsights');
      if (cached) {
        setInsights(JSON.parse(cached));
      }
      const auth = getAuth();
      const db = getFirestore();
      const currentUser = auth.currentUser;
      if (!currentUser) return;
      const ref = doc(db, 'users', currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        const ai = data.aiInsights || {};
        setInsights(ai);
        await SecureStore.setItemAsync('aiInsights', JSON.stringify(ai));
      }
    };
    fetchInsights();
  }, []);
;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    alignItems: 'center',
  },
  card: {
    ...cardStyle,
    width: '100%',
    marginBottom: 24,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  metric: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
