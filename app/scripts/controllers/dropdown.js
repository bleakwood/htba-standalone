angular.module('htbaStandaloneApp')
  .controller('DropdownCtrl', ['$scope',  function($scope) {
  $scope.items = [
    {name: "15 minutes", length: 15},
    {name: "30 minutes", length: 30},
    {name: "60 minutes", length: 60}
  ];
}]);