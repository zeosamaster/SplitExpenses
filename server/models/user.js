'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	username: String,
	email: String,
	password: String
}, {
	versionKey: false,
	timestamps: {
		createdAt: 'created',
		updatedAt: 'updated'
	}
});

module.exports = mongoose.model('User', UserSchema);
