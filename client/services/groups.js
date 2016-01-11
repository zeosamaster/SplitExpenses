/*global angular*/

(function () {
	'use strict';

	angular
		.module('ngSplitExpenses.groupsServices', [])
		.service('groupsServices', ['serverServices', function (serverServices) {
			this.controller = '/groups';

			this.getList = function (callback) {
				serverServices.getList(this.controller, callback);
			};

			this.getGroup = function (group_id, callback) {
				serverServices.get('/groups/' + group_id, {}, callback);
			};

			this.getGroupImage = function (group) {
				return group.image || "img/default_group_icon.png";
			};
		}]);
}());
