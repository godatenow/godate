function generateSmartOpeners(partnerProfile) {
  const openers = [];

  if (partnerProfile?.bio && partnerProfile.bio.length > 0) {
    openers.push(t("קראתי בפרופיל שלך שאתה אוהב לטייל – איפה היית לאחרונה?"));
  }

  if (partnerProfile?.status && partnerProfile.status.includes("רציני")) {
    openers.push(t("גם אני מחפש קשר משמעותי – מעניין אותי מה זה אומר עבורך?"));
  }

  openers.push(t("מה הדבר הכי חשוב לך שבן/בת הזוג יביאו לקשר?"));
  openers.push(t("איך נראית מבחינתך פגישה ראשונה מוצלחת?"));

  return openers.slice(0, 3);
}

// Firestore collection reference: users
// collection(db, "users")
// Firestore collection reference: matches
// collection(db, "matches")
// Firestore collection reference: messages
// collection(db, "messages")
// Firestore collection reference: notifications
// collection(db, "notifications")

export default generateSmartOpeners;
