define([
	'backbone'
], function(Backbone){

	var model = Backbone.Model.extend({

		urlRoot: 'http://localhost/webinar/backbone_test_01/services/user_detail.php',

		url: function(){
			//return this.urlRoot + '?id=' + this.id;
			return this.urlRoot;
		},

		parse: function(response){
	        if (_.isObject(response.result)) {
	            return response.result;
	        } else {
	            return response;
	        }
		},

		default: {
			'fname': '',
			'lname': '',
			'email': ''
		},

		idAttribute: 'id',

		initialize: function(){
            //console.log("user model is initialized.");
        }

	});
	//App.xClass.UserModel = model;
	return model;
});