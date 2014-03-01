'use strict';

describe('Controller: ReportScoreSheetsCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var ReportScoreSheetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportScoreSheetsCtrl = $controller('ReportScoreSheetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
