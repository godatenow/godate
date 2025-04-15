import React, { lazy } from 'react';

export const LoadingScreen = lazy(() => import('./components/LoadingScreen'));
export const UserCard = lazy(() => import('./components/UserCard'));
export const SmartOpenerModal = lazy(() => import('./components/SmartOpenerModal'));
export const EmptyState = lazy(() => import('./components/EmptyState'));
export const LoadingSpinner = lazy(() => import('./components/LoadingSpinner'));

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
