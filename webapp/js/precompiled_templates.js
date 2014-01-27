Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"row\">\n        <div class=\"large-12 columns\">\n            <div class=\"callout panel radius\">\n                <p><strong>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>");
  stack1 = helpers['if'].call(depth0, "tagline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "tagline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                <div class=\"row\">\n                    <div class=\"large-3 medium-6 small-12 columns\">\n                        <p>Price: ");
  data.buffer.push(escapeExpression((helper = helpers.showPrice || (depth0 && depth0.showPrice),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "showPrice", "price", options))));
  data.buffer.push("</p>\n                    </div>\n                    <div class=\"large-3 medium-6 small-12 columns\">\n                        <p>Rating: ");
  data.buffer.push(escapeExpression((helper = helpers.showRating || (depth0 && depth0.showRating),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "rating", options) : helperMissing.call(depth0, "showRating", "rating", options))));
  data.buffer.push("</p>\n                    </div>\n                    <div class=\"large-6 medium-12 small-12 columns\">\n                        <p>Address: ");
  stack1 = helpers._triageMustache.call(depth0, "address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    </div>\n                </div>\n                <p>Description: ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button restaurantRow white")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "restaurant", "", options) : helperMissing.call(depth0, "link-to", "restaurant", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("<br/>");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("ShowTimes");
  }

  data.buffer.push("<div class=\"restaurant-list\">\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["reservation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"large-12 columns\">\n        <div class=\"callout panel radius\">\n            <div class=\"row\">\n                <h4>Reservation successfully created for:</h4>\n                <p><strong>");
  stack1 = helpers._triageMustache.call(depth0, "controllers.restaurant.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong></p>\n                <div class=\"large-6 medium-12 small-12 columns\" style=\"margin-bottom:15px;\">\n                    <label>Name: </label><span>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </div>\n                <div class=\"large-6 medium-12 small-12 columns\" style=\"margin-bottom:15px;\">\n                    <label>Phone Number: </label><span>");
  stack1 = helpers._triageMustache.call(depth0, "phone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </div>\n                <div class=\"large-6 medium-12 small-12 columns\" style=\"margin-bottom:15px;\">\n                    <label># of Guests: </label><span>");
  stack1 = helpers._triageMustache.call(depth0, "guests", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </div>\n                <div class=\"large-6 medium-12 small-12 columns\" style=\"margin-bottom:15px;\">\n                    <label>Time: </label><span>");
  data.buffer.push(escapeExpression((helper = helpers.showTime || (depth0 && depth0.showTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time", options) : helperMissing.call(depth0, "showTime", "time", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n            <button class=\"reset\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset", "", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Return to Restaurant List</button>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["reservationForm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"large-12 columns\">\n        <div class=\"panel radius\">\n            <h5>The reservation form:</h5>\n            <form>\n                <div class=\"row\">\n                    <div class=\"large-6 columns\">\n                        <h5><label>Selected Time:</label>");
  data.buffer.push(escapeExpression((helper = helpers.showTime || (depth0 && depth0.showTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time", options) : helperMissing.call(depth0, "showTime", "time", options))));
  data.buffer.push("</h5>\n                    </div>\n                    <div class=\"large-6 columns\">\n                        <label>Number of Guests</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("number"),
    'name': ("guests"),
    'placeholder': ("#"),
    'value': ("guests")
  },hashTypes:{'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <label>Name:</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("name"),
    'placeholder': ("Enter your full name"),
    'value': ("name")
  },hashTypes:{'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-6 medium-6 columns\">\n                        <label>Phone:</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("phone"),
    'placeholder': ("###-###-####"),
    'value': ("phone")
  },hashTypes:{'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"large-6 medium-6 columns\">\n                        <label>Email:</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("email"),
    'placeholder': ("user@domain.ext"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-8 medium-8 columns\">\n                        <label>Seating:</label>\n                        <input type=\"radio\" name=\"location\" id=\"noPreference\"><label for=\"noPreference\">No Preference</label>\n                        <input type=\"radio\" name=\"location\" id=\"outside\"><label for=\"outside\">Outside</label>\n                        <input type=\"radio\" name=\"location\" id=\"inside\"><label for=\"inside\">Inside</label>\n                    </div>\n                    <div class=\"large-4 medium-4 columns\">\n                        <label>Other Info:</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("isSpecialOccasion"),
    'id': ("specialOccasion"),
    'type': ("checkbox")
  },hashTypes:{'name': "STRING",'id': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'id': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<label for=\"specialOccasion\">Special Occasion</label>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <label>Special Requests:</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'name': ("specialRequests"),
    'placeholder': ("Enter any special requests here.")
  },hashTypes:{'name': "STRING",'placeholder': "STRING"},hashContexts:{'name': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"small-12 medium-12 large-12 small-centered columns\">\n                        <button class=\"small radius button submitButton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", "", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Make Reservation</button>\n                        <button class=\"small radius secondary button cancelButton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", "", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Cancel</button>\n                    </div>\n                </div>\n            </form>\n            <div class=\"error-box\" style=\"display:none;\">\n                <ul class=\"error-list\"></ul>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["restaurant"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<br/>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            <div class=\"large-3 medium-4 small-6 columns availableTime\">\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "reservationForm", "", options) : helperMissing.call(depth0, "link-to", "reservationForm", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                            ");
  return buffer;
  }
function program4(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.showTime || (depth0 && depth0.showTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "showTime", "", options))));
  }

  data.buffer.push("<div class=\"row\">\n    <div class=\"large-12 columns\">\n        <div class=\"callout panel radius\">\n            <p><strong>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>");
  stack1 = helpers['if'].call(depth0, "tagline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "tagline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            <div class=\"row\">\n                <div class=\"large-3 medium-6 small-12 columns\">\n                    <p>Price: ");
  data.buffer.push(escapeExpression((helper = helpers.showPrice || (depth0 && depth0.showPrice),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "showPrice", "price", options))));
  data.buffer.push("</p>\n                </div>\n                <div class=\"large-3 medium-6 small-12 columns\">\n                    <p>Rating: ");
  data.buffer.push(escapeExpression((helper = helpers.showRating || (depth0 && depth0.showRating),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "rating", options) : helperMissing.call(depth0, "showRating", "rating", options))));
  data.buffer.push("</p>\n                </div>\n                <div class=\"large-6 medium-12 small-12 columns\">\n                    <p>Address: ");
  stack1 = helpers._triageMustache.call(depth0, "address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                </div>\n            </div>\n            <p>Description: ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\n            <div class=\"availableTimes\">\n                <form>\n                    <fieldset>\n                        <legend>Available Times</legend>\n                        <div class=\"row\">\n                            ");
  stack1 = helpers.each.call(depth0, "availableTimes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n            <div class=\"reservationForm\">");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});