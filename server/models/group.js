'use strict';

var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({
	name: String
}, {
	versionKey: false,
	timestamps: {
		createdAt: 'created',
		updatedAt: 'updated'
	}
});

var GroupModel = mongoose.model('Group', GroupSchema);

module.exports = GroupModel;
