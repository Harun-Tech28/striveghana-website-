@echo off
title Push Strive Ghana to GitHub
cd /d "%~dp0"
echo ========================================================
echo   Uploading Strive Ghana Project to GitHub
echo ========================================================
echo.
git push -u origin main
echo.
echo ========================================================
echo If you saw an error above, please read it carefully.
echo Press any key to close this window.
echo ========================================================
pause
