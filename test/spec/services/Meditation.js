'use strict';

describe('Service: Meditation', function () {

  // load the service's module
  beforeEach(module('htbaStandaloneApp'));

  // instantiate service
  var Meditation;
  beforeEach(inject(function(_Meditation_) {
    Meditation = _Meditation_;
  }));

  it('should do something', function () {
    expect(!!Meditation).toBe(true);
  });

});
