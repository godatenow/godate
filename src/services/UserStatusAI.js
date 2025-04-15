import { mirrorEmotion } from './EmotionMirrorAI';

export const computeUserStatus = (userActivity) => {
  const {
    lastActiveMinutes = 0,
    messagesSentToday = 0,
    matchesToday = 0,
    avgResponseTimeSec = 0,
    lastMessageText = ""
  } = userActivity;

  const status = {
    activity: "",
    emotionalHint: ""
  };

  //  
  if (lastActiveMinutes < 5) {
    status.activity = " ";
  } else if (lastActiveMinutes < 60) {
    status.activity = "  ";
  } else {
    status.activity = " ";
  }

  //  
  if (matchesToday > 0 && messagesSentToday === 0) {
    status.activity += t("    ");
  } else if (messagesSentToday > 3) {
    status.activity += t("   ");
  }

  //    
  if (lastMessageText) {
    status.emotionalHint = mirrorEmotion(lastMessageText);
  }

  return status;
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
