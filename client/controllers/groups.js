/*global angular*/
/*jslint nomen: true*/

(function () {
	'use strict';

	angular
		.module('ngSplitExpenses.groups', ['ngRoute'])
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
				.when('/groups/remove/:group_id', {
					templateUrl: 'views/groups/remove.html',
					controller: 'groupsCtrl'
				});
		}])

		.controller('groupsCtrl', ['$scope', '$location', '$routeParams', 'serverServices', 'groupsServices', function ($scope, $location, $routeParams, serverServices, groupsServices) {
			$scope.group = {};
			$scope.groups = [];

			$scope.users = [];
			$scope.selected_users = [];

			$scope.group_id = $routeParams.group_id;

			/* load */

			function getGroupsList() {
				groupsServices.getList(function (groups) {
					$scope.groups = groups.sort(function (a, b) {
						return a.name.toLowerCase() > b.name.toLowerCase();
					});
				});
			}

			if ($scope.group_id) {
				groupsServices.getGroup($scope.group_id, function (group) {
					$scope.group = group;
				});
			} else {
				getGroupsList();
			}

			/* crud */

			$scope.create = function (group) {
				serverServices.post('/groups/create', group, function (data) {
					$location.path("groups");
				});
			};

			$scope.remove = function (group_id) {
				serverServices.post('/groups/remove/' + group_id, {
					_id: group_id
				}, function (data) {
					getGroupsList();
				});
			};

			$scope.edit = function () {
				var edit_group = {
					_id: $scope.group._id,
					name: $scope.group.name
				};
				serverServices.post('/groups/edit/' + edit_group._id, edit_group, function (data) {
					$location.path("groups");
				});
			};

			/* utils */

			$scope.getGroupImage = function (group) {
				return groupsServices.getGroupImage(group);
			};
		}]);
}());
