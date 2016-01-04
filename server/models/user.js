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
	if (!this.isNew) {
		next();
	} else {
		var user = this;
		UserModel
			.findOne({
				username: user.username
			}, {
				'_id': true
			}, function (err, user) {
				if (user) {
					next(new Error(strings.error.duplicateUser));
				} else {
					next();
				}
			});
	}
});

module.exports = UserModel;
