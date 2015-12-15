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

.controller('expensesCtrl', ['$rootScope', '$scope', '$http', 'expensesService', function ($rootScope, $scope, $http, expensesService) {

	$scope.payers = {};
	$scope.owers = {};

	$scope.users = [];
	$usersService.loadUsers($scope.users);

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

	$scope.getUserImage = function (user) {
		return user.image || "img/default_user_icon.png";
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
