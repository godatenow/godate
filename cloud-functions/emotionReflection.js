const functions = require('firebase-functions');

exports.emotionReflection = functions.https.onCall((data, context) => {
  const answers = data.answers || {};
  const allText = Object.values(answers).join(' ').toLowerCase();

  const reflection = [];

  if (allText.includes('פחד') || allText.includes('חוסר ביטחון')) {
    reflection.push('נשמע שיש פחדים או חוסר ודאות – זה טבעי בתהליך של חיפוש קשר.');
  }
  if (allText.includes('אהבה') || allText.includes('חיבור')) {
    reflection.push('יש בך רצון אמיתי לחיבור – זה בסיס נהדר לבניית קשר.');
  }
  if (allText.includes('אכזבה') || allText.includes('כאב')) {
    reflection.push('העבר אולי השאיר סימן – חשוב להכיר בזה ולאפשר ריפוי.');
  }
  if (allText.includes('תקווה') || allText.includes('פתיחות')) {
    reflection.push('הפתיחות שלך בולטת – היא תמשוך אנשים שמתאימים לך באמת.');
  }

  if (reflection.length === 0) {
    reflection.push('המילים שלך מרמזות על מסע פנימי עמוק. המשך כך – אתה בדרך הנכונה.');
  }

  return { summary: reflection.join(' ') };
});
