define([
	'backbone',
	'models/UserModel'
], function(Backbone, UserModel){

	var collection = Backbone.Collection.extend({
		
        model: UserModel,

        url: '../services/users.php',

        parse: function(response){
            return response.result;
        }
	});

	//App.xClass.UserCollection = collection;
	return collection;
});