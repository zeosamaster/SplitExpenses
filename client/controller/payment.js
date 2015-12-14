'use strict';

angular.module('ngSplitExpenses.payment', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/payments', {
			templateUrl: 'views/payment/list.html',
			controller: 'paymentCtrl'
		})
		.when('/payment/create', {
			templateUrl: 'views/payment/create.html',
			controller: 'paymentCtrl'
		})
		.when('/payment/:paymentId', {
			templateUrl: 'views/payment/details.html',
			controller: 'paymentCtrl'
		})
		.when('/payment/edit/:paymentId', {
			templateUrl: 'views/payment/edit.html',
			controller: 'paymentCtrl'
		});
}])

.controller('paymentCtrl', ['$scope', function ($scope) {
	console.log("paymentCtrl");
}]);
