
export const getDatingStyleInsight = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes('אהבה') || lower.includes('חום') || lower.includes('לב')) {
    return 'רומנטי/ת עמוק/ה';
  }

  if (lower.includes('אמון') || lower.includes('ביטחון') || lower.includes('יציבות')) {
    return 'רציונלי/ת מחפש/ת ביטחון';
  }

  if (lower.includes('כיף') || lower.includes('זורם') || lower.includes('חופש')) {
    return 'הרפתקני/ת זורם/ת';
  }

  if (lower.includes('אנרגיה') || lower.includes('רוחני') || lower.includes('חיבור')) {
    return 'מחובר/ת לרוח ולאנרגיה';
  }

  if (lower.includes('פחד') || lower.includes('קשה לי') || lower.includes('כאב')) {
    return 'ספקן/ית שמתקשה להיפתח';
  }

  return 'מחפש/ת חיבור משמעותי';
};
