'use strict';

describe('Controller: ReportCardsCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var ReportCardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportCardsCtrl = $controller('ReportCardsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
