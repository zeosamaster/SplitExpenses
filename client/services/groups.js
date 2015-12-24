'use strict';

angular.module('ngSplitExpenses.groupsServices', [])

.service('expensesServices', ['serverServices', function (serverServices) {
	this.controller = '/groups';
}]);
