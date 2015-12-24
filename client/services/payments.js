'use strict';

angular.module('ngSplitExpenses.paymentsServices', [])

.service('expensesServices', ['serverServices', function (serverServices) {
	this.controller = '/payments';
}]);
