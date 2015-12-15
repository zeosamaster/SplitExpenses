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

.controller('usersCtrl', ['$rootScope', '$scope', '$http', 'usersService', function ($rootScope, $scope, $http, usersService) {
	console.log("usersCtrl");

	$scope.users = [];
	$usersService.loadUsers($scope.users);

	$scope.create = function(user){
		$http.post($rootScope.baseUrl + '/users/create', user).then(function(res){
			$scope.users = res.data;
		});
	}

	$scope.edit = function(user){
		console.log(user);
	}

	$scope.getUserImage = function(user){
		return user.image || "img/default_user_icon.png";
	}
}]);
