'use strict';

angular.module('ngSplitExpenses.payments', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/payments', {
			templateUrl: 'views/payments/list.html',
			controller: 'paymentsCtrl'
		})
		.when('/payments/create', {
			templateUrl: 'views/payments/create.html',
			controller: 'paymentsCtrl'
		})
		.when('/payments/:paymentId', {
			templateUrl: 'views/payments/details.html',
			controller: 'paymentsCtrl'
		})
		.when('/payments/edit/:paymentId', {
			templateUrl: 'views/payments/edit.html',
			controller: 'paymentsCtrl'
		});
}])

.controller('paymentsCtrl', ['$rootScope', '$scope', '$http', 'paymentsServices', function ($rootScope, $scope, $http, paymentsServices) {
	console.log("paymentsCtrl");
}]);
