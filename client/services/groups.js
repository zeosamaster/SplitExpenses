'use strict';

angular.module('ngSplitExpenses.groupsServices', [])

.service('groupsServices', ['$rootScope', '$http', function ($rootScope, $http) {
	this.controller = '/groups';

	this.getList = function(callback) {
		serverServices.getList(this.controller, callback);
	}
}]);
