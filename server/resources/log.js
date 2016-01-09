/*global module, require, console*/
(function () {
	'use strict';

	var debug = require('../config').debug;

	module.exports = function (text) {
		if (debug) {
			console.log(text);
		}
	};
}());
