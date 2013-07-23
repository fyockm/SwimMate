'use strict';

/**
 * Directive that places focus on the element it is applied to
 * when the expression it binds to evaluates to true
 */
angular.module('swimmateApp')
	.directive('teamFocus', function teamFocus($timeout) {
		return function (scope, elem, attrs) {
			scope.$watch(attrs.focus, function (newVal) {
				if (newVal) {
					$timeout(function () {
						elem[0].focus();
					}, 0, false);
				}
			});
		};
	});