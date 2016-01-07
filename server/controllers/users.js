'use strict';

var http = require("./http");
var User = require("../models/user");
var strings = require("../resources/strings");
var debug = require("../config").debug;

function usersCtrl(db) {

	function getUser(res, username, callback) {
		User.findOne({
			username: username
		}, function (err, user) {
			if (!user) {
				http.sendError(res, strings.error.userNotFound);
				return;
			}
			if (err) throw err;
			callback(err, user);
		});
	}

	function getUsers(callback) {
		User.find({}, function (err, users) {
			if (err) throw err;
			callback(err, users);
		});
	}

	function sendUsers(req, res) {
		getUsers(function (err, items) {
			http.sendJson(res, items);
		});
	}

	return {
		list: function (req, res) {
			debug && console.log("Get user list");
			sendUsers(req, res);
		},

		get: function (req, res) {
			debug && console.log("Get user", req.params.username);

			getUser(res, req.params.username, function (err, user) {
				http.sendJson(res, user);
			});
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
					http.sendError(res, err);
					return
				}
				http.sendSuccess(res, strings.success.userCreated);
			});
		},

		edit: function (req, res) {
			debug && console.log("Edit user", req.params.username);
			debug && console.log(req.body);

			var edit_user = req.body;
			getUser(res, req.params.username, function (err, user) {
				user.email = edit_user.email || user.email;
				user.password = edit_user.password || user.password;
				user.name = edit_user.name || user.name;

				user.save(function (err) {
					if (err) throw err;
					http.sendSuccess(res, strings.success.userEdited);
				});
			});
		},

		delete: function (req, res) {
			debug && console.log("Delete user", req.params.username);

			User.findOneAndRemove({
				username: req.params.username
			}, function (err) {
				if (err) {
					http.sendError(res, err);
					return;
				}
				http.sendSuccess(res, strings.success.userDeleted);
			});
		}
	};
}

module.exports = usersCtrl;
