'use strict';

angular.module('ngSplitExpenses.user', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users', {
			templateUrl: 'views/user/list.html',
			controller: 'userCtrl'
		})
		.when('/user/create', {
			templateUrl: 'views/user/create.html',
			controller: 'userCtrl'
		})
		.when('/user/:userId', {
			templateUrl: 'views/user/details.html',
			controller: 'userCtrl'
		})
		.when('/user/edit/:userId', {
			templateUrl: 'views/user/edit.html',
			controller: 'userCtrl'
		});
}])

.controller('userCtrl', ['$scope', function ($scope) {
	console.log("userCtrl");
	$scope.users = dummy_users;

	$scope.create = function(user){
		console.log(user);
	}

	$scope.edit = function(user){
		console.log(user);
	}

	$scope.getUserImage = function(user){
		return user.image || "img/default_user_icon.png";
	}
}]);
