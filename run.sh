#!/bin/bash

# install node dependencies
sudo npm install

# bootstrap the database if it doesn't exist
[ ! -f server/restaurants.db ] && ./reset.sh

# precompile the templates
node node_modules/grunt-cli/bin/grunt

# startup the node server
node server/server --port 9000

# Use this command instead to run in secure mode
# node server/server --port 9000 -s