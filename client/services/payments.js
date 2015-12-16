'use strict';

angular.module('ngSplitExpenses.paymentsServices', [])

.service('paymentsServices', ['$rootScope', '$http', function ($rootScope, $http) {
	this.controller = '/payments';

	this.getList = function(callback) {
		serverServices.getList(this.controller, callback);
	}
}]);
