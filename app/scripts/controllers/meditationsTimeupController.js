'use strict';

angular.module('htbaStandaloneApp')
  .controller('meditationsTimeupController', ['$scope', '$rootScope', 'Meditation', 'Feeling', function ($scope, $rootScope, Meditation, Feeling) {
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
			}, function(response) {
		      console.log('Error: ' + response.status);
		    });
		}
	}
  ]);
