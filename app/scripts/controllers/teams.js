'use strict';

angular.module('swimmateApp')
	.controller('TeamsCtrl', function ($scope, fbURL, angularFire) {
		var promise = angularFire(fbURL+'teams', $scope, 'teams');

		$scope.newTeam = null;

		promise.then(function(teams) {
			startWatch($scope);
		});
	});

function startWatch($scope) {

	$scope.addTeam = function () {
		if (!$scope.newTeam) {
			return;
		}

		$scope.teams.push({
			name: $scope.newTeam.name,
			mascot: $scope.newTeam.mascot
		});

		$scope.newTeam = null;
	};

	$scope.editTeam = function (team) {
		$scope.editedTeam = team;
	};

	$scope.doneEditing = function (team) {
		$scope.editedTeam = null;
		if (!team.name) {
			$scope.removeTeam(team);
		}
	};

	$scope.removeTeam = function (team) {
		$scope.teams.splice($scope.teams.indexOf(team), 1);
	};
}