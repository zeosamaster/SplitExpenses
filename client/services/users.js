'use strict';

angular.module('ngSplitExpenses.usersServices', [])

.service('usersServices', ['$rootScope', '$http', 'serverServices', function ($rootScope, $http, serverServices) {
	this.controller = '/users';

	this.getList = function(callback) {
		serverServices.getList(this.controller, callback);
	}

	this.getProfileImage = function(user){
		return user.image || "img/default_user_icon.png";
	}
}]);
