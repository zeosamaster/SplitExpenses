/*global module, require*/
(function () {
	'use strict';

	var mongoose, GroupSchema, GroupModel;

	mongoose = require('mongoose');

	GroupSchema = new mongoose.Schema({
		name: String
	}, {
		versionKey: false,
		timestamps: {
			createdAt: 'created',
			updatedAt: 'updated'
		}
	});
	GroupModel = mongoose.model('Group', GroupSchema);

	module.exports = GroupModel;

}());
