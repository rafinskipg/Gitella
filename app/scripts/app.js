var angular = require('angular');
require('angular-route');
require('./controllers/mainCtrl');
require('./services/services');
require('./directives/postRender');

document.addEventListener('deviceready', init, false);

function init(){
	var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "#disqus_content { display: none }";
    document.body.appendChild(css);
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