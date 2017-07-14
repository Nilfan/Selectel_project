'use strict';

/**
 * @ngdoc overview
 * @name selectelApp
 * @description
 * # selectelApp
 *
 * Main module of the application.
 */
angular
  .module('selectelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
