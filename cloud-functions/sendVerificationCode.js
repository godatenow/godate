const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

// שימוש במשתני סביבה לאבטחה
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
});

exports.sendVerificationCode = functions.https.onCall(async (data, context) => {
  // וידוא קלט
  if (!data.email || !data.userId) {
    throw new functions.https.HttpsError(
      'invalid-argument', 
      'נדרשים אימייל ומשתמש מזהה'
    );
  }

  const { email, userId } = data;
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // שמירה ב-Firestore עם תיעוד זמן
    await db.collection('verifications').doc(userId).set({
      code,
      email,
      attempts: 0,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      expiresAt: admin.firestore.Timestamp.fromDate(
        new Date(Date.now() + 15 * 60 * 1000) // תוקף 15 דקות
      )
    });

    // שליחת אימייל עם עיצוב מקצועי
    const mailOptions = {
      from: `GoDate <${functions.config().gmail.email}>`,
      to: email,
      subject: 'קוד אימות לחשבון GoDate',
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #ff6b6b;">שלום וברכה!</h2>
          <p>קוד האימות שלך עבור GoDate הוא:</p>
          <div style="font-size: 24px; font-weight: bold; letter-spacing: 2px; margin: 20px 0;">
            ${code}
          </div>
          <p>קוד זה יהיה תקף למשך 15 דקות.</p>
          <p style="font-size: 12px; color: #999;">
            אם לא ביקשת קוד זה, ניתן להתעלם מהודעה זו.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('שגיאה בשליחת קוד אימות:', error);
    throw new functions.https.HttpsError(
      'internal', 
      'אירעה שגיאה בשליחת קוד האימות. נסה שוב מאוחר יותר.'
    );
  }
});