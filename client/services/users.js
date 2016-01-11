/*global angular*/

(function () {
	'use strict';

	angular
		.module('ngSplitExpenses.usersServices', [])
		.service('usersServices', ['serverServices', function (serverServices) {
			this.controller = '/users';

			this.getList = function (callback) {
				serverServices.getList(this.controller, callback);
			};

			this.getUser = function (username, callback) {
				serverServices.get('/users/' + username, {}, callback);
			};

			this.getProfileImage = function (user) {
				return user.image || "img/default_user_icon.png";
			};
		}]);
}());
