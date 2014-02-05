#!/bin/bash

# install node dependencies
sudo npm install

# bootstrap the database if it doesn't exist
[ ! -f node_modules/workshop-server/data/restaurants.db ] && ./reset.sh

# precompile the templates
node node_modules/grunt-cli/bin/grunt

# startup the node server
node node_modules/workshop-server/main --port 9000 -d ./webapp

# Use this command instead to run in secure mode
# node node_modules/workshop-server/main --port 9000 -s -d ./webapp