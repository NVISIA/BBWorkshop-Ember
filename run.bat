echo off

rem Install node dependencies locally
call npm install

rem Bootstrap the database if it doesn't exist
if not exist server/restaurants.db (
    call reset.bat
)

rem startup the node server
call node server/server --port 9000

rem Use this command instead to run in secure mode
rem node server/server --port 9000 -s