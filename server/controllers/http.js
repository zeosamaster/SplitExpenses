'use strict';

function setArrayHeader(res, key, value) {
	var values = res.get(key) || [];
	values.push(value);
	res.append(key, values);
}

var http = {
	sendSuccess: function (res, msg) {
		setArrayHeader(res, 'success', msg);
	},
	sendError: function (res, msg) {
		console.log("#", msg);
		setArrayHeader(res, 'error', msg);
	},
	sendJson: function (res, json) {
		res.json(json);
	}
};

module.exports = http;
