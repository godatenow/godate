
import { getAnalytics, logEvent } from 'firebase/analytics';

const analytics = getAnalytics();

export const trackEvent = (eventName, params = {}) => {
  try {
    logEvent(analytics, eventName, params);
  } catch (err) {
    console.warn('Analytics error:', err);
  }
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
