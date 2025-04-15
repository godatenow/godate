import FadeInView from "./FadeInView";
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function useOnlineStatus() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return (
    <FadeInView>) => unsubscribe();
  }, []);

  return isConnected;
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
