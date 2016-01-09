/*jslint nomen:true*/
/*global module, require, __dirname*/
(function () {
	'use strict';

	var log = require('../resources/log');

	module.exports.errorHandler = function (err, req, res, next) {
		log(err.message);
		log(err.stack);
		res.status(500);
		res.render('error', {
			root: __dirname,
			error: err
		});
	};

}());
