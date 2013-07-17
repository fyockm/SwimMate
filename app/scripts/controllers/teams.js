'use strict';

angular.module('swimmateApp')
	.controller('TeamsCtrl', function ($scope, fbURL, angularFire) {
		$scope.teams = angularFire(fbURL+'teams', $scope, 'teams');
	});