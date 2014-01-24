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

// Vlad the validator!
// Cheesy validator meant to work on Ember models for this app since
// ember-validations is currently not compatible with the ember-data package.
// I DO NOT RECOMMEND USING THIS!!!
(function() {
    "use strict";

    var vlad = {};
    window.Vlad = vlad;

    // remove messages for this field from the error box
    var valid = function(name) {
        $('[name=' + name + ']').removeClass('invalid');
        // remove from the list; and if empty; hide it.
        $('.error-box').find('li[name=' + name + ']').remove();
        if ($('.error-box').find('ul li').length == 0) {
            $('.error-box').hide();
        }
    };

    // add error messages to the error box and mark the field in error
    var invalid = function(name, errors) {
        errors = _.union([], errors);
        $('[name=' + name + ']').addClass('invalid');
        // show container, add to list (with name!).
        $('.error-box').find('li[name=' + name + ']').remove();
        _.each(errors, function(error) {
            $('.error-box').show().find('ul').append('<li name="' + name + '">' + error + '</li>');
        });
    };

    // run the validation function
    vlad.validate = function(model) {
        var isValid = true;

        _.each(model.validation, function(validator, field) {
            var result = validator.call(model, model.get(field), model);
            if (!result || result.length === 0) {
                valid(field);
            } else {
                invalid(field, result);
                isValid = false;
            }
        });

        return isValid;
    };
})();