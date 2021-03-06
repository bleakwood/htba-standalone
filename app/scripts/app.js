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
      .when('/meditate/:medLength', {
        templateUrl: 'views/meditate.html',
        controller: 'MeditationsCtrl'
      })
      .when('/meditate_timeup', {
        templateUrl: 'views/meditationTimeup.html',
        controller: 'meditationsTimeupController'
      })
      .when('/history', {
        templateUrl: 'views/lastMeditations.html',
        controller: 'LastmeditationcontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
