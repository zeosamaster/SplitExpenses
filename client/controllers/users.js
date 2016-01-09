/*global angular, alertify*/

(function () {
	'use strict';

	angular
		.module('ngSplitExpenses.users', ['ngRoute'])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/users', {
					templateUrl: 'views/users/list.html',
					controller: 'usersCtrl'
				})
				.when('/users/create', {
					templateUrl: 'views/users/create.html',
					controller: 'usersCtrl'
				})
				.when('/users/:username', {
					templateUrl: 'views/users/details.html',
					controller: 'usersCtrl'
				})
				.when('/users/edit/:username', {
					templateUrl: 'views/users/edit.html',
					controller: 'usersCtrl'
				})
				.when('/users/remove/:username', {
					templateUrl: 'views/users/remove.html',
					controller: 'usersCtrl'
				});
		}])
		.controller('usersCtrl', ['$scope', '$location', '$routeParams', 'serverServices', 'usersServices', function ($scope, $location, $routeParams, serverServices, usersServices) {
			$scope.user = {};
			$scope.users = [];
			$scope.username = $routeParams.username;

			/* load */

			function getUsersList() {
				usersServices.getList(function (users) {
					$scope.users = users.sort(function (a, b) {
						if (a.name.toLowerCase() < b.name.toLowerCase()) {
							return -1;
						}
						if (a.name.toLowerCase() > b.name.toLowerCase()) {
							return 1;
						}
						return 0;
					});
				});
			}

			if ($scope.username) {
				usersServices.getUser($scope.username, function (user) {
					$scope.user = user;
				});
			} else {
				getUsersList();
			}

			/* crud */

			$scope.create = function (user) {
				serverServices.post('/users/create', user, function (data) {
					$location.path("users");
				});
			};

			$scope.remove = function (username) {
				serverServices.post('/users/remove/' + username, {
					username: username
				}, function (data) {
					getUsersList();
				});
			};

			$scope.edit = function () {
				var edit_user = {
					username: $scope.user.username,
					name: $scope.user.name,
					password: $scope.user.edit_password,
					email: $scope.user.edit_email
				};
				serverServices.post('/users/edit/' + edit_user.username, edit_user, function (data) {
					$location.path("users");
				});
			};

			/* utils */

			$scope.getProfileImage = function (username) {
				return usersServices.getProfileImage(username);
			};
		}]);
}());
