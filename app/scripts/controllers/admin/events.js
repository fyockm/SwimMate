'use strict';

angular.module('swimmateApp')
  .controller('EventsCtrl', function ($scope, fbURL, angularFire) {

    angularFire(fbURL + 'events', $scope, 'events')
      .then(function () {
        editEvents($scope);
      });

    $scope.sort = 'id';

    function editEvents($scope) {
      function defaultFromLast(events) {
        return {
          id: (!events.length) ? 1 : parseInt(events[events.length - 1].id, 10) + 1
        };
      }

      $scope.newEvent = defaultFromLast($scope.events);

      $scope.add = function () {
        if (!$scope.newEvent.stroke) {
          return;
        }
        $scope.events.push($scope.newEvent);
        $scope.newEvent = defaultFromLast($scope.events);
      };

      $scope.remove = function (event) {
        $scope.events.splice($scope.events.indexOf(event), 1);
        $scope.newEvent = defaultFromLast($scope.events);
      };
    }
  });