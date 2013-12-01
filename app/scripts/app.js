'use strict';

angular.module('htbaStandaloneApp', [
  'ngResource',
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'FeelingsCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'FeelingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
