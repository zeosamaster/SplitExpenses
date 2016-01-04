'use strict';

var debug = require("../config").debug;

function setArrayHeader(res, key, value) {
	var values = res.get(key) || [];
	values.push(value);
	res.append(key, values);
}

var http = {
	sendSuccess: function (res, msg) {
		debug && console.log(msg);
		setArrayHeader(res, 'Success', msg);
		res.end();
	},
	sendError: function (res, err) {
		debug && console.error(err.message);
		setArrayHeader(res, 'Error', err.message);
		res.end();
	},
	sendJson: function (res, json) {
		res.json(json);
	}
};

module.exports = http;
