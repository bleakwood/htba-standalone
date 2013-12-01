'use strict';

describe('Controller: MeditationstitimeupcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('htbaStandaloneApp'));

  var MeditationstitimeupcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeditationstitimeupcontrollerCtrl = $controller('MeditationstitimeupcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
