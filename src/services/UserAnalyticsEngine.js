export const analyzeUserProfile = (userStats) => {
  const {
    profileViews = 0,
    matches = 0,
    conversationsStarted = 0,
    averageMessageLength = 0,
    popularTags = []
  } = userStats;

  const insights = [];

  //    
  const matchRate = profileViews > 0 ? Math.round((matches / profileViews) * 100) : 0;
  if (matchRate < 10) {
    insights.push(t("        ."));
  } else if (matchRate >= 25) {
    insights.push(t("     !"));
  }

  //  
  if (conversationsStarted === 0 && matches > 0) {
    insights.push(t("  ,          ."));
  }

  //   
  if (averageMessageLength < 10) {
    insights.push(t("       ."));
  }

  //    
  if (popularTags.includes("")) {
    insights.push(t("         ."));
  }

  return {
    matchRate,
    insights
  };
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
