/*global module, require*/
/*jslint nomen: true*/

(function () {
	'use strict';

	var http = require("./http"),
		Group = require("../models/group"),
		strings = require("../resources/strings"),
		log = require('../resources/log');

	function groupsCtrl(db) {

		function getGroup(res, group_id, callback) {
			Group.findOne({
				_id: group_id
			}, function (err, group) {
				if (!group) {
					http.sendError(res, strings.error.groupNotFound);
					return;
				}
				if (err) {
					throw err;
				}
				callback(err, group);
			});
		}

		function getGroups(callback) {
			Group.find({}, function (err, groups) {
				if (err) {
					throw err;
				}
				callback(err, groups);
			});
		}

		function sendGroups(req, res) {
			getGroups(function (err, items) {
				http.sendJson(res, items);
			});
		}

		return {
			list: function (req, res) {
				log("Get group list");
				sendGroups(req, res);
			},

			get: function (req, res) {
				log("Get group", req.params.group_id);

				getGroup(res, req.params.group_id, function (err, group) {
					http.sendJson(res, group);
				});
			},

			create: function (req, res) {
				log("Create group");
				log(req.body);

				Group.create({
					name: req.body.name
				}, function (err, result) {
					if (err) {
						http.sendError(res, err);
						return;
					}
					http.sendSuccess(res, strings.success.groupCreated);
				});
			},

			edit: function (req, res) {
				log("Edit group", req.params.group_id);
				log(req.body);

				var edit_group = req.body;
				getGroup(res, req.params.group_id, function (err, group) {
					group.name = edit_group.name || group.name;

					group.save(function (err) {
						if (err) {
							throw err;
						}
						http.sendSuccess(res, strings.success.groupEdited);
					});
				});
			},

			remove: function (req, res) {
				log("Delete group", req.params.group_id);

				Group.findOneAndRemove({
					_id: req.params.group_id
				}, function (err) {
					if (err) {
						http.sendError(res, err);
						return;
					}
					http.sendSuccess(res, strings.success.groupDeleted);
				});
			}
		};
	}

	module.exports = groupsCtrl;
}());
