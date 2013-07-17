'use strict';

swimmateApp.controller('TeamsCtrl', ['$scope', 'fbURL', 'angularFire',
		function TeamsCtrl($scope, fbURL, angularFire) {
			$scope.teams = angularFire(fbURL+'teams', $scope, 'teams');
		}
	]);
