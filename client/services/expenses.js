'use strict';

angular.module('ngSplitExpenses.expensesServices', [])

.service('expensesServices', ['$rootScope', '$http', function ($rootScope, $http) {
	this.controller = '/expenses';

	this.getList = function(callback) {
		serverServices.getList(this.controller, callback);
	}
}]);
