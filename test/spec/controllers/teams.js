'use strict';

describe('Controller: TeamsCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var TeamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamsCtrl = $controller('TeamsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of teams to the scope', function () {
    // expect(scope.teams.length).toBe(3);
  });
});
