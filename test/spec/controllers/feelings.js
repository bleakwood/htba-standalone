'use strict';

describe('Controller: FeelingsCtrl', function () {

  // load the controller's module
  beforeEach(module('htbaStandaloneApp'));

  var FeelingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeelingsCtrl = $controller('FeelingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
