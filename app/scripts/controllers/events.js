'use strict';

angular.module('swimmateApp')
	.controller('EventsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'events', $scope, 'items')
			.then(function(items) {
				startWatch($scope);
			});
	});