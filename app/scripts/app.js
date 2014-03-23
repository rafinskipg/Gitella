var angular = require('angular');
require('angular-route');
require('./controllers/mainCtrl');
require('./services/services');
require('./directives/postRender');

document.addEventListener('deviceready', init, false);

function init(){
	console.log('init');
}

var myApp = angular.module('myApp',['controllers','directives', 'ngRoute', 'services']);

myApp.config(['$routeProvider',
    function($routeProvider) {
         $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html'
                })
                .otherwise({
                    redirectTo: '/'
                });    
    }
]);