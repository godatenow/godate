
const functions = require('firebase-functions');

exports.emotionReflection = functions.https.onCall((data, context) => {
  const answers = data.answers || {};
  const allText = Object.values(answers).join(' ').toLowerCase();

  const reflection = [];

  if (allText.includes('') || allText.includes('')) {
    reflection.push('        .        .');
  }
  if (allText.includes('') || allText.includes('')) {
    reflection.push('          .');
  }
  if (allText.includes('') || allText.includes('')) {
    reflection.push('                .');
  }
  if (allText.includes('') || allText.includes('')) {
    reflection.push('   ,         .');
  }
  if (reflection.length === 0) {
    reflection.push('       .     .');
  }

  return { summary: reflection.join(' ') };
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
