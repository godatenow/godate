const functions = require('firebase-functions');

// פונקציית ייעוץ AI לפרופיל המשתמש
exports.aiProfileCoach = functions.https.onCall((data, context) => {
  const profile = data.profile || {};
  const recommendations = [];

  if (!profile.bio || profile.bio.length < 30) {
    recommendations.push('כדאי להוסיף קצת יותר לפרופיל – לפחות 30 תווים בטקסט החופשי.');
  }

  if (!profile.interests || profile.interests.length < 3) {
    recommendations.push('נסה לבחור לפחות 3 תחומי עניין – זה יעזור להתאמה טובה יותר.');
  }

  if (!profile.photoURL) {
    recommendations.push('פרופיל עם תמונה ראשית בולטת מקבל פי 5 יותר תגובות.');
  }

  if (!profile.values || profile.values.length === 0) {
    recommendations.push('הוסף ערכים חשובים לך – זה משדר עומק ודיוק רגשי.');
  }

  if (recommendations.length === 0) {
    recommendations.push('כל הכבוד! הפרופיל שלך נראה מצוין – מוכן להתאמות חכמות 🎯');
  }

  return { recommendations };
});
