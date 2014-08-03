define([
    'jquery', 
    'underscore', 
    'backbone'
], function($, _, Backbone){

    var view = Backbone.View.extend({

        tagName: 'tr',

        className: 'user-item',

        events: {},

        template: _.template("<td><%= fname %></td> <td><%= lname %></td> - <td><%= email %></td>"),

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    return view;
});