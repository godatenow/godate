
// פתיח רגשי מותאם.js – מייצר פתיח חכם לשיחה לפי התאמה
export const generateSmartOpener = (matchName, matchPercent) => {
  if (matchPercent > 90) {
    return `וואו, ${matchName}, יש לנו התאמה מדהימה של ${matchPercent}%! מעניין מה הכי חשוב לך בזוגיות?`;
  } else if (matchPercent > 80) {
    return `היי ${matchName}, יש בינינו אחוז התאמה ממש יפה (${matchPercent}%) – מה לדעתך חיבר בינינו?`;
  } else {
    return `היי ${matchName}, שמח להכיר! מה הסיבה שבחרת להצטרף ל-GoDate?`;
  }
};
