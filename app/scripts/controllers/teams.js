'use strict';

angular.module('swimmateApp')
	.controller('TeamsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL + 'teams', $scope, 'teams')
			.then(function () {
				editTeams($scope);
			});

		$scope.sort = 'name';

		function editTeams($scope) {
			$scope.newTeam = {};

			$scope.add = function () {
				if (!$scope.newTeam.name) {
					return;
				}
				$scope.teams.push($scope.newTeam);
				$scope.newTeam = {};
			};

			$scope.remove = function (team) {
				$scope.teams.splice($scope.teams.indexOf(team), 1);
			};
		}
	});
