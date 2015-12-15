'use strict';

function paymentsCtrl(db) {
    "use strict";
	return {
		list: function (req, res) {
			var users = ["list"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		},

		get: function (req, res) {
			var users = ["get"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		},

		create: function (req, res) {
			var users = ["create"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		},

		edit: function (req, res) {
			var users = ["edit"];
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(users));
		}
	}
};

module.exports = paymentsCtrl;
