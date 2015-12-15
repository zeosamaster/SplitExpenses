'use strict';

module.exports = function (app, db) {
	var users = require('../controllers/users')(db);

	app.route('/api/users').get(users.list);
	app.route('/api/users/create').post(users.create);
	app.route('/api/users/edit/:id').post(users.edit);
	app.route('/api/users/:id').get(users.get);
}
