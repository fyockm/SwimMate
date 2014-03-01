'use strict';

angular.module('swimMateApp')
  .controller('AssignmentsController', function ($scope, fbURL, angularFire) {
    angularFire(fbURL + 'assignments', $scope, 'assignments')
      .then(function () {
        editAssignments($scope);
      });
    angularFire(fbURL + 'events', $scope.assignments, 'events');
    angularFire(fbURL + 'meets', $scope, 'meets');
    angularFire(fbURL + 'roster', $scope, 'roster');

    $scope.sort = 'number';

    function editAssignments($scope) {
      $scope.newAssignment = {};

      $scope.add = function () {
        if (!$scope.newAssignment.firstName) {
          return;
        }
        $scope.assignments.push($scope.newAssignment);
        $scope.newAssignment = {};
      };

      $scope.remove = function (assignment) {
        $scope.assignments.splice($scope.assignments.indexOf(assignment), 1);
      };
    }
  });