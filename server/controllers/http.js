'use strict';

var http = {
	sendSuccess: function (res, msg) {
		res.locals.success = res.locals.success || [];
		res.locals.success.push(msg);
	},
	sendError: function (res, msg) {
		console.log("#", msg);
		res.locals.error = res.locals.error || [];
		res.locals.error.push(msg);
	},
	sendJson: function (res, json) {
		res.locals.success && json.success = res.locals.success;
		res.locals.error && json.error = res.locals.error;
		res.json(json);
	}
};

module.exports = http;
