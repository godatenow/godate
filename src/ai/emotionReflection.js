
export const reflectFromWriting = (text) => {
  if (!text || text.length < 10) return '';

  const lower = text.toLowerCase();

  if (lower.includes('פחד') || lower.includes('כאב')) {
    return 'נשמע שאת/ה מתמודד/ת עם קושי רגשי עמוק. זה לגיטימי וחשוב להכיר בזה.';
  }

  if (lower.includes('אהבה') || lower.includes('חיבור')) {
    return 'נראה שאת/ה מחפש/ת קשר משמעותי ומלא חמלה.';
  }

  if (lower.includes('בדידות') || lower.includes('לבד')) {
    return 'התחושות שאת/ה משתף/ת מאוד אנושיות. רצון לקשר הוא טבעי.';
  }

  if (lower.includes('פתיחות') || lower.includes('פגיעות')) {
    return 'הפתיחות שלך מרשימה. יש בזה אומץ וחוכמה רגשית.';

  }

  return 'השיתוף שלך חשוב. המשך/י להעמיק – את/ה בדרך הנכונה.';
};
