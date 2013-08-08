'use strict';

describe('Controller: RosterCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var RosterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RosterCtrl = $controller('RosterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of rosters to the scope', function () {
    expect(scope.rosters.length).toBeGreaterThan(0);
  });
});
