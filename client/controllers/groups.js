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
		.when('/groups/:group_id', {
			templateUrl: 'views/groups/details.html',
			controller: 'groupsCtrl'
		})
		.when('/groups/edit/:group_id', {
			templateUrl: 'views/groups/edit.html',
			controller: 'groupsCtrl'
		})
		.when('/groups/delete/:group_id', {
			templateUrl: 'views/groups/delete.html',
			controller: 'groupsCtrl'
		});
}])

.controller('groupsCtrl', ['$scope', '$location', '$routeParams', 'serverServices', 'groupsServices', function ($scope, $location, $routeParams, serverServices, groupsServices) {
	$scope.group = {};
	$scope.groups = [];
	$scope.group_id = $routeParams.group_id;

	if ($scope.group_id) {
		groupsServices.getGroup($scope.group_id, function (group) {
			$scope.group = group;
		});
	} else {
		groupsServices.getList(function (groups) {
			$scope.groups = groups.sort(function (a, b) {
				return a.name.toLowerCase() > b.name.toLowerCase();
			});
		});
	}

	$scope.create = function (group) {
		serverServices.post('/groups/create', group, function (data) {
			$location.path("groups");
		});
	}

	$scope.delete = function () {
		serverServices.post('/groups/delete/' + $scope.group._id, {
			_id: $scope.group._id
		}, function (data) {
			$location.path("groups");
		});
	}

	$scope.edit = function () {
		var edit_group = {
			_id: $scope.group._id,
			name: $scope.group.name
		}
		serverServices.post('/groups/edit/' + edit_group._id, edit_group, function (data) {
			$location.path("groups");
		});
	}

	$scope.getGroupImage = function (group) {
		return groupsServices.getGroupImage(group);
	}
}]);
