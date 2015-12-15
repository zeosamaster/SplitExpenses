'use strict';

module.exports = function (app, db) {
	var payments = require('../controllers/payments')(db);

	app.route('/api/payments').get(payments.list);
	app.route('/api/payments/create').post(payments.create);
	app.route('/api/payments/edit/:id').post(payments.edit);
	app.route('/api/payments/:id').get(payments.get);
}
