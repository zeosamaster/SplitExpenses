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

.controller('groupsCtrl', ['$scope', 'groupsServices', function ($scope, groupsServices) {

	$scope.selectedUsers = {};

	$scope.groups = [];
	groupsServices.getGroups(function(groups){
		$scope.groups = groups;
	});

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

	$scope.delete = function (group) {
		console.log(group);
	}
}]);
