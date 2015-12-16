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

.controller('usersCtrl', ['$rootScope', '$scope', '$http', 'usersServices', function ($rootScope, $scope, $http, usersServices) {
	console.log("usersCtrl");

	$scope.users = [];
	usersServices.getList(function(users){
		$scope.users = users;
	});

	$scope.create = function(user){
		$http.post($rootScope.baseUrl + '/users/create', user).then(function(res){
			$scope.users = res.data;
		});
	}

	$scope.edit = function(user){
		console.log(user);
	}

	$scope.getProfileImage = function(user){
		return usersServices.getProfileImage(user);
	}

}]);
