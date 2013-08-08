'use strict';

angular.module('swimmateApp')
	.controller('MeetsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL + 'meets', $scope, 'meets')
			.then(function () {
				editMeets($scope);
			});
		angularFire(fbURL + 'teams', $scope, 'teams');

		$scope.sort = 'date';

    function editMeets($scope) {
      $scope.newMeet = {};

      $scope.add = function () {
        if (!$scope.newMeet.date) {
          return;
        }
        $scope.meets.push($scope.newMeet);
        $scope.newMeet = {};
      };

      $scope.remove = function (meet) {
        $scope.meets.splice($scope.meets.indexOf(meet), 1);
      };
    }
	});