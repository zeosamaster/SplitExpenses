'use strict';

angular.module('ngSplitExpenses.group', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/groups', {
			templateUrl: 'views/group/list.html',
			controller: 'groupCtrl'
		})
		.when('/group/create', {
			templateUrl: 'views/group/create.html',
			controller: 'groupCtrl'
		})
		.when('/group/:groupId', {
			templateUrl: 'views/group/details.html',
			controller: 'groupCtrl'
		})
		.when('/group/edit/:groupId', {
			templateUrl: 'views/group/edit.html',
			controller: 'groupCtrl'
		});
}])

.controller('groupCtrl', ['$scope', function ($scope) {
	console.log("groupCtrl");
	$scope.groups = dummy_groups;
	$scope.selectedUsers = {};

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
		return dummy_users;
	}

	$scope.getUserImage = function (user) {
		return user.image || "img/default_user_icon.png";
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
