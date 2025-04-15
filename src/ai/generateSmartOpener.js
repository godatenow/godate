
export const generateSmartOpener = (profile) => {
  const name = profile.name || 'היי';
  const interests = (profile.tags || []).join(', ');
  const serious = profile.description?.includes('רציני') || profile.tags?.includes('רציני/ת');

  if (serious) {
    return `היי ${name}, אשמח להכיר אותך לעומק. מה הכי חשוב לך בבניית קשר יציב?`;
  }

  if (profile.tags?.includes('אוהב/ת טבע')) {
    return `היי ${name}, גם אני אוהב טבע – יש לך מקום אהוב שאת אוהבת לברוח אליו?`;
  }

  if (profile.tags?.includes('זורם/ת') || profile.description?.includes('כיף')) {
    return `היי ${name}, מה בעינייך הופך דייט ראשון למשהו כיפי ובלתי נשכח?`;
  }

  return `היי ${name}, אשמח להתחיל שיחה אמיתית – מה לדעתך יוצר חיבור טוב?`;
};
