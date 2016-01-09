/*global module, require*/
(function () {
	'use strict';

	module.exports = function (app, db) {
		var groups = require('../controllers/groups')(db);

		app.route('/api/groups').get(groups.list);
		app.route('/api/groups/create').post(groups.create);
		app.route('/api/groups/edit/:group_id').post(groups.edit);
		app.route('/api/groups/remove/:group_id').post(groups.remove);
		app.route('/api/groups/:group_id').get(groups.get);
	};

}());
