
export const mirrorConversationEmotion = (messages = []) => {
  if (!messages || messages.length < 2) return '';

  const fullText = messages.map(m => m.text?.toLowerCase() || '').join(' ');

  if (fullText.includes('רגש') || fullText.includes('אמיתי') || fullText.includes('פתוח')) {
    return 'השיחה מרגישה פתוחה ונעימה. יש סיכוי אמיתי לחיבור.';
  }

  if (fullText.includes('מה אתה מחפש') || fullText.includes('מטרת הקשר')) {
    return 'השיחה מתמקדת בכוונות. זה מעיד על רצינות ומוכנות לזוגיות.';
  }

  if (fullText.includes('חח') || fullText.includes('זורם')) {
    return 'השיחה קלילה וזורמת. אולי שווה להעמיק בהמשך.';
  }

  if (fullText.includes('אין לי כוח') || fullText.includes('לא עונה')) {
    return 'נראה שהשיחה נתקעה. אולי יוזמה מצידך תעיר אותה מחדש.';
  }

  return 'הדינמיקה ניטרלית. שאלת עומק יכולה לעורר את הקשר.';
};
