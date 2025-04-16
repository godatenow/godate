const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');

admin.initializeApp();
const db = admin.firestore();
const storage = admin.storage().bucket();
const client = new vision.ImageAnnotatorClient();

exports.verifyProfileImage = functions.https.onCall(async (data, context) => {
  // וידוא קלט
  if (!data.userId) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'נדרש מזהה משתמש'
    );
  }

  const userId = data.userId;
  const imagePath = `verifications/${userId}.jpg`;

  try {
    // בדיקת קיום התמונה
    const [exists] = await storage.file(imagePath).exists();
    if (!exists) {
      return { 
        success: false, 
        reason: 'לא נמצאה תמונה לאימות. אנא העלה תמונה חדשה.' 
      };
    }

    // ניתוח תמונה עם Google Vision
    const [result] = await client.faceDetection(`gs://${storage.name}/${imagePath}`);
    const faces = result.faceAnnotations;

    if (!faces || faces.length === 0) {
      return { 
        success: false, 
        reason: 'לא זוהה פנים בתמונה. אנא העלה תמונה ברורה של הפנים.' 
      };
    }

    // בדיקת קריטריונים
    const face = faces[0];
    const smiling = face.joyLikelihood || '';
    const headwear = face.headwearLikelihood || '';
    const eyesOpen = face.eyesOpenLikelihood || '';

    // איסוף שגיאות
    const errors = [];
    
    if (!['LIKELY', 'VERY_LIKELY'].includes(smiling)) {
      errors.push('יש לחייך בתמונה');
    }
    
    if (['LIKELY', 'VERY_LIKELY'].includes(headwear)) {
      errors.push('אסור לחבוש כובע או משקפי שמש');
    }
    
    if (!['LIKELY', 'VERY_LIKELY'].includes(eyesOpen)) {
      errors.push('יש לפקוח עיניים');
    }

    if (errors.length > 0) {
      return { 
        success: false, 
        reason: `תמונה לא מאושרת: ${errors.join(', ')}` 
      };
    }

    // עדכון משתמש מאומת
    await db.collection('users').doc(userId).update({ 
      isVerified: true,
      verificationDate: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('שגיאה באימות תמונה:', error);
    throw new functions.https.HttpsError(
      'internal',
      'אירעה שגיאה בעיבוד התמונה. נסה שוב מאוחר יותר.'
    );
  }
});