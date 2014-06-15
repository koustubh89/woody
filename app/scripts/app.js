'use strict';

angular
  .module('woodsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signIn', {
        templateUrl: 'views/SignIn.html',
        controller: 'signin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });