@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0launcher.ps1" -Action start
set "result=%errorlevel%"
if not "%result%"=="0" pause
exit /b %result%
