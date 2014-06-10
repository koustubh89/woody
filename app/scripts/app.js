'use strict';

angular
  .module('woodsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .directive('draggable',draggable)
  .directive('droppable',droppable)
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
