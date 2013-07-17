'use strict';

swimmateApp.controller('EventsCtrl', ['$scope', 'fbURL', 'angularFire',
		function EventsCtrl($scope, fbURL, angularFire) {
			$scope.events = angularFire(fbURL+'events', $scope, 'events');
		}
	]);