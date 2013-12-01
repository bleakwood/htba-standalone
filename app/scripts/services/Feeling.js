'use strict';

angular.module('htbaStandaloneApp')
  .factory('Feeling', ['$resource', function($resource) {
  return $resource('http://localhost\\:3000/feelings');
}]);