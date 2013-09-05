define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/users/UsersView',
  'views/footer/FooterView'
], function($, _, Backbone, HomeView, UsersView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'users': 'showUsers',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:showUsers', function () {
        var contributorsView = new UsersView();
    });

    app_router.on('route:defaultAction', function (actions) {
     
        var homeView = new HomeView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});