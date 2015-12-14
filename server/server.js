'use strict';

/**
 * Module dependencies.
 */
var config = require('./config');
var app = require('./app');

var server = app.listen(config.port, function () {
	var port = server.address().port;
	console.log('Server running on port: ', port);
});
