'use strict';

angular.module('swimMateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'ui.bootstrap'
])
  .value('fbURL', 'https://swimmate.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/admin/events', {
        templateUrl: 'views/admin/events.html',
        controller: 'EventsCtrl'
      })
      .when('/admin/meets', {
        templateUrl: 'views/admin/meets.html',
        controller: 'MeetsCtrl'
      })
      .when('/admin/teams', {
        templateUrl: 'views/admin/teams.html',
        controller: 'TeamsCtrl'
      })
      .when('/admin/athletes', {
        templateUrl: 'views/admin/athletes.html',
        controller: 'AthletesCtrl'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/times', {
        templateUrl: 'views/times.html',
        controller: 'TimesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });