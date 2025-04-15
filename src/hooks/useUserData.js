
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../services/firebase';

const db = getFirestore(app);
const auth = getAuth(app);

export const useUserData = () => {
  const [userData, setUserData] = useState({ isPremium: false, loading: true });

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (!user) return setUserData({ isPremium: false, loading: false });

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData({
          isPremium: !!data.premium,
          loading: false,
          ...data,
        });
      } else {
        setUserData({ isPremium: false, loading: false });
      }
    };

    fetchUser();
  }, []);

  return userData;
};
