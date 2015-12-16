'use strict';

var errorHandler = require("./error");
var http = require("./http");

function usersCtrl(db) {
	var users = db.collection("users");

	function queryUsers(callback) {
		users.find().toArray(function (err, items) {
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
			var users = ["get"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		},

		create: function (req, res) {
			console.log(req.body);

			db.find({
				_id: req.body.username
			}, {
				_id: 1
			}).limit(1).toArray(function (err, items) {
				if (err) throw err;
				if (items.length) {

				} else {
					req.body._id = req.body.username;
					users.insert(req.body, function (err, result) {
						if (err) throw err;
						sendUsers(req, res);
					});
				}
			});
		},

		edit: function (req, res) {
			var users = ["edit"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		}
	}
}

module.exports = usersCtrl;
