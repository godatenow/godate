
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');

admin.initializeApp();
const db = admin.firestore();
const storage = admin.storage().bucket();
const client = new vision.ImageAnnotatorClient();

exports.verifyProfileImage = functions.https.onCall(async (data, context) => {
  const userId = data.userId;
  const imagePath = `verifications/${userId}.jpg`;
  const file = storage.file(imagePath);

  try {
    const [result] = await client.faceDetection(`gs://${storage.name}/${imagePath}`);
    const faces = result.faceAnnotations;

    if (!faces || faces.length === 0) {
      return { success: false, reason: '   ' };
    }

    const smiling = faces[0].joyLikelihood || '';
    const headUp = faces[0].headwearLikelihood || '';

    if (['LIKELY', 'VERY_LIKELY'].includes(smiling)) {
      await db.collection('users').doc(userId).update({ isVerified: true });
      return { success: true };
    } else {
      return { success: false, reason: '   ' };
    }
  } catch (err) {
    console.error('Face detection error:', err);
    return { success: false, reason: '  ' };
  }
});

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
