'use strict';

describe('Controller: TimesCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var TimesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimesCtrl = $controller('TimesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
