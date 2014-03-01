'use strict';

describe('Controller: EventsCtrl', function () {

  // load the controller's module
  beforeEach(module('swimmateApp'));

  var EventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsCtrl = $controller('EventsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of events to the scope', function () {
    expect(scope.events).toBeDefined();
  });
});