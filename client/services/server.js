/*global angular, alertify*/

(function () {
	'use strict';

	angular.module('ngSplitExpenses.serverServices', []);
	angular.service('serverServices', ['$http', function ($http) {
		var baseUrl = "http://localhost:5555/api";

		function serverCallback(res, callback) {
			if (res.headers("Error")) {
				alertify.error(res.headers("Error"));
			} else {
				if (res.headers("Success")) {
					alertify.success(res.headers("Success"));
				}
				if (typeof callback === "function") {
					callback(res.data);
				}
			}
		}

		this.get = function (url, data, callback) {
			$http.get(baseUrl + url, data).then(function (res) {
				serverCallback(res, callback);
			});
		};

		this.post = function (url, data, callback) {
			$http.post(baseUrl + url, data).then(function (res) {
				serverCallback(res, callback);
			});
		};

		this.getList = function (controller, callback) {
			this.get(controller, {}, callback);
		};
	}]);
}());
