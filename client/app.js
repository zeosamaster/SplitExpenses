'use strict';

// Declare app level module which depends on views, and components
angular.module('ngSplitExpenses', [
	'ngRoute',
	'ngSplitExpenses.user',
	'ngSplitExpenses.expense',
	'ngSplitExpenses.payment',
	'ngSplitExpenses.group'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/index'
		});
}]);
