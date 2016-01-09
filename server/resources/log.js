/*global module, require, console*/
(function () {
	'use strict';

	var debug = require('../config').debug;

	module.exports = function () {
		if (debug) {
			console.log.apply(null, arguments);
		}
	};
}());
