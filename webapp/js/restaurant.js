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
    
    Application.Restaurant = DS.Model.extend({
        _id: DS.attr('string'),
        name: DS.attr('string'),
        cuisine: DS.attr('string'),
        tagline: DS.attr('string'),
        description: DS.attr('string'),
        address: DS.attr('string'),
        rating: DS.attr('number'),
        price: DS.attr('number')
    });

    // Route for the Restaurant
    Application.RestaurantRoute = Ember.Route.extend({
        // Grab the restaurant of this id from the store (cache or server)
        model: function(params) {
            return this.store.find('restaurant', params.id);
        },
        // after the model is loaded, I need to get the current reservations and remaining
        // available times.  Setting them on the model triggers a re-render of the template.
        afterModel: function(restaurant) {
            $.ajax('/restaurants/' + restaurant.get('_id') + '/reservations', {
                success: function(response) {
                    restaurant.set('reservations', response.reservations);
                    restaurant.set('availableTimes', response.available);
                }
            });
        }
    });

    // Since this controller is "needed" by the ReservationController, I had
    // to explicitly create this class in case that page was loaded directly
    Application.RestaurantController = Ember.ObjectController.extend({});
})();
