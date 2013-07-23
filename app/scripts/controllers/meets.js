'use strict';

angular.module('swimmateApp')
	.controller('MeetsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'meets', $scope, 'meets')
			.then(function(teams) {
				editMeets($scope);
			});
		angularFire(fbURL+'teams', $scope, 'teams');

		$scope.pred = 'date';
	});

function editMeets($scope) {
	$scope.add = function () {
		if (!$scope.newMeet) {
			return;
		}
		$scope.meets.push($scope.newMeet);
		$scope.newMeet = null;
	};

	$scope.remove = function (meet) {
		console.log($scope.meets.indexOf(meet));
		$scope.meets.splice($scope.meets.indexOf(meet), 1);
	};
}