'use strict';

angular.module('htbaStandaloneApp')
  .controller('meditationsTimeupController', ['$scope', '$rootScope', 'Meditation', 'Feeling', '$location', function ($scope, $rootScope, Meditation, Feeling, $location) {
    	$scope.timeCount = $rootScope.timeCount;
    	$scope.timer_min = ~~($scope.timeCount / 60);
        $scope.timer_sec = $scope.timeCount % 60;
        $scope.thoughts = {text: "Say something!"};

		$scope.saveThoughts = function() {
			$scope.newMeditation = { duration: $scope.timeCount,
									 thoughts: $scope.thoughts.text
									 };
			Meditation.save($scope.newMeditation, function(resource) {
				console.log("Meditation saved");
				console.log(resource.id);
				$location.path( '/history' );
			}, function(response) {
		      console.log('Error: ' + response.status);
		    });
		}
	}
  ]);
