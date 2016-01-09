/*global angular*/

(function () {
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('ngSplitExpenses', [
			'ngRoute',
			'ngSplitExpenses.users',
			'ngSplitExpenses.groups',
			'ngSplitExpenses.serverServices',
			'ngSplitExpenses.groupsServices',
			'ngSplitExpenses.usersServices'
		])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.otherwise({
				redirectTo: '/index'
			});
		}]);
}());
