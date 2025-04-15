
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_YourStripeSecretKey'); //   
const endpointSecret = 'whsec_YourStripeWebhookSecret'; //   -WebHook 

admin.initializeApp();
const db = admin.firestore();

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;

    //    
    await db.collection('users').doc(userId).update({
      isPremium: true,
      premiumSince: admin.firestore.FieldValue.serverTimestamp(),
    });

    //    
    await db.collection('premium_pending').doc(userId).delete();
  }

  res.status(200).send('Event received');
});

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
