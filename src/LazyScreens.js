import React, { lazy } from 'react';

export const HomeScreen = lazy(() => import('./screens/HomeScreen'));
export const MatchScreen = lazy(() => import('./screens/MatchScreen'));
export const ChatScreen = lazy(() => import('./screens/chat/ChatScreen'));
export const ProfileScreen = lazy(() => import('./screens/profile/ProfileScreen'));
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
