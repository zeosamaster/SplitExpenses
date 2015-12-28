'use strict';

var mongoose = require('mongoose');
var strings = require("../resources/strings");

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

var UserModel = mongoose.model('User', UserSchema);

UserSchema.pre('save', function (next) {
	var user = this;
	UserModel.find({
		username: user.username
	}, function (err, items) {
		if (items.length) {
			next(new Error(strings.errors.duplicateUser));
		} else {
			next();
		}
	});
});

module.exports = UserModel;
