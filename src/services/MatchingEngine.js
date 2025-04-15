//     , ,  , 

export const calculateMatchScore = (userA, userB) => {
  let score = 0;
  let totalWeight = 0;

  //    
  const sharedValues = intersect(userA.values, userB.values).length;
  score += sharedValues * 5;
  totalWeight += 5 * userA.values.length;

  //   
  const commonInterests = intersect(userA.interests, userB.interests).length;
  score += commonInterests * 4;
  totalWeight += 4 * userA.interests.length;

  //   /  
  if (userA.communication === userB.communication) {
    score += 10;
  }
  totalWeight += 10;

  //  
  const readinessDiff = Math.abs(userA.readinessScore - userB.readinessScore);
  score += Math.max(0, 10 - readinessDiff * 2);
  totalWeight += 10;

  //   (  - NLP )
  // Placeholder:     
  if (userA.freeText && userB.freeText && userA.freeText.includes(userB.keyword)) {
    score += 5;
  }
  totalWeight += 5;

  //  
  const normalizedScore = Math.round((score / totalWeight) * 100);
  return normalizedScore;
};

const intersect = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value));
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
