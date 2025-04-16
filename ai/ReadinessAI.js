// ReadinessAI.js
export default function assessReadiness(answers) {
  const score = answers.reduce((acc, answer) => acc + (answer.value || 0), 0);

  if (score > 80) {
    return "נראה שאתה מוכן רגשית לקשר זוגי משמעותי. כל הכבוד על המוכנות!";
  }

  if (score > 50) {
    return "יש בך פתיחות לקשר, אבל אולי כדאי לעבוד עוד קצת על מוכנות רגשית.";
  }

  return "נראה שיש עוד מקום לצמיחה אישית לפני כניסה לקשר זוגי.";
}

// Firestore collection reference: users
// collection(db, "users")
// Firestore collection reference: matches
// collection(db, "matches")
// Firestore collection reference: messages
// collection(db, "messages")
// Firestore collection reference: notifications
// collection(db, "notifications")
