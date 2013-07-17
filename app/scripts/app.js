'use strict';

var swimmateApp = angular.module('swimmateApp', ['firebase']);
swimmateApp
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
			.otherwise({
				redirectTo: '/'
			});
	});
