'use strict';

describe('Controller: AthletesCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var AthletesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AthletesCtrl = $controller('AthletesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of athletes to the scope', function () {
    expect(scope.athletes).toBeDefined();
  });
});