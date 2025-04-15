
import FadeInView from "./FadeInView";
import { db } from '../firebase/firebase';

//    
export const searchUsers = async ({ minAge, maxAge, gender, interests = [], values = [], location }) => {
  let query = db.collection('users');

  if (gender) query = query.where('gender', '==', gender);
  if (location) query = query.where('location', '==', location);

  const snapshot = await query.get();
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(user => {
      const age = user.age || 0;
      const interestMatch = interests.length === 0 || interests.some(tag => user.interests?.includes(tag));
      const valuesMatch = values.length === 0 || values.some(tag => user.values?.includes(tag));
      return (
    <FadeInView>
        age >= minAge &&
        age <= maxAge &&
        interestMatch &&
        valuesMatch
      );
    }    </FadeInView>
  );
};

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
