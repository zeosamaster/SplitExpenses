'use strict';

angular.module('ngSplitExpenses.users', ['ngRoute'])

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
		.when('/users/delete/:username', {
			templateUrl: 'views/users/delete.html',
			controller: 'usersCtrl'
		});
}])

.controller('usersCtrl', ['$scope', '$location', '$routeParams', 'serverServices', 'usersServices', function ($scope, $location, $routeParams, serverServices, usersServices) {
	console.log("usersCtrl");

	$scope.users = [];
	usersServices.getList(function (users) {
		$scope.users = users;
	});

	$scope.create = function (user) {
		serverServices.post('/users/create', user, function (data) {
			$scope.users = data;
			$location.path("users");
		});
	}

	$scope.delete = function () {
		serverServices.post('/users/delete', {username: $routeParams.username}, function (data) {
			$scope.users = data;
			$location.path("users");
		});
	}

	$scope.edit = function (user) {
		console.log(user);
	}

	$scope.getProfileImage = function (username) {
		return usersServices.getProfileImage(username);
	}

}]);
