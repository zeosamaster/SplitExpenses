'use strict';

// Declare app level module which depends on views, and components
angular.module('ngSplitExpenses', [
	'ngRoute',
	'ngSplitExpenses.users',
	'ngSplitExpenses.groups',
	'ngSplitExpenses.expenses',
	'ngSplitExpenses.payments',
	'ngSplitExpenses.serverServices',
	'ngSplitExpenses.groupsServices',
	'ngSplitExpenses.usersServices',
	'ngSplitExpenses.expensesServices',
	'ngSplitExpenses.paymentsServices'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/index'
		});
}]);
