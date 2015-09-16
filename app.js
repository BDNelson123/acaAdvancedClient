// interceptor
var house = angular.module('house', ['ngRoute', 'ngAnimate', 'ngResource', 'ngTouch']);

// routing
house.config(function ($routeProvider) {
  $routeProvider
    .when ('/', {templateUrl: "templates/users/new.html"})
    .when ('/404', {templateUrl: "templates/public/404.html"})
    .otherwise({ redirectTo: '/404' });
});
