'use strict';

describe('Controller: MeetsCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var MeetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetsCtrl = $controller('MeetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of meets to the scope', function () {
    expect(scope.meets).toBeDefined();
  });
});