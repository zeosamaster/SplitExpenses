'use strict';

angular.module('ngSplitExpenses.expense', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/expenses', {
			templateUrl: 'views/expense/list.html',
			controller: 'expenseCtrl'
		})
		.when('/expense/create', {
			templateUrl: 'views/expense/create.html',
			controller: 'expenseCtrl'
		})
		.when('/expense/:expenseId', {
			templateUrl: 'views/expense/details.html',
			controller: 'expenseCtrl'
		})
		.when('/expense/edit/:expenseId', {
			templateUrl: 'views/expense/edit.html',
			controller: 'expenseCtrl'
		});
}])

.controller('expenseCtrl', ['$scope', function ($scope) {
	console.log("expenseCtrl");
	$scope.users = dummy_users;
	$scope.payers = {};
	$scope.owers = {};

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
		return dummy_users;
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
