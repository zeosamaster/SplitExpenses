'use strict';

angular.module('ngSplitExpenses.expenses', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/expenses', {
			templateUrl: 'views/expenses/list.html',
			controller: 'expensesCtrl'
		})
		.when('/expenses/create', {
			templateUrl: 'views/expenses/create.html',
			controller: 'expensesCtrl'
		})
		.when('/expenses/:expenseId', {
			templateUrl: 'views/expenses/details.html',
			controller: 'expensesCtrl'
		})
		.when('/expenses/edit/:expenseId', {
			templateUrl: 'views/expenses/edit.html',
			controller: 'expensesCtrl'
		});
}])

.controller('expensesCtrl', ['$scope', 'expensesService', 'usersService', 'groupsService', function ($scope, expensesService) {

	$scope.payers = {};
	$scope.owers = {};

	$scope.users = [];
	usersServices.getUsers(function(users){
		$scope.users = users;
	});

	$scope.groups = [];
	groupsServices.getGroups(function(groups){
		$scope.groups = groups;
	});

	$scope.create = function (expense) {
		expense.payers = [];
		for (var user in $scope.payers) {
			if ($scope.payers.hasOwnProperty(user)) {
				expense.payers.push(user);
			}
		}

		expense.owers = [];
		for (var user in $scope.owers) {
			if ($scope.owers.hasOwnProperty(user)) {
				expense.owers.push(user);
			}
		}

		console.log(expense);
	}

	$scope.edit = function (user) {
		console.log(user);
	}

	$scope.getUsers = function () {
		return $scope.users;
	}

	$scope.getProfileImage = function(user){
		return usersServices.getProfileImage(user);
	}

	$scope.toggleSelectedPayer = function (user) {
		if ($scope.isPayerSelected(user)) {
			$scope.payers[user.id] = false;
		} else {
			$scope.payers[user.id] = true;
		}
	}

	$scope.isPayerSelected = function (user) {
		return !!$scope.payers[user.id];
	}

	$scope.toggleSelectedOwer = function (user) {
		if ($scope.isOwerSelected(user)) {
			$scope.owers[user.id] = false;
		} else {
			$scope.owers[user.id] = true;
		}
	}

	$scope.isOwerSelected = function (user) {
		return !!$scope.owers[user.id];
	}
}]);
