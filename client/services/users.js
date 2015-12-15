'use strict';

angular.module('ngSplitExpenses.usersServices', [])

.service('usersServices', ['$rootScope', function ($rootScope) {
	this.loadUsers = function(users){
		$http.get($rootScope.baseUrl + '/users').then(function(res){
			users = res.data;
		});
	}
}]);
