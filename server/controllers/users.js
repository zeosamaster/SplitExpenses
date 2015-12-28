'use strict';

var errorHandler = require("./error");
var http = require("./http");
var User = require("../models/user");

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
			sendUsers(req, res);
		},

		get: function (req, res) {
			// TO DO
		},

		create: function (req, res) {
			console.log(req.body);
			new User({
				username: req.body.username,
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			}).save(function (err, result) {
				if (err) {
					errorHandler.errorMessage(res, err);
					return;
				} else {
					sendUsers(req, res);
				}
			});
		},

		edit: function (req, res) {
			// TO DO
		},

		delete: function (req, res) {
			User.remove({
				username: req.body.username
			});
		}
	}
}

module.exports = usersCtrl;
