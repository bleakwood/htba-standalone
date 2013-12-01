'use strict';

angular.module('htbaStandaloneApp')
  .factory('Meditation', ['$resource', function($resource) {
  return $resource('http://localhost\\:3000/meditations');
}]);