
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_EMAIL_PASSWORD'
  }
});

exports.sendVerificationCode = functions.https.onCall(async (data, context) => {
  const { email, userId } = data;
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await db.collection('verifications').doc(userId).set({
    code,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  const mailOptions = {
    from: 'GoDate <YOUR_EMAIL@gmail.com>',
    to: email,
    subject: '   GoDate ',
    text: `  : ${code}`
  };

  await transporter.sendMail(mailOptions);
  return { success: true };
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
