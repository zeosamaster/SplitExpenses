'use strict';

var config = {
	port: 5555,
	env: 'dev',

	db_host: 'localhost',
	db_port: '27017',
	db_collection: 'SplitExpenses'
};

config.db_url = 'mongodb://' + config.db_host + ':' + config.db_port + '/' + config.db_collection;

module.exports = config;
