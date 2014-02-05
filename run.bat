echo off

rem Install node dependencies locally
call npm install

rem Bootstrap the database if it doesn't exist
if not exist node_modules/workshop-server/data/restaurants.db (
    call reset.bat
)

rem Precompile the ember templates
node node_modules/grunt-cli/bin/grunt

rem startup the node server
call node node node_modules/workshop-server/main --port 9000 --webappdir ./webapp

rem Use this command instead to run in secure mode
rem node node node_modules/workshop-server/main --port 9000 -s --webappdir ./webapp