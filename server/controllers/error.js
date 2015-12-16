'use strict';

var http = require("./http");

var error = {
	errorMessage: function (res, error) {
		var json = {
			error: error
		};
		http.sendJson(res, json);
	}
};

module.exports = error;
