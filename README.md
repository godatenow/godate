
# GoDate - גרסת Expo עם RTL ותמיכה מלאה

ברוך הבא לפרויקט GoDate בעברית! הגרסה כוללת:
- ממשק RTL מלא
- תמיכה במצלמה, הקלטת וידאו, שליחת תמונות
- מסכי Onboarding, אימות פרופיל, Body Language ועוד
- קובץ app.json מלא עם הרשאות

---

## דרישות מוקדמות:
- Node.js + npm
- Expo CLI: התקנה בפקודה:
```bash
npm install -g expo-cli
```

---

## התקנת התלויות:
```bash
npm install
expo install expo-camera expo-media-library expo-notifications
```

---

## הרצת האפליקציה:
```bash
expo start
```

---

## בניית APK:
```bash
eas build -p android --profile production
```

---

## הערות:
- ודא שהקבצים `assets/icon.png`, `splash.png`, `favicon.png` קיימים או החלף בהתאם
- האפליקציה תומכת ב־RTL כברירת מחדל באמצעות `I18nManager.forceRTL(true)`


## מודולים שנוספו:
- expo-camera
- expo-notifications
- expo-media-library
- expo-location
- expo-av

## אבטחה:
- נעשה שימוש ב-CryptoJS להצפנה בסיסית של נתונים רגישים (כמו פתיחים/הודעות).
- ניתן להשתמש כך:
```js
import * as CryptoJS from "crypto-js";
const encrypted = CryptoJS.AES.encrypt("הודעה", "סיסמה").toString();
const original = CryptoJS.AES.decrypt(encrypted, "סיסמה").toString(CryptoJS.enc.Utf8);
```
