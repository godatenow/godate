export const calculateEmotionalMatch = (userA, userB) => {
  let score = 0;

  //    
  const sharedEmotionalWords = intersect(userA.freeTextEmotions || [], userB.freeTextEmotions || []);
  score += sharedEmotionalWords.length * 5;

  //    
  if (userA.emotionalDepth === userB.emotionalDepth) {
    score += 10;
  }

  //   
  if (userA.communication === userB.communication) {
    score += 5;
  }

  //   
  const readinessDiff = Math.abs(userA.readinessScore - userB.readinessScore);
  score += Math.max(0, 10 - readinessDiff * 2);

  return Math.min(100, Math.round((score / 30) * 100)); //  -100
};

const intersect = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value));
};
export default {};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
