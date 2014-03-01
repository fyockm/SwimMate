'use strict';

describe('Controller: AdminExportCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var AdminExportCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminExportCtrl = $controller('AdminExportCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
