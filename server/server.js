/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 © NVISIA, LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @author jgitter
 */

var express = require('express');
var app = express();
var security = require('./security.js');

var _ = require('underscore');

// connect to the data store needed for this application
var NEDB = require('nedb');
var db = {};
db.restaurants = new NEDB({
    filename: './server/restaurants.db',
    autoload: true
});
db.reservations = new NEDB({
    filename: './server/reservations.db',
    autoload: true
});
db.users = new NEDB({
    filename: './server/users.db',
    autoload: true
});
global.db = db;

var restaurantService = require('./restaurantService.js');
var reservationService = require('./reservationService.js');

// parse command line options
var opts = require('stdio').getopt({
    'port': {key: 'p', args: 1, description: 'HTTP Listener Bind Port'}
});

// application routes
// verb -> path -> function(s)
var baseRoutes = {
    'get': {
        '/': [security.isAuthenticated, function(req, res) {
            res.sendfile('./webapp/index.html');
        }],
        '/index.html': function(req, res) {
            res.redirect('/');
        },
        '/login': function(req, res) {
            res.sendfile('./webapp/login.html');
        },
        '/login.html': function(req, res) {
            res.redirect('/login');
        },
        '/register': function(req, res) {
            res.sendfile('./webapp/register.html');
        },
        '/register.html': function(req, res) {
            res.redirect('/register');
        },
        '/logout': security.logout
    },
    'post': {
        '/login': security.authenticate,
        '/register': security.register
    }
};
var restaurantServiceRoutes = {
    'get': {
        '/restaurants': [security.secureService, restaurantService.getRestaurants],
        '/restaurants/:id': [security.secureService, restaurantService.getRestaurants],
        '/restaurants/:id/reservations': [security.secureService, restaurantService.getReservations]
    },
    'put': {
        '/restaurants': [security.secureService, restaurantService.saveRestaurant],
        '/restaurants/:id': [security.secureService, restaurantService.saveRestaurant]
    },
    'post': {
        '/restaurants': [security.secureService, restaurantService.saveRestaurant],
        '/restaurants/:id': [security.secureService, restaurantService.saveRestaurant]
    },
    'delete': {
        '/restaurants/:id': [security.secureService, restaurantService.deleteRestaurant]
    }
};
var reservationServiceRoutes = {
    'get': {
        '/reservations/:id': [security.secureService, reservationService.getReservations]
    },
    'put': {
        '/reservations': [security.secureService, reservationService.saveReservation],
        '/reservations/:id': [security.secureService, reservationService.saveReservation]
    },
    'post': {
        '/reservations': [security.secureService, reservationService.saveReservation],
        '/reservations/:id': [security.secureService, reservationService.saveReservation]
    },
    'delete': {
        '/reservations/:id': [security.secureService, reservationService.deleteReservation]
    }
};

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    key: 'NSESSIONID',
    secret: 'abracadabra'
}));

// add all of the routes to the application
var addRoutes = function(routes) {
    _.each(routes, function (paths, verb) {
        _.each(paths, function(handlers, path) {
            app[verb](path, handlers);
        });
    });
};
addRoutes(baseRoutes);
addRoutes(restaurantServiceRoutes);
addRoutes(reservationServiceRoutes);

app.use(express.static(__dirname + '/../webapp'));

// enable a database reset with a get request
app.get('/reset', function(req, res) {
    console.log("Resetting Server Data");
    require('./bootstrap.js').reset();
    res.send("Reset Complete");
});

// start the server
var port = opts.port;
if (port === undefined) {
    console.log('Port not specified.  Defaulting to 9000');
    port = 9000;
}
app.listen(port);
console.log('Listening on port ' + port);