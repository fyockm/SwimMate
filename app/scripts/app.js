'use strict';

angular.module('swimmateApp', ['firebase'])
	.value('fbURL','https://swimmate.firebaseio.com/')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/teams', {
				templateUrl: 'views/teams.html',
				controller: 'TeamsCtrl'
			})
			.when('/events', {
				templateUrl: 'views/events.html',
				controller: 'EventsCtrl'
			})
			.when('/meets', {
				templateUrl: 'views/meets.html',
				controller: 'MeetsCtrl'
			})
			.when('/roster', {
			  templateUrl: 'views/roster.html',
			  controller: 'RosterCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

function startWatch($scope) {
	$scope.add = function () {
		if (!$scope.newItem) {
			return;
		}
		$scope.items.push($scope.newItem);
		$scope.newItem = null;
	};

	$scope.remove = function (item) {
		console.log($scope.items.indexOf(item));
		$scope.items.splice($scope.items.indexOf(item), 1);
	};
}