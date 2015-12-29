@echo off
start mongod

:node
cls
node server/app.js 
set /p RESTART=Restart? (y/n)
IF #%RESTART%==#n GOTO end
GOTO node
:end