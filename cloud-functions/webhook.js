const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret_key);

admin.initializeApp();
const db = admin.firestore();

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      functions.config().stripe.webhook_secret
    );

    console.log(`Processing event type: ${event.type}`);
    
    switch (event.type) {
      case 'checkout.session.completed':
        await handleSuccessfulPayment(event.data.object);
        break;
        
      case 'customer.subscription.deleted':
        await handleSubscriptionCancelled(event.data.object);
        break;
        
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).send('OK');
  } catch (err) {
    console.error('Webhook Error:', err);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

async function handleSuccessfulPayment(session) {
  const userId = session.metadata.userId;
  
  if (!userId) {
    throw new Error('Missing userId in session metadata');
  }

  const batch = db.batch();
  
  // עדכון סטטוס פרימיום
  batch.update(db.collection('users').doc(userId), {
    isPremium: true,
    premiumSince: admin.firestore.FieldValue.serverTimestamp(),
    subscriptionId: session.subscription || 'one-time'
  });
  
  // מחיקת מרשימת המתנה
  batch.delete(db.collection('premium_pending').doc(userId));
  
  await batch.commit();
  console.log(`Updated premium status for user: ${userId}`);
}

async function handleSubscriptionCancelled(subscription) {
  const userId = subscription.metadata.userId;
  
  await db.collection('users').doc(userId).update({
    isPremium: false,
    premiumEnded: admin.firestore.FieldValue.serverTimestamp()
  });
  
  console.log(`Cancelled premium for user: ${userId}`);
}