'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Group', new mongoose.Schema({
	name: {
		type: String,
		unique: false
	},
}, {
	collection: 'groups',
	timestamps: {
		createdAt: 'created_at'
	}
}));
