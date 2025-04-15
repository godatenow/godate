
GoDate – APK Build Instructions (EAS)

1. דרישות מוקדמות:
   - Node.js מותקן
   - חשבון Expo (https://expo.dev)
   - התקן את EAS CLI:
     npm install -g eas-cli

2. כניסה לחשבון Expo:
   eas login

3. בניית APK חתום:
   eas build -p android --profile production

   (הבנייה תתבצע בענן של Expo. בסיום תקבל לינק להורדת APK)

4. קבצים חשובים:
   - app.json – הגדרת האפליקציה (שם, אייקון, מזהה)
   - eas.json – פרופיל הבנייה APK
   - firebase/ – תמיכה ב-FCM
   - screens/ – כל מסכי האפליקציה
   - components/ – רכיבי ממשק (כרטיסים, טעינה, מצב ריק וכו')
   - services/ – לוגיקות AI, אימות, חסימות, המלצות

5. טיפ:
   אם ברצונך להעלות ל-Google Play, ניתן להמיר ל־.aab דרך:
   eas build -p android --profile production --platform aab

בהצלחה!
