
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_YourStripeSecretKey'); //   

admin.initializeApp();
const db = admin.firestore();

exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
  const userId = data.userId;

  //  Session  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'ils',
          product_data: {
            name: 'GoDate ',
          },
          unit_amount: 9900, // 99.00
        },
        quantity: 1,
      },
    ],
    success_url: 'https://your-app.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://your-app.com/cancel',
    metadata: {
      userId,
    },
  });

  //     
  await db.collection('premium_pending').doc(userId).set({
    sessionId: session.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { url: session.url };
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
