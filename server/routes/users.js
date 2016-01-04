'use strict';

module.exports = function (app, db) {
	var users = require('../controllers/users')(db);

	app.route('/api/users').get(users.list);
	app.route('/api/users/create').post(users.create);
	app.route('/api/users/edit/:username').post(users.edit);
	app.route('/api/users/delete/:username').post(users.delete);
	app.route('/api/users/:username').get(users.get);
}
