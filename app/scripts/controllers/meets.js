'use strict';

angular.module('swimmateApp')
	.controller('MeetsCtrl', function ($scope, fbURL, angularFire) {
		$scope.meets = angularFire(fbURL+'meets', $scope, 'meets');
	});
