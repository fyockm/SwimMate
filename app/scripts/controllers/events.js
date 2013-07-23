'use strict';

angular.module('swimmateApp')
	.controller('EventsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'events', $scope, 'events')
			.then(function(events) {
				editEvents($scope);
			});
		$scope.pred = 'id';
	});

function editEvents($scope) {
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