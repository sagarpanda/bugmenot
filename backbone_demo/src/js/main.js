require.config({

    enforceDefine: true,
    //baseUrl: 'libs',

    paths: {
        jquery: 'libs/jquery-1.11.1.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        templates: '../templates',
        bootstrap: 'libs/bootstrap.min'
    },

    'shim': {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});
var App = {};
define([
    'jquery', 
    'underscore', 
    'backbone',
    'app'
], function($, _, Backbone, App){
    App.init();
});