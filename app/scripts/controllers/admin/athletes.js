'use strict';

angular.module('swimmateApp')
  .controller('AthletesCtrl', function ($scope, fbURL, angularFire) {
    angularFire(fbURL + 'athletes', $scope, 'athletes')
      .then(function () {
        editAthletes($scope);
      });

    $scope.sort = 'first';

    function editAthletes($scope) {
      $scope.newAthlete = {};

      $scope.add = function () {
        if (!$scope.newAthlete.firstName) {
          return;
        }
        $scope.athletes.push($scope.newAthlete);
        $scope.newAthlete = {};
      };

      $scope.remove = function (athlete) {
        $scope.athletes.splice($scope.athletes.indexOf(athlete), 1);
      };
    }
  });