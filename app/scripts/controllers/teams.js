'use strict';

angular.module('swimmateApp')
	.controller('TeamsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'teams', $scope, 'teams')
			.then(function(teams) {
				editTeams($scope);
			});
		$scope.pred = 'name';
	});

function editTeams($scope) {
	$scope.add = function () {
		if (!$scope.newTeam) {
			return;
		}
		$scope.teams.push($scope.newTeam);
		$scope.newTeam = null;
	};

	$scope.remove = function (team) {
		$scope.teams.splice($scope.teams.indexOf(team), 1);
	};
}
