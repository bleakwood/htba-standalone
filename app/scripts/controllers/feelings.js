'use strict';

angular.module('htbaStandaloneApp')
  .controller('FeelingsCtrl', ['$scope', 'Feeling', '$location', function($scope, Feeling, $location){
	$scope.create = function () {
		Feeling.save($scope.newFeeling, function(resource) {
	      $scope.feelings.push(resource);
	      $scope.newFeeling = {};
	    }, function(response) {
	      console.log('Error: ' + response.status);
	    });
	};

	$scope.feelings = [
		{name: 'Happy'},
		{name: 'Normal'},
		{name: 'Excited'},
		{name: 'Angry' },
		{name: 'Tired'},
		{name: 'Relaxed'},
		{name: 'Stressed'},
		{name: 'Terrible'},
		{name: 'Sad'}
	];
	$scope.feeling = $scope.feelings[0];
	$scope.selectFeeling = function(f) {
		$scope.newFeeling = { feeling_desc: f.name };
		$scope.newFeeling.feeling_desc = f.name;
		Feeling.save($scope.newFeeling, function(resource) {
			console.log(resource);
			$location.path( '/dashboard' );
		}, function(response) {
	      console.log('Error: ' + response.status);
	    });
	};
}]);
