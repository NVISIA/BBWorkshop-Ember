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
 * jgitter 1/24/14.
 */

(function() {
    "use strict";

    // Create the applicaton and expose it globally
    var app = Ember.Application.create();
    window.Application = app;

    // Add routes to the application
    app.Router.map(function() {
        this.resource('index', { path: '/' });
        this.resource('restaurant', { path: '/restaurant/:id' }, function() {
            this.resource('reservationForm', { path: '/:time' });
        });
        this.resource('reservation', { path: '/reservation/:id' });
    });
    
    // Create an explicit IndexRoute and specify a method for retrieving the model
    // which in this case is a collection of restaurant models
    app.IndexRoute = Ember.Route.extend({
        model: function() {
            return this.store.find('restaurant');
        }
    });

    // By default, Ember uses the Json API laid out at http://jsonapi.org/
    // Our server doesn't follow that model, so overriding to do simple JSON serialization
    Application.ApplicationSerializer = DS.JSONSerializer.extend({
        serializeIntoHash: function(hash, type, record, options) {
            _.extend(hash, this.serialize(record, options));
        }
    });
})();