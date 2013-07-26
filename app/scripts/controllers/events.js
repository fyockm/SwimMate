'use strict';

angular.module('swimmateApp')
	.controller('EventsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'events', $scope, 'events')
			.then(function() {
				editEvents($scope);
			});
		$scope.pred = 'id';
	});

function editEvents($scope) {
	$scope.newEvent = defaultFromLast($scope.events);

	$scope.add = function () {
		if (!$scope.newEvent.name) {
			return;
		}
		$scope.events.push($scope.newEvent);
		$scope.newEvent = defaultFromLast($scope.events);
	};

	$scope.remove = function (event) {
		$scope.events.splice($scope.events.indexOf(event), 1);
		$scope.newEvent = defaultFromLast($scope.events);
	};

	function defaultFromLast(events) {
		if (!events.length) {
			return {
				id: 1
			};
		}
		else {
			return {
				id: parseInt(events[events.length-1].id,10) + 1
			};
		}
	}
}
