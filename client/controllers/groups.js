'use strict';

angular.module('ngSplitExpenses.groups', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/groups', {
			templateUrl: 'views/groups/list.html',
			controller: 'groupsCtrl'
		})
		.when('/groups/create', {
			templateUrl: 'views/groups/create.html',
			controller: 'groupsCtrl'
		})
		.when('/groups/:groupId', {
			templateUrl: 'views/groups/details.html',
			controller: 'groupsCtrl'
		})
		.when('/groups/edit/:groupId', {
			templateUrl: 'views/groups/edit.html',
			controller: 'groupsCtrl'
		});
}])

.controller('groupsCtrl', ['$rootScope', '$scope', '$http', 'groupsServices', function ($rootScope, $scope, $http, groupsServices) {

	$scope.selectedUsers = {};

	$scope.groups = [];
	$scope.loadGroups = function(){
		$http.get($rootScope.baseUrl + '/groups', function(data){
			debugger;
			$scope.groups = data;
		});
	}
	$scope.loadGroups();

	$scope.create = function (group) {
		group.members = [];
		for (var user in $scope.selectedUsers) {
			if ($scope.selectedUsers.hasOwnProperty(user)) {
				group.members.push(user);
			}
		}
		console.log(group);
	}

	$scope.edit = function (group) {
		console.log(group);
	}

	$scope.getUsers = function () {
		return $scope.users;
	}

	$scope.getProfileImage = function(user){
		return usersServices.getProfileImage(user);
	}

	$scope.toggleSelectedUser = function (user) {
		if ($scope.isUserSelected(user)) {
			$scope.selectedUsers[user.id] = false;
		} else {
			$scope.selectedUsers[user.id] = true;
		}
	}

	$scope.isUserSelected = function (user) {
		return !!$scope.selectedUsers[user.id];
	}
}]);
