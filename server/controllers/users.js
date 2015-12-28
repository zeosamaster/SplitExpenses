'use strict';

var errorHandler = require("./error");
var http = require("./http");
var User = require("../models/user");
var debug = require("../config").debug;

function usersCtrl(db) {

	function queryUsers(callback) {
		User.find().exec(function (err, items) {
			if (err) throw err;
			callback(err, items);
		});
	}

	function sendUsers(req, res) {
		queryUsers(function (err, items) {
			http.sendJson(res, items);
		});
	}

	return {
		list: function (req, res) {
			debug && console.log("Get user list");
			sendUsers(req, res);
		},

		get: function (req, res) {
			debug && console.log("Get user", req.body.username);
			// TO DO
		},

		create: function (req, res) {
			debug && console.log("Create user");
			debug && console.log(req.body);

			User.create({
				username: req.body.username,
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			}, function (err, result) {
				if (err) {
					debug && console.error(err);
					errorHandler.errorMessage(res, err);
					return;
				} else {
					debug && console.log("User created successfully");
					sendUsers(req, res);
				}
			});
		},

		edit: function (req, res) {
			debug && console.log("Edit user", req.body.username);
			// TO DO
		},

		delete: function (req, res) {
			debug && console.log("Delete user", req.body.username);

			User.remove({
				username: req.body.username
			}, function(err) {
				if (err) {
					debug && console.error(err);
					errorHandler.errorMessage(res, err);
					return;
				} else {{
					debug && console.log("User deleted successfully");
					sendUsers(req, res);
				}
			});
		}
	}
}

module.exports = usersCtrl;
