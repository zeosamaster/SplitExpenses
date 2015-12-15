'use strict';

/**
 * Module dependencies.
 */
var config = require('./config'),
	express = require('express'),
	app = express(),
	cons = require('consolidate'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	MongoClient = require('mongodb').MongoClient,
	routes = require('./routes'),
	models = require('./models');

MongoClient.connect(config.db_url, function (err, db) {
	"use strict";
    if(err) throw err;

	console.log("Connected to db: ", config.db_url);

    // Register templating engine
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    // Express middleware to populate 'req.cookies' to access cookies
    app.use(cookieParser());

    // Express middleware to populate 'req.body' to access POST variables
    app.use(bodyParser.urlencoded({ extended: true }));

	app.use(bodyParser.json());

    // Application routes
    routes(app, db);

    // Create model Schemas
	models();

    // Start app
    app.listen(config.port);
    console.log('Server listening on port ', config.port);
});
