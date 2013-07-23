'use strict';

angular.module('swimmateApp')
	.controller('MeetsCtrl', function ($scope, fbURL, angularFire) {
		angularFire(fbURL+'meets', $scope, 'items')
			.then(function(items) {
				startWatch($scope);
			});
	});
