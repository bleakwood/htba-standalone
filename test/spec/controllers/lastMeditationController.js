'use strict';

describe('Controller: LastmeditationcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('htbaStandaloneApp'));

  var LastmeditationcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LastmeditationcontrollerCtrl = $controller('LastmeditationcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
