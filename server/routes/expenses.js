'use strict';

module.exports = function (app, db) {
	var expenses = require('../controllers/expenses')(db);

	app.route('/api/expenses').get(expenses.list);
	app.route('/api/expenses/create').post(expenses.create);
	app.route('/api/expenses/edit/:id').post(expenses.edit);
	app.route('/api/expenses/:id').get(expenses.get);
}
