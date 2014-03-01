'use strict';

describe('Controller: AssignmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var AssignmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssignmentsCtrl = $controller('AssignmentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of assignments to the scope', function () {
    expect(scope.assignments).toBeDefined();
  });
});