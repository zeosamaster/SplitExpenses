/*global module, require*/
(function () {
	'use strict';

	var userHandler = require('./users'),
		groupHandler = require('./groups'),
		errorHandler = require('./error').errorHandler,
		log = require('../resources/log');

	module.exports = function (app, db) {
		app.all('*', function (req, res, next) {

			log("Received request for:", req.url);

			res.header("Access-Control-Allow-Origin", "*");
			res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
			res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
			res.header("Access-Control-Expose-Headers", "Success, Error");
			if ('OPTIONS' === req.method) {
				return res.sendStatus(200);
			}
			next();
		});

		userHandler(app, db);
		groupHandler(app, db);
	};

}());
