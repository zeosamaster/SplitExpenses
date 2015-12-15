'use strict';

module.exports = function (app, db) {
	var groups = require('../controllers/groups')(db);

	app.route('/api/groups').get(groups.list);
	app.route('/api/groups/:id').get(groups.get);
	app.route('/api/groups/create').post(groups.create);
	app.route('/api/groups/edit/:id').post(groups.edit);
}
