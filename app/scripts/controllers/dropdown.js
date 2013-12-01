angular.module('htbaStandaloneApp')
  .controller('DropdownCtrl', ['$scope',  function($scope) {
  $scope.items = [
    "15 minutes",
    "30 minutes",
    "60 minutes"
  ];
  $scope.debugclick = function() {
  	console.log("clicked");
  };
}]);