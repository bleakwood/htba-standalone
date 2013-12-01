'use strict';

angular.module('htbaStandaloneApp')
  .controller('LastmeditationcontrollerCtrl', ['$scope', 'Meditation', function ($scope, Meditation) {
    $scope.meditations = Meditation.query();
    console.log($scope.meditations);
  }]);