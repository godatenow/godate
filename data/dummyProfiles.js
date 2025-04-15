
const dummyProfiles = [
  {
    id: "1",
    name: "נועה",
    age: 31,
    location: "תל אביב",
    job: "מעצבת UX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "אוהבת לשלב בין קריירה ללב פתוח. מחפשת חיבור שמבוסס על חברות, הומור וערכים משותפים.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "2",
    name: "עומר",
    age: 34,
    location: "ירושלים",
    job: "עורך דין",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    description: "אדם של שיחות עומק, טיולים בטבע וערבים שקטים. מחפש אהבה אמיתית.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "3",
    name: "מאיה",
    age: 28,
    location: "חיפה",
    job: "סטודנטית לפסיכולוגיה",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "חולמת על זוגיות כנה ופשוטה, מביאה איתי הרבה חיוך וחום.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "4",
    name: "יונתן",
    age: 36,
    location: "רמת גן",
    job: "יזם בתחום ההייטק",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    description: "נלהב מהחיים, מחפש מישהי לחלוק איתה את המסע, עם רגש, עומק והומור.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "5",
    name: "טליה",
    age: 33,
    location: "הרצליה",
    job: "מורה ליוגה",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    description: "אוהבת לחיות באיזון, להקשיב, ולבנות מערכת יחסים שתצמח ביחד איתי.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "6",
    name: "איתי",
    age: 30,
    location: "באר שבע",
    job: "מפתח תוכנה",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    description: "רגיש, ישיר ואוהב לצחוק. כאן בשביל קשר משמעותי ועמוק.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "7",
    name: "רוני",
    age: 29,
    location: "כפר סבא",
    job: "אשת שיווק דיגיטלי",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    description: "אם אתה מחפש פרטנרית לצמיחה משותפת, אני כאן.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "8",
    name: "דניאל",
    age: 35,
    location: "מודיעין",
    job: "אדריכל",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    description: "אוהב עיצוב, אנשים, ושיחות על החיים. מחפש קשר בוגר ומשמעותי.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "9",
    name: "שירי",
    age: 32,
    location: "פתח תקווה",
    job: "קלינאית תקשורת",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    description: "לב פתוח, אוזן קשבת, מחפשת מישהו לחלוק איתו שמחות ואתגרים.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "10",
    name: "אדם",
    age: 37,
    location: "נתניה",
    job: "מנהל פרויקטים",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    description: "מביא יציבות, הומור ונאמנות. מחפש את האחת לחיים.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
,
  {
    id: "11",
    name: "אלונה",
    age: 26,
    location: "תל אביב",
    job: "דיאטנית קלינית",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    description: "מאמינה באורח חיים בריא ובאהבה שמזינה את הלב.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "12",
    name: "רועי",
    age: 38,
    location: "חדרה",
    job: "יועץ עסקי",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    description: "מחפש פרטנרית למסע החיים – באהבה, חברות והשראה.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "13",
    name: "הדר",
    age: 30,
    location: "ראשון לציון",
    job: "מנהלת מוצר",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    description: "שואפת לזוגיות של כנות, הנאה הדדית, וערכים דומים.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "14",
    name: "אורן",
    age: 40,
    location: "נס ציונה",
    job: "עורך תוכן",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    description: "רגיש, מצחיק, ופתוח לאהבה בוגרת ואמיתית.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "15",
    name: "קרן",
    age: 34,
    location: "תל מונד",
    job: "פסיכולוגית",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    description: "מביאה איתי הכל – רגש, הקשבה, ונשמה גדולה.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "16",
    name: "ניר",
    age: 29,
    location: "תל אביב",
    job: "מעצב גרפי",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    description: "מחפש קשר קליל עם עומק, ולא מפחד להרגיש.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "17",
    name: "רונית",
    age: 36,
    location: "רמת השרון",
    job: "מנהלת משאבי אנוש",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    description: "אם אתה גבר רציני, רך ונאמן – אנחנו כבר קרובים.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "18",
    name: "אביב",
    age: 32,
    location: "חולון",
    job: "יזם חברתי",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "משלב בין ראש פתוח ללב גדול. מחפש אותה.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "19",
    name: "לירון",
    age: 27,
    location: "גבעתיים",
    job: "אמנית",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    description: "מחפשת אהבה שתהיה השראה. מחוברת לעולם וללב.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "20",
    name: "עמית",
    age: 39,
    location: "כפר יונה",
    job: "רופא",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    description: "רציני, אמפתי, ומחפש שותפה לחיים של משמעות.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "21",
    name: "סיון",
    age: 31,
    location: "רעננה",
    job: "יועצת חינוכית",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    description: "רוצה להכיר מישהו שיודע להקשיב, ולבנות יחד עתיד.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "22",
    name: "אייל",
    age: 33,
    location: "רמת גן",
    job: "מרצה",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    description: "מחפש קשר אמיתי, עם תקשורת פתוחה ורגש.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "23",
    name: "שחר",
    age: 28,
    location: "זכרון יעקב",
    job: "שפית",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    description: "מאמינה באוכל כדרך לאהבה. מחפשת לב גדול ואמיתי.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "24",
    name: "יניב",
    age: 36,
    location: "נהריה",
    job: "מהנדס",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    description: "אוהב סדר, עומק, ולקחת אחריות. פנוי לאהבה.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "25",
    name: "אלה",
    age: 35,
    location: "שוהם",
    job: "אדריכלית",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    description: "רגישה, יצירתית, ויודעת מה אני רוצה – זוגיות אמיתית.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "26",
    name: "גיל",
    age: 37,
    location: "נתיבות",
    job: "מורה לחינוך גופני",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    description: "אקטיבי, אוהב תנועה, אבל גם שקט ורוך בזוגיות.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "27",
    name: "יוליה",
    age: 33,
    location: "אשקלון",
    job: "מעצבת פנים",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    description: "אוהבת להכניס אסתטיקה ואהבה לכל פינה בחיים.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "28",
    name: "מתן",
    age: 30,
    location: "בת ים",
    job: "שחקן תיאטרון",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    description: "חולם על אהבה עם נצנוץ של דרמה – אבל רק על הבמה.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "29",
    name: "דנה",
    age: 29,
    location: "רמת ישי",
    job: "קואוצ'רית",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    description: "מובילה תהליכים עם אחרים – וגם עם עצמי. רוצה זוגיות בריאה.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
},
  {
    id: "30",
    name: "ברק",
    age: 34,
    location: "אור יהודה",
    job: "סוכן נדל"ן",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    description: "יש לי ביטחון, רוך, והבנה עמוקה. באתי לאהוב באמת.",
  ,
  tags: ['רציני/ת', 'לא מעשן/ת', 'אוהב/ת טבע']
}
]
];

export default dummyProfiles;
