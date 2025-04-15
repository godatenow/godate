export async function getReflectionText(input) {
  try {
    const response = await fetch('https://api.GoDate.app/love-mirror', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input })
    });
    const data = await response.json();
    return data.reflection;
  } catch (error) {
    console.error(' :', error);
    return "    .";
  }
}

export default {};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
