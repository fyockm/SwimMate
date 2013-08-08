'use strict';

angular.module('swimmateApp')
	.controller('RosterCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL + 'rosters', $scope, 'rosters')
			.then(function () {
				editRosters($scope);
			});

		$scope.sort = 'first';

		function editRosters($scope) {
			$scope.newRoster = {};

			$scope.add = function () {
				if (!$scope.newRoster.firstName) {
					return;
				}
				$scope.rosters.push($scope.newRoster);
				$scope.newRoster = {};
			};

			$scope.remove = function (roster) {
				$scope.rosters.splice($scope.rosters.indexOf(roster), 1);
			};
		}
	});

