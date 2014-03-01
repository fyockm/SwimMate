'use strict';

angular.module('swimmateApp', [
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
      .when('/admin/import', {
        templateUrl: 'views/admin/import.html',
        controller: 'ImportCtrl'
      })
      .when('/admin/export', {
        templateUrl: 'views/admin/export.html',
        controller: 'ExportCtrl'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/times', {
        templateUrl: 'views/times.html',
        controller: 'TimesCtrl'
      })
      .when('/report/cards', {
        templateUrl: 'views/report/cards.html',
        controller: 'ReportCardsCtrl'
      })
      .when('/report/roster', {
        templateUrl: 'views/report/roster.html',
        controller: 'ReportRosterCtrl'
      })
      .when('/report/score-sheets', {
        templateUrl: 'views/report/score-sheets.html',
        controller: 'ReportScoreSheetsCtrl'
      })
      .when('/report/most-improved', {
        templateUrl: 'views/report/most-improved.html',
        controller: 'ReportMostImprovedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
