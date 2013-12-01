'use strict';

describe('Service: Feeling', function () {

  // load the service's module
  beforeEach(module('htbaStandaloneApp'));

  // instantiate service
  var Feeling;
  beforeEach(inject(function(_Feeling_) {
    Feeling = _Feeling_;
  }));

  it('should do something', function () {
    expect(!!Feeling).toBe(true);
  });

});
