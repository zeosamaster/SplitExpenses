/*global module, require*/
(function () {
	'use strict';

	var mongoose, strings, UserSchema, UserModel;

	mongoose = require('mongoose');
	strings = require("../resources/strings");

	UserSchema = new mongoose.Schema({
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

	UserModel = mongoose.model('User', UserSchema);

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
}());
