@echo off
start mongod

:node
cls
node server/app.js 
set /p RESTART=Restart? (y/n)
IF %RESTART%==y GOTO node