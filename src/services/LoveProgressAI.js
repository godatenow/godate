export const analyzeLoveProgress = (progressData) => {
  const {
    dailyReflections = [],
    emotionalShifts = [],
    matchesOverTime = [],
    conversationsStarted = 0,
    lovePathStepsCompleted = 0
  } = progressData;

  let score = 0;
  let insights = [];

  //     
  const uniqueEmotions = [...new Set(emotionalShifts.flat())];
  score += Math.min(10, uniqueEmotions.length * 2);

  //   -LovePath
  score += lovePathStepsCompleted * 3;

  //  
  score += Math.min(15, conversationsStarted * 2);

  //     
  if (dailyReflections.length > 2 && dailyReflections.slice(-1)[0] === " ") {
    score += 10;
    insights.push("       !");
  }

  //  
  if (matchesOverTime.length > 2) {
    const trend = matchesOverTime[matchesOverTime.length - 1] - matchesOverTime[0];
    if (trend > 0) {
      score += 5;
      insights.push("       .");
    }
  }

  const normalized = Math.min(100, Math.round(score));
  return {
    progressScore: normalized,
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
