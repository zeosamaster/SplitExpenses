/*global module, require*/

(function () {
	'use strict';

	var log = require('../resources/log'),
		http;

	function setArrayHeader(res, key, value) {
		var values = res.get(key) || [];
		values.push(value);
		res.append(key, values);
	}

	http = {
		sendSuccess: function (res, msg) {
			log(msg);
			setArrayHeader(res, 'Success', msg);
			res.end();
		},
		sendError: function (res, err) {
			log(err.message);
			setArrayHeader(res, 'Error', err.message);
			res.end();
		},
		sendJson: function (res, json) {
			res.json(json);
		}
	};

	module.exports = http;

}());
