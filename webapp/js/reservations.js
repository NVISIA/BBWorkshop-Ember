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
(function () {
    "use strict";

    Application.Reservation = DS.Model.extend({
        _id: DS.attr('string'),
        restaurantId: DS.attr('string'),
        name: DS.attr('string'),
        phone: DS.attr('string'),
        guests: DS.attr('number'),
        time: DS.attr('number'),
        created: DS.attr('number'),

        // not from server - not DS.attr
        restaurantName: "",

        // Vlad!
        validation: {
            name: function(value) {
                if (value === null || value === undefined || value.length < 2) {
                    return "Name is required and must be at least 2 characters"
                }
            },
            phone: function (value) {
                if (value === null || value === undefined || value === "") {
                    return "Phone number is required"
                } else {
                    var check = value.replace(/[\s\(\)]/g, '');
                    if (check.match(/^1?-?(\d{3})?-?\d{3}-?\d{4}$/) === null) {
                        return "Please enter a valid phone number"
                    }
                }
            },
            guests: function(value) {
                if (value === null || value === undefined || value === "") {
                    return "Number of guests is required";
                } else {
                    var integer;
                    try {
                        integer = parseInt(value);
                        if (integer < 1 || integer > 10) {
                            return "Number of guests must be between 1 and 10, inclusive";
                        }
                    } catch (ex) {
                        return "Number of guests must be an integer";
                    }
                }
            },
            time: function(value) {
                if (value === null || value === undefined || value === "") {
                    return "Reservation time is required";
                }
            }
        }
    });

    // Route for the reservation form
    Application.ReservationFormRoute = Ember.Route.extend({
        // return a brand new reservation model
        model: function(params) {
            // grab the restaurant model for the currently active restaurant
            // so that I can get at the restaurant id.
            var restaurant = this.modelFor('restaurant');
            return this.store.createRecord('reservation', {
                time: params.time,
                restaurantId: restaurant.get('id')
            });
        },
        actions: {
            // save the reservation model on submit
            submit: function(reservation) {
                 if (Vlad.validate(reservation)) {
                    reservation.save().then(_.bind(function(reservation) {
                        this.transitionTo('reservation', reservation);
                    }, this));
                 }
            },
            // route back to the parent to close the form (causes re-render to remove form!)
            cancel: function() {
                this.transitionTo('restaurant', this.modelFor('restaurant'));
            }
        }
    });

    Application.ReservationRoute = Ember.Route.extend({
        model: function(params) {
            return this.store.find('reservation', params.id);
        },
        afterModel: function(reservation) {
            this.store.find('restaurant', reservation.get('restaurantId'));
        },
        setupController: function(controller, reservation) {
            this._super.apply(this, arguments);

            // if the page was reloaded, or loaded from a bookmark, the parent controller won't
            // have a reference to the model we need - load it here
            if (!controller.get('restaurant').get('model')) {
                this.store.find('restaurant', reservation.get('restaurantId')).then(function(restaurant) {
                    controller.get('restaurant').set('model', restaurant);
                });
            }
        },
        actions: {
            reset: function() {
                this.transitionTo('/');
            }
        }
    });

    // Create the Reservation controller explicitly so I can "need" the Restaurant controller
    Application.ReservationController = Ember.ObjectController.extend({
        needs: "restaurant",
        restaurant: Ember.computed.alias('controllers.restaurant')
    });
})();