// EmotionalMirrorAI.js
export default function reflectEmotion(text) {
  if (!text || text.length < 2) {
    return "היית רוצה לשתף יותר כדי שאוכל לשקף את הרגש שלך בצורה מדויקת?";
  }

  if (text.includes("פחד") || text.includes("לחץ")) {
    return "נשמע שיש בך פחד או מתח – זה טבעי, נסה להיות עדין עם עצמך.";
  } else if (text.includes("תקווה") || text.includes("סקרנות")) {
    return "אני מזהה בך פתיחות ותקווה – תכונות שמקדמות חיבור.";
  }

  return "אני שומע משהו רגשי בין השורות – האם תוכל לתאר את ההרגשה במילה אחת?";
}
