'use strict';

angular.module('ngSplitExpenses.serverServices', [])

.service('serverServices', ['$rootScope', '$http', function ($rootScope, $http) {
	function serverCallback(res, callback) {
		if (res.data && res.data.error) {
			alertify.error(res.data.error);
		} else {
			if (typeof callback === "function") callback(res.data);
		}
	}

	this.get = function (url, data, callback) {
		$http.get($rootScope.baseUrl + url, data).then(function (res) {
			serverCallback(res, callback);
		});
	};

	this.post = function (url, data, callback) {
		$http.post($rootScope.baseUrl + url, data).then(function (res) {
			serverCallback(res, callback);
		});
	};

	this.getList = function (controller, callback) {
		this.get(controller, {}, callback);
	};
}]);
