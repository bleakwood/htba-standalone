'use strict';

angular.module('htbaStandaloneApp', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
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
      .when('/meditate', {
        templateUrl: 'views/dashboard.html',
        controller: 'MeditationsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
