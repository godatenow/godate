// DatingPatternAI.js
export default function analyzeDatingPattern(history) {
  const shortDates = history.filter(d => d.duration < 2);
  if (shortDates.length > 3) {
    return "נראה שאתה נוטה לדייטים קצרים מדי. כדאי לתת יותר זמן להכיר.";
  }
  return "נראה שאתה מאזן את הזמן בדייטים שלך בצורה טובה.";
}