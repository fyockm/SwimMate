'use strict';

swimmateApp.controller('MeetsCtrl', ['$scope', 'fbURL', 'angularFire',
		function MeetsCtrl($scope, fbURL, angularFire) {
			$scope.meets = angularFire(fbURL+'meets', $scope, 'meets');
		}
	]);
