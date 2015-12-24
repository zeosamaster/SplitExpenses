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
		.when('/users/:userId', {
			templateUrl: 'views/users/details.html',
			controller: 'usersCtrl'
		})
		.when('/users/edit/:userId', {
			templateUrl: 'views/users/edit.html',
			controller: 'usersCtrl'
		});
}])

.controller('usersCtrl', ['$rootScope', '$scope', '$location', 'serverServices', 'usersServices', function ($rootScope, $scope, $location, serverServices, usersServices) {
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

	$scope.edit = function (user) {
		console.log(user);
	}

	$scope.getProfileImage = function (user) {
		return usersServices.getProfileImage(user);
	}

}]);
