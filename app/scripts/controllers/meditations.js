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

    $scope.items = ['item1', 'item2', 'item3'];

	  $scope.open = function () {

	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

  }]);


var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};