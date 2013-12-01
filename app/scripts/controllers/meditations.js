'use strict';

angular.module('htbaStandaloneApp')
  .controller('MeditationsCtrl', ['$scope', '$routeParams', '$timeout', function ($scope, $routeParams, $timeout) {
  	$scope.medLength = $routeParams.medLength;

  	$scope.counter = 0;
  	$scope.timer_min = 0;
  	$scope.timer_sec = 0;
  	$scope.timer_placeholder = '';
    $scope.onTimeout = function(){
        $scope.counter++;
        $scope.timer_min = ~~($scope.counter / 60);
        $scope.timer_sec = $scope.counter % 60;
        // if($scope.timer_min === $scope.medLength)

        if($scope.timer_sec < 10){
        	$scope.timer_placeholder = '0';
        }
        else
        	$scope.timer_placeholder = '';
        mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stopTimer = function() {
    	console.log($scope.medLength * 60);
    	console.log($scope.counter);
    	$timeout.cancel(mytimeout);
    }

  }]);