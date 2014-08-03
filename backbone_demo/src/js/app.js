define([
    'jquery', 
    'underscore', 
    'backbone',
    'models/UserModel',
    'collections/UserCollection',
    'views/user/UserListView'
], function($, _, Backbone, UserModel, UserCollection, UserListView){
    
    var o = {
        init:function(){
            var list = new UserListView({collection: new UserCollection()});
            //App.views.list = list;
            $('#container').html(list.render().el);
        }
    };
    return o;
});