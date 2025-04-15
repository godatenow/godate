@echo off
cd /d "%~dp0"
echo ============================================
echo GoDate - הכנת פרויקט אוטומטית
echo ============================================

echo.
echo מתקין תלויות...
npm install

echo.
echo מריץ את האפליקציה...
npx expo start

pause
