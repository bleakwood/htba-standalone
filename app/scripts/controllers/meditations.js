'use strict';

angular.module('htbaStandaloneApp')
  .controller('MeditationsCtrl', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {
  	$scope.medLength = $routeParams.medLength;
  }]);