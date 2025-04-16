export default function smartMatch(user, candidates) {
  return candidates
    .map(c => {
      let score = 0;
      if (user.genderPreference === c.gender) score += 30;
      if (user.ageRange.includes(c.age)) score += 20;
      if (user.interests && c.interests) {
        const common = user.interests.filter(i => c.interests.includes(i));
        score += common.length * 10;
      }
      return { user: c, score };
    })
    .sort((a, b) => b.score - a.score);
}
