'use strict';

angular.module('ngSplitExpenses.expensesServices', [])

.service('expensesServices', ['serverServices', function (serverServices) {
	this.controller = '/expenses';
}]);
