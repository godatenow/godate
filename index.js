import React from 'react';
React.useEffect(() => {
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);
}, []);
import App from './src/App';
registerRootComponent(App);

export default {};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
