import React, { lazy } from 'react';

export const HomeScreen = lazy(() => import('./src/screens/HomeScreen'));
export const MatchesScreen = lazy(() => import('./src/screens/MatchesScreen'));
export const SearchScreen = lazy(() => import('./src/screens/SearchScreen'));
export const EditProfileScreen = lazy(() => import('./src/screens/EditProfileScreen'));
export const NotificationsScreen = lazy(() => import('./src/screens/NotificationsScreen'));

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
