'use strict';

angular.module('ngSplitExpenses.serverServices', [])

.service('serverServices', ['$rootScope', '$http', function ($rootScope, $http) {
	this.getList = function(controller, callback){
		$http.get($rootScope.baseUrl + controller).then(function(res){
			if(typeof callback === "function") callback(res.data);
		});
	}
}]);
