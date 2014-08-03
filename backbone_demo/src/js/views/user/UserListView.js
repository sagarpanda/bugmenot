define([
    'jquery', 
    'underscore', 
    'backbone',
    'views/user/UserItemView'
], function($, _, Backbone, UserItemView){

    var view = Backbone.View.extend({

        tagName: 'table',

        className: 'table table-striped',

        events: {},

        template: _.template('<thead><tr>\
                <th>First Name</th>\
                <th>Last Name</th>\
                <th>e-Mail</th>\
            </tr></thead>'),

        initialize: function() {
            this.listenTo(this.collection, "add", this.addOne);
        },

        addOne: function(model){
            var itemView = new UserItemView({ model: model });
            this.$el.append(itemView.render().el);
        },

        render: function() {
            this.$el.empty();
            this.$el.append(this.template());
            this.collection.fetch();
            return this;
        }

    });

    return view;
});