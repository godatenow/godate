// emotionReflection.js
export default function reflectDeeperEmotion(input) {
  if (!input || input.length < 2) return "נסה לשתף עוד קצת כדי שאוכל להבין אותך טוב יותר.";

  if (input.includes("קושי") || input.includes("כאב")) {
    return "נשמע שאתה מתמודד עם כאב רגשי – מותר להרגיש את זה, ואפשר לעבור דרך זה.";
  }

  if (input.includes("שמחה") || input.includes("אהבה")) {
    return "איזה יופי לשמוע רגש חיובי – תן לרגעים כאלה מקום בלב שלך.";
  }

  return "תודה ששיתפת. נסה לחשוב מה הרגש המרכזי שעולה לך סביב זה.";
}
