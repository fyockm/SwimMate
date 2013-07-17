'use strict';

angular.module('swimmateApp')
	.controller('EventsCtrl', function ($scope, fbURL, angularFire) {
		$scope.events = angularFire(fbURL+'events', $scope, 'events');
	});