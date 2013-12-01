'use strict';

angular.module('htbaStandaloneApp')
  .controller('meditationsTimeupController', ['$scope', '$rootScope', 'Meditation', 'Feeling', function ($scope, $rootScope, Meditation, Feeling) {
    	$scope.timeCount = $rootScope.timeCount;
    	$scope.timer_min = ~~($scope.timeCount / 60);
        $scope.timer_sec = $scope.timeCount % 60;


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

		$scope.selectFeeling = function(f) {
			$scope.newMeditation = { duration: $scope.timeCount };
			Meditation.save($scope.newMeditation, function(resource) {
				console.log("Meditation saved");
				console.log(resource.id);
				$scope.newFeeling = { meditation_id: resource.id };
				$scope.newFeeling = { feeling_desc: f.name };
					Feeling.save($scope.newFeeling, function(resource) {
						console.log("Feeling saved");
						console.log(resource.id);
						// $location.path( '/dashboard' );
					}, function(response) {
				      console.log('Error: ' + response.status);
				    });
			}, function(response) {
		      console.log('Error: ' + response.status);
		    });

		}
	}
  ]);
