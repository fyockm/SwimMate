'use strict';

angular.module('swimmateApp')
	.controller('TeamsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'teams', $scope, 'items')
			.then(function(items) {
				startWatch($scope);
			});
	});
