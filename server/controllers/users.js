'use strict';

function usersCtrl(db) {
    "use strict";

	var users = db.collection("users");

	users.queryUsers = function(callback) {
		users.find().toArray(function(err, items) {
			if (err) throw err;
			callback(err, items);
		});
	}

	users.sendUsers = function(req, res) {
		users.queryUsers(function(err, items){
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(items));
		});
	}

	return {
		list: function (req, res) {
			users.sendUsers(req, res);
		},

		get: function (req, res) {
			var users = ["get"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		},

		create: function (req, res) {
			console.log(req.body);

			req.body._id = req.body.username;

			users.insert(req.body, function(err, result) {
				if (err) throw err;
				users.sendUsers(req, res);
			});
		},

		edit: function (req, res) {
			var users = ["edit"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		}
	}
};

module.exports = usersCtrl;
