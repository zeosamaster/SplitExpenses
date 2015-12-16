'use strict';

var http = {
	sendJson: function (res, json) {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(json));
	}
};

module.exports = http;
