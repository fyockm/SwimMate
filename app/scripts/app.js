'use strict';

angular.module('swimMateApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'firebase'
	// 'ui.bootstrap'
])
	.value('fbURL', 'https://swimmate.firebaseio.com/')
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/events', {
				templateUrl: 'views/events.html',
				controller: 'EventsCtrl'
			})
			.when('/meets', {
				templateUrl: 'views/meets.html',
				controller: 'MeetsCtrl'
			})
			.when('/teams', {
				templateUrl: 'views/teams.html',
				controller: 'TeamsCtrl'
			})
			.when('/athletes', {
				templateUrl: 'views/athletes.html',
				controller: 'AthletesCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
